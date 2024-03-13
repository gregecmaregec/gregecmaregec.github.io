let selectedModel = 'mistral'; // Default model

document.getElementById('inputBox').addEventListener('keypress', function(event) {
    if (event.key === 'Enter' && !event.shiftKey) {
        event.preventDefault();
        var inputText = this.value;
        var outputBox = document.getElementById('outputBox');

        // Display user input in the output box as plain text
        const userStrongText = document.createElement('strong');
        userStrongText.textContent = 'You';
        
        const userInputText = document.createTextNode(inputText);
        
        outputBox.appendChild(userStrongText);
        outputBox.appendChild(document.createElement('br'));
        outputBox.appendChild(userInputText);
        outputBox.appendChild(document.createElement('br'));
        outputBox.appendChild(document.createElement('br'));

        const data = {
            model: selectedModel,
            messages: [
                {
                    role: "user",
                    content: inputText,
                    options: {
                        temperature: 0.6,
                        num_thread: 8
                    }
                }
            ]
        };

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

            // Split the response data by new line and process each line separately
            responseData.split('\n').forEach((line, index, array) => {
                const textNode = document.createTextNode(line);
                outputBox.appendChild(textNode);
                
                // Add a <br> element after each line except the last one
                if (index < array.length - 1) {
                    outputBox.appendChild(document.createElement('br'));
                }
            });

            outputBox.appendChild(document.createElement('br'));
            outputBox.appendChild(document.createElement('br'));
        })
        .catch(error => {
            const errorText = document.createTextNode('Error: ' + error.message + '\n\n');
            outputBox.appendChild(errorText);
            outputBox.appendChild(document.createElement('br'));
        });
        
        this.value = '';
        this.style.height = '50px';
    }
});

function modelChoice(choice) {
    console.log("Model selected:", choice);
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
