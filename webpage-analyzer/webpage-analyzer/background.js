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
      url: 'https://www.avemariacloud.com/webpage-analyzer/'
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


/*

<p>
© 2025 Internet Services LLC | AveMariaCloud.com<BR><BR>
<a href="mailto:website@avemariacloud.com">website@avemariacloud.com</a>
<BR><BR>
Maybe you should read and agree to these <a href="https://avemariacloud.com/terms.html" target="_blank">Terms of Service</a> and this <a href="https://avemariacloud.com/privacy.html" target="_blank">Privacy Policy</a>.
<br><br>
Software, code, text, an image, images and/or things may have been created and may be created using services, tools, software, API, APIs, or things relating to
<a href="https://openai.com/" target="_blank">OpenAI and/or ChatGPT</a>, 
<a href="https://www.anthropic.com/" target="_blank">Anthropicand/or Claude AI </a>, 
<a href="https://ai.meta.com/" target="_blank">Meta and/or Meta Llama 3 </a>, 
<a href="https://ai.google/" target="_blank">Google and/or Gemma</a>,
<a href="https://stability.ai/" target="_blank">Stability AI and/or Stable Diffusion</a>,
<a href="https://blackforestlabs.com/" target="_blank">Black Forest Labs and/or FLUX.1 [dev]</a>,
<a href=”https://huggingface.co/”>Hugging Face</a>,
<a href="https://groq.com/" target="_blank">Groq</a>, and
<a href="https://mistral.ai/">Mistral AI (Mixtral)</a>

You may benefit from consulting, reading, and/or agreeing to terms of service, usage guidelines, and/or other documentation relating to 
<a href="https://openai.com/" target="_blank">OpenAI and/or ChatGPT</a>, 
<a href="https://www.anthropic.com/" target="_blank">Anthropicand/or Claude AI </a>, 
<a href="https://ai.meta.com/" target="_blank">Meta and/or Meta Llama 3 </a>, 
<a href="https://ai.google/" target="_blank">Google and/or Gemma</a>,
<a href="https://stability.ai/" target="_blank">Stability AI and/or Stable Diffusion</a>,
<a href="https://blackforestlabs.com/" target="_blank">Black Forest Labs and/or FLUX.1 [dev]</a>,
<a href=”https://huggingface.co/”>Hugging Face</a>,
<a href="https://groq.com/" target="_blank">Groq, Inc. and/or Groq</a>, and
<a href="https://mistral.ai/">Mistral AI (Mixtral)</a>

<br><br>
HuggingFace: Relevant links may include: <a href="https://huggingface.co/terms-of-service">Terms of Service</a>, <a href="https://huggingface.co/privacy">Hugging Face Privacy Policy</a>, <a href="https://huggingface.co/content-guidelines">Content Policy 🤗</a>, <a href="https://huggingface.co/docs">Docs</a>, and <a href="Contributor Covenant Code of Conduct">Contributor Covenant Code of Conduct</a><br>
Groq, Inc. and/or Groq: Relevant links may include <a href="https://groq.com/privacy-policy/" target="_blank">Privacy Policy</a>, <a href="https://groq.com/terms-of-use/" target="_blank">Terms of Use</a>, <a href="https://groq.com/security/" target="_blank">Security</a>, <a href="https://groq.com/trademark-policy/" target="_blank">Trademark Policy</a>, <a href="https://groq.com/cookie-policy/" target="_blank">Cookie Policy</a>, and <a href="https://groq.com/brand-guidelines/" target="_blank">Brand Guidelines</a>.<br>
Stability AI and/or Stable Diffusion: Relevant links may include <a href="https://stability.ai/use-policy" target="_blank">Use Policy</a>, <a href="https://stability.ai/privacy-policy" target="_blank">Privacy Policy</a>, <a href="https://stability.ai/terms-of-use" target="_blank">Terms Of Use</a>, and <a href="https://trust.stability.ai/" target="_blank">Trust Page</a>.<br>
Black Forest Labs and/or FLUX.1 [dev]: Relevant links may include <a href=”https://blackforestlabs.ai/impressum/”>Impressum</a> <a href=”https://blackforestlabs.ai/terms-of-service/”>Terms Of Service</a> <a href=”https://blackforestlabs.ai/privacy-policy/”> Privacy Policy</a>
OpenAI and/or ChatGPT: Relevant links may include <a href="https://openai.com/policies/terms-of-use/">Terms of Use</a>, <a href="https://openai.com/policies/row-privacy-policy/">Privacy Policy</a>, <a href="https://openai.com/brand/">Brand Guidelines</a>, and <a href="https://openai.com/policies/">General Policies</a>.<br>
Anthropic PBC and/or Claude AI: Relevant links may include <a href="https://www.anthropic.com/legal/consumer-terms">Consumer Terms</a>, <a href="https://www.anthropic.com/legal/commercial-terms">Commercial Terms</a>, <a href="https://www.anthropic.com/legal/privacy">Privacy Policy</a>, <a href="https://www.anthropic.com/responsible-disclosure-policy">Responsible Disclosure Policy</a>, and <a href="https://trust.anthropic.com/">Trust Center</a>.<br>
Meta and/or Meta Llama 3: Relevant links may include <a href="https://www.llama.com/llama3/use-policy/">Use Policy</a>, <a href="https://www.facebook.com/privacy/policy/">Privacy Policy</a>, and <a href="https://www.facebook.com/privacy/policies/cookies/?entry_point=cookie_policy_redirect&entry=0">Cookie Policy</a>.<br>
Google and/or Gemma: Relevant links may include <a href="https://policies.google.com/terms">Terms of Service</a> and <a href="https://policies.google.com/privacy">Privacy Policy</a>.<br>
Mistral AI and/or Mixtral: Relevant links may include <a href="https://mistral.ai/terms">Terms of Service</a> and <a href=”https://trust.mistral.ai/”>Trust Center</a>.
<br><br>
Some notices may be relevant.<br><br>
<strong>Built with Meta Llama 3:</strong> <a href="https://www.llama.com/llama3/license/" target="_blank">Meta Llama 3 is licensed under the Meta Llama 3 Community License, Copyright © Meta Platforms, Inc. All Rights Reserved.</a><br>
<strong>Gemma:</strong> Gemma is provided under and subject to the Gemma Terms of Use found at <a href="https://ai.google.dev/gemma/terms">ai.google.dev/gemma/terms</a>.<br>
<strong>Mixtral-8x7B License:</strong> Mixtral-8x7B is distributed under the <a href="https://www.apache.org/licenses/LICENSE-2.0" target="_blank">Apache 2.0 license</a>.<br>
<strong><a href="https://avemariacloud.com/stability-ai-notice.txt">Notice</a>: Powered by Stability AI:</strong> This Stability AI Model is licensed under the <a href="https://stability.ai/community-license-agreement">Stability AI Community License</a>, Copyright ©  Stability AI Ltd. All Rights Reserved. Stability AI<br>
<strong>Hugging Face API:</strong> This tool may use an API, APIs, or things relating to Hugging Face, and may be subject to their<a href="https://huggingface.co/terms-of-service" target="_blank">Terms of Service</a>, <a href="https://huggingface.co/privacy" target="_blank">Privacy Policy</a>, <a href="https://huggingface.co/content-guidelines">Content Guidelines</a>, and <a href="https://huggingface.co/code-of-conduct">Code of Conduct</a>.<br>
<strong>Attribution Notice: FLUX.1 [dev] Model</strong> any rights to use the FLUX.1 [dev] Models and/or Derivatives shall be directly granted by Company to said third-party recipients pursuant to this <a href="https://huggingface.co/black-forest-labs/FLUX.1-dev/blob/main/LICENSE.md">License</a> "The FLUX.1 [dev] Model is licensed by Black Forest Labs. Inc. under the FLUX.1 [dev] Non-Commercial License. Copyright Black Forest Labs. Inc. IN NO EVENT SHALL BLACK FOREST LABS, INC. BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH USE OF THIS MODEL." I may have have modified the applicable FLUX.1 [dev] Model. <a href="https://avemariacloud.com/flux.1-[dev]-notice.txt">FLUX.1 [dev] Model Notice</a>

</p>


*/