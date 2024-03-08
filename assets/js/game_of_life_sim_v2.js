// create the left canvas element
const leftCanvas = document.createElement('canvas');
leftCanvas.width = 150;
leftCanvas.height = 500;
leftCanvas.style.position = 'absolute';
leftCanvas.style.left = '0'; // Align to the total left
document.body.appendChild(leftCanvas);

// create the right canvas element
const rightCanvas = document.createElement('canvas');
rightCanvas.width = 150;
rightCanvas.height = 500;
rightCanvas.style.position = 'absolute';
rightCanvas.style.right = '0'; // Align to the total right
document.body.appendChild(rightCanvas);

// get the 2D rendering contexts for both canvases
const leftCtx = leftCanvas.getContext('2d');
const rightCtx = rightCanvas.getContext('2d');

// dimensions of the game
const blocksByHeight = 50;
const blocksByWidth = 15;

// calculate the size of each block
const blockSizeWidth = leftCanvas.width / blocksByWidth;
const blockSizeHeight = leftCanvas.height / blocksByHeight;

// set the width and height of the right canvas
rightCanvas.width = leftCanvas.width;
rightCanvas.height = leftCanvas.height;

// create 2D arrays to store the grid state for each canvas
let leftGrid = createGrid(blocksByWidth, blocksByHeight);
let rightGrid = createGrid(blocksByWidth, blocksByHeight);

// create the initial grid state
initializeGrid(leftGrid, blocksByWidth, blocksByHeight);
initializeGrid(rightGrid, blocksByWidth, blocksByHeight);

// run the game immediately upon site load
requestAnimationFrame(animate);

let animationId;

// Stop the animation after 2 seconds
setTimeout(() => {
    cancelAnimationFrame(animationId);
}, 2 * 1000);

// Animation settings
const delayBetweenGenerations = 200; // in milliseconds

async function animate() {
    updateGrid(leftGrid, blocksByWidth, blocksByHeight);
    updateGrid(rightGrid, blocksByWidth, blocksByHeight);
    drawGrid(leftCtx, leftGrid, blockSizeWidth, blockSizeHeight);
    drawGrid(rightCtx, rightGrid, blockSizeWidth, blockSizeHeight);

    // Delay using async/await
    await new Promise(resolve => setTimeout(resolve, delayBetweenGenerations));

    // Continue the animation with the next frame
    animationId = requestAnimationFrame(animate);
}

function createGrid(width, height) {
    const grid = new Array(height);
    for (let y = 0; y < height; y++) {
        grid[y] = new Array(width).fill(0);
    }
    return grid;
}

function initializeGrid(grid, width, height) {
    for (let y = 0; y < height; y++) {
        for (let x = 0; x < width; x++) {
            grid[y][x] = Math.random() < 0.1 ? 1 : 0;
        }
    }
}

function updateGrid(grid, width, height) {
    const newGrid = createGrid(width, height);

    for (let y = 0; y < height; y++) {
        for (let x = 0; x < width; x++) {
            const neighbors = countNeighbors(grid, x, y, width, height);
            const isAlive = grid[y][x] === 1;

            if (isAlive && (neighbors < 2 || neighbors > 3)) {
                newGrid[y][x] = 0;
            } else if (!isAlive && neighbors === 3) {
                newGrid[y][x] = 1;
            } else {
                newGrid[y][x] = grid[y][x];
            }
        }
    }

    for (let y = 0; y < height; y++) {
        grid[y] = newGrid[y].slice();
    }
}

function countNeighbors(grid, x, y, width, height) {
    let count = 0;

    for (let i = -1; i <= 1; i++) {
        for (let j = -1; j <= 1; j++) {
            if (i === 0 && j === 0) continue;

            const neighborX = (x + i + width) % width;
            const neighborY = (y + j + height) % height;

            count += grid[neighborY][neighborX];
        }
    }

    return count;
}

function drawGrid(ctx, grid, blockSizeWidth, blockSizeHeight) {
    ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);

    for (let y = 0; y < grid.length; y++) {
        for (let x = 0; x < grid[y].length; x++) {
            const isAlive = grid[y][x] === 1;

            ctx.fillStyle = isAlive ? 'rgba(139, 0, 0, 0.8)' : 'rgba(0, 0, 0, 0)';
            ctx.fillRect(x * blockSizeWidth, y * blockSizeHeight, blockSizeWidth, blockSizeHeight);
        }
    }
}
