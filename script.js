// Cursor Movement Effect
document.addEventListener("mousemove", (e) => {
    let cursor = document.querySelector(".cursor");
    cursor.style.transform = `translate(${e.clientX}px, ${e.clientY}px)`;
});

// Cyberpunk Hover Effect
document.querySelectorAll(".btn").forEach(button => {
    button.addEventListener("mouseenter", () => {
        button.style.boxShadow = "0 0 10px cyan";
    });
    button.addEventListener("mouseleave", () => {
        button.style.boxShadow = "none";
    });
});

// Music Player
const audio = document.getElementById("audio");
const playBtn = document.getElementById("play");
const pauseBtn = document.getElementById("pause");
const nextBtn = document.getElementById("next");

const tracks = ["assets/music1.mp3", "assets/music2.mp3", "assets/music3.mp3"];
let currentTrack = 0;

playBtn.addEventListener("click", () => {
    audio.play();
    playBtn.style.boxShadow = "0 0 15px cyan";
});

pauseBtn.addEventListener("click", () => {
    audio.pause();
    playBtn.style.boxShadow = "none";
});

nextBtn.addEventListener("click", () => {
    currentTrack = (currentTrack + 1) % tracks.length;
    audio.src = tracks[currentTrack];
    audio.play();
});
