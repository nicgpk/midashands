# Installation Guide

How to use this design system in your projects.

## Quick Start

### 1. Download or Clone

**Option A: Clone with Git**
```bash
git clone https://github.com/YOUR_USERNAME/my-design-system.git
```

**Option B: Download ZIP**
Download from GitHub and extract to your project.

### 2. Include in Your HTML

Add these lines to your `<head>`:
```html
<!-- Design tokens (required) -->
<link rel="stylesheet" href="path/to/tokens/tokens.css">

<!-- Components you want to use -->
<link rel="stylesheet" href="path/to/components/button/button.css">
```

### 3. Use Components
```html
<button class="btn btn-primary">Get Started</button>
```

## File Structure
```
your-project/
├── design-system/          ← Paste the design system here
│   ├── tokens/
│   │   └── tokens.css
│   └── components/
│       └── button/
│           └── button.css
└── index.html             ← Your project files
```

## CDN Usage (Future)

Coming soon - host your design system and use via CDN:
```html
<link rel="stylesheet" href="https://cdn.example.com/design-system/v1/tokens.css">
<link rel="stylesheet" href="https://cdn.example.com/design-system/v1/button.css">
```

## Framework-Specific Guides

### React / Next.js

**Install:**
```bash
# Copy the CSS files to your public folder
cp -r design-system/tokens public/
cp -r design-system/components public/
```

**Import in your layout:**
```jsx
// app/layout.js or _app.js
import '/public/tokens/tokens.css';
import '/public/components/button/button.css';

export default function Layout({ children }) {
  return <html><body>{children}</body></html>;
}
```

**Use in components:**
```jsx
export default function MyComponent() {
  return (
    <button className="btn btn-primary">
      Click me
    </button>
  );
}
```

### Vue / Nuxt

**Import in your main CSS:**
```css
/* assets/main.css */
@import '../design-system/tokens/tokens.css';
@import '../design-system/components/button/button.css';
```

**Use in components:**
```vue
<template>
  <button class="btn btn-primary">
    Click me
  </button>
</template>
```

### Vanilla HTML

Simply link the CSS files:
```html
<!DOCTYPE html>
<html>
<head>
  <link rel="stylesheet" href="design-system/tokens/tokens.css">
  <link rel="stylesheet" href="design-system/components/button/button.css">
</head>
<body>
  <button class="btn btn-primary">Click me</button>
</body>
</html>
```

## Customization

To customize colors, spacing, or other tokens:

1. Open `tokens/colors.css` (or other token files)
2. Modify the CSS custom properties:
```css
:root {
  --color-primary: #your-color;
  --spacing-4: 1.5rem; /* Increase spacing */
}
```

3. All components will update automatically!

## Best Practices

1. **Always import tokens first** - Components depend on tokens
2. **Only import what you need** - Don't load all components if you only use buttons
3. **Don't modify component CSS** - Customize via tokens instead
4. **Keep design system separate** - Don't mix with your project's CSS

## Troubleshooting

### Styles not applying
- Check that `tokens.css` is loaded before component CSS
- Verify file paths are correct
- Check browser console for 404 errors

### Colors look wrong
- Make sure you imported `tokens/colors.css`
- Check that no other CSS is overriding with higher specificity

### Icons not showing
- Verify SVG code is properly formatted
- Check that icon size tokens are loaded

## Getting Help

- 📚 [View Examples](../examples/)
- 📖 [Component Docs](../components/)
- 🐛 [Report Issues](https://github.com/YOUR_USERNAME/my-design-system/issues)