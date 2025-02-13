const bg = document.querySelector('.background-animation');

let x = 0, y = 0;
function animateBackground() {
    x += 0.1;
    y += 0.1;
    bg.style.backgroundPosition = `${x}px ${y}px`;
    requestAnimationFrame(animateBackground);
}

animateBackground();
