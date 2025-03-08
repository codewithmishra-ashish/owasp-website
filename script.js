// Matrix Rain Effect
const canvas = document.getElementById("matrix");
const ctx = canvas.getContext("2d");

// Set canvas size
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

// Characters for the rain
const matrix = "01ハックOWASP";
const characters = matrix.split("");
const fontSize = 16;
const columns = canvas.width / fontSize;
const drops = Array(Math.floor(columns)).fill(1);

function draw() {
  // Fade out previous frame
  ctx.fillStyle = "rgba(0, 0, 0, 0.05)";
  ctx.fillRect(0, 0, canvas.width, canvas.height);

  ctx.fillStyle = "#00FF00";
  ctx.font = `${fontSize}px VT323`;

  for (let i = 0; i < drops.length; i++) {
    const text = characters[Math.floor(Math.random() * characters.length)];
    const x = i * fontSize;
    const y = drops[i] * fontSize;

    ctx.fillText(text, x, y);

    // Reset drop if it reaches the bottom
    if (y > canvas.height && Math.random() > 0.975) {
      drops[i] = 0;
    }

    drops[i]++;
  }
}

// Animate the rain
setInterval(draw, 50);

// Resize canvas on window resize
window.addEventListener("resize", () => {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
});
