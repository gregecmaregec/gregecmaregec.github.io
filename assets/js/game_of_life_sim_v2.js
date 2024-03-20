// create the left canvas element
const leftCanvas = document.createElement('canvas');
leftCanvas.width = 110;
leftCanvas.height = 500;
leftCanvas.style.position = 'absolute'; // Use fixed position instead of absolute
leftCanvas.style.left = '0';
leftCanvas.style.top = '50%'; // Position at 50% from the top
leftCanvas.style.transform = 'translateY(-50%)'; // Translate up by 50% to center vertically
document.body.appendChild(leftCanvas);

const rightCanvas = document.createElement('canvas');
rightCanvas.width = 110;
rightCanvas.height = 500;
rightCanvas.style.position = 'absolute'; // Use fixed position instead of absolute
rightCanvas.style.right = '0';
rightCanvas.style.top = '50%'; // Position at 50% from the top
rightCanvas.style.transform = 'translateY(-50%)'; // Translate up by 50% to center vertically
document.body.appendChild(rightCanvas);

// Check if the screen width is smaller than 800px
if (window.innerWidth < 800) {
    leftCanvas.style.display = 'none';
    rightCanvas.style.display = 'none';
}
// get the 2D rendering contexts for both canvases
const leftCtx = leftCanvas.getContext('2d');
const rightCtx = rightCanvas.getContext('2d');

// dimensions of the game
const blocksByHeight = 50;
const blocksByWidth = 11;

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

// Record the start time
const startTime = Date.now();

// Stop the animation after 2 seconds
setTimeout(() => {
    cancelAnimationFrame(animationId);

    // Update grid and draw final state
    updateGrid(leftGrid, blocksByWidth, blocksByHeight);
    updateGrid(rightGrid, blocksByWidth, blocksByHeight);
    drawGrid(leftCtx, leftGrid, blockSizeWidth, blockSizeHeight);
    drawGrid(rightCtx, rightGrid, blockSizeWidth, blockSizeHeight);
}, 2 * 1000);

// Animation settings
const delayBetweenGenerations = 200; // in milliseconds

async function animate() {
    const elapsed = Date.now() - startTime;
    const progress = Math.min(1, elapsed / (2 * 1000)); // Ensure progress is capped at 1

    updateGrid(leftGrid, blocksByWidth, blocksByHeight);
    updateGrid(rightGrid, blocksByWidth, blocksByHeight);
    drawGrid(leftCtx, leftGrid, blockSizeWidth, blockSizeHeight);
    drawGrid(rightCtx, rightGrid, blockSizeWidth, blockSizeHeight);

    // Check if 2 seconds have passed, and if so, return without continuing the animation
    if (progress >= 1) {
        // Draw the final state
        drawGrid(leftCtx, leftGrid, blockSizeWidth, blockSizeHeight);
        drawGrid(rightCtx, rightGrid, blockSizeWidth, blockSizeHeight);
        return;
    }

    // Apply easing function to control animation speed
    const easedProgress = easeInOutQuad(progress);

    // Delay using async/await
    await new Promise(resolve => setTimeout(resolve, delayBetweenGenerations));

    // Continue the animation with the next frame
    animationId = requestAnimationFrame(animate);
}

function easeInOutQuad(t) {
    return t < 0.5 ? 2 * t * t : -1 + (4 - 2 * t) * t;
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
            grid[y][x] = Math.random() < 0.14 ? 1 : 0;
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
