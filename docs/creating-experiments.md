# Creating Your Own Experiment

This guide will walk you through creating a new experiment for the Creative Web Experiments collection.

## Quick Start

1. **Copy the template**
   ```bash
   cp shared/templates/experiment-template.html experiments/your-category/your-name/index.html
   ```

2. **Edit the experiment**
   - Open `index.html` in your editor
   - Customize the content, style, and functionality
   - Test in browser

3. **Add to gallery**
   - Add your experiment to the list in `index.html`
   - Create a thumbnail (optional)

## Experiment Structure

Every experiment should follow this structure:

### HTML Structure

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Your Experiment | Creative Web Experiments</title>
  <link rel="stylesheet" href="../../../shared/styles.css">
  <style>
    /* Experiment-specific styles */
  </style>
</head>
<body>
  <!-- Instructions overlay -->
  <div class="instructions-overlay" id="instructions">
    <!-- ... -->
  </div>

  <!-- Main canvas/container -->
  <canvas id="canvas"></canvas>

  <!-- Controls panel -->
  <div class="controls-panel">
    <!-- ... -->
  </div>

  <!-- Info panel -->
  <div class="info-panel" id="info-panel">
    <!-- ... -->
  </div>

  <script src="../../../shared/utils.js"></script>
  <script>
    // Your experiment code
  </script>
</body>
</html>
```

### Required Elements

1. **Instructions Overlay**
   - Shown on first load
   - Explains what the experiment does
   - How to interact
   - Any special features

2. **Main Canvas/Container**
   - The experiment itself
   - Full-screen by default
   - Touch-enabled

3. **Controls Panel**
   - Reset button
   - Save image button
   - Info button
   - Back to gallery link

4. **Info Panel**
   - About section
   - Technical details
   - Interaction guide
   - Inspiration/credits

## JavaScript Structure

Organize your code like this:

```javascript
// ============================================
// SETUP
// ============================================
const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');
let width, height;

// State variables
let state = {
  // Your state here
};

// ============================================
// INITIALIZATION
// ============================================
function init() {
  resizeCanvas();
  setupEventListeners();
  // Initialize your experiment
  animate();
}

function resizeCanvas() {
  const dpr = window.devicePixelRatio || 1;
  width = window.innerWidth;
  height = window.innerHeight;
  canvas.width = width * dpr;
  canvas.height = height * dpr;
  ctx.scale(dpr, dpr);
}

// ============================================
// EVENT LISTENERS
// ============================================
function setupEventListeners() {
  window.addEventListener('resize', resizeCanvas);
  // Mouse/touch events
  // Keyboard events
}

// ============================================
// ANIMATION LOOP
// ============================================
function animate() {
  // Clear
  // Update
  // Draw
  requestAnimationFrame(animate);
}

// ============================================
// CONTROLS
// ============================================
function reset() { }
function saveImage() { Canvas.download(canvas, 'experiment.png'); }
function toggleInfo() { /* ... */ }

// ============================================
// START
// ============================================
window.addEventListener('load', init);
```

## Using Shared Utilities

The `shared/utils.js` file provides helpful functions:

### Math & Random
```javascript
Utils.random(0, 100)              // Random number 0-100
Utils.randomInt(1, 10)            // Random integer 1-10
Utils.randomChoice([1, 2, 3])     // Random array element
Utils.map(value, 0, 100, 0, 1)    // Map range
Utils.constrain(value, 0, 100)    // Clamp value
Utils.lerp(0, 100, 0.5)           // Linear interpolation
Utils.dist(x1, y1, x2, y2)        // Distance between points
```

### Colors
```javascript
Color.random()                     // Random HSL color
Color.hslToRgb(180, 50, 50)       // Convert HSL to RGB
Color.lerp('#ff0000', '#0000ff', 0.5) // Interpolate colors
Color.palettes.sunset             // Predefined palette
```

### Easing
```javascript
Easing.easeInOutQuad(t)           // Smooth easing
Easing.easeOutElastic(t)          // Bouncy easing
// Many more easing functions available
```

### Noise
```javascript
const noise = new SimplexNoise();
const value = noise.noise2D(x, y);
```

### Canvas
```javascript
Canvas.download(canvas, 'file.png')  // Download canvas
Canvas.clear(ctx, width, height)     // Clear canvas
```

### Storage
```javascript
Storage.save('key', value)        // Save to localStorage
Storage.load('key', default)      // Load from localStorage
```

### URL State
```javascript
URLState.set('seed', 12345)       // Add to URL
URLState.get('seed')              // Read from URL
```

## Best Practices

### Performance

1. **Use requestAnimationFrame**
   ```javascript
   function animate() {
     // Your animation code
     requestAnimationFrame(animate);
   }
   ```

2. **Only draw what changed**
   ```javascript
   // Instead of clearing entire canvas every frame
   ctx.fillStyle = 'rgba(0, 0, 0, 0.1)';
   ctx.fillRect(0, 0, width, height);
   ```

3. **Batch operations**
   ```javascript
   // Batch beginPath and stroke calls
   ctx.beginPath();
   particles.forEach(p => {
     ctx.moveTo(p.x, p.y);
     ctx.lineTo(p.x2, p.y2);
   });
   ctx.stroke();
   ```

4. **Use Web Workers for heavy computation**
   ```javascript
   const worker = new Worker('compute.js');
   worker.postMessage(data);
   worker.onmessage = (e) => {
     // Use results
   };
   ```

### Mobile Support

1. **Touch events**
   ```javascript
   canvas.addEventListener('touchstart', (e) => {
     e.preventDefault();
     const touch = e.touches[0];
     handleStart(touch.clientX, touch.clientY);
   });
   ```

2. **Responsive design**
   ```javascript
   // Always handle resize
   window.addEventListener('resize', () => {
     resizeCanvas();
     recreateExperiment();
   });
   ```

3. **Battery awareness**
   ```javascript
   if (await Device.isBatteryLow()) {
     // Reduce particle count, lower FPS, etc.
   }
   ```

### Accessibility

1. **Keyboard shortcuts**
   ```javascript
   document.addEventListener('keydown', (e) => {
     switch(e.key.toLowerCase()) {
       case ' ': reset(); break;
       case 's': saveImage(); break;
       case 'i': toggleInfo(); break;
     }
   });
   ```

2. **Focus states**
   ```css
   button:focus-visible {
     outline: 2px solid var(--primary-color);
   }
   ```

3. **ARIA labels**
   ```html
   <button aria-label="Reset experiment">↻</button>
   ```

## Adding to Gallery

Edit `index.html` and add your experiment to the `experiments` array:

```javascript
const experiments = [
  // ... existing experiments
  {
    id: 'your-experiment',
    title: 'Your Experiment Title',
    description: 'A brief description of what it does',
    category: 'generative-art', // or audio-visual, physics, etc.
    tags: ['keyword1', 'keyword2', 'keyword3'],
    path: 'experiments/category/your-experiment/index.html',
    new: true  // Shows "NEW" badge
  }
];
```

## Testing Checklist

Before submitting:

- [ ] Works on Chrome, Firefox, Safari
- [ ] Works on mobile (iOS and Android)
- [ ] Works with touch input
- [ ] Keyboard shortcuts work
- [ ] Loads in under 3 seconds
- [ ] No console errors
- [ ] Instructions are clear
- [ ] Info panel is complete
- [ ] Save image works
- [ ] URL state persistence works (if applicable)
- [ ] Performance is smooth (60fps)
- [ ] Code is commented
- [ ] Follows code style of other experiments

## Publishing

1. **Test thoroughly**
   - Desktop browsers
   - Mobile devices
   - Different screen sizes

2. **Document your code**
   - Add comments explaining techniques
   - Explain complex algorithms
   - Include references

3. **Create README** (optional)
   - Add `README.md` in experiment folder
   - Explain inspiration
   - List dependencies
   - Add screenshots

4. **Submit PR**
   - Clear description
   - Screenshots/GIF if possible
   - List any new dependencies

## Example Experiments

Study these experiments as references:

- **Simple**: Bubble Wrap Infinite
- **Medium**: Particle Typography
- **Advanced**: Double Pendulum Chaos
- **Audio**: Theremin in Space
- **3D**: (coming soon)

## Tips for Great Experiments

1. **Start simple** - Get basic version working first
2. **Add polish** - Smooth transitions, nice colors
3. **Make it tweakable** - Add sliders and controls
4. **Explain everything** - Good documentation = good UX
5. **Test on real devices** - Mobile performance matters
6. **Have fun!** - This is about exploration and joy

## Getting Help

- Check existing experiments for examples
- Read the [Technical Guide](technical-guide.md)
- Ask in GitHub issues
- Join our Discord (link in README)

---

Happy creating! We can't wait to see what you build! ✨
