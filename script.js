document.getElementById("play").addEventListener("click", function() {
    document.getElementById("audio-player").play();
});

document.getElementById("pause").addEventListener("click", function() {
    document.getElementById("audio-player").pause();
});

document.getElementById("next").addEventListener("click", function() {
    alert("Next track feature coming soon!");
});

// Prevent right-click on videos
document.querySelectorAll("video").forEach(video => {
    video.addEventListener("contextmenu", event => event.preventDefault());
});
