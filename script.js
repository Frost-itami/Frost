document.addEventListener("DOMContentLoaded", function () {
    // Custom Cursor
    const cursor = document.createElement("img");
    cursor.src = "assets/knife.png"; // Make sure this image exists
    cursor.classList.add("custom-cursor");
    document.body.appendChild(cursor);

    document.addEventListener("mousemove", (e) => {
        cursor.style.left = `${e.clientX}px`;
        cursor.style.top = `${e.clientY}px`;
    });

    document.addEventListener("mousedown", () => {
        cursor.style.transform = "scale(1.1) rotate(-50deg)";
    });

    document.addEventListener("mouseup", () => {
        cursor.style.transform = "scale(1) rotate(-45deg)";
    });

    // Music Player
    const songs = ["assets/song1.mp3", "assets/song2.mp3", "assets/song3.mp3"];
    let currentSongIndex = 0;
    const audio = new Audio(songs[currentSongIndex]);
    const playPauseBtn = document.getElementById("play-pause");
    const nextSongBtn = document.getElementById("next-song");
    const prevSongBtn = document.getElementById("prev-song");
    const volumeControl = document.getElementById("volume");

    playPauseBtn.addEventListener("click", () => {
        if (audio.paused) {
            audio.play();
            playPauseBtn.textContent = "⏸";
        } else {
            audio.pause();
            playPauseBtn.textContent = "▶";
        }
    });

    nextSongBtn.addEventListener("click", () => {
        currentSongIndex = (currentSongIndex + 1) % songs.length;
        audio.src = songs[currentSongIndex];
        audio.play();
        playPauseBtn.textContent = "⏸";
    });

    prevSongBtn.addEventListener("click", () => {
        currentSongIndex = (currentSongIndex - 1 + songs.length) % songs.length;
        audio.src = songs[currentSongIndex];
        audio.play();
        playPauseBtn.textContent = "⏸";
    });

    volumeControl.addEventListener("input", (e) => {
        audio.volume = e.target.value;
    });

    // Auto resize videos
    const videos = document.querySelectorAll("video");
    videos.forEach(video => {
        video.style.width = "100%";
        video.style.maxWidth = "600px";
    });
});
