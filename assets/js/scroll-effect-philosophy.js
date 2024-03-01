// Create a canvas element
const canvas = document.createElement('canvas');
const screenWidth = window.innerWidth * 0.98;
const screenHeight = window.innerHeight * 0.98;
canvas.width = screenWidth / 2;
canvas.height = screenHeight;

// Get the canvas context
const ctx = canvas.getContext('2d');

// Set the font style
const fontSize = 48;
ctx.font = `${fontSize}px Arial`;

// Set the text alignment and color
ctx.textAlign = 'center';
ctx.fillStyle = 'black';

// Draw the text on the canvas
ctx.fillText('test', canvas.width / 2, canvas.height / 2);

// Append the canvas to the body
document.body.appendChild(canvas);

// Scroll down half the width of the screen in 4 seconds
if (!userScrolled) {
    const scrollDistance = screenHeight / 2;
    const scrollDuration = 4000;
    const scrollStep = scrollDistance / scrollDuration * 10;

    let scrollPosition = 0;
    const scrollInterval = setInterval(() => {
        if (scrollPosition >= scrollDistance || userScrolled) {
            clearInterval(scrollInterval);
        } else {
            scrollPosition += scrollStep;
            window.scrollBy(0, scrollStep);
        }
    }, 10);
}
