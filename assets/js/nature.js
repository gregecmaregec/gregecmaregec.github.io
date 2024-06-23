document.addEventListener('DOMContentLoaded', () => {
    const canvas = document.getElementById('crystalCanvas');
    const ctx = canvas.getContext('2d');

    // Set canvas size
    function setCanvasSize() {
        canvas.width = Math.min(window.innerWidth * 0.98, 750);
        canvas.height = 500;
    }
    setCanvasSize();

    // Center canvas horizontally
    canvas.style.display = 'block';
    canvas.style.margin = '20px auto';

    // Particle system
    class Particle {
        // ... (Particle class remains unchanged)
    }

    let particles = [];
    const mouse = { x: null, y: null, radius: 150 };

    // Function to determine the number of particles based on screen width
    function getParticleCount() {
        const width = window.innerWidth;
        if (width <= 750) {
            return Math.floor((width / 750) * 5); // Scale down particles for small screens
        }
        return 5; // Default number of particles for larger screens
    }

    function createParticles() {
        const particleCount = getParticleCount();
        for (let i = 0; i < particleCount; i++) {
            particles.push(new Particle(
                Math.random() * canvas.width,
                Math.random() * canvas.height
            ));
        }
    }

    function handleParticles() {
        // ... (handleParticles function remains unchanged)
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

        const particleCount = getParticleCount();
        for (let i = 0; i < particleCount; i++) {
            particles.push(new Particle(mouse.x, mouse.y));
        }
    });

    // Add resize event listener to update canvas size and particle count
    window.addEventListener('resize', () => {
        setCanvasSize();
        particles = []; // Clear existing particles
    });

    animate();
});