//v4

sessionStorage.setItem("localStorageModelSelected", "false");


var models = [
'meta-llama/llama-4-maverick-17b-128e-instruct',
'meta-llama/llama-4-scout-17b-16e-instruct',
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
'qwen-2.5-32b',
'qwen-2.5-coder-32b',
'qwen-qwq-32b',
'compound-beta',
'compound-beta-mini'
];

const modelSelect = document.getElementById('modelSelect');

for (var model of models) {
  var option = document.createElement('option'); 
  option.textContent = model;
  option.value = model; // Add theelement to the element 
  modelSelect.appendChild(option);
}

var currentPath = window.location.pathname;
var localStorageID = currentPath + "selectedModel";

// Load the selected value from local storage
window.addEventListener('load', () => {
const selectedModel = localStorage.getItem(localStorageID);
if (selectedModel) {
modelSelect.value = selectedModel;
console.log("Selected Model: " + selectedModel);
sessionStorage.setItem("localStorageModelSelected", "true");
}
});

// Save the selected value to local storage when the value changes
modelSelect.addEventListener('change', () => {
localStorage.setItem(localStorageID, modelSelect.value);
});
