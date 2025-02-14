document.addEventListener("DOMContentLoaded", () => {
    // Cursor effect
    document.addEventListener("mousemove", (e) => {
        let cursor = document.querySelector(".cursor");
        cursor.style.transform = `translate(${e.clientX}px, ${e.clientY}px)`;
    });

    // Play/Pause Music
    const playPauseBtn = document.getElementById("play-pause");
    const volumeControl = document.getElementById("volume-control");
    const audio = new Audio("background-music.mp3");
    let isPlaying = false;

    playPauseBtn.addEventListener("click", () => {
        if (isPlaying) {
            audio.pause();
            playPauseBtn.textContent = "Play";
        } else {
            audio.play();
            playPauseBtn.textContent = "Pause";
        }
        isPlaying = !isPlaying;
    });

    volumeControl.addEventListener("input", (e) => {
        audio.volume = e.target.value;
    });

    // Theme Toggle
    document.getElementById("theme-toggle").addEventListener("click", () => {
        document.body.classList.toggle("light-theme");
        document.body.classList.toggle("dark-theme");
    });

    // Background Stars Animation
    const canvas = document.getElementById("starCanvas");
    const ctx = canvas.getContext("2d");
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    const stars = Array.from({ length: 80 }, () => ({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        radius: Math.random() * 2,
        speed: Math.random() * 0.5 + 0.2,
    }));

    function animateStars() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        ctx.fillStyle = "rgba(0, 255, 255, 0.8)";
        stars.forEach((star) => {
            ctx.beginPath();
            ctx.arc(star.x, star.y, star.radius, 0, Math.PI * 2);
            ctx.fill();
            star.y += star.speed;
            if (star.y > canvas.height) star.y = 0;
        });
        requestAnimationFrame(animateStars);
    }

    animateStars();
});
