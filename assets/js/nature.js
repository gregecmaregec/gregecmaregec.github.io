document.addEventListener('DOMContentLoaded', () => {
    const canvas = document.getElementById('crystalCanvas');
    const ctx = canvas.getContext('2d');

    const canvasSize = Math.min(maxDimension, 500);
    canvas.width = canvasSize;
    canvas.height = canvasSize;
    // below sets the canvas to be centered on the page
    canvas.style.marginLeft = `${(window.innerWidth - canvasSize) / 2}px`;

    class Crystal {
        constructor(x, y, size) {
            this.x = x;
            this.y = y;
            this.size = size;
            this.angle = Math.random() * Math.PI * 2;
            this.speed = 0.02 + Math.random() * 0.03;
        }

        update() {
            this.angle += this.speed;
            this.x += Math.cos(this.angle) * 2;
            this.y += Math.sin(this.angle) * 2;

            if (this.x < 0 || this.x > canvas.width) this.x = canvas.width / 2;
            if (this.y < 0 || this.y > canvas.height) this.y = canvas.height / 2;
        }

        draw() {
            ctx.save();
            ctx.translate(this.x, this.y);
            ctx.rotate(this.angle);

            const gradient = ctx.createLinearGradient(-this.size, -this.size, this.size, this.size);
            gradient.addColorStop(0, 'rgba(255, 0, 0, 0.5)');
            gradient.addColorStop(0.2, 'rgba(255, 165, 0, 0.5)');
            gradient.addColorStop(0.4, 'rgba(255, 255, 0, 0.5)');
            gradient.addColorStop(0.6, 'rgba(0, 255, 0, 0.5)');
            gradient.addColorStop(0.8, 'rgba(0, 0, 255, 0.5)');
            gradient.addColorStop(1, 'rgba(238, 130, 238, 0.5)');

            ctx.fillStyle = gradient;
            ctx.beginPath();
            ctx.moveTo(-this.size, 0);
            ctx.lineTo(0, -this.size);
            ctx.lineTo(this.size, 0);
            ctx.lineTo(0, this.size);
            ctx.closePath();
            ctx.fill();

            ctx.restore();
        }
    }

    const crystals = [];
    for (let i = 0; i < 30; i++) {
        crystals.push(new Crystal(
            Math.random() * canvas.width,
            Math.random() * canvas.height,
            5 + Math.random() * 20
        ));
    }

    function animate() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);

        crystals.forEach(crystal => {
            crystal.update();
            crystal.draw();
        });

        requestAnimationFrame(animate);
    }

    animate();
});