document.getElementById('inputBox').addEventListener('keypress', function(event) {
    if (event.key === 'Enter') {
        event.preventDefault();
        var inputText = this.value;
        var outputBox = document.getElementById('outputBox');
        outputBox.textContent += inputText + '\n';
        this.value = ''; // Clear input box after pressing Enter
    }
});
