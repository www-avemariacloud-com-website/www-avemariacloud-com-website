sessionStorage.setItem("informationLoaded", "false");

    var informationHTML = `<center>
<p>
<div id="version" style="display: inline-block;"></div><BR><BR>
© 2025 Internet Services LLC | AveMariaCloud.com<BR><BR>
<a href="mailto:website@avemariacloud.com">website@avemariacloud.com</a>
<BR><BR>
Maybe you should read and agree to these <a href="https://avemariacloud.com/terms.html" target="_blank">Terms of Service</a> and this <a href="https://avemariacloud.com/privacy.html" target="_blank">Privacy Policy</a>.
<br><br>
I am interested in this work being in the Public Domain.
<BR><BR>
Software, code, text, an image, images and/or things may have been created and may be created using services, tools, software, API, APIs, or things relating to
<a href="https://openai.com/" target="_blank">OpenAI and/or ChatGPT</a>, 
<a href="https://www.anthropic.com/" target="_blank">Anthropicand/or Claude AI </a>, 
<a href="https://ai.meta.com/" target="_blank">Meta and/or Meta Llama 3 </a>, 
<a href="https://ai.google/" target="_blank">Google and/or Gemma</a>,
<a href="https://stability.ai/" target="_blank">Stability AI and/or Stable Diffusion</a>,
<a href="https://blackforestlabs.com/" target="_blank">Black Forest Labs and/or FLUX.1 [dev]</a>,
<a href="https://huggingface.co/">Hugging Face</a>,
<a href="https://groq.com/" target="_blank">Groq</a>,
<a href="https://mistral.ai/">Mistral AI (Mixtral)</a>,
<a href="https://play.ht/">PlayAI</a>,
Web Search via <a href="https://tavily.com/">Tavily</a>,
Code Execution via <a href="https://e2b.dev/">E2B (only Python is currently supported)</a>,
<a href="https://www.deepseek.com/" target="_blank">DeepSeek and/or DeepSeek-R1</a>, and
<a href="https://qwen.ai" target="_blank">Qwen</a> and/or <a href="https://github.com/QwenLM/Qwen2.5-Coder" target="_blank">Qwen2.5-Coder</a>.

You may benefit from consulting, reading, and/or agreeing to terms of service, usage guidelines, and/or other documentation relating to 
<a href="https://openai.com/" target="_blank">OpenAI and/or ChatGPT</a>, 
<a href="https://www.anthropic.com/" target="_blank">Anthropicand/or Claude AI </a>, 
<a href="https://ai.meta.com/" target="_blank">Meta and/or Meta Llama 3 </a>, 
<a href="https://ai.google/" target="_blank">Google and/or Gemma</a>,
<a href="https://stability.ai/" target="_blank">Stability AI and/or Stable Diffusion</a>,
<a href="https://blackforestlabs.com/" target="_blank">Black Forest Labs and/or FLUX.1 [dev]</a>,
<a href="https://huggingface.co/">Hugging Face</a>,
<a href="https://groq.com/" target="_blank">Groq, Inc. and/or Groq</a>,
<a href="https://mistral.ai/">Mistral AI (Mixtral)</a>,
<a href="https://play.ht/">PlayAI</a>,
Web Search via <a href="https://tavily.com/">Tavily</a>,
Code Execution via <a href="https://e2b.dev/">E2B (only Python is currently supported)</a>,
<a href="https://www.deepseek.com/" target="_blank">DeepSeek and/or DeepSeek-R1</a>, and
<a href="https://qwen.ai" target="_blank">Qwen</a> and/or <a href="https://github.com/QwenLM/Qwen2.5-Coder" target="_blank">Qwen2.5-Coder</a>.

<br><br><b>Relevant Links May Include<b><br><br>

<a href="https://tavily.com/">Tavily</a>: <a href="https://tavily.com/privacy">AlphaAI Technologies Inc. Platform Privacy Policy</a> and <a href="https://tavily.com/terms">Tavily Services Agreement</a><BR>

<a href="https://e2b.dev/">E2B (only Python is currently supported)</a>: <a href="https://e2b.dev/privacy">Privacy Policy</a> and <a href="https://e2b.dev/terms">Terms of Service</a><BR>

PlayAI: <a href="https://play.ht/terms/#partner-hosted-deployment-terms">https://play.ht/terms/#partner-hosted-deployment-terms</a><BR>
HuggingFace: <a href="https://huggingface.co/terms-of-service">Terms of Service</a>, <a href="https://huggingface.co/privacy">Hugging Face Privacy Policy</a>, <a href="https://huggingface.co/content-guidelines">Content Policy 🤗</a>, <a href="https://huggingface.co/docs">Docs</a>, and <a href="Contributor Covenant Code of Conduct">Contributor Covenant Code of Conduct</a><br>
Groq, Inc. and/or Groq: <a href="https://groq.com/privacy-policy/" target="_blank">Privacy Policy</a>, <a href="https://groq.com/terms-of-use/" target="_blank">Terms of Use</a>, <a href="https://groq.com/security/" target="_blank">Security</a>, <a href="https://groq.com/trademark-policy/" target="_blank">Trademark Policy</a>, <a href="https://groq.com/cookie-policy/" target="_blank">Cookie Policy</a>, and <a href="https://groq.com/brand-guidelines/" target="_blank">Brand Guidelines</a>.<br>
Stability AI and/or Stable Diffusion: <a href="https://stability.ai/use-policy" target="_blank">Use Policy</a>, <a href="https://stability.ai/privacy-policy" target="_blank">Privacy Policy</a>, <a href="https://stability.ai/terms-of-use" target="_blank">Terms Of Use</a>, and <a href="https://trust.stability.ai/" target="_blank">Trust Page</a>.<br>
Black Forest Labs and/or FLUX.1 [dev]: <a href="https://blackforestlabs.ai/impressum/">Impressum</a> <a href="https://blackforestlabs.ai/terms-of-service/">Terms Of Service</a> <a href="https://blackforestlabs.ai/privacy-policy/"> Privacy Policy</a>
OpenAI and/or ChatGPT: <a href="https://openai.com/policies/terms-of-use/">Terms of Use</a>, <a href="https://openai.com/policies/row-privacy-policy/">Privacy Policy</a>, <a href="https://openai.com/brand/">Brand Guidelines</a>, and <a href="https://openai.com/policies/">General Policies</a>.<br>
Anthropic PBC and/or Claude AI: <a href="https://www.anthropic.com/legal/consumer-terms">Consumer Terms</a>, <a href="https://www.anthropic.com/legal/commercial-terms">Commercial Terms</a>, <a href="https://www.anthropic.com/legal/privacy">Privacy Policy</a>, <a href="https://www.anthropic.com/responsible-disclosure-policy">Responsible Disclosure Policy</a>, and <a href="https://trust.anthropic.com/">Trust Center</a>.<br>
Meta and/or Meta Llama 3: <a href="https://www.llama.com/llama3/use-policy/">Use Policy</a>, <a href="https://www.facebook.com/privacy/policy/">Privacy Policy</a>, and <a href="https://www.facebook.com/privacy/policies/cookies/?entry_point=cookie_policy_redirect&entry=0">Cookie Policy</a>.<br>
Google and/or Gemma: <a href="https://policies.google.com/terms">Terms of Service</a> and <a href="https://policies.google.com/privacy">Privacy Policy</a>.<br>
Mistral AI and/or Mixtral: <a href="https://mistral.ai/terms">Terms of Service</a> and <a href="https://trust.mistral.ai/">Trust Center</a>.<br>
DeepSeek: <a href="https://cdn.deepseek.com/policies/en-US/deepseek-privacy-policy.html">DeepSeek Privacy Policy</a> and <a href="https://cdn.deepseek.com/policies/en-US/deepseek-terms-of-use.html">DeepSeek Terms of Use</a>.<br>
Qwen: <a href="https://choosealicense.com/licenses/apache-2.0/">License</a> and <a href="https://github.com/QwenLM/Qwen2.5-Coder">Qwen 2.5-Coder GitHub Page</a>
<br><br>

Some notices may be relevant.<br><br>

<a href="https://tavily.com/">Tavily</a>: Tavily may be subject to <a href="https://tavily.com/privacy">AlphaAI Technologies Inc. Platform Privacy Policy</a> and <a href="https://tavily.com/terms">Tavily Services Agreement</a><BR>

<a href="https://e2b.dev/">E2B (only Python is currently supported)</a>: E2B may be subject to <a href="https://e2b.dev/privacy">Privacy Policy</a> and <a href="https://e2b.dev/terms">Terms of Service</a><BR>

<strong>PlayAI:</strong> PlayAI may be subject to <a href="https://play.ht/terms/#partner-hosted-deployment-terms">"PLAYAI END USER TERMS OF SERVICE"</a><BR>
<strong>Qwen:</strong> Qwen models, including Qwen2.5-Coder, may be subject to <a href="https://choosealicense.com/licenses/apache-2.0/">Apache License 2.0</a><br>
<strong>DeepSeek:</strong> DeepSeek models, including DeepSeek-R1-Distill-Llama-70B and DeepSeek-R1-Distill-Qwen-32B, may be subject to <a href="https://cdn.deepseek.com/policies/en-US/deepseek-privacy-policy.html">DeepSeek Privacy Policy</a> and <a href="https://cdn.deepseek.com/policies/en-US/deepseek-terms-of-use.html">DeepSeek Terms of Use</a>.<br>
<strong>Built with Meta Llama 3:</strong> <a href="https://www.llama.com/llama3/license/" target="_blank">Meta Llama 3 is licensed under the Meta Llama 3 Community License, Copyright © Meta Platforms, Inc. All Rights Reserved.</a><br>
<strong>Gemma:</strong> Gemma is provided under and subject to the Gemma Terms of Use found at <a href="https://ai.google.dev/gemma/terms">ai.google.dev/gemma/terms</a>.<br>
<strong>Mixtral-8x7B License:</strong> Mixtral-8x7B is distributed under the <a href="https://www.apache.org/licenses/LICENSE-2.0" target="_blank">Apache 2.0 license</a>.<br>
<strong><a href="https://avemariacloud.com/stability-ai-notice.txt">Notice</a>: Powered by Stability AI:</strong> This Stability AI Model is licensed under the <a href="https://stability.ai/community-license-agreement">Stability AI Community License</a>, Copyright ©  Stability AI Ltd. All Rights Reserved. Stability AI<br>
<strong>Hugging Face API:</strong> This tool may use an API, APIs, or things relating to Hugging Face, and may be subject to their<a href="https://huggingface.co/terms-of-service" target="_blank">Terms of Service</a>, <a href="https://huggingface.co/privacy" target="_blank">Privacy Policy</a>, <a href="https://huggingface.co/content-guidelines">Content Guidelines</a>, and <a href="https://huggingface.co/code-of-conduct">Code of Conduct</a>.<br>
<strong>Attribution Notice: FLUX.1 [dev] Model</strong> any rights to use the FLUX.1 [dev] Models and/or Derivatives shall be directly granted by Company to said third-party recipients pursuant to this <a href="https://huggingface.co/black-forest-labs/FLUX.1-dev/blob/main/LICENSE.md">License</a> "The FLUX.1 [dev] Model is licensed by Black Forest Labs. Inc. under the FLUX.1 [dev] Non-Commercial License. Copyright Black Forest Labs. Inc. IN NO EVENT SHALL BLACK FOREST LABS, INC. BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH USE OF THIS MODEL." I may have have modified the applicable FLUX.1 [dev] Model. <a href="https://avemariacloud.com/flux.1-[dev]-notice.txt">FLUX.1 [dev] Model Notice</a>
</p></center>`;

    document.getElementById("informationFooter").innerHTML = informationHTML;
    
    sessionStorage.setItem("informationLoaded", "true");

    const modalHTML = `
        <div id="informationModal" class="informationModal">
            <div class="informationModalContent">
                <span class="informationClose">&times;</span>
                ` + informationHTML + `
<center>
                <button id="informationagreeBtn">I Agree</button>
                <button id="informationexitBtn">Exit</button>
                </center>
            </div>
        </div>
    `;

    var agreedToInformation = localStorage.getItem("agreedToInformation");

    if (agreedToInformation != "yes") {
        // Append the modal HTML to the body
        document.body.insertAdjacentHTML('beforeend', modalHTML);
    }

    // CSS for the modal
    const modalCSS = `
        .informationModal {
            display: block; /* Visible upon loading */
            position: fixed; /* Stay in place */
            z-index: 1; /* Sit on top */
            left: 0;
            top: 0;
            width: 100%; /* Full width */
            height: 100%; /* Full height */
            overflow: auto; /* Enable scroll if needed */
            background-color: rgb(0,0,0); /* Fallback color */
            background-color: rgba(0,0,0,0.4); /* Black w/ opacity */
        }

        .informationModalContent {
            color: black;
            background-color: #fefefe;
            margin: 15% auto; /* 15% from the top and centered */
            padding: 20px;
            border: 1px solid #888;
            width: 80%; /* Could be more or less, depending on screen size */
        }

        .informationClose {
            color: #aaa;
            float: right;
            font-size: 28px;
            font-weight: bold;
        }

        .informationClose:hover,
        .informationClose:focus {
            color: black;
            text-decoration: none;
            cursor: pointer;
        }

        #informationagreeBtn, #informationexitBtn {
            margin: 10px;
            padding: 10px 20px;
            cursor: pointer;
        }

        #informationagreeBtn:hover, #informationexitBtn:hover {
            background-color: #ddd;
        }
    `;

    // Append the CSS to the head
    const style = document.createElement('style');
    style.innerHTML = modalCSS;
    document.head.appendChild(style);

    // Get the modal
    var modal = document.getElementById("informationModal");

    // Get the <span> element that closes the modal
    var span = document.getElementsByClassName("informationClose")[0];

    // Get the "I Agree" button
    var agreeBtn = document.getElementById("informationagreeBtn");

    // Get the "Exit" button
    var exitBtn = document.getElementById("informationexitBtn");

    // When the user clicks on <span> (x), redirect to the specified URL
    span.onclick = function() {
        window.location.href = "https://www.vatican.va/content/vatican/en.html";
    }

    // When the user clicks "I Agree", close the modal
    agreeBtn.onclick = function() {
        modal.style.display = "none";
        localStorage.setItem("agreedToInformation", "yes");
    }

    // When the user clicks "Exit", redirect to the specified URL
    exitBtn.onclick = function() {
        window.location.href = "https://www.vatican.va/content/vatican/en.html";
    }

    // When the user clicks anywhere outside of the modal, close it
    window.onclick = function(event) {
        if (event.target == modal) {
            window.location.href = "https://www.vatican.va/content/vatican/en.html";
        }
    }



    

