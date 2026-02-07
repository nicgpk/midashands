# Midas Hands Design System

A shadcn-inspired design system built with JSON-based design tokens and vanilla CSS. Clean, modern, and ready to use in any project.

## 🎨 Features

- **JSON-Based Tokens** - Single source of truth for design tokens
- **Multi-Platform Export** - Generate CSS, JavaScript, and more from JSON
- **Components** - Pre-built, customizable UI components
- **Dark Mode** - Automatic dark mode support
- **Framework Agnostic** - Works with vanilla HTML, React, Vue, or any framework
- **Well Documented** - Clear examples and usage guides

## 🚀 Quick Start

### For Users (No Build Step)

```html
<!-- Import tokens and components -->
<link rel="stylesheet" href="tokens/tokens.css">
<link rel="stylesheet" href="components/button/button.css">

<!-- Use components -->
<button class="btn btn-primary">Click me</button>
```

### For Developers (With Token Building)

```bash
# Install dependencies
npm install

# Build tokens from JSON
npm run build:tokens

# Watch for changes
npm run watch:tokens

# Generate Figma-compatible tokens
npm run build:figma
```

## 📚 Documentation

### Design Tokens (JSON-Based)

This design system uses a **hybrid approach** - JSON tokens as the source of truth, with auto-generated CSS:

#### Token Categories

- **Colors** - Brand colors, semantic colors, state colors ([colors.json](./tokens-json/colors.json))
- **Spacing** - Consistent spacing scale, 4px baseline ([spacing.json](./tokens-json/spacing.json))
- **Typography** - Font families, sizes, weights, line heights ([typography.json](./tokens-json/typography.json))
- **Border Radius** - Corner rounding from subtle to full ([border-radius.json](./tokens-json/border-radius.json))
- **Component Sizes** - Standard heights for buttons, inputs ([component-sizes.json](./tokens-json/component-sizes.json))
- **Shadows** - Elevation system with dark mode support ([shadows.json](./tokens-json/shadows.json))
- **Z-Index** - Layering system for stacking ([z-index.json](./tokens-json/z-index.json))
- **Transitions** - Animation timing presets ([transitions.json](./tokens-json/transitions.json))

#### Editing Tokens

**Edit JSON files in `tokens-json/`** (not CSS files):

```json
// tokens-json/colors.json
{
  "color": {
    "primary": {
      "value": "#18181B",
      "type": "color",
      "comment": "Primary brand color"
    }
  }
}
```

Then rebuild: `npm run build:tokens`

[Learn more about tokens →](./TOKENS-README.md)

### Components

Currently available components:

- **[Button](./components/button/)** - 6 variants, 3 sizes, loading states, icons, badges, groups
  - Primary, Secondary, Outline, Ghost, Soft, Destructive
  - Small, Default, Large sizes
  - Modern dot loading animation
  - Icon support (left, right, icon-only)
  - Button groups with toggle functionality
  - Full accessibility (ARIA, keyboard navigation)

More components coming soon!

## 🎯 Usage Examples

### Basic HTML
```html
<!DOCTYPE html>
<html lang="en">
<head>
  <link rel="stylesheet" href="tokens/tokens.css">
  <link rel="stylesheet" href="components/button/button.css">
</head>
<body>
  <h1>My App</h1>
  <button class="btn btn-primary">Get Started</button>
  <button class="btn btn-secondary">Learn More</button>
</body>
</html>
```

### Using JavaScript Tokens
```javascript
import tokens from './dist/tokens.js';

const primaryColor = tokens.colorPrimary; // "#18181B"
const spacing = tokens.spacing4; // "1rem"
```

### Button Variants
```html
<button class="btn btn-primary">Primary</button>
<button class="btn btn-secondary">Secondary</button>
<button class="btn btn-outline">Outline</button>
<button class="btn btn-ghost">Ghost</button>
<button class="btn btn-soft">Soft</button>
<button class="btn btn-destructive">Delete</button>
```

### Button with Icon
```html
<button class="btn btn-primary">
  <svg width="16" height="16"><!-- icon --></svg>
  Save
</button>
```

### Loading State
```html
<button class="btn btn-primary btn-loading" disabled>
  Saving...
</button>
```

## 🎨 Figma Integration

Sync your design tokens with Figma using the Tokens Studio plugin:

```bash
# Generate Figma-compatible tokens
npm run build:figma
```

This creates `figma-tokens.json` that you can import into Figma via the **Tokens Studio** plugin.

**[Read the full Figma sync guide →](./FIGMA-SYNC.md)**

### Quick Figma Setup
1. Install **Tokens Studio for Figma** plugin
2. Run `npm run build:figma`
3. In Figma plugin: **Settings** → **Load from file**
4. Select `figma-tokens.json`
5. Apply tokens to your components!

## 🤝 Contributing

Contributions are welcome! Feel free to:

- Report bugs
- Suggest new components
- Improve documentation
- Submit pull requests

## 📁 Project Structure

```
midashands/
├── tokens-json/          # Source JSON tokens (edit these!)
│   ├── colors.json
│   ├── spacing.json
│   └── ...
├── tokens/               # Generated CSS (auto-generated)
│   ├── tokens.css       # Master import file
│   ├── colors.css
│   └── ...
├── components/           # Component library
│   ├── button/
│   └── ...
├── dist/                 # Generated outputs
│   ├── tokens.json      # Flat JSON
│   └── tokens.js        # ES6 module
├── build-tokens.js       # Token build script
├── config.json          # Style Dictionary config
└── package.json
```

## 📄 License

ISC License - feel free to use this in your projects!

## 🙏 Inspiration

This design system is inspired by [shadcn/ui](https://ui.shadcn.com) and follows modern design principles.

---

Built with ❤️ for designers and developers