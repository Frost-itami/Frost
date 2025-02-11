const canvas = document.getElementById("visualizer");
const ctx = canvas.getContext("2d");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let audio = document.getElementById("bg-music");
let analyser, dataArray;

function setupVisualizer() {
    let audioCtx = new (window.AudioContext || window.webkitAudioContext)();
    analyser = audioCtx.createAnalyser();
    let source = audioCtx.createMediaElementSource(audio);
    source.connect(analyser);
    analyser.connect(audioCtx.destination);
    analyser.fftSize = 256;
    dataArray = new Uint8Array(analyser.frequencyBinCount);
}

function draw() {
    requestAnimationFrame(draw);
    analyser.getByteFrequencyData(dataArray);
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    for (let i = 0; i < dataArray.length; i++) {
        let barHeight = dataArray[i] / 2;
        ctx.fillStyle = `rgb(${barHeight}, 255, ${barHeight})`;
        ctx.fillRect(i * 10, canvas.height - barHeight, 5, barHeight);
    }
}

audio.addEventListener("play", () => {
    setupVisualizer();
    draw();
});
