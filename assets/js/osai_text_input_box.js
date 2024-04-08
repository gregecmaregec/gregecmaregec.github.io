const inputBox = document.getElementById('inputBox');

function adjustHeight() {
    const singleLineHeight = 50; // Height for a single line of text
    const multiLineHeight = 68; // Height for multiple lines of text

    inputBox.style.height = 'auto';
    const contentHeight = inputBox.scrollHeight;

    if (contentHeight > singleLineHeight) {
        // If content height exceeds single line height, set to multiLineHeight
        inputBox.style.height = `${multiLineHeight}px`;
    } else {
        // If content fits in a single line, set height to singleLineHeight
        inputBox.style.height = `${singleLineHeight}px`;
    }
}

inputBox.addEventListener('input', adjustHeight);
inputBox.addEventListener('keydown', (event) => {
    if (event.shiftKey && event.code === 'Enter') {
        event.preventDefault();
        const start = inputBox.selectionStart;
        const end = inputBox.selectionEnd;
        inputBox.value = inputBox.value.substring(0, start) + '\n' + inputBox.value.substring(end);
        inputBox.selectionStart = inputBox.selectionEnd = start + 1;
        adjustHeight();
    }
});
