// create canvas elements
const canvasLeft = document.createElement('canvas');
const canvasRight = document.createElement('canvas');

document.body.appendChild(canvasLeft);
document.body.appendChild(canvasRight);

// get the 2D rendering contexts
const ctxLeft = canvasLeft.getContext('2d');
const ctxRight = canvasRight.getContext('2d');

// dimensions of the game!
const numBlocksX = 50;
const numBlocksY = 50;

// calculate the maximum dimension of the display
const maxDimension = Math.min(window.innerWidth, window.innerHeight);

// set the canvas size to be maxDimension pixels
const canvasSize = Math.min(maxDimension, 350);

// calculate the size of each block in the grid based on the maximum dimension
const blockSize = canvasSize / Math.max(numBlocksX, numBlocksY);

// set the dimensions and positions of the canvases
canvasLeft.width = canvasSize / 2;
canvasLeft.height = canvasSize;
canvasLeft.style.marginLeft = '0';

canvasRight.width = canvasSize / 2;
canvasRight.height = canvasSize;
canvasRight.style.marginLeft = `${canvasSize / 2}px`;

// create a 2D array to store the grid state
let grid = createGrid();

// create the initial grid state
initializeGrid();

// run the game immediately upon site load
animate();

function animate() {
    updateGrid();
    drawGrid(ctxLeft, 0);
    drawGrid(ctxRight, canvasSize / 2);
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


// ... (rest of the code remains unchanged)

function drawGrid(ctx, offsetX) {
    ctx.clearRect(offsetX, 0, canvasSize / 2, canvasSize);

    for (let x = 0; x < numBlocksX; x++) {
        for (let y = 0; y < numBlocksY; y++) {
            const isAlive = grid[x][y] === 1;

            if (isAlive) {
                ctx.fillStyle = 'rgba(255, 41, 70, 0.8)'; // osai color
            } else {
                ctx.fillStyle = 'rgba(0, 0, 0, 0)';
            }

            const posX = offsetX + x * blockSize;
            const posY = y * blockSize;

            ctx.fillRect(posX, posY, blockSize, blockSize);
        }
    }
}
å