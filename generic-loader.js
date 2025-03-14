// loader.js

// Array of JavaScript files to be loaded
const scripts = [
    'https://www.avemariacloud.com/information.js',
    'https://www.avemariacloud.com/update-models.js'
];

// Function to load a script
function loadScript(src) {
    return new Promise((resolve, reject) => {
        const script = document.createElement('script');
        script.src = src;
        script.onload = () => resolve();
        script.onerror = () => reject(new Error(`Failed to load script: ${src}`));
        document.head.appendChild(script);
    });
}

// Function to load multiple scripts in sequence
async function loadScripts(scripts) {
    for (const script of scripts) {
        try {
            await loadScript(script);
            console.log(`Loaded ${script}`);
        } catch (error) {
            console.error(error);
        }
    }
    console.log('All scripts loaded');
}

// Call the function to load scripts
loadScripts(scripts);

startScript();
