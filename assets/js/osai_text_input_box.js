
const inputBox = document.getElementById('inputBox');

function adjustHeight() {
inputBox.style.height = 'auto';
inputBox.style.height = `${inputBox.scrollHeight}px`;
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