const GITHUB_USERNAME = 'avemariacloudapi';
const GITHUB_TOKEN = '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';

async function fetchFileVersion(repoOwner, repoName) {
    let filePath = window.location.pathname.substring(1); // Remove leading "/"
    
    if (!filePath || filePath.endsWith('/')) {
        filePath = 'index.html'; // Default to index.html if it's the homepage
    }

    const apiUrl = `https://api.github.com/repos/${repoOwner}/${repoName}/commits?path=${filePath}`;
    
    try {
        const response = await fetch(apiUrl, {
            headers: {
                'Authorization': 'Basic ' + btoa(`${GITHUB_USERNAME}:${GITHUB_TOKEN}`)
            }
        });

        if (!response.ok) throw new Error(`Failed to fetch version for ${filePath}`);

        const data = await response.json();
        if (data.length === 0) throw new Error(`No commit data for ${filePath}`);

        const versionNumber = data.length; // Number of commits affecting this file
        const shortCommitHash = data[0].sha.substring(0, 7); // First 7 characters of latest commit hash

        document.getElementById('version').textContent = `v${versionNumber}`;
    } catch (error) {
        console.error(`Error fetching version for ${filePath}:`, error);
        document.getElementById('version').textContent = 'Version: Unknown';
    }
}

// Your repository details
fetchFileVersion('www-avemariacloud-com-website', 'www-avemariacloud-com-website');
