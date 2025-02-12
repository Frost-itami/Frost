const body = document.body;
let angle = 0;

function animateBackground() {
    angle += 0.1;
    let gradient = `linear-gradient(${angle}deg, #0d0d0d, #1a1a1a, #262626, #0d0d0d)`;
    body.style.background = gradient;
    requestAnimationFrame(animateBackground);
}

animateBackground();
