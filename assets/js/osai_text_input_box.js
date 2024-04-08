const inputBox = document.getElementById('inputBox');

function adjustHeight() {
    // Subtract vertical padding and border widths
    const verticalPadding = 20; // 10px top padding + 10px bottom padding
    const verticalBorderWidth = 3; // 1px top border + 2px bottom border
    const adjustment = verticalPadding + verticalBorderWidth;

    inputBox.style.height = 'auto';
    const newHeight = inputBox.scrollHeight - adjustment;
    inputBox.style.height = `${newHeight}px`;
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
