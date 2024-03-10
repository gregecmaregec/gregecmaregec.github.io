document.getElementById('inputBox').addEventListener('input', function(event) {
    this.style.height = 'auto';
    this.style.height = (this.scrollHeight) + 'px';
});

document.getElementById('inputBox').addEventListener('keypress', function(event) {
    if (event.key === 'Enter' && !event.shiftKey) {
        event.preventDefault();
        var inputText = this.value;
        var outputBox = document.getElementById('outputBox');
        
        // Define the data to be sent to the server
        const data = {
            model: "mistral",
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
            outputBox.textContent += responseData + '\n';
        })
        .catch(error => {
            // Display the error in the output box
            outputBox.textContent += 'Error: ' + error.message + '\n';
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
        // Reset the border style only if it's not the selected model
        if (button.getAttribute('data-model') !== choice) {
            button.style.border = '1px solid rgba(0, 0, 0, 0.3)';
            button.style.borderBottom = '2px solid #ccc';
            button.style.borderRight = '1px solid #444';
        }
    });

    // Highlight the border of the selected button
    var selectedButton = document.querySelector(`button[data-model="${choice}"]`);
    if (selectedButton) {
        selectedButton.style.border = '1px solid rgba(139, 0, 0, 0.8)';
        selectedButton.style.borderBottom = '2px solid rgba(139, 0, 0, 0.8)';
        selectedButton.style.borderRight = '1px solid rgba(139, 0, 0, 0.8)';
    }
}

