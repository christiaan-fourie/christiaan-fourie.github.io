// Readme
// Insert this block in html
// <canvas id="particle-canvas"></canvas>
// Make sure to also include <script src="./particles/particles.js"></script>

// Set up canvas
const canvas = document.getElementById("particle-canvas");
const ctx = canvas.getContext("2d");
const particles = [];
const particleCount = 200;
const maxRadius = 100;

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

// Create particle objects
for (let i = 0; i < particleCount; i++) {
  particles.push({
    x: Math.random() * canvas.width,
    y: Math.random() * canvas.height,
    dx: (Math.random() - 0.3) * 4,
    dy: (Math.random() - 0.3) * 1
  });
}

// Draw particles and connecting lines
function draw() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  for (let i = 0; i < particleCount; i++) {
    const p1 = particles[i];
    p1.x += p1.dx;
    p1.y += p1.dy;

    // Bounce particles off canvas edges
    if (p1.x > canvas.width || p1.x < -100) {
      p1.dx = -p1.dx;
    }
    if (p1.y > canvas.height || p1.y < -100) {
      p1.dy = -p1.dy;
    }

    
    // Draw particle
    ctx.beginPath();
    ctx.arc(p1.x, p1.y, 1, 0, Math.PI * 2);

    // Set fill color to transparent
    ctx.fillStyle = 'rgba(94, 225, 230, 0.5)';          
    ctx.fill();

    // Check distance between particles
    for (let j = i + 1; j < particleCount; j++) {
      const p2 = particles[j];
      const xDist = p1.x - p2.x;
      const yDist = p1.y - p2.y;
      const distance = Math.sqrt(xDist * xDist + yDist * yDist);

      if (distance < maxRadius) {
        const opacity = (maxRadius - distance) / maxRadius;

        // Draw connecting line
        ctx.beginPath();
        ctx.moveTo(p1.x, p1.y);
        ctx.lineTo(p2.x, p2.y);
        ctx.strokeStyle = `hsla(184, 100%, 53%, ${opacity})`;
        ctx.stroke();
      }
    }
  }

requestAnimationFrame(draw);
}

draw();