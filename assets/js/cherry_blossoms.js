// create a canvas element
const canvas = document.createElement('canvas');
document.body.appendChild(canvas);

// get the 2D rendering context
const ctx = canvas.getContext('2d');

// create an array to store the cherry blossom leaves
const leaves = [];

// keeping canvas at 0.99 of the window size prevents overflow
canvas.width = window.innerWidth * 0.99;
canvas.height = window.innerHeight * 0.99;

// balls are called Leaf
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
        //change the color below. 0.3 means the opacity
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
        // balls get generated at the top half first due to y
        const y = Math.random() * (window.innerHeight / 2);
        const size = Math.random() * 10 + 5;
        const speed = Math.random() * 0.25 + 0.5;    
        leaves.push(new Leaf(x, y, size, speed));
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

let userHasScrolled = false;

// detect user-initiated scroll actions to disable auto scroll feature
window.addEventListener('wheel', () => userHasScrolled = true);
window.addEventListener('touchmove', () => userHasScrolled = true);

setTimeout(() => {
    if (!userHasScrolled) {
        const scrollDistance = canvas.height / 3;
        // 10 seconds for the auto-scrolling to complete
        const scrollDuration = 7000;
        let startTime = null;

        function scrollStep(timestamp) {
            if (userHasScrolled) return;

            if (!startTime) startTime = timestamp;
            const elapsedTime = timestamp - startTime;
            const progress = elapsedTime / scrollDuration;

            const scrollY = easeInOutQuad(progress) * scrollDistance;
            window.scrollTo(0, startY + scrollY);

            if (elapsedTime < scrollDuration) {
                requestAnimationFrame(scrollStep);
            }
        }

        const startY = window.scrollY;
        requestAnimationFrame(scrollStep);
    }
// unit of time of inaction before the start of auto-scroll to complete
}, 4000);

// a technique for auto-scrolling to be smooth
function easeInOutQuad(progress) {
    if (progress < 0.5) {
        return 2 * progress * progress;
    } else {
        return -1 + (4 - 2 * progress) * progress;
    }
}