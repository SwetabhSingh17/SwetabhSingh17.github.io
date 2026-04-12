# Swetabh Singh — Portfolio

A bold, minimalist portfolio website built with **React + Vite**, featuring a clean editorial design with light/dark theme switching, smooth scroll animations, a floating bottom navigation pill, and responsive layouts.

---

## ✨ Features

- **Light/Dark Theme** — Toggle with system preference detection and persistent localStorage
- **Floating Bottom Nav** — Desktop pill navigation bar with auto-hide on scroll
- **Scroll Reveal Animations** — Sections animate in as you scroll using Intersection Observer
- **Editorial Design** — Large typography, generous whitespace, subtle dot-grid background
- **Accordion Certifications** — Grouped by issuer with expand/collapse
- **Numbered Projects** — Full-width editorial project entries
- **Responsive** — Mobile-first with bottom-sheet nav and adaptive layouts

---

## 🛠 Tech Stack

| Technology | Purpose |
|------------|---------|
| **React 19** | UI components & state management |
| **Vite 8** | Build tool & dev server (HMR) |
| **Vanilla CSS** | Custom design system with CSS variables |
| **Google Fonts** | Inter (primary) + JetBrains Mono (monospace) |

---

## 📦 Prerequisites

- **Node.js** ≥ 18 (LTS recommended)
- **npm** ≥ 9 (comes with Node.js)

Check your versions:

```bash
node -v
npm -v
```

---

## 🚀 Setup & Run

### 1. Clone the repository

```bash
git clone https://github.com/SwetabhSingh17/Portfolio.git
cd Portfolio
```

### 2. Install dependencies

```bash
npm install
```

### 3. Start the development server

```bash
npm run dev
```

The app will be available at [http://localhost:5173](http://localhost:5173) (or the next available port).

### 4. Build for production (optional)

```bash
npm run build
```

The optimized output will be in the `dist/` directory.

### 5. Preview the production build (optional)

```bash
npm run preview
```

---

## 📁 Project Structure

```
Portfolio/
├── public/
│   ├── avatar3d.png        # Hero avatar image
│   ├── favicon.svg         # Site favicon
│   └── profile.png         # Profile image
├── src/
│   ├── components/
│   │   ├── Navbar.jsx      # Floating nav + theme toggle
│   │   ├── Hero.jsx        # Hero section with avatar & CTA
│   │   ├── About.jsx       # About section with highlight cards
│   │   ├── Skills.jsx      # Skills grouped by category
│   │   ├── Projects.jsx    # Numbered project entries
│   │   ├── Certifications.jsx  # Accordion-style cert groups
│   │   └── Contact.jsx     # Contact CTA + footer
│   ├── styles/
│   │   ├── Navbar.css
│   │   ├── Hero.css
│   │   ├── About.css
│   │   ├── Skills.css
│   │   ├── Projects.css
│   │   ├── Certifications.css
│   │   └── Contact.css
│   ├── App.jsx             # Root component with theme management
│   ├── main.jsx            # React entry point
│   └── index.css           # Global design system & CSS variables
├── index.html              # HTML entry point
├── vite.config.js          # Vite configuration
└── package.json            # Dependencies & scripts
```

---

## 🎨 Design Language

- **Colors**: Off-white `#f7f7f7` (light) / `#111111` (dark) backgrounds, `#7c5cfc` purple accent
- **Typography**: Inter (400–900) headings & body, JetBrains Mono for labels & code
- **Layout**: Full-width sections with alternating backgrounds, generous whitespace
- **Interactions**: Subtle hover transitions, scroll reveals, accordion expand

---

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

