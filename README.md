# ✨ Creative Web Experiments

> A growing collection of 14 weird, wonderful, and interactive web experiences that push the boundaries of what's possible in the browser.

## 🌟 Overview

Creative Web Experiments is a curated gallery of interactive art, generative algorithms, physics simulations, audio-visual experiences, and playful digital toys. Each experiment is:

- **Self-contained** - Works offline, minimal dependencies
- **Mobile-friendly** - Touch-optimized and responsive
- **Educational** - Well-commented code with explanations
- **Shareable** - URL state persistence for sharing configurations
- **Beautiful** - Thoughtfully designed aesthetics

## 🎨 Experiments

### Generative Art (6 experiments)
Create infinite, procedurally-generated visual experiences

1. **Infinite Starfield** - Journey through endless procedural space with spatial hashing
2. **Particle Typography** - Text explodes into thousands of interactive particles
3. **Recursive Patterns** - Islamic and geometric patterns via recursive algorithms
4. **Flowing Ribbons** - Physics-based silk simulation with Verlet integration
5. **Algorithmic Mandalas** - Symmetrical pattern generator with 6 drawing modes
6. **Fractal Tree Garden** - L-system tree growth with wind physics

### Audio-Visual (1 experiment)
Experiments that blend sound and sight

1. **Theremin in Space** - Digital theremin with Web Audio API and FFT visualization

### Interactive Narratives (2 experiments)
Stories and text that respond to your choices

1. **Branching Poem** - Click words to reshape the narrative path
2. **Blackout Poetry** - Hide words to reveal hidden poems (Austin Kleon style)

### Physics & Simulation (1 experiment)
Real-time physics and natural phenomena

1. **Double Pendulum Chaos** - Chaotic motion with RK4 integration and trail visualization

### Data as Art (1 experiment)
Transform data into beautiful visualizations

1. **Weather Poetry** - Procedurally generated poetry from weather conditions

### Optical/Perceptual (1 experiment)
Illusions and visual tricks

1. **Moiré Patterns** - Interference patterns with 5 pattern types (lines, circles, grid, waves, dots)

### Playful/Whimsical (2 experiments)
Just for fun and relaxation

1. **Digital Zen Garden** - Meditative sand raking with 4 tools (rake, smooth, stone, circle)
2. **Bubble Wrap Infinite** - Satisfying bubble popping with achievements and combos

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
