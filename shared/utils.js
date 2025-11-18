/**
 * CREATIVE WEB EXPERIMENTS - SHARED UTILITIES
 *
 * Common functions and helpers used across experiments
 */

// ============================================
// MATH & RANDOM UTILITIES
// ============================================

const Utils = {
  /**
   * Random number between min and max
   */
  random: (min, max) => Math.random() * (max - min) + min,

  /**
   * Random integer between min and max (inclusive)
   */
  randomInt: (min, max) => Math.floor(Math.random() * (max - min + 1)) + min,

  /**
   * Random item from array
   */
  randomChoice: (arr) => arr[Math.floor(Math.random() * arr.length)],

  /**
   * Map value from one range to another
   */
  map: (value, start1, stop1, start2, stop2) => {
    return start2 + (stop2 - start2) * ((value - start1) / (stop1 - start1));
  },

  /**
   * Constrain value between min and max
   */
  constrain: (value, min, max) => Math.min(Math.max(value, min), max),

  /**
   * Linear interpolation
   */
  lerp: (start, end, amt) => start + (end - start) * amt,

  /**
   * Distance between two points
   */
  dist: (x1, y1, x2, y2) => Math.sqrt((x2 - x1) ** 2 + (y2 - y1) ** 2),

  /**
   * Convert degrees to radians
   */
  radians: (degrees) => degrees * (Math.PI / 180),

  /**
   * Convert radians to degrees
   */
  degrees: (radians) => radians * (180 / Math.PI),

  /**
   * Normalize angle to 0-2π
   */
  normalizeAngle: (angle) => {
    while (angle < 0) angle += Math.PI * 2;
    while (angle >= Math.PI * 2) angle -= Math.PI * 2;
    return angle;
  },

  /**
   * Seeded random number generator
   */
  SeededRandom: class {
    constructor(seed = 12345) {
      this.seed = seed;
    }

    next() {
      this.seed = (this.seed * 9301 + 49297) % 233280;
      return this.seed / 233280;
    }

    range(min, max) {
      return this.next() * (max - min) + min;
    }
  }
};

// ============================================
// COLOR UTILITIES
// ============================================

const Color = {
  /**
   * Convert HSL to RGB
   */
  hslToRgb: (h, s, l) => {
    h = h / 360;
    s = s / 100;
    l = l / 100;

    let r, g, b;

    if (s === 0) {
      r = g = b = l;
    } else {
      const hue2rgb = (p, q, t) => {
        if (t < 0) t += 1;
        if (t > 1) t -= 1;
        if (t < 1/6) return p + (q - p) * 6 * t;
        if (t < 1/2) return q;
        if (t < 2/3) return p + (q - p) * (2/3 - t) * 6;
        return p;
      };

      const q = l < 0.5 ? l * (1 + s) : l + s - l * s;
      const p = 2 * l - q;
      r = hue2rgb(p, q, h + 1/3);
      g = hue2rgb(p, q, h);
      b = hue2rgb(p, q, h - 1/3);
    }

    return {
      r: Math.round(r * 255),
      g: Math.round(g * 255),
      b: Math.round(b * 255)
    };
  },

  /**
   * Convert RGB to HSL
   */
  rgbToHsl: (r, g, b) => {
    r /= 255;
    g /= 255;
    b /= 255;

    const max = Math.max(r, g, b);
    const min = Math.min(r, g, b);
    let h, s, l = (max + min) / 2;

    if (max === min) {
      h = s = 0;
    } else {
      const d = max - min;
      s = l > 0.5 ? d / (2 - max - min) : d / (max + min);

      switch (max) {
        case r: h = ((g - b) / d + (g < b ? 6 : 0)) / 6; break;
        case g: h = ((b - r) / d + 2) / 6; break;
        case b: h = ((r - g) / d + 4) / 6; break;
      }
    }

    return {
      h: Math.round(h * 360),
      s: Math.round(s * 100),
      l: Math.round(l * 100)
    };
  },

  /**
   * Random color with optional hue range
   */
  random: (minHue = 0, maxHue = 360, minSat = 50, maxSat = 100, minLight = 50, maxLight = 70) => {
    const h = Utils.random(minHue, maxHue);
    const s = Utils.random(minSat, maxSat);
    const l = Utils.random(minLight, maxLight);
    return `hsl(${h}, ${s}%, ${l}%)`;
  },

  /**
   * Interpolate between two colors
   */
  lerp: (color1, color2, amt) => {
    // Parse hex colors
    const c1 = color1.match(/\w\w/g).map(x => parseInt(x, 16));
    const c2 = color2.match(/\w\w/g).map(x => parseInt(x, 16));

    const r = Math.round(Utils.lerp(c1[0], c2[0], amt));
    const g = Math.round(Utils.lerp(c1[1], c2[1], amt));
    const b = Math.round(Utils.lerp(c1[2], c2[2], amt));

    return `rgb(${r}, ${g}, ${b})`;
  },

  /**
   * Predefined palettes
   */
  palettes: {
    sunset: ['#FF6B6B', '#FFA07A', '#FFD93D', '#6BCF7F', '#4D96FF'],
    ocean: ['#03045E', '#0077B6', '#00B4D8', '#90E0EF', '#CAF0F8'],
    forest: ['#2D6A4F', '#40916C', '#52B788', '#74C69D', '#95D5B2'],
    neon: ['#FF006E', '#FB5607', '#FFBE0B', '#8338EC', '#3A86FF'],
    pastel: ['#FFB3BA', '#FFDFBA', '#FFFFBA', '#BAFFC9', '#BAE1FF'],
    monochrome: ['#000000', '#333333', '#666666', '#999999', '#CCCCCC']
  }
};

// ============================================
// EASING FUNCTIONS
// ============================================

const Easing = {
  linear: t => t,
  easeInQuad: t => t * t,
  easeOutQuad: t => t * (2 - t),
  easeInOutQuad: t => t < 0.5 ? 2 * t * t : -1 + (4 - 2 * t) * t,
  easeInCubic: t => t * t * t,
  easeOutCubic: t => (--t) * t * t + 1,
  easeInOutCubic: t => t < 0.5 ? 4 * t * t * t : (t - 1) * (2 * t - 2) * (2 * t - 2) + 1,
  easeInQuart: t => t * t * t * t,
  easeOutQuart: t => 1 - (--t) * t * t * t,
  easeInOutQuart: t => t < 0.5 ? 8 * t * t * t * t : 1 - 8 * (--t) * t * t * t,
  easeInExpo: t => t === 0 ? 0 : Math.pow(2, 10 * (t - 1)),
  easeOutExpo: t => t === 1 ? 1 : 1 - Math.pow(2, -10 * t),
  easeInElastic: t => {
    const c4 = (2 * Math.PI) / 3;
    return t === 0 ? 0 : t === 1 ? 1 : -Math.pow(2, 10 * t - 10) * Math.sin((t * 10 - 10.75) * c4);
  },
  easeOutElastic: t => {
    const c4 = (2 * Math.PI) / 3;
    return t === 0 ? 0 : t === 1 ? 1 : Math.pow(2, -10 * t) * Math.sin((t * 10 - 0.75) * c4) + 1;
  }
};

// ============================================
// NOISE GENERATION (Perlin-like)
// ============================================

class SimplexNoise {
  constructor(seed = Math.random()) {
    this.perm = new Array(512);
    this.gradP = new Array(512);

    const p = new Array(256);
    for (let i = 0; i < 256; i++) {
      p[i] = i;
    }

    // Shuffle using seed
    for (let i = 255; i > 0; i--) {
      seed = (seed * 9301 + 49297) % 233280;
      const n = Math.floor((seed / 233280) * (i + 1));
      [p[i], p[n]] = [p[n], p[i]];
    }

    const grad3 = [
      [1,1,0],[-1,1,0],[1,-1,0],[-1,-1,0],
      [1,0,1],[-1,0,1],[1,0,-1],[-1,0,-1],
      [0,1,1],[0,-1,1],[0,1,-1],[0,-1,-1]
    ];

    for (let i = 0; i < 512; i++) {
      this.perm[i] = p[i & 255];
      this.gradP[i] = grad3[this.perm[i] % 12];
    }
  }

  dot(g, x, y) {
    return g[0] * x + g[1] * y;
  }

  noise2D(xin, yin) {
    const F2 = 0.5 * (Math.sqrt(3) - 1);
    const G2 = (3 - Math.sqrt(3)) / 6;

    const s = (xin + yin) * F2;
    const i = Math.floor(xin + s);
    const j = Math.floor(yin + s);

    const t = (i + j) * G2;
    const X0 = i - t;
    const Y0 = j - t;
    const x0 = xin - X0;
    const y0 = yin - Y0;

    let i1, j1;
    if (x0 > y0) {
      i1 = 1; j1 = 0;
    } else {
      i1 = 0; j1 = 1;
    }

    const x1 = x0 - i1 + G2;
    const y1 = y0 - j1 + G2;
    const x2 = x0 - 1 + 2 * G2;
    const y2 = y0 - 1 + 2 * G2;

    const ii = i & 255;
    const jj = j & 255;

    let n0 = 0, n1 = 0, n2 = 0;

    let t0 = 0.5 - x0 * x0 - y0 * y0;
    if (t0 >= 0) {
      t0 *= t0;
      n0 = t0 * t0 * this.dot(this.gradP[ii + this.perm[jj]], x0, y0);
    }

    let t1 = 0.5 - x1 * x1 - y1 * y1;
    if (t1 >= 0) {
      t1 *= t1;
      n1 = t1 * t1 * this.dot(this.gradP[ii + i1 + this.perm[jj + j1]], x1, y1);
    }

    let t2 = 0.5 - x2 * x2 - y2 * y2;
    if (t2 >= 0) {
      t2 *= t2;
      n2 = t2 * t2 * this.dot(this.gradP[ii + 1 + this.perm[jj + 1]], x2, y2);
    }

    return 70 * (n0 + n1 + n2);
  }
}

// ============================================
// URL STATE MANAGEMENT
// ============================================

const URLState = {
  /**
   * Get parameter from URL
   */
  get: (key) => {
    const params = new URLSearchParams(window.location.search);
    return params.get(key);
  },

  /**
   * Set parameter in URL without reload
   */
  set: (key, value) => {
    const url = new URL(window.location);
    url.searchParams.set(key, value);
    window.history.replaceState({}, '', url);
  },

  /**
   * Get all parameters as object
   */
  getAll: () => {
    const params = new URLSearchParams(window.location.search);
    const obj = {};
    for (const [key, value] of params) {
      obj[key] = value;
    }
    return obj;
  },

  /**
   * Set multiple parameters
   */
  setAll: (obj) => {
    const url = new URL(window.location);
    Object.entries(obj).forEach(([key, value]) => {
      url.searchParams.set(key, value);
    });
    window.history.replaceState({}, '', url);
  }
};

// ============================================
// LOCAL STORAGE HELPERS
// ============================================

const Storage = {
  /**
   * Save to localStorage with JSON stringify
   */
  save: (key, value) => {
    try {
      localStorage.setItem(key, JSON.stringify(value));
      return true;
    } catch (e) {
      console.error('Storage error:', e);
      return false;
    }
  },

  /**
   * Load from localStorage with JSON parse
   */
  load: (key, defaultValue = null) => {
    try {
      const item = localStorage.getItem(key);
      return item ? JSON.parse(item) : defaultValue;
    } catch (e) {
      console.error('Storage error:', e);
      return defaultValue;
    }
  },

  /**
   * Remove from localStorage
   */
  remove: (key) => {
    localStorage.removeItem(key);
  }
};

// ============================================
// CANVAS HELPERS
// ============================================

const Canvas = {
  /**
   * Create high-DPI canvas
   */
  create: (width, height) => {
    const canvas = document.createElement('canvas');
    const ctx = canvas.getContext('2d');
    const dpr = window.devicePixelRatio || 1;

    canvas.width = width * dpr;
    canvas.height = height * dpr;
    canvas.style.width = width + 'px';
    canvas.style.height = height + 'px';

    ctx.scale(dpr, dpr);

    return { canvas, ctx, dpr };
  },

  /**
   * Clear canvas
   */
  clear: (ctx, width, height) => {
    ctx.clearRect(0, 0, width, height);
  },

  /**
   * Download canvas as image
   */
  download: (canvas, filename = 'experiment.png') => {
    const link = document.createElement('a');
    link.download = filename;
    link.href = canvas.toDataURL();
    link.click();
  },

  /**
   * Copy canvas to clipboard
   */
  copyToClipboard: async (canvas) => {
    try {
      canvas.toBlob(async (blob) => {
        await navigator.clipboard.write([
          new ClipboardItem({ 'image/png': blob })
        ]);
      });
      return true;
    } catch (e) {
      console.error('Clipboard error:', e);
      return false;
    }
  }
};

// ============================================
// PERFORMANCE MONITORING
// ============================================

class FPSCounter {
  constructor() {
    this.fps = 60;
    this.frames = [];
    this.lastTime = performance.now();
  }

  update() {
    const now = performance.now();
    const delta = now - this.lastTime;
    this.lastTime = now;

    this.frames.push(delta);
    if (this.frames.length > 60) {
      this.frames.shift();
    }

    const average = this.frames.reduce((a, b) => a + b, 0) / this.frames.length;
    this.fps = Math.round(1000 / average);

    return this.fps;
  }

  get() {
    return this.fps;
  }
}

// ============================================
// MOBILE/TOUCH DETECTION
// ============================================

const Device = {
  isMobile: () => /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent),
  isTouch: () => 'ontouchstart' in window || navigator.maxTouchPoints > 0,
  isBatteryLow: async () => {
    if ('getBattery' in navigator) {
      const battery = await navigator.getBattery();
      return battery.level < 0.2 && !battery.charging;
    }
    return false;
  }
};

// ============================================
// EXPORT
// ============================================

// Make utilities available globally
if (typeof window !== 'undefined') {
  window.Utils = Utils;
  window.Color = Color;
  window.Easing = Easing;
  window.SimplexNoise = SimplexNoise;
  window.URLState = URLState;
  window.Storage = Storage;
  window.Canvas = Canvas;
  window.FPSCounter = FPSCounter;
  window.Device = Device;
}
