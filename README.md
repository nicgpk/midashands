# Midas Hands Design System

A modern design system inspired by shadcn/ui, built with JSON-based design tokens and vanilla CSS. Features dark mode styling, comprehensive components, and a token-driven architecture.

## 🎨 Features

- **🌙 Dark Mode First** - shadcn/ui inspired dark theme as primary
- **🎯 JSON-Based Tokens** - Single source of truth for all design decisions
- **🚀 Multi-Platform Export** - Generate CSS, JavaScript, and more from JSON
- **📦 Production-Ready Components** - Button, Input, Button Groups, Radio, Checkbox, Toggle, and more
- **♿ Fully Accessible** - ARIA attributes, keyboard navigation, screen reader support
- **🎭 Framework Agnostic** - Works with vanilla HTML, React, Vue, or any framework
- **📖 Well Documented** - Clear examples, demos, and usage guides
- **🔄 Auto-Generation** - CSS tokens automatically built from JSON source

## 🚀 Quick Start

### For Users (No Build Step)

```html
<!-- Import tokens and components -->
<link rel="stylesheet" href="tokens/tokens.css">
<link rel="stylesheet" href="components/button/button.css">
<link rel="stylesheet" href="components/input/input.css">

<!-- Use components -->
<button class="btn btn-primary">Click me</button>
<input type="email" class="input" placeholder="email@example.com">
```

### For Developers (With Token Building)

```bash
# Install dependencies
npm install

# Build tokens from JSON
npm run build:tokens

# Watch for changes (auto-rebuild on save)
npm run watch:tokens

# Generate Figma-compatible tokens
npm run build:figma
```

## 📦 Components

### Button Component
**6 variants • 3 sizes • Icons • Loading states • Badges • Tooltips**

```html
<!-- Variants -->
<button class="btn btn-primary">Primary</button>
<button class="btn btn-secondary">Secondary</button>
<button class="btn btn-outline">Outline</button>
<button class="btn btn-tertiary">Tertiary</button>  <!-- Formerly "Ghost" -->
<button class="btn btn-soft">Soft</button>
<button class="btn btn-destructive">Delete</button>

<!-- With Icon -->
<button class="btn btn-primary btn-with-icon">
  <svg>...</svg>
  Save
</button>

<!-- Loading State -->
<button class="btn btn-primary btn-loading" disabled aria-busy="true">
  Saving...
</button>

<!-- With Badge -->
<button class="btn btn-primary btn-has-badge">
  Messages
  <span class="btn-badge">3</span>
</button>
```

[View Button Docs →](./components/button/)

### Button Group Component
**Horizontal • Vertical • Split buttons • Toggle states**

```html
<!-- Horizontal Group -->
<div class="btn-group">
  <button class="btn btn-outline btn-active" aria-pressed="true">Left</button>
  <button class="btn btn-outline">Center</button>
  <button class="btn btn-outline">Right</button>
</div>

<!-- Split Button -->
<div class="btn-split">
  <button class="btn btn-primary">Save</button>
  <button class="btn btn-primary btn-icon" aria-label="Options">▼</button>
</div>
```

[View Button Group Docs →](./components/button-group/)

### Input Component
**Multiple types • Icons • Validation • Textarea • File upload**

```html
<!-- Basic Input -->
<label class="form-label" for="email">Email</label>
<input type="email" id="email" class="input" placeholder="email@example.com">

<!-- With Icon -->
<div class="input-group">
  <span class="input-group-icon"><svg>...</svg></span>
  <input type="text" class="input" placeholder="Search...">
</div>

<!-- Validation States -->
<input type="email" class="input input-error" value="invalid">
<p class="form-error">Please enter a valid email</p>

<!-- Textarea -->
<textarea class="input textarea" placeholder="Your message..."></textarea>
```

[View Input Docs →](./components/input/)

### Radio Component
**5 styles • Horizontal/Vertical • Card style • Descriptions**

```html
<!-- Basic Radio Group -->
<div class="radio-group">
  <label class="radio-item">
    <input type="radio" name="plan" class="radio-input" checked>
    <span class="radio-button"></span>
    <span class="radio-label">Free Plan</span>
  </label>
  <label class="radio-item">
    <input type="radio" name="plan" class="radio-input">
    <span class="radio-button"></span>
    <span class="radio-label">Pro Plan</span>
  </label>
</div>
```

[View Radio Docs →](./components/radio/)

### Checkbox Component
**6 styles • Indeterminate state • Descriptions**

```html
<!-- Basic Checkbox -->
<label class="checkbox-label">
  <input type="checkbox" class="checkbox-input" checked>
  <span class="checkbox-checkmark"></span>
  <span class="checkbox-text">I agree to the terms</span>
</label>

<!-- Indeterminate State -->
<label class="checkbox-label">
  <input type="checkbox" class="checkbox-input" indeterminate>
  <span class="checkbox-checkmark"></span>
  <span class="checkbox-text">Select All</span>
</label>
```

[View Checkbox Docs →](./components/checkbox/)

### Toggle Component
**3 sizes • Icons • Labels • Accessible**

```html
<!-- Basic Toggle -->
<label class="toggle">
  <input type="checkbox" class="toggle-input" checked>
  <span class="toggle-switch"></span>
  <span class="toggle-label">Enable notifications</span>
</label>

<!-- With Icons -->
<label class="toggle toggle-with-icons">
  <input type="checkbox" class="toggle-input">
  <span class="toggle-switch">
    <svg class="toggle-icon-on">...</svg>
    <svg class="toggle-icon-off">...</svg>
  </span>
</label>
```

[View Toggle Docs →](./components/toggle/)

## 🎯 Design Tokens

All design tokens are defined in JSON and automatically compiled to CSS, JavaScript, and other formats.

### Token Categories

| Category | Location | Description |
|----------|----------|-------------|
| **Colors** | [colors.json](./tokens-json/colors.json) | Brand colors, semantic colors, dark mode palette |
| **Spacing** | [spacing.json](./tokens-json/spacing.json) | 4px baseline scale (4px to 48px) |
| **Typography** | [typography.json](./tokens-json/typography.json) | Fonts, sizes, weights, line heights |
| **Border Radius** | [border-radius.json](./tokens-json/border-radius.json) | Corner rounding (none to full) |
| **Component Sizes** | [component-sizes.json](./tokens-json/component-sizes.json) | Standard heights for UI elements |
| **Shadows** | [shadows.json](./tokens-json/shadows.json) | Elevation system + focus rings |
| **Z-Index** | [z-index.json](./tokens-json/z-index.json) | Layering system for stacking |
| **Transitions** | [transitions.json](./tokens-json/transitions.json) | Animation timing presets |

### Color System (Dark Mode)

```css
/* Base Colors */
--color-background: #0A0A0A;      /* Deep dark background */
--color-foreground: #FAFAFA;      /* Light text */
--color-primary: #FAFAFA;         /* Light buttons on dark */
--color-secondary: #262626;       /* Subtle dark */
--color-accent: #262626;          /* Accent elements */
--color-muted: #262626;           /* Muted backgrounds */
--color-destructive: #991B1B;     /* Dark mode red */

/* Border Tokens (NEW!) */
--color-border: #262626;          /* Default border */
--color-border-subtle: #1A1A1A;   /* Barely visible */
--color-border-strong: #404040;   /* More prominent */
--color-border-hover: #404040;    /* Hover state */
--color-border-focus: #D4D4D4;    /* Focus state */
--color-border-error: #DC2626;    /* Error states */
--color-border-success: #16A34A;  /* Success states */
--color-border-warning: #D97706;  /* Warning states */
--color-border-info: #0EA5E9;     /* Info states */

/* Focus Ring */
--color-ring: #D4D4D4;            /* Focus rings */
```

### Editing Tokens

**✅ DO: Edit JSON files in `tokens-json/`**

```json
{
  "color": {
    "primary": {
      "value": "#FAFAFA",
      "type": "color",
      "comment": "Primary brand color"
    }
  }
}
```

Then rebuild: `npm run build:tokens`

**❌ DON'T: Edit CSS files in `tokens/`** (they're auto-generated and will be overwritten)

## 👀 Preview All Components

Open **[examples/preview.html](./examples/preview.html)** in your browser to see all components in action:

### Full Demo Page
A complete project management dashboard showcasing realistic component usage:
- **Dashboard Overview** - Stats cards with metrics
- **Project Type Selection** - 4 selectable project type cards with icons
- **Active Projects** - Radio button selection with project cards
- **Button Groups** - Filter toggles (All Projects / Active / Archived)
- **Create Project Form** - Inputs, date picker, checkboxes
- **Project Settings** - Toggle switches for various options
- **All button variants** - Primary, Secondary, Outline, Tertiary, Soft, Destructive

### Individual Component Sections
- 🎨 Color token showcase
- 🔘 All button variants and states
- 📝 Input types and validation
- 🎛️ Radio buttons (5 styles)
- ☑️ Checkboxes (6 styles)
- 🔄 Toggle switches (3 sizes)
- 🎮 Button groups and split buttons

**Features:**
- Sidebar navigation between sections
- Dark/Light mode toggle
- Component counts
- Interactive examples
- Copy-paste ready code

## 📐 Spacing Scale

```css
--spacing-1: 0.25rem;  /* 4px */
--spacing-2: 0.5rem;   /* 8px */
--spacing-3: 0.75rem;  /* 12px */
--spacing-4: 1rem;     /* 16px */
--spacing-6: 1.5rem;   /* 24px */
--spacing-8: 2rem;     /* 32px */
--spacing-10: 2.5rem;  /* 40px */
--spacing-12: 3rem;    /* 48px */
```

## 🎭 Shadow System

**Standard Shadows:** xs, sm, md, lg, xl, 2xl
**Inner Shadows:** inner-sm, inner, inner-md, inner-lg
**Focus Rings:** focus-ring, focus-destructive, focus-success
**Glow Effects:** glow-sm, glow-md, glow-lg

All shadows automatically adjust for dark mode!

## 🎨 Figma Integration

Sync your design tokens with Figma using the Tokens Studio plugin:

```bash
# Generate Figma-compatible tokens
npm run build:figma
```

### Quick Figma Setup
1. Install **Tokens Studio for Figma** plugin
2. Run `npm run build:figma`
3. In Figma plugin: **Settings** → **Load from file**
4. Select `figma-tokens.json`
5. Apply tokens to your components!

## 📁 Project Structure

```
midashands/
├── tokens-json/          # 📝 Source JSON tokens (EDIT THESE!)
│   ├── colors.json
│   ├── spacing.json
│   ├── shadows.json
│   └── ...
├── tokens/               # 🤖 Generated CSS (auto-generated, don't edit)
│   ├── tokens.css       # Master import file
│   ├── colors.css
│   ├── spacing.css
│   └── ...
├── components/           # 📦 Component library
│   ├── button/
│   │   ├── button.css
│   │   ├── button.html  # Examples
│   │   └── README.md
│   ├── button-group/
│   │   ├── button-group.css
│   │   ├── button-group.html
│   │   └── README.md
│   ├── input/
│   │   ├── input.css
│   │   ├── input.html
│   │   └── README.md
│   ├── radio/
│   │   ├── radio.css
│   │   ├── radio.html
│   │   └── README.md
│   ├── checkbox/
│   │   ├── checkbox.css
│   │   ├── checkbox.html
│   │   └── README.md
│   ├── toggle/
│   │   ├── toggle.css
│   │   ├── toggle.html
│   │   └── README.md
│   └── ...
├── examples/
│   └── preview.html     # 👀 All components demo
├── dist/                # 📦 Build outputs
│   ├── tokens.json      # Flat JSON
│   └── tokens.js        # ES6 module
├── build-tokens.js      # Build script
├── config.json          # Style Dictionary config
└── package.json
```

## 🎯 Usage Examples

### Complete HTML Example

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>My App</title>

  <!-- Import design system -->
  <link rel="stylesheet" href="tokens/tokens.css">
  <link rel="stylesheet" href="components/button/button.css">
  <link rel="stylesheet" href="components/input/input.css">
</head>
<body>
  <h1>My Application</h1>

  <!-- Form with components -->
  <form>
    <label class="form-label" for="email">Email</label>
    <input type="email" id="email" class="input" placeholder="you@example.com">

    <div style="margin-top: 1rem; display: flex; gap: 0.5rem;">
      <button type="submit" class="btn btn-primary">Submit</button>
      <button type="reset" class="btn btn-secondary">Reset</button>
    </div>
  </form>
</body>
</html>
```

### Using JavaScript Tokens

```javascript
import tokens from './dist/tokens.js';

// Access any token value
const primaryColor = tokens.colorPrimary;     // "#FAFAFA"
const spacing = tokens.spacing4;              // "1rem"
const shadowFocus = tokens.shadowFocusRing;   // "0 0 0 2px..."
```

## ♿ Accessibility

All components follow WCAG 2.1 AA standards:

- ✅ Proper ARIA attributes (`aria-label`, `aria-pressed`, `aria-busy`)
- ✅ Keyboard navigation support
- ✅ Focus visible indicators (shadcn-style rings)
- ✅ Screen reader friendly
- ✅ Color contrast ratios meet standards
- ✅ Semantic HTML elements

## 🤝 Contributing

Contributions are welcome! Feel free to:

- 🐛 Report bugs
- 💡 Suggest new components
- 📝 Improve documentation
- 🔧 Submit pull requests

## 📄 License

ISC License - feel free to use this in your projects!

## 🙏 Inspiration

This design system is inspired by [shadcn/ui](https://ui.shadcn.com) and follows modern design principles:

- Dark mode first approach
- Token-driven architecture
- Accessible by default
- Copy-paste ready components
- No framework lock-in

---

**Built with ❤️ for designers and developers**

**View the [live preview](./examples/preview.html) to see all components in action!**
