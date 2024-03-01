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
        this.y += this.speed * 0.2;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fillStyle = 'rgba(255, 192, 203, 0.3)';
        ctx.fill();
        ctx.closePath();

        if (this.y > canvas.height + this.size) {
            this.y = -this.size;
        }
    }
}

function createLeaves() {
    const leafCount = 20;
    for (let i = 0; i < leafCount; i++) {
        const x = Math.random() * window.innerWidth;
        const y = Math.random() * (window.innerHeight / 2);
        const size = Math.random() * 10 + 5;
        const speed = Math.random() * 0.5 + 0.5;
        const leaf = new Leaf(x, y, size, speed);
        leaves.push(leaf);
    }
}

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
let isScriptScrolling = false;

setTimeout(() => {
    if (!scrolledByUser) {
        const scrollDistance = canvas.height / 2;
        const scrollDuration = 8000;
        const startTime = performance.now();
        const startY = window.scrollY;

        function scrollStep(timestamp) {
            if (scrolledByUser) {
                return;
            }

            isScriptScrolling = true;

            const currentTime = timestamp - startTime;
            const scrollY = easeInOutQuad(currentTime, startY, scrollDistance, scrollDuration);

            window.scrollTo(0, scrollY);

            if (currentTime < scrollDuration) {
                requestAnimationFrame(scrollStep);
            } else {
                isScriptScrolling = false;
            }
        }

        requestAnimationFrame(scrollStep);
    }
}, 4000);

window.addEventListener('scroll', () => {
    if (!isScriptScrolling) {
        scrolledByUser = true;
    }
});

function easeInOutQuad(t, b, c, d) {
    t /= d / 2;
    if (t < 1) return c / 2 * t * t + b;
    t--;
    return -c / 2 * (t * (t - 2) - 1) + b;
}
