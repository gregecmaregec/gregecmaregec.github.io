// Conway's Game of Life — landing-page background.
//
// Opinionated on purpose: same colours, same speed, same starting square the
// original sketch used. The only new trick is that the grid is no longer boxed
// in. The simulation seeds in the exact same centred square, then is free to
// march outwards across the whole viewport.
(() => {
  const root = document.getElementById("game-of-life-app");

  // The original landing-page defaults. Kept verbatim so it "starts where it
  // starts" — 90x90 seed, 30% density, 100ms per generation, sakura pink.
  const SEED_COLS = readInt(root, "defaultWidth", 90);
  const SEED_ROWS = readInt(root, "defaultHeight", 90);
  const SPEED_MS = readInt(root, "defaultSpeed", 100);
  const DENSITY = readInt(root, "defaultDensity", 30) / 100;
  const LIVE_COLOR = readColor(root, "--life-live-cell", "#ffb7c5");

  // Build the canvas in JS and pin it behind the page content, edge to edge.
  const canvas = document.createElement("canvas");
  canvas.setAttribute("aria-hidden", "true");
  Object.assign(canvas.style, {
    position: "fixed",
    top: "0",
    left: "0",
    width: "100%",
    height: "100%",
    maxWidth: "none",
    margin: "0",
    display: "block",
    zIndex: "-1",
    pointerEvents: "none",
  });
  document.body.appendChild(canvas);

  // The live canvas is fixed (out of flow), so reserve the footprint the old
  // in-flow square used to take. Keeps the gap between the page content and the
  // footer exactly as it was: a centred max-500px square with a 3rem tail.
  // Skipped on the immersive showroom, where the layout fills the viewport.
  if (root && !document.body.classList.contains("fullscreen-showroom")) {
    Object.assign(root.style, {
      display: "block",
      width: "100%",
      maxWidth: "500px",
      aspectRatio: "1 / 1",
      margin: "100px auto",
    });
  }

  const ctx = canvas.getContext("2d");

  const state = {
    vw: 1,
    vh: 1,
    cell: 1,
    cols: 1,
    rows: 1,
    grid: new Uint8Array(0),
    oneAgo: null,
    twoAgo: null,
    stagnant: 0,
    rafId: null,
    lastTick: 0,
  };

  // Generations of a settled board to tolerate before reseeding the centre
  // square, so the animation never freezes for good. ~6s at SPEED_MS.
  const STAGNANT_LIMIT = 60;

  init();
  state.rafId = requestAnimationFrame(tick);

  let resizeTimer = null;
  window.addEventListener("resize", () => {
    window.clearTimeout(resizeTimer);
    resizeTimer = window.setTimeout(resize, 150);
  });
  window.addEventListener("beforeunload", () => {
    cancelAnimationFrame(state.rafId);
  });

  // Tap / click anywhere to sprinkle a fresh patch of life under the pointer.
  // Ignore clicks on real interactive elements so links and buttons still work.
  window.addEventListener("click", (event) => {
    if (event.target.closest && event.target.closest("a, button, input, select, textarea, label")) return;
    stampAt(event.clientX, event.clientY);
  });

  function init() {
    measure();
    state.cell = cellSize(state.vw);
    state.cols = Math.max(1, Math.ceil(state.vw / state.cell));
    state.rows = Math.max(1, Math.ceil(state.vh / state.cell));
    state.grid = new Uint8Array(state.cols * state.rows);
    seedCenter();
    fitCanvas();
    draw();
  }

  // Cell size of the original centred square: min(500px, 90vw) / 90 columns.
  function cellSize(viewportWidth) {
    return Math.max(1, Math.min(500, viewportWidth * 0.9) / SEED_COLS);
  }

  // Drop the random soup into the centre square only; the rest starts empty so
  // there is room to expand into.
  function seedCenter() {
    const blockCols = Math.min(SEED_COLS, state.cols);
    const blockRows = Math.min(SEED_ROWS, state.rows);
    const startX = Math.floor((state.cols - blockCols) / 2);
    const startY = Math.floor((state.rows - blockRows) / 2);

    for (let y = 0; y < blockRows; y += 1) {
      for (let x = 0; x < blockCols; x += 1) {
        const index = (startY + y) * state.cols + (startX + x);
        state.grid[index] = Math.random() < DENSITY ? 1 : 0;
      }
    }
  }

  // On resize / orientation change, regrid but keep the living cells (centred)
  // so the simulation keeps running instead of restarting.
  function resize() {
    measure();
    const cell = cellSize(state.vw);
    const cols = Math.max(1, Math.ceil(state.vw / cell));
    const rows = Math.max(1, Math.ceil(state.vh / cell));

    if (cols === state.cols && rows === state.rows) {
      fitCanvas();
      draw();
      return;
    }

    const next = new Uint8Array(cols * rows);
    const offX = Math.floor((cols - state.cols) / 2);
    const offY = Math.floor((rows - state.rows) / 2);

    for (let y = 0; y < state.rows; y += 1) {
      const ny = y + offY;
      if (ny < 0 || ny >= rows) continue;

      for (let x = 0; x < state.cols; x += 1) {
        const nx = x + offX;
        if (nx < 0 || nx >= cols) continue;

        next[ny * cols + nx] = state.grid[y * state.cols + x];
      }
    }

    state.cell = cell;
    state.cols = cols;
    state.rows = rows;
    state.grid = next;
    fitCanvas();
    draw();
  }

  function measure() {
    const rect = canvas.getBoundingClientRect();
    state.vw = Math.max(1, rect.width);
    state.vh = Math.max(1, rect.height);
  }

  function fitCanvas() {
    const ratio = window.devicePixelRatio || 1;
    canvas.width = Math.round(state.vw * ratio);
    canvas.height = Math.round(state.vh * ratio);
    ctx.setTransform(ratio, 0, 0, ratio, 0, 0);
  }

  function tick(timestamp) {
    if (!state.lastTick || timestamp - state.lastTick >= SPEED_MS) {
      step();
      draw();
      state.lastTick = timestamp;
    }

    state.rafId = requestAnimationFrame(tick);
  }

  // Classic Conway rules (B3/S23), unchanged.
  function step() {
    const { cols, rows, grid } = state;
    const next = new Uint8Array(cols * rows);

    for (let y = 0; y < rows; y += 1) {
      for (let x = 0; x < cols; x += 1) {
        const index = y * cols + x;
        const neighbors = countNeighbors(x, y);

        next[index] = grid[index]
          ? Number(neighbors === 2 || neighbors === 3)
          : Number(neighbors === 3);
      }
    }

    // A frame identical to two generations ago means the board has settled
    // (still lifes / period-2 oscillators). Let it sit briefly, then reseed
    // the same centre square so life begins again — forever.
    state.stagnant = state.twoAgo && gridsEqual(next, state.twoAgo) ? state.stagnant + 1 : 0;
    state.twoAgo = state.oneAgo;
    state.oneAgo = state.grid;
    state.grid = next;

    if (state.stagnant >= STAGNANT_LIMIT) reseed();
  }

  function reseed() {
    state.grid = new Uint8Array(state.cols * state.rows);
    state.oneAgo = null;
    state.twoAgo = null;
    state.stagnant = 0;
    seedCenter();
  }

  // Add a small soup patch centred on a viewport point (only turns cells on,
  // so it feeds the existing pattern rather than wiping it).
  function stampAt(clientX, clientY) {
    const radius = 14;
    const centerX = Math.floor(clientX / state.cell);
    const centerY = Math.floor(clientY / state.cell);

    for (let dy = -radius; dy <= radius; dy += 1) {
      for (let dx = -radius; dx <= radius; dx += 1) {
        const x = centerX + dx;
        const y = centerY + dy;
        if (x < 0 || x >= state.cols || y < 0 || y >= state.rows) continue;
        if (Math.random() < DENSITY) state.grid[y * state.cols + x] = 1;
      }
    }

    state.stagnant = 0;
    draw();
  }

  function gridsEqual(a, b) {
    if (a.length !== b.length) return false;
    for (let i = 0; i < a.length; i += 1) {
      if (a[i] !== b[i]) return false;
    }
    return true;
  }

  function countNeighbors(x, y) {
    const { cols, rows, grid } = state;
    let total = 0;

    for (let dy = -1; dy <= 1; dy += 1) {
      for (let dx = -1; dx <= 1; dx += 1) {
        if (dx === 0 && dy === 0) continue;

        const nx = x + dx;
        const ny = y + dy;
        if (nx < 0 || nx >= cols || ny < 0 || ny >= rows) continue;

        total += grid[ny * cols + nx];
      }
    }

    return total;
  }

  function draw() {
    const { cols, rows, cell, grid } = state;
    const size = Math.ceil(cell);

    ctx.clearRect(0, 0, state.vw, state.vh);
    ctx.fillStyle = LIVE_COLOR;

    for (let y = 0; y < rows; y += 1) {
      for (let x = 0; x < cols; x += 1) {
        if (grid[y * cols + x]) {
          ctx.fillRect(x * cell, y * cell, size, size);
        }
      }
    }
  }

  function readInt(el, key, fallback) {
    const value = el ? parseInt(el.dataset[key], 10) : NaN;
    return Number.isFinite(value) ? value : fallback;
  }

  function readColor(el, token, fallback) {
    const source = el || document.documentElement;
    return getComputedStyle(source).getPropertyValue(token).trim() || fallback;
  }
})();
