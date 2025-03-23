async function fetchFileVersion(repoOwner, repoName) {
    let filePath = window.location.pathname.substring(1); // Remove leading "/"

    // If the path ends with a slash (folder URL), default to 'index.html' inside that folder
    if (filePath.endsWith('/')) {
        filePath = filePath + 'index.html'; // Default to 'index.html' in the folder
    }

    // If there's no file path (e.g., homepage), default to 'index.html'
    if (!filePath) {
        filePath = 'index.html';
    }

    // Log the file path to check if it's correct
    console.log("File Path:", filePath);

    // Construct the GitHub API URL to fetch commit information for this file
    const apiUrl = `https://general-proxy.small-recipe-9582.workers.dev/?target=https://api.github.com/repos/${repoOwner}/${repoName}/commits?path=${filePath}`;

    console.log("API URL:", apiUrl);
    
    try {
        const response = await fetch(apiUrl);

        if (!response.ok) throw new Error(`Failed to fetch version for ${filePath}`);

        const data = await response.json();
        if (data.length === 0) throw new Error(`No commit data for ${filePath}`);

        const versionNumber = data.length; // Number of commits affecting this file
        const shortCommitHash = data[0].sha.substring(0, 7); // First 7 characters of latest commit hash

        // Display the version and short commit hash
        document.getElementById('version').textContent = `v${versionNumber} (${shortCommitHash})`;
    } catch (error) {
        console.error(`Error fetching version for ${filePath}:`, error);
        document.getElementById('version').textContent = 'Version: Unknown';
    }
}

// Your repository details
fetchFileVersion('www-avemariacloud-com-website', 'www-avemariacloud-com-website');
