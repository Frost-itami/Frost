document.addEventListener("mousemove", function (e) {
    let cursor = document.getElementById("cursor");
    cursor.style.left = `${e.clientX}px`;
    cursor.style.top = `${e.clientY}px`;
});

let input = document.getElementById("terminal-input");
let output = document.getElementById("output");

input.addEventListener("keypress", function (e) {
    if (e.key === "Enter") {
        let cmd = input.value.toLowerCase();
        input.value = "";

        let response = {
            "whoami": "Itami, the cyber ghost.",
            "ls": "Access denied. You're not worthy.",
            "help": "No one can help you now...",
        };

        output.innerHTML += `<p>> ${cmd}</p>`;
        output.innerHTML += `<p>${response[cmd] || "Unknown command."}</p>`;
    }
});

document.getElementById("music-btn").addEventListener("click", function () {
    let music = document.getElementById("bg-music");
    if (music.paused) {
        music.play();
    } else {
        music.pause();
    }
});
