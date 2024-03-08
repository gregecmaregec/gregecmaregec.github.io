const userInput = document.getElementById('userInput');
const submitBtn = document.getElementById('submitBtn');
const output = document.getElementById('output');

submitBtn.addEventListener('click', () => {
    const inputValue = userInput.value.trim();
    if (inputValue !== '') {
        output.textContent = `You entered: ${inputValue}`;
        userInput.value = '';
    }
});