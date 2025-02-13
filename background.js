const canvas = document.createElement("canvas");
document.body.appendChild(canvas);
const ctx = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const stars = [];
for (let i = 0; i < 100; i++) { // Increased star count
    stars.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        radius: Math.random() * 2.5,
        speed: Math.random() * 1 + 0.3,
    });
}

// Parallax Effect
document.addEventListener("mousemove", (e) => {
    let moveX = (e.clientX / canvas.width) * 2 - 1;
    let moveY = (e.clientY / canvas.height) * 2 - 1;

    stars.forEach((star) => {
        star.x += moveX * 0.3;
        star.y += moveY * 0.3;
    });
});

function animateStars() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.fillStyle = "rgba(0, 255, 255, 0.8)";
    stars.forEach((star) => {
        ctx.beginPath();
        ctx.arc(star.x, star.y, star.radius, 0, Math.PI * 2);
        ctx.fill();
        star.y += star.speed;
        if (star.y > canvas.height) star.y = 0;
    });
    requestAnimationFrame(animateStars);
}
animateStars();
