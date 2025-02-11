// Typing Effect
const text = "Yo, I'm Itami...";
let i = 0;
function typeWriter() {
    if (i < text.length) {
        document.getElementById("intro").innerHTML += text.charAt(i);
        i++;
        setTimeout(typeWriter, 100);
    }
}
typeWriter();

// GSAP Fade-in Effect
gsap.to(".container", { duration: 2, opacity: 1 });

// Custom Cursor
document.addEventListener("mousemove", (e) => {
    const cursor = document.getElementById("custom-cursor");
    cursor.style.transform = `translate(${e.clientX}px, ${e.clientY}px)`;
});

// Matrix Effect
const matrixCanvas = document.getElementById("matrixCanvas");
const ctx = matrixCanvas.getContext("2d");

matrixCanvas.width = window.innerWidth;
matrixCanvas.height = window.innerHeight;

const matrix = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789@#$%^&*()_+";
const columns = matrixCanvas.width / 15;
const drops = Array(columns).fill(1);

function drawMatrix() {
    ctx.fillStyle = "rgba(0, 0, 0, 0.05)";
    ctx.fillRect(0, 0, matrixCanvas.width, matrixCanvas.height);
    
    ctx.fillStyle = "#0f0";
    ctx.font = "15px monospace";
    
    drops.forEach((drop, i) => {
        const text = matrix[Math.floor(Math.random() * matrix.length)];
        ctx.fillText(text, i * 15, drop * 15);
        drops[i] = drop * 15 > matrixCanvas.height && Math.random() > 0.975 ? 0 : drop + 1;
    });
}

let matrixInterval = setInterval(drawMatrix, 50);

// Music Button
document.getElementById("musicBtn").addEventListener("click", () => {
    const bgMusic = document.getElementById("bgMusic");
    bgMusic.paused ? bgMusic.play() : bgMusic.pause();
});