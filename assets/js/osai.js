document.addEventListener('DOMContentLoaded', function (
  ) {
    const inputField = document.getElementById('inputField');
    const outputField = document.getElementById('outputField');
    const sendButton = document.getElementById('sendButton');
  
    outputField.innerText = 'Hello World!';
  
    inputField.addEventListener('input', function (
  ) {
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
  
    sendButton.addEventListener('click', function (
  ) {
      transmitData();
    });
  
    function transmitData(
  ) {
      if (inputField.value.length > 0) {
        let newContent = document.createElement('div');
        newContent.textContent = inputField.value;
        newContent.classList.add('message');
        outputField.appendChild(newContent);
        scrollToBottom();
      }
  
      inputField.value = '';
      sendButton.style.display = 'none';
    }
  
    function scrollToBottom(
  ) {
      outputField.scrollTop = outputField.scrollHeight;
    }
  });
  