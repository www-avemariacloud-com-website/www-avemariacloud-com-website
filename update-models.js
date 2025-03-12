var models = [
'allam-2-7b',
'deepseek-r1-distill-llama-70b',
'deepseek-r1-distill-qwen-32b',
'gemma2-9b-it',
'llama-3.1-8b-instant',
'llama-3.2-11b-vision-preview',
'llama-3.2-1b-preview',
'llama-3.2-3b-preview',
'llama-3.2-90b-vision-preview',
'llama-3.3-70b-specdec',
'llama-3.3-70b-versatile',
'llama-guard-3-8b',
'llama3-70b-8192',
'llama3-8b-8192',
'mistral-saba-24b',
'mixtral-8x7b-32768',
'qwen-2.5-32b',
'qwen-2.5-coder-32b',
'qwen-qwq-32b'
];

const modelSelect = document.getElementById('modelSelect');

for (var model of models) {
  var option = document.createElement('option'); 
  option.textContent = model;
  option.value = model; // Add theelement to the element 
  modelSelect.appendChild(option);
}
