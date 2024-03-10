let selectedModel = 'mistral'; // Default model

document.getElementById('inputBox').addEventListener('keypress', function(event) {
    if (event.key === 'Enter' && !event.shiftKey) {
        event.preventDefault();
        var inputText = this.value;
        var outputBox = document.getElementById('outputBox');

        // Display user input in the output box
        outputBox.innerHTML += 'You: ' + '<br>' + inputText + '<br><br>';

        // Define the data to be sent to the server, dynamically using selectedModel
        const data = {
            model: selectedModel, // Use the dynamically updated model
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

        // Send data to the server and handle the response
        fetch("https://gmserver.xyz", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(data)
        })
        .then(response => response.text())
        .then(responseData => {
            // Display the server's response in the output box
            outputBox.innerHTML += 'AI: ' + '<br>' + responseData + '<br><br>';
        })
        .catch(error => {
            // Display the error in the output box
            outputBox.innerHTML += 'Error: ' + error.message + '<br><br>';
        });

        // Reset input box after submission
        this.value = '';
        this.style.height = '50px';
    }
});

function modelChoice(choice) {
    console.log("Model selected:", choice);
    selectedModel = choice;

    // Iterate over all buttons
    var buttons = document.querySelectorAll('#modelSelectorContainer button');
    buttons.forEach(button => {
        // Reset the border style for non-selected models
        if (button.getAttribute('data-model') !== choice) {
            button.style.border = '1px solid rgba(0, 0, 0, 0.3)';
            button.style.borderBottom = '2px solid rgba(204, 204, 204, 0.3)';
            button.style.borderRight = '1px solid #444';
        }
    });

    // Highlight the border of the selected button
    var selectedButton = document.querySelector(`button[data-model="${choice}"]`);
    if (selectedButton) {
        selectedButton.style.border = '2px solid rgba(139, 0, 0, 0.8)';
    }
}

