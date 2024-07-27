//crystal-nature simulation

const canvas = document.createElement('canvas');
document.body.appendChild(canvas);
const ctx = canvas.getContext('2d');

// Define the target size
const TARGET_WIDTH = 800;
const TARGET_HEIGHT = 400;

// Function to set canvas size and scale
function setCanvasSize() {
    let width = Math.min(window.innerWidth * 0.98, TARGET_WIDTH);
    let height = width / 2; // Maintain 2:1 ratio

    canvas.style.width = `${width}px`;
    canvas.style.height = `${height}px`;

    // Set actual canvas dimensions for high DPI displays
    const dpr = window.devicePixelRatio || 1;
    canvas.width = width * dpr;
    canvas.height = height * dpr;

    // Scale the context to ensure correct drawing
    ctx.scale(dpr, dpr);

    // Set CSS to center the canvas
    canvas.style.display = 'block';
    canvas.style.margin = '20px auto';
}

// Call the function initially and on window resize
setCanvasSize();
window.addEventListener('resize', setCanvasSize);

// particle system
class Particle {
    constructor(x, y) {
        this.x = x * (canvas.width / TARGET_WIDTH);
        this.y = y * (canvas.height / TARGET_HEIGHT);
        this.size = (Math.random() * 5 + 1) * (canvas.width / TARGET_WIDTH);
        this.speedX = ((Math.random() * 3 - 1.5) * 0.60) * (canvas.width / TARGET_WIDTH);
        this.speedY = ((Math.random() * 3 - 1.5) * 0.60) * (canvas.height / TARGET_HEIGHT);
        this.color = `hsl(${Math.random() * 360}, 100%, 50%)`;
    }

    update() {
        this.x += this.speedX;
        this.y += this.speedY;

        if (this.size > 0.2 * (canvas.width / TARGET_WIDTH)) this.size -= 0.1 * (canvas.width / TARGET_WIDTH);
    }

    draw() {
        ctx.fillStyle = this.color;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fill();
    }
}

let particles = [];
const mouse = { x: null, y: null, radius: 150 * (canvas.width / TARGET_WIDTH) };

function createParticles() {
    for (let i = 0; i < 4; i++) {
        particles.push(new Particle(
            Math.random() * TARGET_WIDTH,
            Math.random() * TARGET_HEIGHT
        ));
    }
}

function handleParticles() {
    for (let i = 0; i < particles.length; i++) {
        particles[i].update();
        particles[i].draw();

        for (let j = i; j < particles.length; j++) {
            const dx = particles[i].x - particles[j].x;
            const dy = particles[i].y - particles[j].y;
            const distance = Math.sqrt(dx * dx + dy * dy);

            if (distance < 100 * (canvas.width / TARGET_WIDTH)) {
                ctx.beginPath();
                ctx.strokeStyle = particles[i].color;
                ctx.lineWidth = 0.2 * (canvas.width / TARGET_WIDTH);
                ctx.moveTo(particles[i].x, particles[i].y);
                ctx.lineTo(particles[j].x, particles[j].y);
                ctx.stroke();
            }
        }

        if (particles[i].size <= 0.2 * (canvas.width / TARGET_WIDTH)) {
            particles.splice(i, 1);
            i--;
        }
    }
}

function animate() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    handleParticles();
    createParticles();
    requestAnimationFrame(animate);
}

// below makes particles when you hover with mouse 
canvas.addEventListener('mousemove', (event) => {
    const rect = canvas.getBoundingClientRect();
    const scaleX = canvas.width / rect.width;
    const scaleY = canvas.height / rect.height;

    mouse.x = (event.clientX - rect.left) * scaleX;
    mouse.y = (event.clientY - rect.top) * scaleY;

    for (let i = 0; i < 6; i++) {
        particles.push(new Particle(mouse.x * (TARGET_WIDTH / canvas.width), mouse.y * (TARGET_HEIGHT / canvas.height)));
    }
});

animate();