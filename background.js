const background = document.querySelector('.matrix-background');
const chars = "01";
const columns = Math.floor(window.innerWidth / 20);

function createMatrix() {
    for (let i = 0; i < columns; i++) {
        const span = document.createElement('span');
        span.style.left = `${i * 20}px`;
        span.style.animationDelay = `${Math.random() * 5}s`;
        span.style.animationDuration = `${5 + Math.random() * 10}s`;
        background.appendChild(span);
    }
}

function updateMatrix() {
    const spans = document.querySelectorAll('.matrix-background span');
    spans.forEach(span => {
        let text = '';
        const length = Math.floor(Math.random() * 10) + 5;
        for (let i = 0; i < length; i++) {
            text += chars[Math.floor(Math.random() * chars.length)];
        }
        span.textContent = text;
    });
}

createMatrix();
setInterval(updateMatrix, 100);

window.addEventListener('resize', () => {
    background.innerHTML = '';
    createMatrix();
});