// Create a canvas element
const canvas = document.createElement('canvas');
document.body.appendChild(canvas);

// Get the 2D rendering context
const ctx = canvas.getContext('2d');

// Create an array to store the cherry blossom leaves
const leaves = [];

// Set canvas size to cover 99.95% of the window
// this is due to the fact that the canvas will overflow the window if it's set to 100%
canvas.width = window.innerWidth * 0.98;
canvas.height = window.innerHeight * 0.98;

class Leaf {
    constructor(x, y, size, speed) {
        this.x = x;
        this.y = y;
        this.size = size;
        this.speed = speed;
    }

    update() {
        // Move the circles downwards slowly
        this.y += this.speed * 0.2; // Adjust the speed factor to make the leaves fall slower

        // Draw the circles on the canvas
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fillStyle = 'rgba(255, 192, 203, 0.3)'; // That 0.3 in the end means 30% opacity
        ctx.fill();
        ctx.closePath();

        // Reset the leaf position if it goes off the screen
        if (this.y > canvas.height + this.size) {
            this.y = -this.size;
        }
    }
}

// Function to create cherry blossom circles
function createLeaves() {
    const leafCount = 20;

    // Blossoms spawn in the top half of the screen first because of const y
    for (let i = 0; i < leafCount; i++) {
        const x = Math.random() * window.innerWidth;
        const y = Math.random() * (window.innerHeight / 2); 
        const size = Math.random() * 10 + 5;
        const speed = Math.random() * 0.5 + 0.5;
        const leaf = new Leaf(x, y, size, speed);
        leaves.push(leaf);
    }
}

// Function to animate the cherry blossom circles
(function () {
    // Step 1: Reload the page immediately on page start
    window.onload = function () {
        location.reload(true);
    };

    // Step 2: Scroll to the top of the page when the user hasn't scrolled
    var scrolledByUser = false;

    function scrollToTop() {
        if (!scrolledByUser) {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        }
    }

    // Attach the scrollToTop function to the scroll event
    window.addEventListener('scroll', function () {
        scrolledByUser = true;
        // Cancel any delayed scroll action
        clearTimeout(scrollTimeout);
    });

    // Step 3: Wait for 4 seconds
    var scrollTimeout = setTimeout(function () {
        // Step 4: Scroll down half the width of the vertical height of the display
        var windowHeight = window.innerHeight;
        var targetScroll = windowHeight / 2;

        window.scrollBy({ top: targetScroll, behavior: 'smooth' });

        // Reset scrolledByUser after the delayed scroll action
        scrolledByUser = false;
    }, 4000);

    // Run the scrollToTop function immediately on page start
    scrollToTop();
})();

