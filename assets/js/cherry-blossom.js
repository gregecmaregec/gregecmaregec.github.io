// cherry-blossom.js

document.addEventListener("DOMContentLoaded", function () {
    const numberOfLeaves = 50;
  
    for (let i = 0; i < numberOfLeaves; i++) {
      createLeaf();
    }
  
    function createLeaf() {
      const leaf = document.createElement("div");
      leaf.className = "leaf";
      document.body.appendChild(leaf);
  
      const startPositionX = Math.random() * window.innerWidth;
      const rotation = Math.random() * 360;
  
      leaf.style.position = "absolute";
      leaf.style.width = "10px";
      leaf.style.height = "10px";
      leaf.style.backgroundColor = "rgba(255, 0, 0, 0.2)";
      leaf.style.clipPath = "polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%)";
      leaf.style.zIndex = "999";
      leaf.style.pointerEvents = "none";
      leaf.style.left = startPositionX + "px";
      leaf.style.animation = `fall linear infinite ${10 + Math.random() * 10}s`; // Increased duration
      leaf.style.transform = "rotate(" + rotation + "deg)";
  
      leaf.addEventListener("animationiteration", () => {
        leaf.style.left = Math.random() * window.innerWidth + "px";
      });
    }
  });
  