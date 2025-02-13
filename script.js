// 🎯 Custom Cursor Movement
document.addEventListener("mousemove", (e) => {
    const cursor = document.querySelector(".custom-cursor");
    cursor.style.left = `${e.clientX}px`;
    cursor.style.top = `${e.clientY}px`;
});

// 🎥 Auto-fit Video to Prevent Overflow
window.addEventListener("resize", adjustVideo);
function adjustVideo() {
    const video = document.getElementById("video-player");
    video.style.height = "auto"; // Maintain aspect ratio
}
adjustVideo(); // Run on page load

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
