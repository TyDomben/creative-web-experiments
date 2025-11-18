# Contributing to Creative Web Experiments

Thank you for your interest in contributing! This project thrives on creative contributions from the community.

## Ways to Contribute

### 1. Create New Experiments 🎨

The best way to contribute is to create new experiments! See [docs/creating-experiments.md](docs/creating-experiments.md) for a complete guide.

**Quick steps:**
1. Fork the repository
2. Copy `shared/templates/experiment-template.html`
3. Create your experiment
4. Add it to the gallery
5. Submit a pull request

### 2. Improve Existing Experiments 🔧

Found a bug? Have an enhancement idea?

- Fix bugs in existing experiments
- Add new features
- Improve performance
- Enhance mobile support
- Add keyboard shortcuts
- Improve accessibility

### 3. Documentation 📚

Help others learn and contribute:

- Improve code comments
- Add tutorials
- Create video guides
- Write blog posts
- Translate documentation

### 4. Design & UX 🎨

Make experiments more beautiful and usable:

- Improve visual design
- Enhance animations
- Better color schemes
- Improved instructions
- Better mobile UX

### 5. Bug Reports 🐛

Found something broken?

- Use the issue tracker
- Provide clear reproduction steps
- Include browser/device info
- Screenshots are helpful

## Contribution Guidelines

### Code Style

**JavaScript:**
```javascript
// Use clear, descriptive names
const particleSystem = new ParticleSystem();

// Comment complex logic
// Calculate orbital velocity using vis-viva equation
const velocity = Math.sqrt(GM * (2/r - 1/a));

// Use consistent formatting
function updateParticles() {
  particles.forEach(p => {
    p.update();
    p.draw();
  });
}
```

**CSS:**
```css
/* Use CSS variables */
.element {
  color: var(--primary-color);
  padding: var(--spacing-md);
}

/* Mobile-first responsive design */
.card {
  width: 100%;
}

@media (min-width: 768px) {
  .card {
    width: 50%;
  }
}
```

### File Structure

New experiments should follow this structure:

```
experiments/
  category-name/
    experiment-name/
      index.html         # Main experiment file
      README.md          # Optional: detailed info
      assets/            # Optional: images, sounds
```

### Commit Messages

Use clear, descriptive commit messages:

```bash
# Good
git commit -m "Add particle collision detection to physics sim"
git commit -m "Fix mobile touch handling in zen garden"
git commit -m "Improve performance by using object pooling"

# Not ideal
git commit -m "Fix bug"
git commit -m "Update stuff"
git commit -m "WIP"
```

### Pull Request Process

1. **Fork & Branch**
   ```bash
   git fork https://github.com/username/creative-web-experiments
   git checkout -b feature/my-awesome-experiment
   ```

2. **Create & Test**
   - Build your experiment
   - Test on multiple browsers
   - Test on mobile devices
   - Verify performance

3. **Document**
   - Add clear comments
   - Update README if needed
   - Include in-experiment documentation

4. **Submit PR**
   - Clear title and description
   - Link to related issues
   - Include screenshots/GIFs
   - List what you tested

5. **Review Process**
   - Maintainers will review
   - Address feedback
   - Make requested changes
   - Merge! 🎉

## Experiment Requirements

All experiments must:

### Functionality
- [ ] Works without errors
- [ ] Mobile-responsive
- [ ] Touch-enabled
- [ ] Keyboard shortcuts
- [ ] State persistence (URL params)
- [ ] Save/export feature

### Performance
- [ ] Loads in < 3 seconds
- [ ] Runs at 60 FPS (or clearly lower for artistic effect)
- [ ] No memory leaks
- [ ] Efficient rendering

### User Experience
- [ ] Clear instructions
- [ ] Intuitive controls
- [ ] Helpful info panel
- [ ] Error handling
- [ ] Loading states

### Code Quality
- [ ] Well-commented
- [ ] Follows project structure
- [ ] Uses shared utilities when possible
- [ ] No unnecessary dependencies
- [ ] Educational value

### Accessibility
- [ ] Keyboard navigation
- [ ] Focus indicators
- [ ] ARIA labels where appropriate
- [ ] Readable text contrast
- [ ] Reduced motion support

## Experiment Categories

Choose the best fit for your experiment:

- **Generative Art** - Procedural visual creation
- **Audio-Visual** - Sound and sight combined
- **Interactive Narratives** - Text and story-based
- **Physics & Simulation** - Real-world physics
- **Data as Art** - Data visualization
- **Optical/Perceptual** - Illusions and tricks
- **Playful/Whimsical** - Just for fun

## Review Criteria

Maintainers will evaluate:

1. **Creativity** - Is it unique and interesting?
2. **Quality** - Is it well-executed?
3. **Performance** - Does it run smoothly?
4. **Documentation** - Is it well-explained?
5. **Code Quality** - Is it maintainable?
6. **Fit** - Does it fit the collection?

## License

By contributing, you agree that your contributions will be licensed under the MIT License.

## Code of Conduct

### Our Standards

- Be welcoming and inclusive
- Respect different viewpoints
- Accept constructive criticism
- Focus on what's best for the community
- Show empathy toward others

### Unacceptable Behavior

- Harassment or discrimination
- Trolling or insulting comments
- Personal or political attacks
- Publishing others' private information
- Other unprofessional conduct

## Getting Help

Need help contributing?

- **Documentation**: Read [docs/creating-experiments.md](docs/creating-experiments.md)
- **Examples**: Study existing experiments
- **Issues**: Ask questions in GitHub issues
- **Discord**: Join our community (link in README)
- **Email**: Contact maintainers

## Recognition

Contributors will be:

- Listed in README acknowledgments
- Credited in their experiments
- Mentioned in release notes
- Featured on project website

## Development Setup

```bash
# Clone your fork
git clone https://github.com/YOUR-USERNAME/creative-web-experiments.git
cd creative-web-experiments

# Create a branch
git checkout -b feature/my-experiment

# Start a local server
python -m http.server 8000

# Visit http://localhost:8000
# Make changes, test, commit, push!
```

## Testing

Before submitting, test on:

### Browsers
- [ ] Chrome (latest)
- [ ] Firefox (latest)
- [ ] Safari (latest)
- [ ] Edge (latest)

### Devices
- [ ] Desktop (1920x1080)
- [ ] Tablet (768px width)
- [ ] Mobile (375px width)
- [ ] iOS device (real device if possible)
- [ ] Android device (real device if possible)

### Features
- [ ] Mouse interaction
- [ ] Touch interaction
- [ ] Keyboard shortcuts
- [ ] Save image works
- [ ] URL state works
- [ ] Resize handling

## Release Process

Maintainers will:

1. Review PR
2. Test thoroughly
3. Request changes if needed
4. Merge when ready
5. Deploy to live site
6. Announce new experiment

## Questions?

Don't hesitate to ask! Open an issue or reach out to maintainers.

---

**Thank you for contributing to Creative Web Experiments!**

Every experiment, bug fix, and improvement makes the web a more wonderful place. ✨
