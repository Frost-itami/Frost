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
// 🎯 Custom Cursor Movement
document.addEventListener("mousemove", (e) => {
    const cursor = document.querySelector(".custom-cursor");
    cursor.style.left = `${e.clientX}px`;
    cursor.style.top = `${e.clientY}px`;
});
// 🎵 Music Player Logic
const songs = ["song1.mp3", "song2.mp3", "song3.mp3"];
let currentSong = 0;
const audio = new Audio(songs[currentSong]);

function togglePlay() {
    if (audio.paused) {
        audio.play();
        document.querySelector(".music-player button:nth-child(2)").textContent = "⏸️";
    } else {
        audio.pause();
        document.querySelector(".music-player button:nth-child(2)").textContent = "▶️";
    }
}

function changeVolume(value) {
    audio.volume = value;
}

function nextSong() {
    currentSong = (currentSong + 1) % songs.length;
    audio.src = songs[currentSong];
    audio.play();
}

function prevSong() {
    currentSong = (currentSong - 1 + songs.length) % songs.length;
    audio.src = songs[currentSong];
    audio.play();
}