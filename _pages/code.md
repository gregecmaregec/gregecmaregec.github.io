---

layout: code
permalink: /code/
title: code
description:
nav: true
nav_order: 2

---

All code shown explicitly on /code/ is under the [MIT License.](https://github.com/gregecmaregec/gregecmaregec.github.io/blob/master/LICENSE)
Feel free to copy the below working code to your own project under the conditions of the MIT license

<br>
<br>

### particle crystal-nature simulation in natty JS
`javascript`

```javascript

const canvas = document.createElement('canvas');
document.body.appendChild(canvas);
    
const ctx = canvas.getContext('2d');

// set canvas size
canvas.width = Math.min(window.innerWidth * 0.98, 800);
canvas.height = 400;

//center canvas horizontally
canvas.style.display = 'block';
canvas.style.margin = '20px auto';

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

// below makes particles when you hover with mouse 
canvas.addEventListener('mousemove', (event) => {
    mouse.x = event.x - canvas.offsetLeft;
    mouse.y = event.y - canvas.offsetTop;

    for (let i = 0; i < 6; i++) {
        particles.push(new Particle(mouse.x, mouse.y));
    }
});

animate();​​​​​


```
<br>
<br> 

---

<br>
<br>

### the blossom circles and scroll effect in /philosophy/
`javascript`

```javascript
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
        const speed = Math.random() * 0.5 + 0.5;
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
        const scrollDistance = canvas.height / 2;
        // 10 seconds for the auto-scrolling to complete
        const scrollDuration = 10000;
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
// 4 seconds of inaction starts auto-scroll to complete
}, 4000);

// a technique for auto-scrolling to be smooth
function easeInOutQuad(progress) {
    if (progress < 0.5) {
        return 2 * progress * progress;
    } else {
        return -1 + (4 - 2 * progress) * progress;
    }
}


```

<br>
<br> 

---

<br>
<br>

### bash script to load a guest directly to a program
`bash script`

```bash
#!/bin/bash

#let's assume your guest user is called 'serverguest'

if [ "$USER" = "serverguest" ]; then
     trap '' SIGINT
     trap '' SIGTERM
     trap '' SIGHUP
     trap '' SIGKILL
     trap '' SIGSTOP
     trap '' SIGQUIT
     trap '' SIGTSTP
     trap '' SIGCONT
     trap '' SIGPIPE
     trap '' SIGCHLD
     trap '' SIGUSR1
     trap '' SIGUSR2

     echo -e "
     welcome
     "
     yourprogram # this is the program that you want to execute
     # it will run as if typing yourprogram into the terminal as user serverguest

     exit #drops the connection after the program is quit
fi

# save the script under /etc/profile.d/ with the .sh extension
# to have it run on every log-in (inlcuding root)

# make serverguest have restricted bash by running
chsh -s /bin/rbash serverguest
# in the terminal as super user

```

<br>
<br>

---

<br>
<br>

### game of life simulation
`javascript`

```javascript
// create a canvas element
const canvas = document.createElement('canvas');
document.body.appendChild(canvas);

// get the 2D rendering context
const ctx = canvas.getContext('2d');

// dimensions of the game!
const numBlocksX = 90;
const numBlocksY = 90;

// calculate the maximum dimension of the display
const maxDimension = Math.min(window.innerWidth, window.innerHeight);

// set the canvas size to be macDimension pixels
const canvasSize = Math.min(maxDimension, 500);
canvas.width = canvasSize;
canvas.height = canvasSize;
// below sets the canvas to be centered on the page
canvas.style.marginLeft = `${(window.innerWidth - canvasSize) / 2}px`;

// calculate the size of each block in the grid based on the maximum dimension
const blockSize = canvasSize / Math.max(numBlocksX, numBlocksY);

// create a 2D array to store the grid state
let grid = createGrid();

// create the initial grid state
initializeGrid();

// run the game immediately upon site load
animate();

// stop the animation after n minutes
setTimeout(() => {
    cancelAnimationFrame(animationId);
}, 6 * 60 * 1000);

let animationId;

function createGrid() {
    const grid = new Array(numBlocksX);
    for (let x = 0; x < numBlocksX; x++) {
        grid[x] = new Array(numBlocksY);
    }
    return grid;
}

function initializeGrid() {
    for (let x = 0; x < numBlocksX; x++) {
        for (let y = 0; y < numBlocksY; y++) {
            // randomly set each block to be alive or dead
            grid[x][y] = Math.random() < 0.3 ? 1 : 0;
        }
    }
}

let timerId;

function animate() {
    updateGrid();
    drawGrid();
    timerId = setTimeout(animate, 100);
    
}

setTimeout(() => {
    clearTimeout(timerId);
}, 120000);

function updateGrid() {
    const newGrid = createGrid();

    for (let x = 0; x < numBlocksX; x++) {
        for (let y = 0; y < numBlocksY; y++) {
            const neighbors = countNeighbors(x, y);
            const isAlive = grid[x][y] === 1;

            if (isAlive && (neighbors < 2 || neighbors > 3)) {
                // cell dies due to underpopulation or overpopulation
                newGrid[x][y] = 0;
            } else if (!isAlive && neighbors === 3) {
                // cell becomes alive due to reproduction
                newGrid[x][y] = 1;
            } else {
                // cell remains in its current state
                newGrid[x][y] = grid[x][y];
            }
        }
    }

    grid = newGrid;
}

function countNeighbors(x, y) {
    let count = 0;

    for (let i = -1; i <= 1; i++) {
        for (let j = -1; j <= 1; j++) {
            if (i === 0 && j === 0) continue;

            const neighborX = x + i;
            const neighborY = y + j;

            if (
                neighborX >= 0 &&
                neighborX < numBlocksX &&
                neighborY >= 0 &&
                neighborY < numBlocksY
            ) {
                count += grid[neighborX][neighborY];
            }
        }
    }

    return count;
}

function drawGrid() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    for (let x = 0; x < numBlocksX; x++) {
        for (let y = 0; y < numBlocksY; y++) {
            const isAlive = grid[x][y] === 1;

            if (isAlive) {
                ctx.fillStyle = 'rgba(255, 183, 197, 0.8)'; // cherry blossom color with 80% opacity
            } else {
                ctx.fillStyle = 'rgba(0, 0, 0, 0)'; // completely transparent
            }

            const posX = x * blockSize;
            const posY = y * blockSize;

            ctx.fillRect(posX, posY, blockSize, blockSize);
        }
    }
}

// check wikipedia for game of life on more info

```
<br>
<br>

---

<br>
<br>

### simple http server using go-lang
`go`

```go
   package main
    //all the below imports are included in default go installation
    import (
        "fmt"
        "log"
        "net/http"
    )

    //this will be the response when you trigger the api
    func handler(w http.ResponseWriter, r *http.Request) {
        fmt.Fprintf(w, "Hello, this is a response from your Go API!")
    }

    func main() {
        http.HandleFunc("/", handler) // Set the handler for the root path
        log.Println("Starting server on :8080...")
        err := http.ListenAndServe(":8080", nil) // Listen on port 8080
        if err != nil {
            log.Fatal("ListenAndServe: ", err)
        }
    }

// you may now trigger your api by engaging with http://localhost:8080 
```