// Holographic Background Effects
const lightGrid = document.querySelector('.light-grid');
const neonLines = document.querySelector('.neon-lines');
const particles = document.querySelector('.particles');

// Light Grid Animation
function animateLightGrid() {
    let pos = 0;
    setInterval(() => {
        pos = (pos + 1) % 50;
        lightGrid.style.backgroundPosition = `${pos}px ${pos}px`;
    }, 100);
}

// Neon Lines Animation
function animateNeonLines() {
    let rotation = 0;
    setInterval(() => {
        rotation = (rotation + 1) % 360;
        neonLines.style.transform = `rotate(${rotation}deg)`;
    }, 50);
}

// Interactive Particles
function animateParticles() {
    document.addEventListener('mousemove', (e) => {
        const x = e.clientX / window.innerWidth;
        const y = e.clientY / window.innerHeight;
        particles.style.backgroundPosition = `${x * 20}px ${y * 20}px`;
    });
}

// Matrix Mode (Activated by "matrix" command)
function activateMatrixMode() {
    document.body.classList.add('matrix-mode');
    const matrixCanvas = document.createElement('canvas');
    document.body.appendChild(matrixCanvas);
    const ctx = matrixCanvas.getContext('2d');

    matrixCanvas.width = window.innerWidth;
    matrixCanvas.height = window.innerHeight;

    const matrixChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789@#$%^&*()_+";
    const columns = matrixCanvas.width / 15;
    const drops = [];

    for (let i = 0; i < columns; i++) {
        drops[i] = 1;
    }

    function drawMatrix() {
        ctx.fillStyle = 'rgba(0, 0, 0, 0.05)';
        ctx.fillRect(0, 0, matrixCanvas.width, matrixCanvas.height);
        
        ctx.fillStyle = '#00ff00';
        ctx.font = '15px monospace';
        
        for (let i = 0; i < drops.length; i++) {
            const text = matrixChars[Math.floor(Math.random() * matrixChars.length)];
            ctx.fillText(text, i * 15, drops[i] * 15);
            
            if (drops[i] * 15 > matrixCanvas.height && Math.random() > 0.975) {
                drops[i] = 0;
            }
            
            drops[i]++;
        }
    }

    const matrixInterval = setInterval(drawMatrix, 50);

    // Cleanup when exiting Matrix mode
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') {
            document.body.classList.remove('matrix-mode');
            clearInterval(matrixInterval);
            matrixCanvas.remove();
        }
    });
}

// Initialize Background Effects
animateLightGrid();
animateNeonLines();
animateParticles();

// Export Matrix Mode for Terminal Commands
window.activateMatrixMode = activateMatrixMode;