// javascript

// create a canvas element
const canvas = document.createElement('canvas');
document.body.appendChild(canvas);

// get the 2D rendering context
const ctx = canvas.getContext('2d');

// set the canvas size
canvas.width = 400;
canvas.height = 400;

// define the size of each block in the grid
const blockSize = 4;

// calculate the number of blocks in each dimension
const numBlocksX = canvas.width / blockSize;
const numBlocksY = canvas.height / blockSize;

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
                ctx.fillStyle = 'black';
            } else {
                ctx.fillStyle = 'white';
            }

            ctx.fillRect(x * blockSize, y * blockSize, blockSize, blockSize);
        }
    }
}
