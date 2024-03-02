const canvas = document.getElementById('gameCanvas');
const ctx = canvas.getContext('2d');

const cellSize = 4;
const gridWidth = 100;
const gridHeight = 100;
canvas.width = gridWidth * cellSize;
canvas.height = gridHeight * cellSize;

let grid = createGrid(gridWidth, gridHeight);

function createGrid(width, height) {
    const grid = new Array(height);
    for (let y = 0; y < height; y++) {
        grid[y] = new Array(width).fill(0).map(() => Math.round(Math.random()));
    }
    return grid;
}

function drawGrid() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    for (let y = 0; y < gridHeight; y++) {
        for (let x = 0; x < gridWidth; x++) {
            ctx.beginPath();
            ctx.rect(x * cellSize, y * cellSize, cellSize, cellSize);
            ctx.fillStyle = grid[y][x] ? 'rgba(255, 192, 203, 0.7)' : 'transparent';
            ctx.fill();
            ctx.strokeStyle = 'black';
            ctx.stroke();
        }
    }
}

function updateGrid() {
    let newGrid = createGrid(gridWidth, gridHeight);
    for (let y = 0; y < gridHeight; y++) {
        for (let x = 0; x < gridWidth; x++) {
            const neighbors = countNeighbors(grid, x, y);
            if (grid[y][x] === 1 && (neighbors < 2 || neighbors > 3)) {
                newGrid[y][x] = 0;
            } else if (grid[y][x] === 0 && neighbors === 3) {
                newGrid[y][x] = 1;
            } else {
                newGrid[y][x] = grid[y][x];
            }
        }
    }
    grid = newGrid;
    drawGrid();
    requestAnimationFrame(updateGrid);
}

function countNeighbors(grid, x, y) {
    let count = 0;
    for (let dy = -1; dy <= 1; dy++) {
        for (let dx = -1; dx <= 1; dx++) {
            if (dx === 0 && dy === 0) continue;
            const x1 = x + dx;
            const y1 = y + dy;
            if (x1 >= 0 && x1 < gridWidth && y1 >= 0 && y1 < gridHeight) {
                count += grid[y1][x1];
            }
        }
    }
    return count;
}

setTimeout(() => requestAnimationFrame(updateGrid), 4000);
