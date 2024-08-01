const inputBox = document.getElementById('inputBox');
const initialHeight = 50; // Set the initial height in pixels
inputBox.style.height = `${initialHeight}px`;

let isExpanded = false;

function adjustHeight() {
  const currentScrollHeight = inputBox.scrollHeight;
  const lines = inputBox.value.split('\n');

  if (lines.length > 1 || currentScrollHeight > initialHeight) {
    inputBox.style.height = 'auto';
    inputBox.style.height = `${inputBox.scrollHeight}px`;
    isExpanded = true;
  } else if (isExpanded && lines.length === 1 && currentScrollHeight <= initialHeight) {
    inputBox.style.height = `${initialHeight}px`;
    isExpanded = false;
  }
}

inputBox.addEventListener('input', adjustHeight);
inputBox.addEventListener('keydown', (event) => {
  if (event.key === 'Enter' && !event.shiftKey) {
    event.preventDefault(); // Prevent default Enter behavior
  } else if (event.shiftKey && event.key === 'Enter') {
    event.preventDefault();
    const start = inputBox.selectionStart;
    const end = inputBox.selectionEnd;
    inputBox.value = inputBox.value.substring(0, start) + '\n' + inputBox.value.substring(end);
    inputBox.selectionStart = inputBox.selectionEnd = start + 1;
    adjustHeight();
  }
});