// Music Player
const audio = new Audio("music.mp3"); // Add your music file
const musicBtn = document.getElementById('music-btn');
const volumeControl = document.getElementById('volume-control');
const visualizer = document.getElementById('visualizer');

let isPlaying = false;

musicBtn.addEventListener('click', () => {
    if (isPlaying) {
        audio.pause();
        musicBtn.innerHTML = '<i class="fas fa-play"></i> Play';
        visualizer.style.display = 'none';
    } else {
        audio.play();
        musicBtn.innerHTML = '<i class="fas fa-pause"></i> Pause';
        visualizer.style.display = 'block';
    }
    isPlaying = !isPlaying;
});

volumeControl.addEventListener('input', () => {
    audio.volume = volumeControl.value;
});

// Terminal Commands
const terminalInput = document.getElementById('terminal-input');
const terminalOutput = document.getElementById('terminal-output');

const commands = {
    help: `Available commands:
    - help: Show this message
    - dance: Make the text dance
    - matrix: Enter the Matrix
    - hack: Pretend to hack the system
    - joke: Get a random joke
    - clear: Clear the terminal`,
    dance: () => {
        gsap.to('.glitch', { duration: 1, y: 20, repeat: -1, yoyo: true });
        return "The text is now dancing!";
    },
    matrix: () => {
        activateMatrixMode(); // Call the function from background.js
        return "Welcome to the Matrix... (Press ESC to exit)";
    },
    hack: () => {
        let fakeCode = '';
        for (let i = 0; i < 10; i++) {
            fakeCode += `[HACKING...] ${Math.random().toString(36).substring(2, 15)}\n`;
        }
        return fakeCode + "Hack complete! (Just kidding 😉)";
    },
    joke: () => {
        const jokes = [
            "Why do programmers prefer dark mode? Because light attracts bugs!",
            "Why don't programmers like nature? It has too many bugs.",
            "How many programmers does it take to change a light bulb? None, that's a hardware problem!",
            "Why do Java developers wear glasses? Because they can't C#!"
        ];
        return jokes[Math.floor(Math.random() * jokes.length)];
    },
    clear: () => {
        terminalOutput.innerHTML = '';
        return "Terminal cleared.";
    }
};

terminalInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
        const input = terminalInput.value.trim().toLowerCase();
        let output = '';

        if (commands[input]) {
            output = typeof commands[input] === 'function' ? commands[input]() : commands[input];
        } else {
            output = `Unknown command: ${input}`;
        }

        terminalOutput.innerHTML += `<p>> ${input}</p><p>${output}</p>`;
        terminalOutput.scrollTop = terminalOutput.scrollHeight;
        terminalInput.value = '';
    }
});