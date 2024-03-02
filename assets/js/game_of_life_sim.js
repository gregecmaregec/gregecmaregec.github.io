// create a canvas element
const canvas = document.createElement('canvas');
document.body.appendChild(canvas);

// get the 2D rendering context
const ctx = canvas.getContext('2d');

// define the number of blocks in X and Y directions
const numBlocksX = 200;
const numBlocksY = 200;

// calculate the maximum dimension of the display
const maxDimension = Math.min(window.innerWidth, window.innerHeight);

// set the canvas size to be 400x400 pixels and centered horizontally
const canvasSize = Math.min(maxDimension, 400);
canvas.width = canvasSize;
canvas.height = canvasSize;
canvas.style.marginLeft = `${(window.innerWidth - canvasSize) / 2}px`;

// calculate the size of each block in the grid based on the maximum dimension
const blockSize = canvasSize / Math.max(numBlocksX, numBlocksY);

// create a 2D array to store the grid state
let grid = createGrid();

// create the initial grid state
initializeGrid();

// run the game immediately upon site load
animate();

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
            grid[x][y] = Math.random() < 0.5 ? 1 : 0;
        }
    }
}

function animate() {
    updateGrid();
    drawGrid();
    requestAnimationFrame(animate);
}

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
                ctx.fillStyle = 'rgba(255, 192, 203, 0.99)'; // White color for populated blocks
            } else {
                ctx.fillStyle = 'rgba(0, 0, 0, 0)'; // Completely transparent for unpopulated blocks
            }

            const posX = x * blockSize;
            const posY = y * blockSize;

            ctx.fillRect(posX, posY, blockSize, blockSize);
        }
    }
}
