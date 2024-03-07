// /assets/js/text_interface.js

document.addEventListener('DOMContentLoaded', function () {
  const inputField = document.getElementById('inputField');
  const outputField = document.getElementById('outputField');

  inputField.addEventListener('input', function () {
    const userInput = inputField.value;
    outputField.innerText = userInput;
  });
});
