document.getElementById("music-btn").addEventListener("click", () => {
    let audio = new Audio("music.mp3");
    audio.play();
});

document.getElementById("toggle-matrix").addEventListener("click", () => {
    document.body.classList.toggle("matrix-mode");
});

document.getElementById("terminal-input").addEventListener("keypress", (event) => {
    if (event.key === "Enter") {
        let input = event.target.value.toLowerCase();
        let output = document.getElementById("terminal-output");
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
        event.target.value = "";
    }
});

// Music Visualizer
let canvas = document.getElementById("visualizer");
let ctx = canvas.getContext("2d");

function drawVisualizer() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.fillStyle = "#00ff00";
    
    for (let i = 0; i < 100; i++) {
        let height = Math.random() * 100;
        ctx.fillRect(i * 10, canvas.height - height, 5, height);
    }

    requestAnimationFrame(drawVisualizer);
}

drawVisualizer();
