let selectedModel = 'llama3.1'; // default model
let messageHistory = []; // array to store previous messages

function adjustTextareaHeight(textarea) {
  const lineHeight = parseInt(window.getComputedStyle(textarea).lineHeight);
  const padding = parseInt(window.getComputedStyle(textarea).paddingTop) + 
                  parseInt(window.getComputedStyle(textarea).paddingBottom);
  const lines = textarea.value.split('\n').length;
  const newHeight = lines > 1 ? (lines * lineHeight + padding) : 50;

  textarea.style.height = newHeight + 'px';
}

document.addEventListener('DOMContentLoaded', function() {
  const inputBox = document.getElementById('inputBox');
  const outputBox = document.getElementById('outputBox');
  const loader = document.getElementById('loader');

  function handleInput() {
    const lines = inputBox.value.split('\n');
    if (lines.length > 1 || (lines.length === 1 && inputBox.scrollHeight > inputBox.clientHeight)) {
      adjustTextareaHeight(inputBox);
    } else {
      inputBox.style.height = '50px';
    }
  }

  function handleKeyDown(event) {
    if (event.key === 'Enter') {
      if (event.shiftKey) {
        // Shift+Enter: insert newline
        event.preventDefault();
        const start = inputBox.selectionStart;
        const end = inputBox.selectionEnd;
        inputBox.value = inputBox.value.substring(0, start) + '\n' + inputBox.value.substring(end);
        inputBox.selectionStart = inputBox.selectionEnd = start + 1;
        adjustTextareaHeight(inputBox);
      } else {
        // Enter: send message
        event.preventDefault();
        sendMessage();
      }
    }
  }

  function sendMessage() {
    const inputText = inputBox.value.trim();
    if (!inputText) return;

    // Display user input
    appendToOutput('You', inputText);

    // Add user input to message history
    messageHistory.push({ role: "user", content: inputText });

    const data = {
      model: selectedModel,
      messages: [...messageHistory],
      options: { temperature: 0.6, num_thread: 8 }
    };

    // Show loader and disable input
    loader.style.display = 'block';
    inputBox.disabled = true;

    fetch("https://gmserver.xyz", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data)
    })
    .then(response => response.text())
    .then(responseData => {
      // Display model response
      appendToOutput(selectedModel.charAt(0).toUpperCase() + selectedModel.slice(1), responseData.trim());

      // Add response to message history
      messageHistory.push({ role: "assistant", content: responseData.trim() });
    })
    .catch(error => {
      appendToOutput('Error', error.message + '\n\n <a href = "gregormihelac.com/osai-error/">experiencing issues?<a>');
    })
    .finally(() => {
      // Hide loader and enable input
      loader.style.display = 'none';
      inputBox.disabled = false;
    });

    // Clear and reset input box
    inputBox.value = '';
    inputBox.style.height = '50px';
  }

  function appendToOutput(sender, content) {
    const strongText = document.createElement('strong');
    strongText.textContent = sender;
    outputBox.appendChild(strongText);
    outputBox.appendChild(document.createElement('br'));

    content.split('\n').forEach((line, index, array) => {
      outputBox.appendChild(document.createTextNode(line));
      if (index < array.length - 1) {
        outputBox.appendChild(document.createElement('br'));
      }
    });

    outputBox.appendChild(document.createElement('br'));
    outputBox.appendChild(document.createElement('br'));
    outputBox.scrollTop = outputBox.scrollHeight;
  }

  inputBox.addEventListener('input', handleInput);
  inputBox.addEventListener('keydown', handleKeyDown);
});

function modelChoice(choice) {
  selectedModel = choice;
  const buttons = document.querySelectorAll('#modelSelectorContainer button');
  buttons.forEach(button => {
    if (button.getAttribute('data-model') === choice) {
      button.style.borderBottom = '2px solid rgba(139, 0, 0, 0.8)';
    } else {
      button.style.border = '1px solid rgba(0, 0, 0, 0.3)';
      button.style.borderBottom = '2px solid rgba(204, 204, 204, 0.3)';
      button.style.borderRight = '1px solid rgba(68, 68, 68, 0.3)';
    }
  });
}