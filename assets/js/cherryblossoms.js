// falling_leaves.js

document.addEventListener("DOMContentLoaded", function () {
  // Create cherry blossom elements
  for (let i = 0; i < 50; i++) {
    createLeaf();
  }

  function createLeaf() {
    const leaf = document.createElement("div");
    leaf.className = "cherry-blossom-leaf";
    document.body.appendChild(leaf);

    // Set random position and animation duration
    const randomX = Math.random() * window.innerWidth;
    const randomDuration = Math.random() * 5 + 5;

    leaf.style.left = `${randomX}px`;
    leaf.style.animationDuration = `${randomDuration}s`;
  }
});
