document.addEventListener('DOMContentLoaded', function () {
  const inputField = document.getElementById('inputField');
  const outputField = document.getElementById('outputField');
  const sendButton = document.getElementById('sendButton');

  outputField.innerText = 'Hello World!';

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
      let newContent = document.createElement('div');
      newContent.textContent = 'Sending request...';
      newContent.classList.add('message');
      outputField.appendChild(newContent);
      scrollToBottom();

      fetch('https://gmserver.xyz', {
        method: 'POST',
        headers: {
          'Content-Type': 'text/plain'
        },
        body: inputField.value
      })
      .then(response => response.text())
      .then(data => {
        newContent.textContent = data;
      })
      .catch(error => {
        newContent.textContent = 'Error: ' + error.message;
      });
    }

    inputField.value = '';
    sendButton.style.display = 'none';
  }

  function scrollToBottom() {
    outputField.scrollTop = outputField.scrollHeight;
  }
});