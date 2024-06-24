//crystal-nature simulation

const canvas = document.createElement('canvas');
document.body.appendChild(canvas);
    
const ctx = canvas.getContext('2d');

// Set canvas size
canvas.width = Math.min(window.innerWidth * 0.98, 750);
canvas.height = 400;

    //Center canvas horizontally
canvas.style.display = 'block';
canvas.style.margin = '20px auto';

    // Particle system
class Particle {
    constructor(x, y) {
        this.x = x;
        this.y = y;
        this.size = Math.random() * 5 + 1;
        this.speedX = (Math.random() * 3 - 1.5) * 0.5;
        this.speedY = (Math.random() * 3 - 1.5) * 0.5;
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
            Math.random() * canvas.width,
            Math.random() * canvas.height
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
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    handleParticles();
    createParticles();
    requestAnimationFrame(animate);
}

canvas.addEventListener('mousemove', (event) => {
    mouse.x = event.x - canvas.offsetLeft;
    mouse.y = event.y - canvas.offsetTop;

    for (let i = 0; i < 5; i++) {
        particles.push(new Particle(mouse.x, mouse.y));
    }
});

animate();​​​​​