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
    if (inputField.value.length > 0) {
      outputField.innerText = inputField.value;
      outputField.style.textAlign = 'left';
      outputField.style.justifyContent = 'flex-start';
      outputField.style.alignItems = 'flex-start';
    } else {
      outputField.innerText = 'Hello World!';
      outputField.style.textAlign = 'center';
      outputField.style.justifyContent = 'center';
      outputField.style.alignItems = 'center';
    }

    inputField.value = '';
    sendButton.style.display = 'none';
  }
});


