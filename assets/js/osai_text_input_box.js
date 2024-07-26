const inputBox = document.getElementById('inputBox');
const initialHeight = 50; // Set the initial height in pixels
inputBox.style.height = `${initialHeight}px`;

let lastLine = '';
let isOverflown = false;

function adjustHeight() {
  const lines = inputBox.value.split('\n');
  const currentLine = lines[lines.length - 1];
  const currentScrollHeight = inputBox.scrollHeight;

  if (currentScrollHeight > initialHeight) {
    if (currentLine.length > lastLine.length || isOverflown) {
      // New character added or already overflown
      inputBox.style.height = 'auto';
      const scrollHeight = inputBox.scrollHeight;
      inputBox.style.height = `${scrollHeight}px`;
      isOverflown = true;
    }
  } else if (currentLine.length < lastLine.length && !isOverflown) {
    // Character removed and not overflown
    inputBox.style.height = `${initialHeight}px`;
  }

  lastLine = currentLine;
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
