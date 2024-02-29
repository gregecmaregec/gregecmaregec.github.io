---

layout: page
permalink: /coderepository/
title: code repository
description: 
nav: true
nav_order: 3

---

`the blossom circles effect in /philosophy.`

```javascript

// Create a canvas element
const canvas = document.createElement('canvas');
document.body.appendChild(canvas);

// Get the 2D rendering context
const ctx = canvas.getContext('2d');

// Create an array to store the cherry blossom leaves
const leaves = [];

// Set canvas size to cover half of the screen initially
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

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
        this.y += this.speed * 0.2; // Adjust the speed factor to make the leaves fall slower

        // Draw the leaf on the canvas
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

// Function to create cherry blossom leaves
function createLeaves() {
    const leafCount = 20;

    for (let i = 0; i < leafCount; i++) {
        const x = Math.random() * window.innerWidth;
        const y = Math.random() * (window.innerHeight / 2); // Blossoms spawn in the top half of the screen first
        const size = Math.random() * 10 + 5;
        const speed = Math.random() * 0.5 + 0.5;
        const leaf = new Leaf(x, y, size, speed);
        leaves.push(leaf);
    }
}

// Function to animate the cherry blossom leaves
function animate() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    for (const leaf of leaves) {
        leaf.update();
    }

    requestAnimationFrame(animate);
}

// Function that scrolls down immediately and for half of the window
function scrollDown() {
    const scrollHeight = window.innerHeight / 2;
    const duration = 7000; // 7 seconds

    const startTime = performance.now();
    const startY = window.pageYOffset;
    const endY = startY + scrollHeight;

    function scrollStep(timestamp) {
        const currentTime = timestamp - startTime;
        const progress = currentTime / duration;

        window.scrollTo(0, startY + (endY - startY) * progress);

        if (currentTime < duration) {
            requestAnimationFrame(scrollStep);
        }
    }

    requestAnimationFrame(scrollStep);
}

// Executing scrollDown function only once at the start of the page
window.addEventListener('DOMContentLoaded', () => {
    scrollDown();
});

createLeaves();
animate();

```
<br>
<br>
<br>
<br>
<br>
<br>
<br>
<br>
<br>
<br>

`expect a lot more to be here very soon`