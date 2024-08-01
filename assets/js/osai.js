let selectedModel = 'llama3.1'; // default model
let messageHistory = []; // array to store previous messages

function adjustTextareaHeight(textarea) {
  textarea.style.height = 'auto';
  textarea.style.height = (textarea.scrollHeight) + 'px';
}

function modelChoice(choice, initial = false) {
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

  // If it's the initial load, scroll the button into view
  if (initial) {
    const selectedButton = document.querySelector(`button[data-model="${choice}"]`);
    if (selectedButton) {
      selectedButton.scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'start' });
    }
  }
}

document.addEventListener('DOMContentLoaded', function() {
  const inputBox = document.getElementById('inputBox');
  const outputBox = document.getElementById('outputBox');
  const loader = document.getElementById('loader');
  const sendButton = document.getElementById('sendButton');

  // Set the initial model choice
  modelChoice('llama3.1', true);

  function handleInput() {
    adjustTextareaHeight(inputBox);
    sendButton.style.display = inputBox.value.trim() ? 'block' : 'none';
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
    sendButton.disabled = true;

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
      appendToOutput('Error', error.message + '\n\n <a href="https://gregormihelac.com/osai-error/">experiencing issues?</a>', true);
    })
    .finally(() => {
      // Hide loader and enable input
      loader.style.display = 'none';
      inputBox.disabled = false;
      sendButton.disabled = false;
    });

    // Clear and reset input box
    inputBox.value = '';
    inputBox.style.height = '50px';
    sendButton.style.display = 'none';
  }

  function appendToOutput(sender, content, isError = false) {
    const strongText = document.createElement('strong');
    strongText.textContent = sender;
    outputBox.appendChild(strongText);
    outputBox.appendChild(document.createElement('br'));
  
    if (isError) {
      // Split error message and link
      const [errorMessage, linkText] = content.split('\n\n');
      
      // Append error message as text
      outputBox.appendChild(document.createTextNode(errorMessage));
      outputBox.appendChild(document.createElement('br'));
      outputBox.appendChild(document.createElement('br'));
      
      // Create link element for the error link
      if (linkText && linkText.includes('<a href')) {
        const linkElement = document.createElement('a');
        linkElement.href = "https://gregormihelac.com/osai-error/";
        linkElement.textContent = "experiencing issues?";
        outputBox.appendChild(linkElement);
      }
    } else {
      // For non-error content (including LLM output), treat everything as plain text
      content.split('\n').forEach((line, index, array) => {
        outputBox.appendChild(document.createTextNode(line));
        if (index < array.length - 1) {
          outputBox.appendChild(document.createElement('br'));
        }
      });
    }
  
    outputBox.appendChild(document.createElement('br'));
    outputBox.appendChild(document.createElement('br'));
    outputBox.scrollTop = outputBox.scrollHeight;
  }

  inputBox.addEventListener('input', handleInput);
  inputBox.addEventListener('keydown', handleKeyDown);
  sendButton.addEventListener('click', sendMessage);
});