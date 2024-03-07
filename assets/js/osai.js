document.addEventListener('DOMContentLoaded', function () {
  const inputField = document.getElementById('inputField');
  const outputField = document.getElementById('outputField');
  const sendButton = document.getElementById('sendButton');

  inputField.addEventListener('input', function () {
    if (this.value.length > 0) {
      sendButton.style.display = 'block';
    } else {
      sendButton.style.display = 'none';
    }
  });

  inputField.addEventListener('keypress', function (e) {
    if (e.key === 'Enter') {
      transmitData();
    }
  });

  sendButton.addEventListener('click', function () {
    transmitData();
  });

  function transmitData() {
    outputField.innerText = inputField.value;
    outputField.style.textAlign = 'left'; // Align text to left after input
    outputField.style.justifyContent = 'flex-start'; // For flex container
    outputField.style.alignItems = 'flex-start'; // For flex container
    inputField.value = '';
    sendButton.style.display = 'none';
  }
});

