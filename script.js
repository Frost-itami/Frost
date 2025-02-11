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

// Music Button

const musicBtn = document.getElementById("musicBtn");
const bgMusic = document.getElementById("bgMusic");

musicBtn.addEventListener("click", function() {
    if (bgMusic.paused) {
        bgMusic.play();
        this.innerText = "Pause Music";
    } else {
        bgMusic.pause();
        this.innerText = "Play Music";
    }
});

// Matrix Effect

const matrixCanvas = document.getElementById("matrixCanvas");
const ctx = matrixCanvas.getContext('2d');

matrixCanvas.width = window.innerWidth;
matrixCanvas.height = window.innerHeight;

const matrix = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789@#$%^&*()_+";
const columns = matrixCanvas.width / 15;
const drops = [];

for(let x = 0; x < columns; x++) {
    drops[x] = 1;
}

function drawMatrix() {
    ctx.fillStyle = 'rgba(0, 0, 0, 0.05)';
    ctx.fillRect(0, 0, matrixCanvas.width, matrixCanvas.height);
    
    ctx.fillStyle = '#0f0';
    ctx.font = '15px monospace';
    
    for(let i = 0; i < drops.length; i++) {
        const text = matrix[Math.floor(Math.random() * matrix.length)];
        ctx.fillText(text, i * 15, drops[i] * 15);
        
        if(drops[i] * 15 > matrixCanvas.height && Math.random() > 0.975) {
            drops[i] = 0;
        }
        
        drops[i]++;
    }
}

let matrixInterval = setInterval(drawMatrix, 50);

// Matrix Toggle
const matrixBtn = document.getElementById("matrixBtn");
matrixBtn.addEventListener("click", () => {
    if (matrixInterval) {
        clearInterval(matrixInterval);
        matrixInterval = null;
        ctx.clearRect(0, 0, matrixCanvas.width, matrixCanvas.height);
        matrixBtn.textContent = "Start Matrix";
    } else {
        matrixInterval = setInterval(drawMatrix, 50);
        matrixBtn.textContent = "Stop Matrix";
    }
});

// Skill Bars Animation
const skills = document.querySelectorAll('.skill');
skills.forEach(skill => {
    const skillName = skill.dataset.skill;
    const randomValue = Math.floor(Math.random() * 80) + 20;
    skill.style.setProperty('--width', `${randomValue}%`);
    skill.textContent = `${skillName}: ${randomValue}%`;
});

// Projects Data
const projects = [
    { name: "Cyber Chat", description: "Real-time encrypted messaging" },
    { name: "AI Assistant", description: "Personal AI companion" },
    { name: "Game Engine", description: "3D game development framework" },
    { name: "Blockchain Explorer", description: "Crypto transaction visualizer" }
];

// Render Projects
const projectGrid = document.querySelector('.project-grid');
projects.forEach(project => {
    const projectCard = document.createElement('div');
    projectCard.className = 'project-card';
    projectCard.innerHTML = `
        <h3>${project.name}</h3>
        <p>${project.description}</p>
    `;
    projectGrid.appendChild(projectCard);
});

// Window Resize Handler
window.addEventListener('resize', () => {
    matrixCanvas.width = window.innerWidth;
    matrixCanvas.height = window.innerHeight;
});