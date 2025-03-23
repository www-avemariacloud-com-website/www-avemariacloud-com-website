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

    console.log("File Path:", filePath);

    // Construct the GitHub API URL to fetch commit information for this file
    const apiUrl = `https://general-proxy.small-recipe-9582.workers.dev/?target=https://api.github.com/repos/${repoOwner}/${repoName}/commits?path=${filePath}`;

    console.log("API URL:", apiUrl);
    
    try {
        const response = await fetch(apiUrl);

        if (!response.ok) throw new Error(`Failed to fetch version for ${filePath}`);

        const data = await response.json();
        if (data.length === 0) throw new Error(`No commit data for ${filePath}`);

        // Use the date and time of the latest commit for the version
        const commitDate = new Date(data[0].commit.committer.date);

        // Format the date as YYYY-MM-DD and time as HH:MM:SS
        const formattedDate = commitDate.toISOString().split('T')[0]; // Format as YYYY-MM-DD
        const formattedTime = commitDate.toISOString().split('T')[1].split('Z')[0]; // Get time portion

        // Display the version as the formatted date and time
        document.getElementById('version').textContent = `v${formattedDate} ${formattedTime}`;
        
        console.log('v${formattedDate} ${formattedTime}');
        
    } catch (error) {
        console.error(`Error fetching version for ${filePath}:`, error);
        document.getElementById('version').textContent = 'Version: Unknown';
    }
}

// Your repository details
fetchFileVersion('www-avemariacloud-com-website', 'www-avemariacloud-com-website');
