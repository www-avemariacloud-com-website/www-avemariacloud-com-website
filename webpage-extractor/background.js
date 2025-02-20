chrome.action.onClicked.addListener(async (tab) => {
    // Execute script to extract content from the page
    const [{ result }] = await chrome.scripting.executeScript({
      target: { tabId: tab.id },
      func: () => {
        function getStyledContent() {
          // Clone the document
          const clone = document.cloneNode(true);
          
          // Get all stylesheets
          const styles = Array.from(document.styleSheets)
            .map(styleSheet => {
              try {
                return Array.from(styleSheet.cssRules)
                  .map(rule => rule.cssText)
                  .join('\n');
              } catch (e) {
                // Skip external stylesheets that may throw CORS errors
                return '';
              }
            })
            .filter(Boolean)
            .join('\n');
  
          // Remove unwanted elements
          const unwantedSelectors = [
            'script',
            'noscript',
            'iframe',
            'frame',
            'object',
            'embed',
            'video',
            'audio',
            'canvas',
            'input',
            'button',
            'form',
            'nav',
            'footer',
            '.ad',
            '#ad',
            '[class*="ads"]',
            '[id*="ads"]'
          ];
  
          unwantedSelectors.forEach(selector => {
            const elements = clone.querySelectorAll(selector);
            elements.forEach(el => el.remove());
          });
  
          // Combine the styles and cleaned HTML
          return `
            <style>${styles}</style>
            ${clone.documentElement.outerHTML}
          `;
        }
        
        return getStyledContent();
      }
    });
  
    // Create a new tab and inject content
    const newTab = await chrome.tabs.create({
      url: 'https://www.avemariacloud.com/webpage-summarization/index.html'
    });
  
    // Wait for the new tab to load
    chrome.tabs.onUpdated.addListener(function listener(tabId, info) {
      if (tabId === newTab.id && info.status === 'complete') {
        chrome.tabs.onUpdated.removeListener(listener);
        
        // Inject the content into the new tab
        chrome.scripting.executeScript({
          target: { tabId: newTab.id },
          func: (content) => {
            document.getElementById('input_data').innerHTML = content;
            //processInputData();
          },
          args: [result]
        });
      }
    });
  });