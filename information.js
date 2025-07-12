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
<a href="https://www.anthropic.com/" target="_blank">Anthropic and/or Claude AI</a>,
<a href="https://ai.meta.com/" target="_blank">Meta and/or Meta Llama AI</a>,
<a href="https://ai.google/" target="_blank">Google and/or Gemma</a>,
<a href="https://stability.ai/" target="_blank">Stability AI and/or Stable Diffusion</a>,
<a href="https://blackforestlabs.com/" target="_blank">Black Forest Labs and/or FLUX.1 [dev]</a>,
<a href="https://huggingface.co/">Hugging Face</a>,
<a href="https://groq.com/" target="_blank">Groq</a>,
<a href="https://mistral.ai/">Mistral AI</a>,
<a href="https://play.ht/">PlayAI</a>,
Web Search via <a href="https://tavily.com/">Tavily</a>,
Code Execution via <a href="https://e2b.dev/">E2B (only Python is currently supported)</a>,
<a href="https://www.deepseek.com/" target="_blank">DeepSeek AI</a>,
<a href="https://qwen.ai" target="_blank">Alibaba Cloud Qwen</a>, and
<a href="https://huggingface.co/ALLaM-AI" target="_blank">SDAIA ALLaM AI</a>.

You may benefit from consulting, reading, and/or agreeing to terms of service, usage guidelines, and/or other documentation relating to
<a href="https://openai.com/" target="_blank">OpenAI and/or ChatGPT</a>,
<a href="https://www.anthropic.com/" target="_blank">Anthropic and/or Claude AI</a>,
<a href="https://ai.meta.com/" target="_blank">Meta and/or Meta Llama AI</a>,
<a href="https://ai.google/" target="_blank">Google and/or Gemma</a>,
<a href="https://stability.ai/" target="_blank">Stability AI and/or Stable Diffusion</a>,
<a href="https://blackforestlabs.com/" target="_blank">Black Forest Labs and/or FLUX.1 [dev]</a>,
<a href="https://huggingface.co/">Hugging Face</a>,
<a href="https://groq.com/" target="_blank">Groq, Inc. and/or Groq</a>,
<a href="https://mistral.ai/">Mistral AI</a>,
<a href="https://play.ht/">PlayAI</a>,
Web Search via <a href="https://tavily.com/">Tavily</a>,
Code Execution via <a href="https://e2b.dev/">E2B (only Python is currently supported)</a>,
<a href="https://www.deepseek.com/" target="_blank">DeepSeek AI</a>,
<a href="https://qwen.ai" target="_blank">Alibaba Cloud Qwen</a>, and
<a href="https://huggingface.co/ALLaM-AI" target="_blank">SDAIA ALLaM AI</a>.

<br><br><b>Relevant Links May Include<b><br><br>

<a href="https://tavily.com/">Tavily</a>: <a href="https://tavily.com/privacy">AlphaAI Technologies Inc. Platform Privacy Policy</a> and <a href="https://tavily.com/terms">Tavily Services Agreement</a><br>

<a href="https://e2b.dev/">E2B (only Python is currently supported)</a>: <a href="https://e2b.dev/privacy">Privacy Policy</a> and <a href="https://e2b.dev/terms">Terms of Service</a><br>

PlayAI: <a href="https://play.ht/terms/#partner-hosted-deployment-terms">https://play.ht/terms/#partner-hosted-deployment-terms</a><br>
HuggingFace: <a href="https://huggingface.co/terms-of-service">Terms of Service</a>, <a href="https://huggingface.co/privacy">Hugging Face Privacy Policy</a>, <a href="https://huggingface.co/content-guidelines">Content Policy 🤗</a>, <a href="https://huggingface.co/docs">Docs</a>, and Contributor Covenant Code of Conduct<br>
Groq, Inc. and/or Groq: <a href="https://groq.com/privacy-policy/" target="_blank">Privacy Policy</a> [1], <a href="https://groq.com/terms-of-use/" target="_blank">Terms of Use</a> [2], <a href="https://groq.com/security/" target="_blank">Security</a>, <a href="https://groq.com/trademark-policy/" target="_blank">Trademark Policy</a>, <a href="https://groq.com/cookie-policy/" target="_blank">Cookie Policy</a>, and <a href="https://groq.com/brand-guidelines/" target="_blank">Brand Guidelines</a>.<br>
Stability AI and/or Stable Diffusion: <a href="https://stability.ai/use-policy" target="_blank">Use Policy</a>, <a href="https://stability.ai/privacy-policy" target="_blank">Privacy Policy</a>, <a href="https://stability.ai/terms-of-use" target="_blank">Terms Of Use</a>, and <a href="https://trust.stability.ai/" target="_blank">Trust Page</a>.<br>
Black Forest Labs and/or FLUX.1 [dev]: <a href="https://blackforestlabs.ai/impressum/">Impressum</a> <a href="https://blackforestlabs.ai/terms-of-service/">Terms Of Service</a> <a href="https://blackforestlabs.ai/privacy-policy/"> Privacy Policy</a><br>
OpenAI and/or ChatGPT: <a href="https://openai.com/policies/terms-of-use/">Terms of Use</a>, <a href="https://openai.com/policies/row-privacy-policy/">Privacy Policy</a>, <a href="https://openai.com/brand/">Brand Guidelines</a>, and <a href="https://openai.com/policies/">General Policies</a>.<br>
Anthropic PBC and/or Claude AI: <a href="https://www.anthropic.com/legal/consumer-terms">Consumer Terms</a>, <a href="https://www.anthropic.com/legal/commercial-terms">Commercial Terms</a>, <a href="https://www.anthropic.com/legal/privacy">Privacy Policy</a>, <a href="https://www.anthropic.com/responsible-disclosure-policy">Responsible Disclosure Policy</a>, and <a href="https://trust.anthropic.com/">Trust Center</a>.<br>
Meta and/or Meta Llama AI:
&nbsp;&nbsp;&nbsp;&nbsp;<a href="https://www.llama.com/llama3/license/" target="_blank">Meta Llama 3 Community License</a> [3],
&nbsp;&nbsp;&nbsp;&nbsp;<a href="https://github.com/meta-llama/llama-models/blob/main/models/llama3_1/LICENSE" target="_blank">Llama 3.1 Community License</a> [4],
&nbsp;&nbsp;&nbsp;&nbsp;<a href="https://github.com/meta-llama/llama-models/blob/main/models/llama4/LICENSE" target="_blank">Llama 4 Community License</a> [5],
&nbsp;&nbsp;&nbsp;&nbsp;<a href="https://llama.meta.com/llama3/use-policy/" target="_blank">Meta Llama 3 Acceptable Use Policy</a> [3],
&nbsp;&nbsp;&nbsp;&nbsp;<a href="https://llama.meta.com/llama3_1/use-policy/" target="_blank">Llama 3.1 Acceptable Use Policy</a> [6],
&nbsp;&nbsp;&nbsp;&nbsp;<a href="https://ai.meta.com/llama/use-policy/" target="_blank">Meta Llama General Acceptable Use Policy</a> [7],
&nbsp;&nbsp;&nbsp;&nbsp;<a href="https://www.facebook.com/privacy/policy/" target="_blank">Privacy Policy</a>,
&nbsp;&nbsp;&nbsp;&nbsp;<a href="https://www.facebook.com/privacy/policies/cookies/?entry_point=cookie_policy_redirect&amp;entry=0" target="_blank">Cookie Policy</a>, and
&nbsp;&nbsp;&nbsp;&nbsp;<a href="https://about.meta.com/brand/resources/meta/company-brand/" target="_blank">Brand Guidelines</a>.[8]<br>
Google and/or Gemma: <a href="https://ai.google.dev/gemma/terms" target="_blank">Gemma Terms of Use</a> [9], <a href="https://ai.google.dev/gemma/prohibited_use_policy" target="_blank">Gemma Prohibited Use Policy</a> [10], and <a href="https://policies.google.com/privacy" target="_blank">Privacy Policy</a>.<br>
Mistral AI: <a href="https://mistral.ai/terms" target="_blank">Terms of Service</a> [11], <a href="https://mistral.ai/terms#privacy-policy" target="_blank">Privacy Policy</a> [11], <a href="https://mistral.ai/terms#data-processing-agreement" target="_blank">Data Processing Agreement</a> [11], and <a href="https://mistral.ai/models" target="_blank">Models Overview</a>.[12]<br>
DeepSeek AI: <a href="https://cdn.deepseek.com/policies/en-US/deepseek-privacy-policy.html" target="_blank">DeepSeek Privacy Policy</a> [13], <a href="https://cdn.deepseek.com/policies/en-US/deepseek-terms-of-use.html" target="_blank">DeepSeek Terms of Use</a>, and <a href="https://opensource.org/licenses/MIT" target="_blank">MIT License</a>.[14]<br>
Alibaba Cloud Qwen: <a href="http://www.apache.org/licenses/LICENSE-2.0" target="_blank">Apache 2.0 License</a> [15], and <a href="https://build.nvidia.com/qwen/qwq-32b/modelcard" target="_blank">QwQ 32B Model Card</a>.[16]<br>
SDAIA ALLaM AI: <a href="http://www.apache.org/licenses/LICENSE-2.0" target="_blank">Apache 2.0 License</a> [17], and <a href="https://huggingface.co/ALLaM-AI/ALLaM-7B-Instruct-preview" target="_blank">ALLaM-7B-Instruct-preview Model Card</a>.[17]<br>
<br><br><b>Some notices may be relevant<b><br><br>

AI-generated content may be inaccurate or incomplete and should not be considered professional advice.<br><br>

<a href="https://tavily.com/">Tavily</a>: Tavily may be subject to <a href="https://tavily.com/privacy">AlphaAI Technologies Inc. Platform Privacy Policy</a> and <a href="https://tavily.com/terms">Tavily Services Agreement</a><br>

<a href="https://e2b.dev/">E2B (only Python is currently supported)</a>: E2B may be subject to <a href="https://e2b.dev/privacy">Privacy Policy</a> and <a href="https://e2b.dev/terms">Terms of Service</a><br>

<strong>PlayAI:</strong> PlayAI may be subject to <a href="https://play.ht/terms/#partner-hosted-deployment-terms">"PLAYAI END USER TERMS OF SERVICE"</a><br>
<strong>Alibaba Cloud Qwen:</strong> Alibaba Cloud Qwen models, including QwQ-32B, are subject to <a href="http://www.apache.org/licenses/LICENSE-2.0" target="_blank">Apache License 2.0</a>.[15] This license requires retention of copyright, patent, trademark, and attribution notices.[9]<br>
<strong>DeepSeek AI:</strong> DeepSeek AI models, including DeepSeek-R1-Distill-Llama-70B, are primarily licensed under the <a href="https://opensource.org/licenses/MIT" target="_blank">MIT License</a>.[14] DeepSeek AI may use inputs and outputs for model training and service improvement. Users should not expect exclusive control over inputs/outputs and must ensure appropriate consent for sensitive data.[18] DeepSeek AI does not indemnify users in any circumstance, and users bear infringement and other liabilities and risks.[18]<br>
<strong>SDAIA ALLaM AI:</strong> ALLaM AI models, including ALLaM-7B-Instruct-preview, are subject to <a href="http://www.apache.org/licenses/LICENSE-2.0" target="_blank">Apache License 2.0</a>.[17] Outputs generated by ALLaM AI models are not considered a statement of NCAI, SDAIA, or any other organization. Developers must conduct thorough safety evaluations.[17]<br>
<strong>Built with Meta Llama AI:</strong>
&nbsp;&nbsp;&nbsp;&nbsp;Meta Llama models are licensed under their respective Llama Community Licenses.
&nbsp;&nbsp;&nbsp;&nbsp;For Llama 3 models, the license is the <a href="https://www.llama.com/llama3/license/" target="_blank">Meta Llama 3 Community License</a>, Copyright © Meta Platforms, Inc. All Rights Reserved. [3]
&nbsp;&nbsp;&nbsp;&nbsp;For Llama 3.1 models, the license is the <a href="https://github.com/meta-llama/llama-models/blob/main/models/llama3_1/LICENSE" target="_blank">Llama 3.1 Community License</a>, Copyright © Meta Platforms, Inc. All Rights Reserved. [4]
&nbsp;&nbsp;&nbsp;&nbsp;For Llama 4 models, the license is the <a href="https://github.com/meta-llama/llama-models/blob/main/models/llama4/LICENSE" target="_blank">Llama 4 Community License</a>, Copyright © Meta Platforms, Inc. All Rights Reserved. [5]
&nbsp;&nbsp;&nbsp;&nbsp;If monthly active users exceed 700 million, an additional license from Meta is required.[3]
&nbsp;&nbsp;&nbsp;&nbsp;Outputs generated by Meta Llama models may reflect content from their training data, which included publicly available online data, some of which was sourced from pirated book sites. Users are solely responsible for ensuring that content generated and used complies with all applicable laws, including intellectual property rights.[19, 20]
&nbsp;&nbsp;&nbsp;&nbsp;**Jurisdictional Restriction:** For Llama 4 multimodal models (e.g., Llama 4 Maverick, Llama 4 Scout), the license rights are not extended to individuals domiciled in, or companies with a principal place of business in, the European Union. This restriction does not apply to end-users of a product or service that incorporates any multimodal models.[5, 21]<br>
<strong>Google Gemma:</strong> Gemma is provided under and subject to the <a href="https://ai.google.dev/gemma/terms" target="_blank">Gemma Terms of Use</a> [9] and <a href="https://ai.google.dev/gemma/prohibited_use_policy" target="_blank">Gemma Prohibited Use Policy</a>.[10] Google Gemma models prohibit automated decisions with material detrimental impact on individual rights without human supervision in high-risk domains (e.g., employment, healthcare, finance, legal, housing, insurance, social welfare).[11]<br>
<strong>Mistral AI:</strong> Mistral Saba 24B is a premier model from Mistral AI.[12] Mistral AI may use user data, including prompts, for model training unless opted out. Users should ensure appropriate consent for personal data processing.[11] Prompt logging is retained for an unknown period.[22]<br>
<strong>Groq Compound AI Systems:</strong> Groq Compound AI systems (Compound Beta, Compound Beta Mini) leverage Meta Llama models.[23] **CRITICAL:** These services are not intended for processing Protected Health Information (PHI) and are not HIPAA compliant.[24] Users are implicitly subject to the underlying Meta Llama licenses.<br>
<strong>Stability AI and/or Stable Diffusion:</strong> <a href="https://stability.ai/use-policy" target="_blank">Use Policy</a>, <a href="https://stability.ai/privacy-policy" target="_blank">Privacy Policy</a>, <a href="https://stability.ai/terms-of-use" target="_blank">Terms Of Use</a>, and <a href="https://trust.stability.ai/" target="_blank">Trust Page</a>.<br>
<strong>Black Forest Labs and/or FLUX.1 [dev]:</strong> <a href="https://blackforestlabs.ai/impressum/">Impressum</a> <a href="https://blackforestlabs.ai/terms-of-service/">Terms Of Service</a> <a href="https://blackforestlabs.ai/privacy-policy/"> Privacy Policy</a><br>
<strong>OpenAI and/or ChatGPT:</strong> <a href="https://openai.com/policies/terms-of-use/">Terms of Use</a>, <a href="https://openai.com/policies/row-privacy-policy/">Privacy Policy</a>, <a href="https://openai.com/brand/">Brand Guidelines</a>, and <a href="https://openai.com/policies/">General Policies</a>.<br>
<strong>Anthropic PBC and/or Claude AI:</strong> <a href="https://www.anthropic.com/legal/consumer-terms">Consumer Terms</a>, <a href="https://www.anthropic.com/legal/commercial-terms">Commercial Terms</a>, <a href="https://www.anthropic.com/legal/privacy">Privacy Policy</a>, <a href="https://www.anthropic.com/responsible-disclosure-policy">Responsible Disclosure Policy</a>, and <a href="https://trust.anthropic.com/">Trust Center</a>.<br>
<strong>Hugging Face API:</strong> This tool may use an API, APIs, or things relating to Hugging Face, and may be subject to their <a href="https://huggingface.co/terms-of-service" target="_blank">Terms of Service</a>, <a href="https://huggingface.co/privacy" target="_blank">Privacy Policy</a>, <a href="https://huggingface.co/content-guidelines">Content Guidelines</a>, and <a href="https://huggingface.co/code-of-conduct">Code of Conduct</a>.<br>
<BR><BR><p>Don't mix models’ outputs in a deceptive way.
<BR>
Don't reuse outputs across models in ways that violate original usage rights.</p>
</center>`;

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



    

