// Scene Setup
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
const renderer = new THREE.WebGLRenderer({ antialias: true });
renderer.setSize(window.innerWidth, window.innerHeight);
document.getElementById('scene-container').appendChild(renderer.domElement);

// Lighting
const ambientLight = new THREE.AmbientLight(0x404040);
scene.add(ambientLight);

const directionalLight = new THREE.DirectionalLight(0xffffff, 1);
directionalLight.position.set(5, 5, 5).normalize();
scene.add(directionalLight);

// Desk
const deskGeometry = new THREE.BoxGeometry(10, 0.5, 5);
const deskTexture = new THREE.TextureLoader().load('textures/wood.jpg');
const deskMaterial = new THREE.MeshPhongMaterial({ map: deskTexture });
const desk = new THREE.Mesh(deskGeometry, deskMaterial);
desk.position.set(0, -2, 0);
scene.add(desk);

// Gaming PC
const pcGeometry = new THREE.BoxGeometry(2, 2, 1);
const pcTexture = new THREE.TextureLoader().load('textures/pc_texture.jpg');
const pcMaterial = new THREE.MeshPhongMaterial({ map: pcTexture });
const pc = new THREE.Mesh(pcGeometry, pcMaterial);
pc.position.set(-3, 0, 0);
scene.add(pc);

// Radio Player
const radioGeometry = new THREE.BoxGeometry(1, 1, 1);
const radioTexture = new THREE.TextureLoader().load('textures/radio_texture.jpg');
const radioMaterial = new THREE.MeshPhongMaterial({ map: radioTexture });
const radio = new THREE.Mesh(radioGeometry, radioMaterial);
radio.position.set(3, 0, 0);
scene.add(radio);

// Book
const bookGeometry = new THREE.BoxGeometry(1, 0.2, 1.5);
const bookTexture = new THREE.TextureLoader().load('textures/book_texture.jpg');
const bookMaterial = new THREE.MeshPhongMaterial({ map: bookTexture });
const book = new THREE.Mesh(bookGeometry, bookMaterial);
book.position.set(0, 0, 2);
scene.add(book);

// Audio
const audio = new Audio('music.mp3');
audio.loop = true;

// Raycaster for Object Interaction
const raycaster = new THREE.Raycaster();
const mouse = new THREE.Vector2();

// Event Listeners
window.addEventListener('click', (event) => {
    // Convert mouse position to normalized device coordinates
    mouse.x = (event.clientX / window.innerWidth) * 2 - 1;
    mouse.y = -(event.clientY / window.innerHeight) * 2 + 1;

    // Raycast to find intersected objects
    raycaster.setFromCamera(mouse, camera);
    const intersects = raycaster.intersectObjects(scene.children);

    if (intersects.length > 0) {
        const object = intersects[0].object;

        // Check which object was clicked
        if (object === radio) {
            if (audio.paused) {
                audio.play();
                document.getElementById('info-text').textContent = 'Radio: Playing music...';
            } else {
                audio.pause();
                document.getElementById('info-text').textContent = 'Radio: Music paused.';
            }
        } else if (object === book) {
            document.getElementById('info-text').textContent = 'Book: You found a secret message!';
        } else if (object === pc) {
            document.getElementById('info-text').textContent = 'PC: Booting up the system...';
        }
    }
});

// Camera Position
camera.position.set(0, 5, 10);
camera.lookAt(0, 0, 0);

// Animation Loop
function animate() {
    requestAnimationFrame(animate);

    // Rotate objects for fun
    pc.rotation.y += 0.01;
    radio.rotation.y += 0.01;
    book.rotation.y += 0.01;

    renderer.render(scene, camera);
}

animate();

// Resize Handler
window.addEventListener('resize', () => {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
});