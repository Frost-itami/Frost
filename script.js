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

// Add "See More" feature
document.getElementById("see-more").addEventListener("click", function() {
    let container = document.getElementById("video-container");

    let newVideo = document.createElement("div");
    newVideo.classList.add("video-box");
    newVideo.innerHTML = `
        <video controls disablePictureInPicture controlsList="nodownload">
            <source src="assets/clip4.mp4" type="video/mp4">
        </video>
        <div class="watermark">ITAMI</div>
    `;
    container.appendChild(newVideo);
});
