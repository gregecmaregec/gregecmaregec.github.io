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
        this.style.height = '10px'; // Reset height after submission
    }
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


