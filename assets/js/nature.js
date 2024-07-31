//crystal-nature simulation
const canvas = document.createElement('canvas');
document.body.appendChild(canvas);
const ctx = canvas.getContext('2d');

// Define the target size
const TARGET_WIDTH = 820;
const TARGET_HEIGHT = 300;

// Function to set canvas size
function setCanvasSize() {
    canvas.width = TARGET_WIDTH;
    canvas.height = TARGET_HEIGHT;

    // Set CSS to make canvas responsive
    canvas.style.width = '100%';
    canvas.style.maxWidth = `${TARGET_WIDTH}px`;
    canvas.style.height = 'auto';
    canvas.style.display = 'block';
    canvas.style.margin = '20px auto';
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
        this.speedX = (Math.random() * 3 - 1.5) * 0.05;
        this.speedY = (Math.random() * 3 - 1.5) * 0.05;
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
    const scaleX = TARGET_WIDTH / rect.width;
    const scaleY = TARGET_HEIGHT / rect.height;

    mouse.x = (event.clientX - rect.left) * scaleX;
    mouse.y = (event.clientY - rect.top) * scaleY;

    for (let i = 0; i < 6; i++) {
        particles.push(new Particle(mouse.x, mouse.y));
    }
});

animate();