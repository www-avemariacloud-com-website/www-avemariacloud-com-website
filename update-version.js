// Version notification system
const versionNotifier = {
  // LocalStorage key for storing the last seen version
  storageKey: 'app_last_seen_version_' + window.location.pathname,
  checkInterval: null,
  checkFrequency: 10000, // 10 seconds in milliseconds
  
  // Initialize version checking
  startVersionChecking(repoOwner, repoName) {
    // Initial check
    this.checkVersion(repoOwner, repoName);
    
    // Set up periodic checking
    this.checkInterval = setInterval(() => {
      this.checkVersion(repoOwner, repoName);
    }, this.checkFrequency);
  },
  
  // Stop version checking
  stopVersionChecking() {
    if (this.checkInterval) {
      clearInterval(this.checkInterval);
      this.checkInterval = null;
    }
  },
  
  // Format date in MM-DD-YYYY HH:MM:SS.mmm format
  formatCommitDate(date) {
    const pad = (num) => num.toString().padStart(2, '0');
    const pad3 = (num) => num.toString().padStart(3, '0');
    
    const month = pad(date.getMonth() + 1);
    const day = pad(date.getDate());
    const year = date.getFullYear();
    const hours = pad(date.getHours());
    const minutes = pad(date.getMinutes());
    const seconds = pad(date.getSeconds());
    const milliseconds = pad3(date.getMilliseconds());
    
    return `${month}-${day}-${year} ${hours}:${minutes}:${seconds}.${milliseconds}`;
  },
  
  // Check for version updates
  async checkVersion(repoOwner, repoName) {
    const filePath = this.getFilePath();
    console.log(`Checking for updates to ${filePath}...`);
    
    try {
      const apiUrl = `https://general-proxy.small-recipe-9582.workers.dev/?target=https://api.github.com/repos/${repoOwner}/${repoName}/commits?path=${filePath}`;
      const response = await fetch(apiUrl);
      
      if (!response.ok) throw new Error(`Failed to fetch version for ${filePath}`);
      
      const data = await response.json();
      if (data.length === 0) throw new Error(`No commit data for ${filePath}`);
      
      const commit = data[0];
      const commitId = commit.sha.substring(0, 7); // Short commit hash
      const commitDate = new Date(commit.commit.committer.date);
      const formattedDate = this.formatCommitDate(commitDate);
      
      const versionText = `Version: ${commitId} (Deployed @ ${formattedDate})`;
      const currentVersion = commit.sha; // Using full commit ID as version key
      
      // Update version display
      if (document.getElementById('version')) {
        document.getElementById('version').textContent = versionText;
      }
      
      // Version check logic
      const lastSeenVersion = localStorage.getItem(this.storageKey);
      
      if (!lastSeenVersion) {
        localStorage.setItem(this.storageKey, currentVersion);
        return;
      }
      
      if (lastSeenVersion !== currentVersion) {
        this.showNotification(versionText);
        localStorage.setItem(this.storageKey, currentVersion);
        this.stopVersionChecking(); // Stop checking after update is detected
      }
      
    } catch (error) {
      console.error(`Error checking version for ${filePath}:`, error);
      if (document.getElementById('version')) {
        document.getElementById('version').textContent = 'Version: Unknown';
      }
    }
  },
  
  // Helper function to get current file path
  getFilePath() {
    let filePath = window.location.pathname.substring(1);
    if (filePath.endsWith('/')) {
      filePath = filePath + 'index.html';
    }
    if (!filePath) {
      filePath = 'index.html';
    }
    return filePath;
  },
  
  // Show update notification to user
  showNotification(versionText) {
    // Prevent multiple notifications
    if (document.getElementById('version-update-notification')) return;
    
    const notification = document.createElement('div');
    notification.id = 'version-update-notification';
    notification.style.position = 'fixed';
    notification.style.bottom = '20px';
    notification.style.right = '20px';
    notification.style.padding = '15px';
    notification.style.backgroundColor = '#4CAF50';
    notification.style.color = 'white';
    notification.style.borderRadius = '5px';
    notification.style.boxShadow = '0 4px 8px rgba(0,0,0,0.2)';
    notification.style.zIndex = '1000';
    notification.style.display = 'flex';
    notification.style.flexDirection = 'column';
    notification.style.gap = '10px';
    
    notification.innerHTML = `
      <div style="font-weight: bold;">A new version is available!</div>
      <div style="font-size: 0.9em;">${versionText}</div>
      <div style="display: flex; gap: 10px; margin-top: 5px;">
        <button id="refresh-btn" style="background: white; color: #4CAF50; border: none; padding: 5px 10px; border-radius: 3px; cursor: pointer; flex: 1;">Refresh</button>
        <button id="dismiss-btn" style="background: transparent; color: white; border: 1px solid white; padding: 5px 10px; border-radius: 3px; cursor: pointer; flex: 1;">Dismiss</button>
      </div>
    `;
    
    document.body.appendChild(notification);
    
    // Add event listeners to buttons
    notification.querySelector('#refresh-btn').addEventListener('click', () => {
      location.reload(true);
    });
    
    notification.querySelector('#dismiss-btn').addEventListener('click', () => {
      notification.style.display = 'none';
    });
    
    // Auto-hide after 30 seconds
    setTimeout(() => {
      if (notification.parentNode) {
        notification.style.display = 'none';
      }
    }, 30000);
  }
};

// Initialize when information is loaded
var checkInformationLoaded = setInterval(() => {
  if (sessionStorage.getItem("informationLoaded") == "true") {
    clearInterval(checkInformationLoaded);
    console.log("Starting version checking...");
    versionNotifier.startVersionChecking('www-avemariacloud-com-website', 'www-avemariacloud-com-website');
  }
}, 100);
