document.getElementById('inputBox').addEventListener('input', function(event) {
    this.style.height = 'auto';
    this.style.height = (this.scrollHeight) + 'px';
});

document.getElementById('inputBox').addEventListener('keypress', function(event) {
    if (event.key === 'Enter' && !event.shiftKey) {
        event.preventDefault();
        var inputText = this.value;
        var outputBox = document.getElementById('outputBox');
        outputBox.textContent += inputText + '\n';
        this.value = '';
        this.style.height = '50px'; // Reset height after submission
    }
});

function modelChoice(choice) {
    console.log("Model selected:", choice); // For demonstration purposes

    // Reset the styles of all buttons
    var buttons = document.querySelectorAll('#modelSelectorContainer button');
    buttons.forEach(button => {
        button.style.backgroundColor = 'transparent';
        button.style.color = 'inherit';
        button.style.border = '1px solid rgba(0, 0, 0, 0.3)';
    });

    // Highlight the selected button
    var selectedButton = document.querySelector(`button[data-model="${choice}"]`);
    if (selectedButton) {
        selectedButton.style.backgroundColor = 'red';
        selectedButton.style.color = 'white';
        selectedButton.style.border = '1px solid red';
    }

    // You can set .modelchoice to the chosen model here
    // e.g., model.modelchoice = choice;
}
