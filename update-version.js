// Enhanced version verifier with direct HTML content comparison
const versionVerifier = {
  storageKey: 'app_last_seen_version',
  checkInterval: null,
  checkFrequency: 10000,
  repoOwner: 'www-avemariacloud-com-website',
  repoName: 'www-avemariacloud-com-website',
  
  // Initialize version checking
  init() {
    if (sessionStorage.getItem("informationLoaded") == "true") {
      this.startVersionChecking();
    } else {
      const readyCheck = setInterval(() => {
        if (sessionStorage.getItem("informationLoaded") == "true") {
          clearInterval(readyCheck);
          this.startVersionChecking();
        }
      }, 100);
    }
  },
  
  startVersionChecking() {
    this.checkVersion();
    this.checkInterval = setInterval(() => this.checkVersion(), this.checkFrequency);
  },
  
  // Get clean file path for GitHub
  getFilePath() {
    let path = window.location.pathname.substring(1);
    if (path.endsWith('/')) path += 'index.html';
    if (!path) path = 'index.html';
    return path;
  },
  
  // Format timestamp precisely
  formatTimestamp(date) {
    const pad = (n) => n.toString().padStart(2, '0');
    const pad3 = (n) => n.toString().padStart(3, '0');
    return `${pad(date.getMonth()+1)}-${pad(date.getDate())}-${date.getFullYear()} ` +
           `${pad(date.getHours())}:${pad(date.getMinutes())}:${pad(date.getSeconds())}.${pad3(date.getMilliseconds())}`;
  },
  
  // Download and hash the original HTML from GitHub
  async getGitHubContentHash(commitId) {
    const path = this.getFilePath();
    const apiUrl = `https://general-proxy.small-recipe-9582.workers.dev/?target=` +
                   `https://api.github.com/repos/${this.repoOwner}/${this.repoName}/contents/${path}?ref=${commitId}`;
    
    try {
      const response = await fetch(apiUrl);
      if (!response.ok) throw new Error('GitHub API error');
      
      const data = await response.json();
      if (!data.content) throw new Error('No content in response');
      
      // Decode base64 and clean the HTML
      const originalHtml = atob(data.content.replace(/\s/g, ''));
      const cleanHtml = this.cleanHtmlForComparison(originalHtml);
      
      // Calculate SHA-256 hash
      const encoder = new TextEncoder();
      const hashBuffer = await crypto.subtle.digest('SHA-256', encoder.encode(cleanHtml));
      const hashArray = Array.from(new Uint8Array(hashBuffer));
      return hashArray.map(b => b.toString(16).padStart(2, '0')).join('').substring(0, 7);
    } catch (error) {
      console.error('Failed to get GitHub content:', error);
      return null;
    }
  },
  
  // Clean HTML for consistent comparison
  cleanHtmlForComparison(html) {
    // Create DOM parser to clean the HTML
    const parser = new DOMParser();
    const doc = parser.parseFromString(html, 'text/html');
    
    // Remove elements that shouldn't be compared
    const removals = [
      'script', 'style', 'meta[name="generator"]',
      'comment()', 'processing-instruction()'
    ];
    
    removals.forEach(selector => {
      doc.querySelectorAll(selector).forEach(el => el.remove());
    });
    
    // Normalize whitespace and attributes
    doc.normalize();
    return doc.documentElement.outerHTML
      .replace(/\s+/g, ' ')
      .replace(/>\s+</g, '><')
      .trim();
  },
  
  // Get current page's HTML from GitHub Pages
  async getCurrentPageHash() {
    try {
      const response = await fetch(window.location.href, {
        headers: { 'Cache-Control': 'no-cache' }
      });
      if (!response.ok) throw new Error('Failed to fetch current page');
      
      const html = await response.text();
      const cleanHtml = this.cleanHtmlForComparison(html);
      
      // Calculate SHA-256 hash
      const encoder = new TextEncoder();
      const hashBuffer = await crypto.subtle.digest('SHA-256', encoder.encode(cleanHtml));
      const hashArray = Array.from(new Uint8Array(hashBuffer));
      return hashArray.map(b => b.toString(16).padStart(2, '0')).join('').substring(0, 7);
    } catch (error) {
      console.error('Failed to get current page:', error);
      return null;
    }
  },
  
  // Main version checking logic
  async checkVersion() {
    try {
      const path = this.getFilePath();
      const commitsUrl = `https://general-proxy.small-recipe-9582.workers.dev/?target=` +
                        `https://api.github.com/repos/${this.repoOwner}/${this.repoName}/commits?path=${path}`;
      
      const response = await fetch(commitsUrl);
      if (!response.ok) throw new Error('Failed to fetch commits');
      
      const commits = await response.json();
      if (!commits.length) throw new Error('No commit history');
      
      const latestCommit = commits[0];
      const commitId = latestCommit.sha;
      const shortId = commitId.substring(0, 7);
      const commitDate = new Date(latestCommit.commit.committer.date);
      const timestamp = this.formatTimestamp(commitDate);
      
      // Get both hashes for comparison
      const [gitHash, currentHash] = await Promise.all([
        this.getGitHubContentHash(commitId),
        this.getCurrentPageHash()
      ]);
      
      const contentMatches = gitHash && currentHash && gitHash === currentHash;
      const versionText = `Version: ${shortId} (Deployed @ ${timestamp}) ` +
                         `${contentMatches ? '✓' : '⚠ Mismatch'}`;
      
      // Update UI
      if (document.getElementById('version')) {
        const versionEl = document.getElementById('version');
        versionEl.textContent = versionText;
        versionEl.style.color = contentMatches ? '' : '#ff9800';
        versionEl.title = `GitHub: ${gitHash || '?'} | Current: ${currentHash || '?'}`;
      }
      
      // Check for version changes
      const lastSeenVersion = localStorage.getItem(this.storageKey);
      if (!lastSeenVersion) {
        localStorage.setItem(this.storageKey, commitId);
        return;
      }
      
      if (lastSeenVersion !== commitId) {
        this.showUpdateNotification(commitId, lastSeenVersion, contentMatches);
        localStorage.setItem(this.storageKey, commitId);
      }
      
    } catch (error) {
      console.error('Version check failed:', error);
      if (document.getElementById('version')) {
        document.getElementById('version').textContent = 'Version: Error';
        document.getElementById('version').style.color = 'red';
      }
    }
  },
  
  // Show update notification
  showUpdateNotification(newCommitId, oldCommitId, contentMatches) {
    const existing = document.getElementById('version-update-notification');
    if (existing) existing.remove();
    
    const notification = document.createElement('div');
    notification.id = 'version-update-notification';
    notification.style.cssText = `
      position: fixed;
      bottom: 20px;
      right: 20px;
      padding: 15px;
      background: ${contentMatches ? '#4CAF50' : '#FF9800'};
      color: white;
      border-radius: 5px;
      box-shadow: 0 4px 8px rgba(0,0,0,0.2);
      z-index: 1000;
      max-width: 400px;
    `;
    
    notification.innerHTML = `
      <div style="font-weight:bold;margin-bottom:8px">
        ${contentMatches ? 'Update Available' : '⚠ Content Mismatch'}
      </div>
      <div style="margin-bottom:12px;font-family:monospace;font-size:0.9em">
        New: ${newCommitId.substring(0, 7)}<br>
        Previous: ${oldCommitId.substring(0, 7)}
      </div>
      <div style="display:flex;gap:10px">
        <button id="refresh-btn" style="flex:1;padding:8px;border-radius:4px;border:none;
                background:white;color:${contentMatches ? '#4CAF50' : '#FF9800'};cursor:pointer">
          Refresh
        </button>
        <button id="dismiss-btn" style="flex:1;padding:8px;border-radius:4px;
                background:transparent;color:white;border:1px solid white;cursor:pointer">
          Dismiss
        </button>
      </div>
    `;
    
    document.body.appendChild(notification);
    
    notification.querySelector('#refresh-btn').addEventListener('click', () => {
      window.location.reload(true);
    });
    
    notification.querySelector('#dismiss-btn').addEventListener('click', () => {
      notification.remove();
    });
    
    setTimeout(() => notification.remove(), 30000);
  }
};

// Initialize the version verifier
versionVerifier.init();
