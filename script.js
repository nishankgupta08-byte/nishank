// ==========================================
// 1. Custom Cursor
// ==========================================
const cursor = document.querySelector('.cursor-glow');
let mouseX = 0;
let mouseY = 0;
let cursorX = 0;
let cursorY = 0;

document.addEventListener('mousemove', (e) => {
    mouseX = e.clientX;
    mouseY = e.clientY;
});

// Add active state to cursor on clickable elements
const clickables = document.querySelectorAll('a, button, .tilt-card');
clickables.forEach(el => {
    el.addEventListener('mouseenter', () => cursor.classList.add('active'));
    el.addEventListener('mouseleave', () => cursor.classList.remove('active'));
});

// Smooth cursor animation loop
function animateCursor() {
    let dx = mouseX - cursorX;
    let dy = mouseY - cursorY;
    cursorX += dx * 0.15;
    cursorY += dy * 0.15;
    cursor.style.transform = `translate(${cursorX}px, ${cursorY}px)`;
    requestAnimationFrame(animateCursor);
}
animateCursor();

// ==========================================
// 2. Navbar Scroll Effect
// ==========================================
const navbar = document.querySelector('.navbar');
window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});

// ==========================================
// 3. Typewriter Effect
// ==========================================
const roles = ["Creative Developer", "3D Web Designer", "UI/UX Engineer", "Interactive Artist"];
const typewriterEl = document.getElementById('typewriter');
let roleIndex = 0;
let charIndex = 0;
let isDeleting = false;
let typingDelay = 100;
const pauseDelay = 2000;

function typeWriter() {
    const currentRole = roles[roleIndex];
    
    if (isDeleting) {
        typewriterEl.textContent = currentRole.substring(0, charIndex - 1);
        charIndex--;
        typingDelay = 50;
    } else {
        typewriterEl.textContent = currentRole.substring(0, charIndex + 1);
        charIndex++;
        typingDelay = 100;
    }

    if (!isDeleting && charIndex === currentRole.length) {
        isDeleting = true;
        typingDelay = pauseDelay; // Pause before deleting
    } else if (isDeleting && charIndex === 0) {
        isDeleting = false;
        roleIndex = (roleIndex + 1) % roles.length;
        typingDelay = 500; // Pause before typing new word
    }

    setTimeout(typeWriter, typingDelay);
}
setTimeout(typeWriter, 1000);

// ==========================================
// 4. Three.js Background Animation
// ==========================================
const canvas = document.getElementById('webgl-bg');
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
const renderer = new THREE.WebGLRenderer({ canvas: canvas, alpha: true, antialias: true });

renderer.setPixelRatio(window.devicePixelRatio);
renderer.setSize(window.innerWidth, window.innerHeight);
camera.position.setZ(30);

// Lighting
const ambientLight = new THREE.AmbientLight(0xffffff, 0.5);
const pointLight = new THREE.PointLight(0x7c3aed, 2);
pointLight.position.set(20, 20, 20);
const pointLight2 = new THREE.PointLight(0x4f46e5, 2);
pointLight2.position.set(-20, -20, -20);
scene.add(ambientLight, pointLight, pointLight2);

// Shapes Array
const shapes = [];

// Helper function to add shapes
function addShape(geometry, material, x, y, z) {
    const mesh = new THREE.Mesh(geometry, material);
    mesh.position.set(x, y, z);
    scene.add(mesh);
    shapes.push(mesh);
    return mesh;
}

// Materials
const wireframeMat = new THREE.MeshBasicMaterial({ color: 0x7c3aed, wireframe: true, transparent: true, opacity: 0.25 });
const wireframeMatLight = new THREE.MeshBasicMaterial({ color: 0xa855f7, wireframe: true, transparent: true, opacity: 0.15 });
const solidMat = new THREE.MeshStandardMaterial({ color: 0x4f46e5, roughness: 0.2, metalness: 0.8 });
const solidMatAlt = new THREE.MeshStandardMaterial({ color: 0x7c3aed, roughness: 0.3, metalness: 0.6 });

// Adding geometries — widely scattered across the scene
addShape(new THREE.TorusKnotGeometry(10, 3, 100, 16), wireframeMat,  -55,  22, -60);
addShape(new THREE.IcosahedronGeometry(8, 0),          solidMat,      55, -30, -50);
addShape(new THREE.OctahedronGeometry(6, 0),           wireframeMat,  40,  50, -70);
addShape(new THREE.TorusGeometry(8, 2, 16, 100),       solidMat,     -45, -50, -55);

// Extra scattered elements
addShape(new THREE.TetrahedronGeometry(7, 0),          wireframeMatLight,  10,  65, -80);
addShape(new THREE.DodecahedronGeometry(9, 0),         solidMatAlt,       -65, -15, -75);
addShape(new THREE.SphereGeometry(5, 32, 32),          wireframeMat,       60,  15, -40);
addShape(new THREE.TorusKnotGeometry(6, 1.5, 64, 8),   solidMat,          15, -60, -45);
addShape(new THREE.OctahedronGeometry(5, 0),           solidMatAlt,       -30,  60, -65);
addShape(new THREE.IcosahedronGeometry(6, 0),          wireframeMatLight,  50, -55, -80);
addShape(new THREE.TetrahedronGeometry(5, 0),          wireframeMat,      -60,  40, -35);

// Add small particles
const particlesGeo = new THREE.BufferGeometry();
const particlesGeo2 = new THREE.BufferGeometry();
const particlesCount = 800; // Increased particle count
const posArray = new Float32Array(particlesCount * 3);
const posArray2 = new Float32Array(particlesCount * 3);

for(let i = 0; i < particlesCount * 3; i++) {
    posArray[i]  = (Math.random() - 0.5) * 350;
    posArray2[i] = (Math.random() - 0.5) * 450;
}
particlesGeo.setAttribute('position', new THREE.BufferAttribute(posArray, 3));
particlesGeo2.setAttribute('position', new THREE.BufferAttribute(posArray2, 3));

const particlesMat = new THREE.PointsMaterial({
    size: 0.15,
    color: 0xa855f7,
    transparent: true,
    opacity: 0.8
});
const particlesMat2 = new THREE.PointsMaterial({
    size: 0.1,
    color: 0x4f46e5,
    transparent: true,
    opacity: 0.5
});

const particlesMesh = new THREE.Points(particlesGeo, particlesMat);
const particlesMesh2 = new THREE.Points(particlesGeo2, particlesMat2);
scene.add(particlesMesh);
scene.add(particlesMesh2);

// Animation Loop
let frame = 0;
function animateThreeJS() {
    requestAnimationFrame(animateThreeJS);
    
    // Rotate shapes
    shapes.forEach((shape, index) => {
        shape.rotation.x += 0.001 * (index % 2 === 0 ? 1 : -1);
        shape.rotation.y += 0.002 * (index % 3 === 0 ? 1 : -1);
        shape.position.y += Math.sin(frame * 0.02 + index) * 0.05;
    });

    // Rotate particles
    particlesMesh.rotation.y += 0.0005;
    particlesMesh.rotation.x += 0.0002;
    particlesMesh2.rotation.y -= 0.0003;
    particlesMesh2.rotation.x -= 0.0001;

    // React to mouse scroll for parallax
    camera.position.y = -window.scrollY * 0.01;
    camera.position.x = mouseX * 0.002;
    
    renderer.render(scene, camera);
    frame++;
}
animateThreeJS();

// Window Resize Handler
window.addEventListener('resize', () => {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
});

// ==========================================
// 5. GSAP Scroll Animations
// ==========================================
gsap.registerPlugin(ScrollTrigger);

// Hero elements entrance
gsap.from(".glitch", { y: 50, duration: 1, delay: 0.2 });
gsap.from(".subtitle-wrapper", { y: 30, duration: 1, delay: 0.4 });
gsap.from(".btn-primary", { y: 30, duration: 1, delay: 0.6 });

// Generic section entrance (3D fly-in)
const sections = gsap.utils.toArray('.section-padding');
sections.forEach(sec => {
    gsap.from(sec, {
        scrollTrigger: {
            trigger: sec,
            start: "top 85%",
            toggleActions: "play none none none",
        },
        y: 60,
        duration: 1,
        ease: "power3.out"
    });
});

// Project cards staggered reveal
gsap.from(".project-card", {
    scrollTrigger: {
        trigger: ".projects-grid",
        start: "top 85%",
        toggleActions: "play none none none",
    },
    y: 50,
    duration: 0.8,
    stagger: 0.15,
    ease: "back.out(1.7)"
});

// Achievement cards staggered reveal
gsap.from(".achievement-card", {
    scrollTrigger: {
        trigger: ".achievements-grid",
        start: "top 85%",
        toggleActions: "play none none none",
    },
    scale: 0.8,
    y: 30,
    duration: 0.6,
    stagger: 0.1,
    ease: "power2.out"
});

// Social cards staggered reveal
gsap.from(".social-card", {
    scrollTrigger: {
        trigger: ".social-grid",
        start: "top 90%",
        toggleActions: "play none none none",
    },
    y: 40,
    duration: 0.5,
    stagger: 0.05,
    ease: "power1.out"
});
