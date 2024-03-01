// Create a canvas element
const canvas = document.createElement('canvas');
document.body.appendChild(canvas);

// Get the 2D rendering context
const ctx = canvas.getContext('2d');

// Create an array to store the cherry blossom leaves
const leaves = [];

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
function animate() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    for (const leaf of leaves) {
        leaf.update();
    }

    requestAnimationFrame(animate);
}

createLeaves();
animate();

let scrolledByUser = false;

// Scroll down after 4 seconds if the user hasn't scrolled by themselves
setTimeout(() => {
    if (!scrolledByUser) {
        const scrollDistance = canvas.height / 2;
        const scrollDuration = 5000;
        const startTime = performance.now();
        const startY = window.pageYOffset;

        function scrollStep(timestamp) {
            const currentTime = timestamp - startTime;
            const scrollProgress = currentTime / scrollDuration;
            const scrollY = startY + scrollProgress * scrollDistance;

            window.scrollTo(0, scrollY);

            if (currentTime < scrollDuration) {
                requestAnimationFrame(scrollStep);
            }
        }

        requestAnimationFrame(scrollStep);
    }
}, 4000);

// Event listener for scroll event
window.addEventListener('scroll', () => {
    scrolledByUser = true;
});
