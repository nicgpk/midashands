# Design Tokens - JSON-Based System

Production-ready design token system using Style Dictionary.

## Overview

This design system uses JSON tokens that can be transformed into multiple platforms:
- CSS Variables
- JavaScript/TypeScript
- iOS (Swift)
- Android (XML)
- Figma Tokens
- And more...

## Quick Start

### Installation

```bash
npm install
```

### Build Tokens

```bash
# Build once
npm run build:tokens

# Watch for changes
npm run watch:tokens
```

This generates:
- `tokens/*.css` - CSS variables (for web)
- `dist/tokens.json` - Flat JSON (for documentation)
- `dist/tokens.js` - JavaScript module (for JS frameworks)

## File Structure

```
midashands/
├── tokens-json/          # Source JSON tokens
│   ├── colors.json
│   ├── spacing.json
│   ├── typography.json
│   ├── component-sizes.json
│   └── ...
├── tokens/               # Generated CSS (don't edit!)
│   ├── colors.css
│   ├── spacing.css
│   └── ...
├── dist/                 # Generated outputs
│   ├── tokens.json
│   └── tokens.js
└── config.json           # Style Dictionary config
```

## Token Format

Tokens follow the **Design Tokens Format Module** (W3C):

```json
{
  "category": {
    "token-name": {
      "value": "#FF0000",
      "type": "color",
      "comment": "Description"
    }
  }
}
```

### Examples

**Color Token:**
```json
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

**Spacing Token:**
```json
{
  "spacing": {
    "4": {
      "value": "1rem",
      "type": "dimension",
      "comment": "16px"
    }
  }
}
```

## Usage

### In CSS/HTML
```html
<link rel="stylesheet" href="tokens/tokens.css">

<style>
  .button {
    background: var(--color-primary);
    padding: var(--spacing-4);
  }
</style>
```

### In JavaScript
```javascript
import tokens from './dist/tokens.js';

const primaryColor = tokens.colorPrimary; // "#18181B"
```

### In React/Vue
```jsx
import tokens from './dist/tokens.js';

const Button = styled.button`
  background: ${tokens.colorPrimary};
  padding: ${tokens.spacing4};
`;
```

## Extending

### Add New Tokens

1. Edit or create JSON file in `tokens-json/`
2. Run `npm run build:tokens`
3. Generated files update automatically

**Example - Add new color:**
```json
{
  "color": {
    "accent": {
      "value": "#3B82F6",
      "type": "color",
      "comment": "Accent color for highlights"
    }
  }
}
```

### Add New Platform

Edit `config.json` to add new platform outputs:

```json
{
  "platforms": {
    "scss": {
      "transformGroup": "scss",
      "buildPath": "dist/",
      "files": [{
        "destination": "tokens.scss",
        "format": "scss/variables"
      }]
    }
  }
}
```

## Semantic Tokens

Use references for semantic tokens:

```json
{
  "color": {
    "brand": {
      "value": "#18181B",
      "type": "color"
    },
    "button": {
      "primary": {
        "value": "{color.brand.value}",
        "type": "color",
        "comment": "References brand color"
      }
    }
  }
}
```

## Dark Mode Support

Create separate theme files:

**tokens-json/themes/light.json:**
```json
{
  "color": {
    "background": {
      "value": "#FFFFFF",
      "type": "color"
    }
  }
}
```

**tokens-json/themes/dark.json:**
```json
{
  "color": {
    "background": {
      "value": "#09090B",
      "type": "color"
    }
  }
}
```

## CI/CD Integration

### GitHub Actions
```yaml
name: Build Tokens
on: [push]
jobs:
  build:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v2
      - run: npm install
      - run: npm run build:tokens
      - uses: actions/upload-artifact@v2
        with:
          name: tokens
          path: tokens/
```

## Benefits

✅ **Single Source of Truth** - One JSON file generates multiple outputs
✅ **Platform Agnostic** - Use same tokens in web, iOS, Android
✅ **Type Safe** - Generate TypeScript definitions
✅ **Tooling Integration** - Sync with Figma, Sketch, etc.
✅ **Version Control** - Track token changes in Git
✅ **Documentation** - Auto-generate token documentation
✅ **Validation** - Catch token errors before deployment

## Migration from CSS

Your current CSS tokens can coexist with JSON tokens:
1. Add JSON tokens gradually
2. Build both systems in parallel
3. Migrate components one by one
4. Remove CSS tokens when ready

## Resources

- [Style Dictionary](https://amzn.github.io/style-dictionary/)
- [Design Tokens Format Module](https://www.w3.org/community/design-tokens/)
- [Tokens Studio (Figma Plugin)](https://tokens.studio/)

## Advanced Features

### Token Math
```json
{
  "spacing": {
    "base": { "value": "4px" },
    "double": { "value": "{spacing.base.value} * 2" }
  }
}
```

### Custom Transforms
Create custom transforms in `config.js` for special formatting needs.

### Multi-Brand Support
Organize tokens by brand for white-label products.
