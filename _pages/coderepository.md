---

layout: page
permalink: /coderepository/
title: code repository
description: all code posted on this site is under the MIT licence.
nav_order: 3

---

[MIT Licence](https://github.com/gregecmaregec/gregecmaregec.github.io/blob/master/LICENSE)

---


`the blossom circles effect in /philosophy.`
<br>
<br>

`javascript.`

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

// Function that scrolls down the website after a delay
function scrollDownSmoothly() {
    const scrollHeight = window.innerHeight / 2;
    const duration = 9000; // 9 seconds
    const delay = 3000; // 3 seconds

// This is an attempt at smooth scrolling in js
    setTimeout(() => {
        const startTime = performance.now();
        const startY = window.pageYOffset;
        const endY = startY + scrollHeight;

        function scrollStep(timestamp) {
            const currentTime = timestamp - startTime;
            const progress = currentTime / duration;

            const easeInOutCubic = t => t < 0.5 ? 4 * t * t * t : (t - 1) * (2 * t - 2) * (2 * t - 2) + 1;
            const easedProgress = easeInOutCubic(progress);

            window.scrollTo(0, startY + (endY - startY) * easedProgress);

            if (currentTime < duration) {
                requestAnimationFrame(scrollStep);
            }
        }

        requestAnimationFrame(scrollStep);
    }, delay);
}

// Executing scrollDownSmoothly function only once at the startup of the page
window.addEventListener('DOMContentLoaded', () => {
    scrollDownSmoothly();
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