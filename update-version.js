// Version verification system
const versionVerifier = {
  storageKey: 'app_last_seen_version',
  checkInterval: null,
  checkFrequency: 10000,
  currentContentHash: null,
  
  // Initialize version checking
  startVersionChecking(repoOwner, repoName) {
    this.calculateContentHash();
    this.checkVersion(repoOwner, repoName);
    this.checkInterval = setInterval(() => {
      this.checkVersion(repoOwner, repoName);
    }, this.checkFrequency);
  },
  
  // Calculate SHA-256 hash of important page content
  async calculateContentHash() {
    try {
      // Get the main content element (adjust selector as needed)
      const mainContent = document.getElementById('main-content') || document.body;
      
      // Clone to avoid modifying the live DOM
      const clone = mainContent.cloneNode(true);
      
      // Remove elements that might change without content changes
      clone.querySelectorAll('.dynamic-content, script, style').forEach(el => el.remove());
      
      // Create hash of the content
      const encoder = new TextEncoder();
      const data = encoder.encode(clone.innerHTML);
      const hashBuffer = await crypto.subtle.digest('SHA-256', data);
      const hashArray = Array.from(new Uint8Array(hashBuffer));
      this.currentContentHash = hashArray.map(b => b.toString(16).padStart(2, '0')).join('').substring(0, 7);
      
      console.log('Current content hash:', this.currentContentHash);
    } catch (error) {
      console.error('Error calculating content hash:', error);
      this.currentContentHash = null;
    }
  },
  
  // Format date in MM-DD-YYYY HH:MM:SS.mmm format
  formatCommitDate(date) {
    const pad = (num) => num.toString().padStart(2, '0');
    const pad3 = (num) => num.toString().padStart(3, '0');
    
    return `${pad(date.getMonth()+1)}-${pad(date.getDate())}-${date.getFullYear()} ` +
           `${pad(date.getHours())}:${pad(date.getMinutes())}:${pad(date.getSeconds())}.${pad3(date.getMilliseconds())}`;
  },
  
  // Verify content matches the GitHub commit
  async verifyContent(repoOwner, repoName, commitId) {
    try {
      const filePath = this.getFilePath();
      const apiUrl = `https://general-proxy.small-recipe-9582.workers.dev/?target=https://api.github.com/repos/${repoOwner}/${repoName}/contents/${filePath}?ref=${commitId}`;
      
      const response = await fetch(apiUrl);
      if (!response.ok) throw new Error('Failed to fetch content');
      
      const data = await response.json();
      if (!data.content) throw new Error('No content in response');
      
      // Decode base64 content
      const gitContent = atob(data.content.replace(/\s/g, ''));
      const encoder = new TextEncoder();
      const gitData = encoder.encode(gitContent);
      const hashBuffer = await crypto.subtle.digest('SHA-256', gitData);
      const hashArray = Array.from(new Uint8Array(hashBuffer));
      const gitContentHash = hashArray.map(b => b.toString(16).padStart(2, '0')).join('').substring(0, 7);
      
      console.log('GitHub content hash:', gitContentHash, 'Local hash:', this.currentContentHash);
      
      return gitContentHash === this.currentContentHash;
    } catch (error) {
      console.error('Content verification failed:', error);
      return false;
    }
  },
  
  // Check for version updates with content verification
  async checkVersion(repoOwner, repoName) {
    const filePath = this.getFilePath();
    
    try {
      const commitsUrl = `https://general-proxy.small-recipe-9582.workers.dev/?target=https://api.github.com/repos/${repoOwner}/${repoName}/commits?path=${filePath}`;
      const response = await fetch(commitsUrl);
      
      if (!response.ok) throw new Error(`Failed to fetch version for ${filePath}`);
      
      const data = await response.json();
      if (data.length === 0) throw new Error(`No commit data for ${filePath}`);
      
      const commit = data[0];
      const commitId = commit.sha;
      const shortId = commitId.substring(0, 7);
      const commitDate = new Date(commit.commit.committer.date);
      const formattedDate = this.formatCommitDate(commitDate);
      
      // Verify content matches the commit
      const contentMatches = await this.verifyContent(repoOwner, repoName, commitId);
      const versionText = `Version: ${shortId} (Deployed @ ${formattedDate}) ` + 
                         (contentMatches ? '✓' : '⚠ Content Mismatch');
      
      // Update version display
      if (document.getElementById('version')) {
        document.getElementById('version').textContent = versionText;
        document.getElementById('version').style.color = contentMatches ? '' : 'orange';
      }
      
      // Version check logic
      const lastSeenVersion = localStorage.getItem(this.storageKey);
      
      if (!lastSeenVersion) {
        localStorage.setItem(this.storageKey, commitId);
        return;
      }
      
      if (lastSeenVersion !== commitId) {
        const notificationText = `${versionText}\nPrevious: ${lastSeenVersion.substring(0, 7)}`;
        this.showNotification(notificationText, contentMatches);
        localStorage.setItem(this.storageKey, commitId);
        this.stopVersionChecking();
      }
      
    } catch (error) {
      console.error(`Error checking version for ${filePath}:`, error);
      if (document.getElementById('version')) {
        document.getElementById('version').textContent = 'Version: Unknown';
        document.getElementById('version').style.color = 'red';
      }
    }
  },
  
  // Helper function to get current file path
  getFilePath() {
    let filePath = window.location.pathname.substring(1);
    if (filePath.endsWith('/')) filePath += 'index.html';
    if (!filePath) filePath = 'index.html';
    return filePath;
  },
  
  // Show update notification
  async showNotification(versionText, contentVerified) {
    if (document.getElementById('version-update-notification')) return;
    
    const notification = document.createElement('div');
    notification.id = 'version-update-notification';
    notification.style.position = 'fixed';
    notification.style.bottom = '20px';
    notification.style.right = '20px';
    notification.style.padding = '15px';
    notification.style.backgroundColor = contentVerified ? '#4CAF50' : '#FF9800';
    notification.style.color = 'white';
    notification.style.borderRadius = '5px';
    notification.style.boxShadow = '0 4px 8px rgba(0,0,0,0.2)';
    notification.style.zIndex = '1000';
    notification.style.maxWidth = '400px';
    
    notification.innerHTML = `
      <div style="font-weight: bold; margin-bottom: 8px;">
        ${contentVerified ? 'New version available' : '⚠ Version mismatch detected'}
      </div>
      <div style="font-family: monospace; font-size: 0.9em; margin-bottom: 12px; white-space: pre-wrap;">${versionText}</div>
      <div style="display: flex; gap: 10px;">
        <button id="refresh-btn" style="flex: 1; background: white; color: ${contentVerified ? '#4CAF50' : '#FF9800'}; border: none; padding: 8px; border-radius: 4px; cursor: pointer;">
          Refresh Page
        </button>
        <button id="dismiss-btn" style="flex: 1; background: transparent; color: white; border: 1px solid white; padding: 8px; border-radius: 4px; cursor: pointer;">
          Dismiss
        </button>
      </div>
    `;
    
    document.body.appendChild(notification);
    
    notification.querySelector('#refresh-btn').addEventListener('click', () => {
      location.reload(true);
    });
    
    notification.querySelector('#dismiss-btn').addEventListener('click', () => {
      notification.remove();
    });
    
    setTimeout(() => {
      if (notification.parentNode) notification.remove();
    }, 30000);
  }
};

// Initialize when ready
var checkInformationLoaded = setInterval(() => {
  if (sessionStorage.getItem("informationLoaded") == "true") {
    clearInterval(checkInformationLoaded);
    versionVerifier.startVersionChecking('www-avemariacloud-com-website', 'www-avemariacloud-com-website');
  }
}, 100);
