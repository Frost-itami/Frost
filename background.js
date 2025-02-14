const bg = document.querySelector('.background-animation');

let x = 0, y = 0;
function animateBackground() {
    x += 0.2;
    y += 0.2;
    bg.style.backgroundPosition = `${x}px ${y}px`;
    requestAnimationFrame(animateBackground);
}

animateBackground();
