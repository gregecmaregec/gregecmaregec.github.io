const inputBox = document.getElementById('inputBox');
inputBox.style.height = '50px'; // Set the initial height to 50px

function adjustHeight() {
  const scrollHeight = inputBox.scrollHeight;
  const boxHeight = inputBox.offsetHeight;

  if (scrollHeight > boxHeight) {
    inputBox.style.height = `${scrollHeight}px`;
  } else {
    inputBox.style.height = '50px'; // Reset to the default height if no overflow
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