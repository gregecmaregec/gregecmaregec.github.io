// Create a canvas element
const canvas = document.createElement('canvas');
document.body.appendChild(canvas);

// Get the 2D rendering context
const ctx = canvas.getContext('2d');

// Create an array to store the cherry blossom leaves
const leaves = [];

// Create a class for the cherry blossom leaves
class Leaf {
    constructor(x, y, size, speed) {
        this.x = x;
        this.y = y;
        this.size = size;
        this.speed = speed;
    }

    update() {
        // Move the leaf downwards slowly
        this.y += this.speed * 0.1; // Adjust the speed factor to make the leaves fall slower

        // Draw the leaf on the canvas with lower opacity
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fillStyle = 'rgba(255, 192, 203, 0.2)'; // 20% lower opacity
        ctx.fill();
        ctx.closePath();

        // Reset the leaf position if it goes off the screen
        if (this.y > canvas.height + this.size) {
            this.y = -this.size;
        }
    }
}

// Function to create cherry blossom leaves
function createLeaves() {
    const leafCount = 20;

    for (let i = 0; i < leafCount; i++) {
        const x = Math.random() * window.innerWidth;
        const y = Math.random() * window.innerHeight;
        const size = Math.random() * 10 + 5;
        const speed = Math.random() * 0.5 + 0.5; // Slow down the falling speed
        const leaf = new Leaf(x, y, size, speed);
        leaves.push(leaf);
    }
}

// Function to animate the cherry blossom leaves
function animate() {
    // Clear the canvas
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    // Update and draw each leaf
    for (const leaf of leaves) {
        leaf.update();
    }

    // Call the animate function recursively
    requestAnimationFrame(animate);
}

// Set canvas size to cover the entire body
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

// Call the createLeaves function to initialize the cherry blossom leaves
createLeaves();

// Call the animate function to start the animation
animate();

// Update canvas size on window resize
window.addEventListener('resize', () => {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
});