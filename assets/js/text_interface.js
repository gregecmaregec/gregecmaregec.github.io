// /assets/js/text_interface.js

document.addEventListener('DOMContentLoaded', function () {
  const inputField = document.getElementById('inputField');
  const outputField = document.getElementById('outputField');

  inputField.addEventListener('input', function () {
    const userInput = inputField.value;
    fetch(`https://gmserver.xyz?input=${userInput}`)
      .then(response => response.text())
      .then(data => {
        outputField.innerText = data;
      })
      .catch(error => {
        console.error('Error:', error);
      });
  });
});
  