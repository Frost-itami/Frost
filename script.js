document.addEventListener("mousemove", (e) => {
    let cursor = document.querySelector(".cursor");
    cursor.style.transform = `translate(${e.clientX}px, ${e.clientY}px)`;
});

// Cyberpunk Hover Effect
document.querySelectorAll(".btn").forEach(button => {
    button.addEventListener("mouseenter", () => {
        button.style.boxShadow = "0 0 10px cyan";
    });
    button.addEventListener("mouseleave", () => {
        button.style.boxShadow = "none";
    });
});
