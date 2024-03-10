const outputField = document.querySelector('.output-field');
const inputField = document.querySelector('.input-field');
const outputContainer = document.querySelector('.output-container');

inputField.addEventListener('keydown', (event) => {
  if (event.key === 'Enter') {
    const inputValue = inputField.value.trim();
    if (inputValue) {
      outputField.textContent += `${inputValue}\n`;
      inputField.value = '';
      outputContainer.scrollTop = outputContainer.scrollHeight;
    }
  }
});