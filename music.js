const music = new Audio("cyberpunk_music.mp3");
music.loop = true;

document.getElementById("playMusic").addEventListener("click", () => {
    if (music.paused) {
        music.play();
    } else {
        music.pause();
    }
});
