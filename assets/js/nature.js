//crystal-nature simulation
const canvas = document.createElement('canvas');
document.body.appendChild(canvas);
const ctx = canvas.getContext('2d');

// Define the target size
const TARGET_WIDTH = 800;
const TARGET_HEIGHT = 400;

let scale = 1;

// Function to set canvas size and scale
function setCanvasSize() {
    let width = window.innerWidth;
    let height = window.innerHeight;
    
    // Calculate scale to fit entire canvas
    scale = Math.min(width / TARGET_WIDTH, height / TARGET_HEIGHT);
    
    canvas.style.width = `${TARGET_WIDTH * scale}px`;
    canvas.style.height = `${TARGET_HEIGHT * scale}px`;

    canvas.width = TARGET_WIDTH;
    canvas.height = TARGET_HEIGHT;

    // Center the canvas
    canvas.style.position = 'absolute';
    canvas.style.left = `${(width - TARGET_WIDTH * scale) / 2}px`;
    canvas.style.top = `${(height - TARGET_HEIGHT * scale) / 2}px`;
}

// Call the function initially and on window resize
setCanvasSize();
window.addEventListener('resize', setCanvasSize);

// particle system
class Particle {
    constructor(x, y) {
        this.x = x;
        this.y = y;
        this.size = Math.random() * 5 + 1;
        this.speedX = (Math.random() * 3 - 1.5) * 0.60;
        this.speedY = (Math.random() * 3 - 1.5) * 0.60;
        this.color = `hsl(${Math.random() * 360}, 100%, 50%)`;
    }

    update() {
        this.x += this.speedX;
        this.y += this.speedY;

        if (this.size > 0.2) this.size -= 0.1;
    }

    draw() {
        ctx.fillStyle = this.color;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fill();
    }
}

let particles = [];
const mouse = { x: null, y: null, radius: 150 };

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

            if (distance < 100) {
                ctx.beginPath();
                ctx.strokeStyle = particles[i].color;
                ctx.lineWidth = 0.2;
                ctx.moveTo(particles[i].x, particles[i].y);
                ctx.lineTo(particles[j].x, particles[j].y);
                ctx.stroke();
            }
        }

        if (particles[i].size <= 0.2) {
            particles.splice(i, 1);
            i--;
        }
    }
}

function animate() {
    ctx.clearRect(0, 0, TARGET_WIDTH, TARGET_HEIGHT);
    handleParticles();
    createParticles();
    requestAnimationFrame(animate);
}

// below makes particles when you hover with mouse 
canvas.addEventListener('mousemove', (event) => {
    const rect = canvas.getBoundingClientRect();
    mouse.x = (event.clientX - rect.left) / scale;
    mouse.y = (event.clientY - rect.top) / scale;

    for (let i = 0; i < 6; i++) {
        particles.push(new Particle(mouse.x, mouse.y));
    }
});

animate();