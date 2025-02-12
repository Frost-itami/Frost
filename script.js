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
        document.body.classList.add('matrix-mode');
        return "Welcome to the Matrix...";
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

// Interactive Particles
const particles = document.querySelector('.particles');

document.addEventListener('mousemove', (e) => {
    const x = e.clientX / window.innerWidth;
    const y = e.clientY / window.innerHeight;
    particles.style.backgroundPosition = `${x * 20}px ${y * 20}px`;
});