let selectedModel = 'llama3.1'; // default model
let messageHistory = []; // array to store previous messages

function adjustTextareaHeight(textarea) {
  textarea.style.height = 'auto';
  textarea.style.height = (textarea.scrollHeight) + 'px';
}

document.addEventListener('DOMContentLoaded', function() {
  const inputBox = document.getElementById('inputBox');
  const outputBox = document.getElementById('outputBox');
  const loader = document.getElementById('loader');

  inputBox.addEventListener('input', function() {
    adjustTextareaHeight(this);
  });

  inputBox.addEventListener('keydown', function(event) {
    if (event.key === 'Enter') {
      if (event.shiftKey) {
        // Shift+Enter: insert newline
        event.preventDefault();
        const start = this.selectionStart;
        const end = this.selectionEnd;
        this.value = this.value.substring(0, start) + '\n' + this.value.substring(end);
        this.selectionStart = this.selectionEnd = start + 1;
        adjustTextareaHeight(this);
      } else {
        // Enter: send message
        event.preventDefault();
        var inputText = this.value;

        if (inputText.trim() === '') return;

        // display user input in the output box as plain text
        const userStrongText = document.createElement('strong');
        userStrongText.textContent = 'You';
        const userInputText = document.createTextNode(inputText);
        outputBox.appendChild(userStrongText);
        outputBox.appendChild(document.createElement('br'));
        outputBox.appendChild(userInputText);
        outputBox.appendChild(document.createElement('br'));
        outputBox.appendChild(document.createElement('br'));

        // add the user's input to the message history
        messageHistory.push({ role: "user", content: inputText });

        const data = {
          model: selectedModel,
          messages: [...messageHistory],
          options: { temperature: 0.6, num_thread: 8 }
        };

        // Show the loader and disable the input box
        loader.style.display = 'block';
        this.disabled = true;

        fetch("https://gmserver.xyz", {
          method: "POST",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify(data)
        })
        .then(response => response.text())
        .then(responseData => {
          const strongText = document.createElement('strong');
          strongText.textContent = selectedModel.charAt(0).toUpperCase() + selectedModel.slice(1);
          outputBox.appendChild(strongText);
          outputBox.appendChild(document.createElement('br'));

          // apply white-space preservation
          outputBox.style.whiteSpace = 'pre-wrap';

          // trim leading and trailing whitespace from responseData
          responseData = responseData.trim();

          // split the response data by new line and process each line separately
          responseData.split('\n').forEach((line, index, array) => {
            const textNode = document.createTextNode(line);
            outputBox.appendChild(textNode);

            // add a <br> element after each line except the last one
            if (index < array.length - 1) {
              outputBox.appendChild(document.createElement('br'));
            }
          });

          outputBox.appendChild(document.createElement('br'));
          outputBox.appendChild(document.createElement('br'));

          // add the assistant's response to the message history
          messageHistory.push({ role: "assistant", content: responseData });

          // hide the loader and enable the input box
          loader.style.display = 'none';
          inputBox.disabled = false;

          // Scroll to the bottom of the output box
          outputBox.scrollTop = outputBox.scrollHeight;
        })
        .catch(error => {
          const errorText = document.createTextNode('Error: ' + error.message + '\n\n' + 'experiencing issues?');
          outputBox.appendChild(errorText);
          outputBox.appendChild(document.createElement('br'));

          // hide the loader and enable the input box
          loader.style.display = 'none';
          inputBox.disabled = false;

          // Scroll to the bottom of the output box
          outputBox.scrollTop = outputBox.scrollHeight;
        });

        this.value = '';
        this.style.height = '50px';
      }
    }
  });
});

function modelChoice(choice) {
  selectedModel = choice;
  var buttons = document.querySelectorAll('#modelSelectorContainer button');
  buttons.forEach(button => {
    if (button.getAttribute('data-model') !== choice) {
      button.style.border = '1px solid rgba(0, 0, 0, 0.3)';
      button.style.borderBottom = '2px solid rgba(204, 204, 204, 0.3)';
      button.style.borderRight = '1px solid rgba(68, 68, 68, 0.3)';
    }
  });

  var selectedButton = document.querySelector(`button[data-model="${choice}"]`);
  if (selectedButton) {
    selectedButton.style.borderBottom = '2px solid rgba(139, 0, 0, 0.8)';
  }
}