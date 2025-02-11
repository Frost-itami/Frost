// Music Player
const audio = new Audio("music.mp3");
const musicBtn = document.getElementById("music-btn");
const volumeControl = document.getElementById("volume-control");

let isPlaying = false;

musicBtn.addEventListener("click", () => {
    if (isPlaying) {
        audio.pause();
        musicBtn.innerHTML = '<i class="fas fa-play"></i> Play';
    } else {
        audio.play();
        musicBtn.innerHTML = '<i class="fas fa-pause"></i> Pause';
    }
    isPlaying = !isPlaying;
});

volumeControl.addEventListener("input", () => {
    audio.volume = volumeControl.value;
});

// Terminal
document.getElementById("terminal-input").addEventListener("keypress", (event) => {
    if (event.key === "Enter") {
        const input = event.target.value.toLowerCase();
        const output = document.getElementById("terminal-output");
        let response = "";

        switch (input) {
            case "whoami":
                response = "You are Itami, the cyber overlord.";
                break;
            case "ls":
                response = "Projects: Cyber Fortress, Neon Hacker, Matrix Sim.";
                break;
            case "help":
                response = "Commands: whoami, ls, help.";
                break;
            default:
                response = "Unknown command.";
        }

        output.innerHTML += `<p>> ${input}</p><p>${response}</p>`;
        output.scrollTop = output.scrollHeight;
        event.target.value = "";
    }
});