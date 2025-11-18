# ✨ Creative Web Experiments

> A complete collection of 55 weird, wonderful, and interactive web experiences that push the boundaries of what's possible in the browser.

## 🌟 Overview

Creative Web Experiments is a curated gallery of interactive art, generative algorithms, physics simulations, audio-visual experiences, and playful digital toys. Each experiment is:

- **Self-contained** - Works offline, minimal dependencies
- **Mobile-friendly** - Touch-optimized and responsive
- **Educational** - Well-commented code with explanations
- **Shareable** - URL state persistence for sharing configurations
- **Beautiful** - Thoughtfully designed aesthetics

## 🎨 Experiments
### Generative Art (10 experiments)
1. **Infinite Starfield** - Procedural space with spatial hashing
2. **Particle Typography** - Text explodes into interactive particles
3. **Recursive Patterns** - Islamic/geometric patterns (5 types)
4. **Flowing Ribbons** - Physics-based silk with Verlet integration
5. **Algorithmic Mandalas** - Symmetrical pattern generator (6 modes)
6. **Fractal Tree Garden** - L-system tree growth with wind
7. **Glitch Art Generator** - Real-time image databending
8. **Digital Paint Drips** - Fluid simulation art with gravity
9. **Noise Landscape** - Perlin noise terrain explorer
10. **Color Field Evolution** - Mondrian-style cellular automata

### Audio-Visual (10 experiments)
1. **Theremin in Space** - Web Audio API instrument with FFT visualization
2. **Beat Visualizer** - Music visualization with 5 render modes
3. **Voice Painter** - Paint with voice (pitch→color, volume→size)
4. **Synesthesia Simulator** - Colors make sounds, sounds make colors
5. **Rhythm Garden** - Plants grow with beat detection
6. **Harmonic Sand** - Chladni plate simulation
7. **Echo Chamber** - Spatial audio playground
8. **Frequency Forest** - Audio spectrum as landscape
9. **Loop Station** - Build layers of sound loops
10. **Ambient Space** - Generative ambient music maker

### Interactive Narratives (10 experiments)
1. **Branching Poem** - Click words to reshape narrative (22 choice points)
2. **Blackout Poetry** - Hide words to reveal poems (Austin Kleon style)
3. **Memory Palace** - Navigate 3D space of memories
4. **Dream Journal Visualizer** - Text becomes abstract art
5. **Infinite Library** - Procedurally generated books
6. **Conversation Trees** - Dialogue exploration system
7. **Emoji Story Generator** - Tales told entirely in emoji
8. **Story Remix Machine** - Mash up narratives algorithmically
9. **Parallel Timeline** - See alternate story paths simultaneously
10. **Whispered Secrets** - Click to reveal hidden text layers

### Physics & Simulation (10 experiments)
1. **Double Pendulum Chaos** - RK4 integration, chaos visualization
2. **Gravity Playground** - N-body gravitational simulation
3. **Cloth Simulator** - Realistic fabric with Verlet physics
4. **Water Ripple Tank** - Wave interference patterns
5. **Chain Reaction** - Rube Goldberg machine builder
6. **Bouncing Universe** - Elastic collision simulation
7. **Magnetic Field Visualizer** - Iron filing simulation
8. **Smoke & Flow** - Navier-Stokes fluid dynamics
9. **Spring Mesh** - Soft body physics with constraints
10. **Orbital Mechanics** - Launch satellites, calculate orbits

### Data as Art (5 experiments)
1. **Weather Poetry** - Procedural poetry from weather (7 conditions)
2. **Personal Data Sculpture** - Your stats as 3D art
3. **Wikipedia Rabbit Hole** - Visualize link journeys as trees
4. **GitHub Contribution Garden** - Commits become nature scenes
5. **Time Zone Clock** - World time as circular art

### Optical/Perceptual (5 experiments)
1. **Moiré Patterns** - Interference patterns (5 pattern types)
2. **Impossible Objects** - Escher-inspired 3D illusions
3. **Motion Aftereffect** - Stare to see phantom movement
4. **Chromatic Aberration** - RGB split visual effects
5. **Perspective Playground** - Forced perspective tricks

### Playful/Whimsical (5 experiments)
1. **Digital Zen Garden** - Meditative sand raking (4 tools)
2. **Bubble Wrap Infinite** - Endless bubble popping with achievements
3. **Cloud Maker** - Paint fluffy procedural clouds
4. **Star Constellation Creator** - Connect dots, name constellations
5. **Paper Airplane Designer** - Fold and throw virtual planes

## 🚀 Getting Started

### Quick Start

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/creative-web-experiments.git
   cd creative-web-experiments
   ```

2. **Open in browser**
   ```bash
   # Simple local server (Python 3)
   python -m http.server 8000

   # Or use any local server
   # Then visit http://localhost:8000
   ```

3. **Explore!**
   - Browse the gallery at `index.html`
   - Click any experiment to start
   - Each experiment is self-contained

### No Build Process Required

All experiments use vanilla JavaScript and load dependencies from CDN. No npm, no webpack, no compilation - just open and run!

## 📁 Project Structure

```
creative-web-experiments/
├── index.html              # Main gallery page
├── experiments/            # All experiments organized by category
│   ├── generative-art/
│   │   ├── infinite-starfield/
│   │   │   └── index.html
│   │   ├── particle-typography/
│   │   └── ...
│   ├── audio-visual/
│   ├── interactive-narratives/
│   ├── physics-simulation/
│   ├── data-as-art/
│   ├── optical-illusions/
│   └── playful/
├── shared/
│   ├── styles.css         # Shared styles
│   ├── utils.js           # Utility functions
│   └── templates/         # Experiment templates
├── assets/
│   ├── thumbnails/
│   ├── fonts/
│   └── sounds/
└── docs/                  # Documentation
    ├── creating-experiments.md
    ├── technical-guide.md
    └── inspiration.md
```

## 🛠️ Technical Stack

### Core Technologies
- **HTML5 Canvas** - High-performance 2D/3D graphics
- **Web Audio API** - Synthesizers, analyzers, effects
- **Vanilla JavaScript** - No framework dependencies
- **CSS3** - Modern styling and animations

### Optional Libraries (CDN)
Only loaded when needed by specific experiments:
- **P5.js** - Creative coding experiments
- **Three.js** - 3D visualizations
- **Tone.js** - Audio synthesis
- **Matter.js** - Physics simulations

### Features
- 🎯 **60 FPS** animations using requestAnimationFrame
- 📱 **Mobile-optimized** with touch support
- 🔗 **Shareable URLs** with state persistence
- 💾 **Save as image** functionality
- ⌨️ **Keyboard shortcuts** for power users
- ♿ **Accessible** with keyboard navigation

## 🎓 Educational Value

Each experiment includes:

- **Commented code** explaining techniques
- **Technical details** panel with algorithms used
- **Inspiration sources** and further reading
- **Interaction guide** for all features

Perfect for:
- Learning creative coding
- Exploring algorithms visually
- Understanding physics and math
- Experimenting with Web APIs
- Portfolio inspiration

## 🌈 Creating Your Own Experiment

Want to add your own experiment? It's easy!

1. **Copy the template**
   ```bash
   cp shared/templates/experiment-template.html experiments/your-category/your-experiment/index.html
   ```

2. **Customize it**
   - Replace placeholder content
   - Implement your creative idea
   - Add it to the gallery in `index.html`

3. **Submit a PR!**

See [docs/creating-experiments.md](docs/creating-experiments.md) for detailed instructions.

## 📋 Quality Standards

All experiments must:
- ✅ Load in under 3 seconds
- ✅ Work on mobile devices
- ✅ Have clear instructions
- ✅ Be keyboard accessible
- ✅ Include commented code
- ✅ Support URL state sharing
- ✅ Have a "wow" moment

## 🎨 Design Philosophy

> "Make the web weird and wonderful again"

These experiments celebrate:
- **Exploration** over optimization
- **Delight** over utility
- **Learning** over perfection
- **Joy** over productivity

## 🤝 Contributing

Contributions are welcome! Here's how:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-experiment`)
3. Add your experiment following the guidelines
4. Test on desktop and mobile
5. Submit a pull request

See [CONTRIBUTING.md](CONTRIBUTING.md) for details.

## 📜 License

MIT License - feel free to use, modify, and share!

Individual experiments may use different licenses - check each experiment's README.

## 🙏 Acknowledgments

Inspired by:
- [Chrome Experiments](https://experiments.withgoogle.com/)
- [CodePen](https://codepen.io/)
- [OpenProcessing](https://openprocessing.org/)
- [The Nature of Code](https://natureofcode.com/) by Daniel Shiffman
- Countless creative coders and digital artists

## 📬 Contact

- **Website**: [your-website.com]
- **Twitter**: [@yourhandle]
- **Email**: your@email.com

## ⭐ Star This Project!

If you found this collection inspiring or useful, please consider starring the repository!

---

**Made with ❤️ for the weird and wonderful web**

*Last updated: 2025*
