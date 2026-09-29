# SPEED N TENSION ⚡

> **Think Fast. Tap Faster.**  
> Official web app and showcase for **Speed N Tension** — a hyper-intense mobile reflex and focus game designed to test impulse control under extreme time pressure.

[![Vite](https://img.shields.io/badge/Vite-8.x-646CFF?logo=vite&logoColor=white)](https://vitejs.dev/)
[![React](https://img.shields.io/badge/React-19-61DAFB?logo=react&logoColor=black)](https://react.dev/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.x-3178C6?logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/TailwindCSS-v4-38B2AC?logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)

---

## 🎮 About The Game

**Speed N Tension** challenges your brain's inhibitory reflexes. While anyone can follow the rules when calm, Speed N Tension forces you into split-second decision making with sub-second reaction windows:

- 🚫 **Inhibitory Reflex**: Spot what NOT to tap while moving at breakneck speed.
- ⚡ **Interactive Simulator**: Test your real reaction time directly in the interactive device preview.
- ⏱️ **Tension Engine**: Compressing clocks (03 → 02 → 01 → 00) that trigger real physiological pressure.
- 🏆 **Replay & Leaderboards**: Track your personal records, streak counts, and reaction latency in milliseconds.
- 🔊 **Synthesized Audio**: Low-latency procedural Web Audio feedback (clicks, pops, error buzzers, and tension ticks).

---

## 🚀 Quick Start

### Prerequisites
- [Node.js](https://nodejs.org/) (v18 or higher recommended)
- `npm` or `bun`

### Installation

1. **Clone the repository**:
   ```bash
   git clone https://github.com/YOUR_USERNAME/speed-n-tension.git
   cd speed-n-tension
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Start local development server**:
   ```bash
   npm run dev
   ```
   Open [http://localhost:3000](http://localhost:3000) in your browser.

---

## 🛠️ Scripts

| Command | Description |
|---|---|
| `npm run dev` | Runs the development server on port 3000 |
| `npm run build` | Compiles TypeScript and creates optimized production bundle in `/dist` |
| `npm run preview` | Previews the production build locally |
| `npm run lint` | Runs TypeScript type checking (`tsc --noEmit`) |

---

## 📁 Project Structure

```text
├── index.html               # Main entry HTML with OpenGraph tags & SVG favicon
├── src/
│   ├── main.tsx             # React application mount
│   ├── App.tsx              # Root app component & view router
│   ├── index.css            # Tailwind CSS styling & arcade themes
│   ├── types.ts             # TypeScript interfaces & game models
│   ├── components/
│   │   ├── GameLogo.tsx     # Official Speed N Tension vectorized app icon & logo
│   │   ├── Navbar.tsx       # Header with sound toggle & light/dark mode
│   │   ├── HeroDevice.tsx   # Interactive phone simulator with playable game
│   │   ├── ConceptSection.tsx # Psychological core & reflex explanation
│   │   ├── GameplaySection.tsx # Core mechanics breakdown
│   │   ├── TensionSection.tsx  # Dynamic countdown & tension gauge
│   │   ├── ChallengesGrid.tsx  # Challenge modes & gameplay obstacles
│   │   ├── ReplayDashboard.tsx # Reaction stats & player metrics
│   │   ├── DownloadSection.tsx # App store badges & pre-registration
│   │   ├── Footer.tsx          # Navigation, credits, and legal links
│   │   └── ChaosTrailerModal.tsx # Fast-paced gameplay teaser modal
│   └── utils/
│       └── audio.ts         # Procedural Web Audio API sound synthesizer
├── package.json             # Project dependencies & scripts
├── tsconfig.json            # TypeScript configuration
└── vite.config.ts           # Vite build & plugin configuration
```

---

## 🌐 Deployment

### Deploy to Vercel
1. Import your GitHub repository into [Vercel](https://vercel.com).
2. Framework Preset: **Vite**.
3. Build Command: `npm run build`.
4. Output Directory: `dist`.

### Deploy to Netlify
1. Connect your repository in [Netlify](https://netlify.com).
2. Build Command: `npm run build`.
3. Publish Directory: `dist`.

---

## 📄 License
This project is private and proprietary. All rights reserved.
