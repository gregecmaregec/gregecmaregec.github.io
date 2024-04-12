const inputBox = document.getElementById('inputBox');
const initialHeight = 50; // Set the initial height in pixels
inputBox.style.height = `${initialHeight}px`;

function adjustHeight() {
  // Reset height to auto
  inputBox.style.height = 'auto';

  // Get the scrollHeight after resetting to auto
  const scrollHeight = inputBox.scrollHeight;

  // If scrollHeight is greater than initialHeight, adjust the height
  if (scrollHeight > initialHeight) {
    inputBox.style.height = `${scrollHeight}px`;
  } else {
    // Otherwise, reset to initialHeight
    inputBox.style.height = `${initialHeight}px`;
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