// Create Cursor
const cursor = document.createElement("div");
cursor.id = "customCursor";
document.body.appendChild(cursor);

document.addEventListener("mousemove", (e) => {
    cursor.style.left = `${e.clientX}px`;
    cursor.style.top = `${e.clientY}px`;
});

// Make Cursor Bigger When Hovering Over Elements
document.querySelectorAll("button").forEach((btn) => {
    btn.addEventListener("mouseover", () => {
        cursor.style.transform = "scale(2)";
    });
    btn.addEventListener("mouseleave", () => {
        cursor.style.transform = "scale(1)";
    });
});
