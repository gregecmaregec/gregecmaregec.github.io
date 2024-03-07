// create the left canvas element
const leftCanvas = document.createElement('canvas');
document.body.appendChild(leftCanvas);

// create the right canvas element
const rightCanvas = document.createElement('canvas');
document.body.appendChild(rightCanvas);

// get the 2D rendering contexts for both canvases
const leftCtx = leftCanvas.getContext('2d');
const rightCtx = rightCanvas.getContext('2d');

// dimensions of the game!
const numBlocks = 50;

// calculate the maximum dimension of the display
const maxDimension = Math.min(window.innerWidth, window.innerHeight);

// calculate the size of each block in the grid based on the maximum dimension
const blockSize = maxDimension / numBlocks;

// set the canvas sizes and positions
const canvasWidth = 350;
const canvasHeight = 500;
leftCanvas.width = canvasWidth;
leftCanvas.height = canvasHeight;
leftCanvas.style.position = 'absolute';
leftCanvas.style.left = '0';

rightCanvas.width = canvasWidth;
rightCanvas.height = canvasHeight;
rightCanvas.style.position = 'absolute';
rightCanvas.style.right = '0';

// create a 2D array to store the grid state
let grid = createGrid();

// create the initial grid state
initializeGrid();

// run the game immediately upon site load
animate();

// Stop the animation after 2 minutes
setTimeout(() => {
    cancelAnimationFrame(animationId);
}, 2 * 60 * 1000);

let animationId;

function createGrid() {
    const grid = new Array(numBlocks);
    for (let x = 0; x < numBlocks; x++) {
        grid[x] = new Array(numBlocks);
    }
    return grid;
}

function initializeGrid() {
    for (let x = 0; x < numBlocks; x++) {
        for (let y = 0; y < numBlocks; y++) {
            // randomly set each block to be alive or dead
            grid[x][y] = Math.random() < 0.3 ? 1 : 0;
        }
    }
}

let timerId;

function animate() {
    updateGrid();
    drawGrid();
    timerId = setTimeout(animate, 200);
}

setTimeout(() => {
    clearTimeout(timerId);
}, 120000);

function updateGrid() {
    const newGrid = createGrid();

    for (let x = 0; x < numBlocks; x++) {
        for (let y = 0; y < numBlocks; y++) {
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
                neighborX < numBlocks &&
                neighborY >= 0 &&
                neighborY < numBlocks
            ) {
                count += grid[neighborX][neighborY];
            }
        }
    }

    return count;
}

function drawGrid() {
    leftCtx.clearRect(0, 0, leftCanvas.width, leftCanvas.height);
    rightCtx.clearRect(0, 0, rightCanvas.width, rightCanvas.height);

    for (let x = 0; x < numBlocks; x++) {
        for (let y = 0; y < numBlocks; y++) {
            const isAlive = grid[x][y] === 1;

            if (isAlive) {
                leftCtx.fillStyle = 'rgba(139, 0, 0, 0.8)'; // dark red color
                rightCtx.fillStyle = 'rgba(139, 0, 0, 0.8)'; // dark red color with a little bit of orange
            } else {
                leftCtx.fillStyle = 'rgba(0, 0, 0, 0)'; // completely transparent
                rightCtx.fillStyle = 'rgba(0, 0, 0, 0)'; // completely transparent
            }

            const posX = x * blockSize;
            const posY = y * blockSize;

            leftCtx.fillRect(posX, posY, blockSize, blockSize);
            rightCtx.fillRect(posX, posY, blockSize, blockSize);
        }
    }
}