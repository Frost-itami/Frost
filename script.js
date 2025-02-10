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
document.getElementById("musicBtn").addEventListener("click", function() {
    let music = document.getElementById("bgMusic");
    if (music.paused) {
        music.play();
        this.innerText = "Pause Music";
    } else {
        music.pause();
        this.innerText = "Play Music";
    }
});
