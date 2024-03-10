document.getElementById('inputBox').addEventListener('keypress', function(event) {
    if (event.key === 'Enter' && !event.shiftKey) {
        event.preventDefault(); // Prevent the default action to avoid form submission

        const inputText = this.value.trim(); // Get user input and trim whitespace
        if (inputText) { // Only proceed if inputText is not empty
            // Construct the JSON payload
            const data = {
                model: "mistral",
                messages: [
                    {
                        role: "user",
                        content: "I have kinda given up on react. I will rather do it in Vue. Is it easier? Tell me how to delete react completely form my mac, I will do the repositroy cleaning myself, and how to install vue. Bonus points to get me a vue supported object that i can put in",
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
                .then(response => response.text()) // Use response.text() to handle plain text
                .then(responseData => {
                    console.log(responseData);
                    // Display the response data here (as plain text)
                })
                .catch(error => {
                    console.error(error);
                    // Handle any errors here
                });            

            // Reset the input box
            this.value = '';
            this.style.height = '10px'; // Reset height after submission
        }
    }
});

// Adjust the height of the input box based on its content
document.getElementById('inputBox').addEventListener('input', function(event) {
    this.style.height = 'auto';
    this.style.height = (this.scrollHeight) + 'px';
});




var selectedModel = "";

function modelChoice(choice) {
    selectedModel = choice;

    var buttons = document.querySelectorAll('#modelSelectorContainer button');
    buttons.forEach(button => {
        button.style.border = '1px solid rgba(0, 0, 0, 0.3)';
        button.style.borderBottom = '2px solid rgba(204, 204, 204, 0.3)';
        button.style.borderRight = '1px solid rgba(68, 68, 68, 0.3)';
    });

    var selectedButton = document.querySelector(`button[data-model="${choice}"]`);
    if (selectedButton) {
        selectedButton.style.border = '1px solid rgba(139, 0, 0, 0.8)';
        selectedButton.style.borderBottom = '1px solid rgba(139, 0, 0, 0.8)';
        selectedButton.style.borderRight = '1px solid rgba(139, 0, 0, 0.8)';
    }
}


