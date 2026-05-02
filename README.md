# 🌌 Nishank — 3D Portfolio

> A visually immersive, dark-themed personal portfolio built with pure HTML, CSS & JavaScript — featuring WebGL 3D backgrounds, glitch animations, glassmorphism cards, and scroll-triggered effects.

![Portfolio Preview](https://img.shields.io/badge/Status-Live-brightgreen?style=flat-square)
![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=flat-square&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=flat-square&logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=flat-square&logo=javascript&logoColor=black)
![Three.js](https://img.shields.io/badge/Three.js-000000?style=flat-square&logo=three.js&logoColor=white)
![GSAP](https://img.shields.io/badge/GSAP-88CE02?style=flat-square&logo=greensock&logoColor=black)

---

## ✨ Features

- **🌐 WebGL 3D Background** — Rotating geometric shapes (Torus Knots, Icosahedra, Dodecahedra, etc.) powered by Three.js, scattered across a deep 3D space with dual particle fields
- **💜 Glitch Hero Text** — CSS `clip-path` glitch animation on the name with cyan/magenta ghost layers
- **⌨️ Typewriter Effect** — Animated role cycling: Creative Developer → 3D Web Designer → UI/UX Engineer → Interactive Artist
- **🪟 Glassmorphism Cards** — Frosted-glass project, achievement, and social cards with purple glow borders
- **🖱️ 3D Card Tilt** — Vanilla Tilt.js perspective tilt on hover for every card
- **📜 Scroll Animations** — GSAP ScrollTrigger-powered staggered reveal animations for all sections
- **🌟 Custom Cursor** — Glowing purple orb cursor with size/color transition on hover
- **📱 Responsive Design** — Mobile-friendly layout with adaptive typography
- **🔊 Noise Overlay** — Subtle grain texture overlay for a premium feel

---

## 🗂️ Project Structure

```
nishank portfolio/
│
├── index.html       # Main HTML — all sections & structure
├── style.css        # Full styling — design tokens, animations, layouts
├── script.js        # All JS logic — Three.js, GSAP, typewriter, cursor
└── README.md        # This file
```

---

## 🔧 Tech Stack

| Technology | Purpose |
|---|---|
| **HTML5** | Semantic structure & content |
| **Vanilla CSS3** | Styling, animations, glassmorphism, responsive layout |
| **JavaScript (ES6+)** | Interactivity, cursor, typewriter effect |
| **[Three.js r134](https://threejs.org/)** | 3D WebGL background scene, geometry, particles |
| **[GSAP 3.12](https://greensock.com/gsap/)** | Scroll-triggered animations, entrance effects |
| **[ScrollTrigger](https://greensock.com/scrolltrigger/)** | Viewport-based animation triggers |
| **[Vanilla Tilt 1.8](https://micku7zu.github.io/vanilla-tilt.js/)** | Mouse-parallax 3D card tilt |
| **[Google Fonts](https://fonts.google.com/)** | Syne (headings), Outfit (body), DM Mono (code) |

---

## 📄 Sections

| # | Section | Description |
|---|---|---|
| 1 | **Hero** | Glitch name, typewriter subtitle, CTA button |
| 2 | **About** | Bio card with skill tags |
| 3 | **Projects** | 6 GitHub project cards with live repo links |
| 4 | **Achievements** | 7 achievement highlight cards |
| 5 | **Connect** | Social links (Gmail, Instagram, LinkedIn, Discord, Snapchat) |
| 6 | **Footer** | Branding & copyright |

---

## 🚀 Getting Started

No build tools required — this is a pure static site.

### Run Locally

1. **Clone or download** the project folder
2. Open `index.html` in any modern browser

```bash
# Or serve with a simple local server (recommended for best results)
npx serve .
# or
python -m http.server 8080
```

3. Visit `http://localhost:8080` in your browser

> **Note:** Opening `index.html` directly via `file://` works, but a local server avoids any CORS restrictions for CDN assets.

---

## 🎨 Color Palette

| Variable | Value | Usage |
|---|---|---|
| `--bg-dark` | `#0a0a0f` | Page background |
| `--bg-darker` | `#050508` | Footer / overlays |
| `--primary-purple` | `#7c3aed` | Borders, glows, accents |
| `--secondary-violet` | `#4f46e5` | Button gradients, particles |
| `--accent-light` | `#a855f7` | Tags, icons, hover states |
| `--text-main` | `#f3f4f6` | Primary text |
| `--text-muted` | `#9ca3af` | Descriptions, handles |

---

## 📦 External CDN Dependencies

```html
<!-- Three.js -->
<script src="https://cdnjs.cloudflare.com/ajax/libs/three.js/r134/three.min.js"></script>

<!-- GSAP + ScrollTrigger -->
<script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.2/gsap.min.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.2/ScrollTrigger.min.js"></script>

<!-- Vanilla Tilt -->
<script src="https://cdnjs.cloudflare.com/ajax/libs/vanilla-tilt/1.8.1/vanilla-tilt.min.js"></script>
```

---

## 🔗 Connect with Nishank

| Platform | Link |
|---|---|
| 📧 Gmail | [nishankgupta08@gmail.com](mailto:nishankgupta08@gmail.com) |
| 📸 Instagram | [@nishank_49](https://www.instagram.com/nishank_49/) |
| 💼 LinkedIn | [nishank-gupta](https://www.linkedin.com/in/nishank-gupta-7167a8377/) |
| 💬 Discord | [discord.gg/Aa2zUuqb](https://discord.gg/Aa2zUuqb) |
| 👻 Snapchat | [nishankgupta24](https://www.snapchat.com/add/nishankgupta24) |
| 🐙 GitHub | [nishankgupta08-byte](https://github.com/nishankgupta08-byte) |

---

## 📝 License

This project is personal and not licensed for redistribution. All rights reserved © 2026 Nishank.

---

<div align="center">Built with 💜 in the digital realm.</div>
