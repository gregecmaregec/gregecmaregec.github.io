const inputBox = document.getElementById('inputBox');
inputBox.style.height = '50px'; // Set the initial height to 50px
let isExpanded = false; // Flag to track if the input box has been expanded

function adjustHeight() {
  const scrollHeight = inputBox.scrollHeight;
  const boxHeight = inputBox.offsetHeight;

  if (scrollHeight > boxHeight) {
    // Content is overflowing
    if (!isExpanded) {
      // Expand the input box only if it hasn't been expanded before
      inputBox.style.height = `${scrollHeight}px`;
      isExpanded = true; // Set the flag to true
    }
  } else {
    // Content is not overflowing
    if (isExpanded) {
      // Reset the input box height only if it was previously expanded
      inputBox.style.height = '50px';
      isExpanded = false; // Reset the flag to false
    }
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