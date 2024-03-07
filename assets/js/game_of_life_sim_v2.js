// Create two canvas elements
const canvas1 = document.createElement('canvas');
const canvas2 = document.createElement('canvas');
document.body.appendChild(canvas1);
document.body.appendChild(canvas2);

// Get the 2D rendering contexts
const ctx1 = canvas1.getContext('2d');
const ctx2 = canvas2.getContext('2d');

// dimensions of the game!
const numBlocksX = 50;
const numBlocksY = 50;

// Calculate the maximum dimension of the display
const maxDimension = Math.min(window.innerWidth, window.innerHeight);

// Set the canvas sizes to be half the maxDimension pixels, 250x500px as mentioned
canvas1.width = 250;
canvas1.height = 500;
canvas2.width = 250;
canvas2.height = 500;

// Position the canvases
canvas1.style.position = 'absolute';
canvas1.style.left = '0px';
canvas1.style.top = '50%';
canvas1.style.transform = 'translateY(-50%)';

canvas2.style.position = 'absolute';
canvas2.style.right = '0px';
canvas2.style.top = '50%';
canvas2.style.transform = 'translate(-50%, -50%)';

// Calculate the size of each block in the grid
const blockSizeX = canvasLeft.width / (numBlocksX / 2);
const blockSizeY = canvasLeft.height / numBlocksY;

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
            grid[x][y] = Math.random() < 0.1 ? 1 : 0;
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
}, 60000);

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
    // Clear both canvases
    ctxLeft.clearRect(0, 0, canvasLeft.width, canvasLeft.height);
    ctxRight.clearRect(0, 0, canvasRight.width, canvasRight.height);

    // Draw the left half of the grid on the left canvas and the right half on the right canvas
    for (let x = 0; x < numBlocksX; x++) {
        for (let y = 0; y < numBlocksY; y++) {
            const isAlive = grid[x][y] === 1;
            const color = isAlive ? 'rgba(255, 41, 70, 0.8)' : 'rgba(0, 0, 0, 0)';

            if (x < numBlocksX / 2) {
                // Draw on the left canvas
                ctxLeft.fillStyle = color;
                const posX = x * blockSizeX;
                const posY = y * blockSizeY;
                ctxLeft.fillRect(posX, posY, blockSizeX, blockSizeY);
            } else {
                // Draw on the right canvas
                ctxRight.fillStyle = color;
                const posX = (x - numBlocksX / 2) * blockSizeX; // Adjust X to start from 0 for the right canvas
                const posY = y * blockSizeY;
                ctxRight.fillRect(posX, posY, blockSizeX, blockSizeY);
            }
        }
    }
}



// check wikipedia for game of life on more info