// Smooth transition navigation
function goTo(page) {
  document.body.classList.add("fade-out");
  setTimeout(() => window.location.href = page, 500);
}

// Background music autoplay handler
window.addEventListener("load", () => {
  const music = document.getElementById("bg-music");
  if (music) {
    const playAttempt = setInterval(() => {
      music.play().then(() => {
        clearInterval(playAttempt);
      }).catch(() => {});
    }, 1000);
  }
});

// 🎊 Confetti animation
const canvas = document.getElementById("confetti");
if (canvas) {
  const ctx = canvas.getContext("2d");
  let confetti = [];
  const colors = ["#FFC0CB", "#FFD700", "#FF69B4", "#FFFACD", "#87CEFA"];

  function resizeCanvas() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
  }
  window.addEventListener("resize", resizeCanvas);
  resizeCanvas();

  for (let i = 0; i < 150; i++) {
    confetti.push({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      r: Math.random() * 6 + 2,
      d: Math.random() * 0.05 + 0.02,
      color: colors[Math.floor(Math.random() * colors.length)],
    });
  }

  function draw() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    confetti.forEach(c => {
      ctx.beginPath();
      ctx.arc(c.x, c.y, c.r, 0, Math.PI * 2);
      ctx.fillStyle = c.color;
      ctx.fill();
    });
    update();
  }

  function update() {
    confetti.forEach(c => {
      c.y += c.d * 10;
      if (c.y > canvas.height) {
        c.y = -10;
        c.x = Math.random() * canvas.width;
      }
    });
  }

  setInterval(draw, 30);
}
