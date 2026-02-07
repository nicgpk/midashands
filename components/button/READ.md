# Button Component

A fully-featured, production-ready button component with multiple variants, sizes, states, and configurations.

## Installation

### Step 1: Import Tokens
```html
<link rel="stylesheet" href="path/to/tokens/tokens.css">
```

### Step 2: Import Button Component
```html
<link rel="stylesheet" href="path/to/components/button/button.css">
```

### Step 3: Use It
```html
<button class="btn btn-primary">Click me</button>
```

## Features

- ✓ 6 visual variants (Primary, Secondary, Outline, Ghost, Soft, Destructive)
- ✓ 3 sizes (Small, Default, Large)
- ✓ Icon support (icon-only, left, and right positions)
- ✓ Modern loading state with animated dots
- ✓ Badge and notification indicators
- ✓ Tooltips (CSS-only)
- ✓ Split buttons
- ✓ Full-width option
- ✓ Button groups with active states (horizontal and vertical)
- ✓ Works with `<button>`, `<a>`, and `<input>` elements
- ✓ Fully accessible (ARIA, focus states, keyboard navigation)
- ✓ Dark mode support (automatic)
- ✓ Fully tokenized (customizable via design tokens)

## Basic Usage

### Variants
```html
<!-- Primary - Main actions -->
<button class="btn btn-primary">Primary</button>

<!-- Secondary - Less prominent actions -->
<button class="btn btn-secondary">Secondary</button>

<!-- Outline - Bordered style -->
<button class="btn btn-outline">Outline</button>

<!-- Ghost - Minimal style -->
<button class="btn btn-ghost">Ghost</button>

<!-- Soft - Subtle colored background -->
<button class="btn btn-soft">Soft</button>

<!-- Destructive - Delete/danger actions -->
<button class="btn btn-destructive">Delete</button>
```

### Sizes
```html
<button class="btn btn-primary btn-sm">Small</button>
<button class="btn btn-primary">Default</button>
<button class="btn btn-primary btn-lg">Large</button>
```

### States
```html
<!-- Disabled -->
<button class="btn btn-primary" disabled>Disabled</button>

<!-- Loading -->
<button class="btn btn-primary btn-loading" disabled>Loading...</button>
```

## Advanced Usage

### Icon-Only Buttons
```html
<button class="btn btn-primary btn-icon" aria-label="Edit">
  <svg><!-- icon --></svg>
</button>
```

**Important:** Always include `aria-label` for accessibility!

### Buttons with Icon + Text
```html
<button class="btn btn-primary btn-with-icon">
  <svg><!-- icon --></svg>
  Button Text
</button>
```

### Full-Width Buttons

Perfect for mobile layouts and forms:
```html
<button class="btn btn-primary btn-block">Sign Up</button>
```

### Links Styled as Buttons
```html
<a href="/signup" class="btn btn-primary">Get Started</a>
```

### Button Groups

**Horizontal:**
```html
<div class="btn-group">
  <button class="btn btn-outline">Left</button>
  <button class="btn btn-outline">Center</button>
  <button class="btn btn-outline">Right</button>
</div>
```

**Vertical:**
```html
<div class="btn-group-vertical">
  <button class="btn btn-outline">Option 1</button>
  <button class="btn btn-outline">Option 2</button>
  <button class="btn btn-outline">Option 3</button>
</div>
```

## Real-World Examples

### Form Actions
```html
<button class="btn btn-primary">Save Changes</button>
<button class="btn btn-outline">Cancel</button>
```

### Call-to-Action
```html
<a href="/signup" class="btn btn-primary btn-lg btn-block">
  Start Free Trial
</a>
```

### Toolbar
```html
<div class="btn-group">
  <button class="btn btn-ghost btn-sm btn-icon" aria-label="Undo">
    <svg><!-- undo icon --></svg>
  </button>
  <button class="btn btn-ghost btn-sm btn-icon" aria-label="Redo">
    <svg><!-- redo icon --></svg>
  </button>
</div>
```

### Loading State (Form Submit)
```html
<button class="btn btn-primary btn-loading" disabled aria-busy="true">
  Submitting...
</button>
```

### Badges & Notifications
```html
<!-- Notification count -->
<button class="btn btn-primary btn-has-badge">
  Messages
  <span class="btn-badge">3</span>
</button>

<!-- Notification dot -->
<button class="btn btn-outline btn-has-badge">
  Updates
  <span class="btn-badge-dot"></span>
</button>
```

### Tooltips
```html
<button class="btn btn-ghost btn-icon" data-tooltip="Edit document" aria-label="Edit">
  <svg><!-- icon --></svg>
</button>
```

### Split Buttons
```html
<div class="btn-split">
  <button class="btn btn-primary">Save</button>
  <button class="btn btn-primary btn-icon" aria-label="More options">
    <svg><!-- dropdown icon --></svg>
  </button>
</div>
```

## Customization

All button styles use design tokens. To customize globally:
```css
/* In your tokens/colors.css */
:root {
  --color-primary: #your-brand-color;
  --color-primary-foreground: #ffffff;
}
```

To create a custom variant:
```css
.btn-custom {
  background: var(--color-accent);
  color: var(--color-accent-foreground);
}
```

## Accessibility

- All interactive states (hover, focus, active) have visual feedback
- Focus states use visible outlines for keyboard navigation
- Icon-only buttons require `aria-label` attributes
- Disabled buttons are not keyboard-focusable
- Loading state maintains button dimensions (no layout shift)

## Browser Support

Works in all modern browsers:
- Chrome/Edge (latest)
- Firefox (latest)
- Safari (latest)
- Mobile browsers

## Dependencies

- `tokens/tokens.css` - Design tokens (required)
- Modern browser with CSS custom properties support

## Getting Icons

We use [Lucide Icons](https://lucide.dev) (same as shadcn/ui):
1. Browse icons at https://lucide.dev/icons
2. Click an icon
3. Copy the SVG code
4. Paste into your button

## Common Issues

### Icons not sizing correctly
Make sure your SVG has `width="24" height="24"` attributes. The CSS will scale them appropriately.

### Loading dots not showing
Ensure the button has both `btn-loading` class AND `disabled` attribute. Loading uses a modern three-dot animation.

### Button groups have gaps
Check that there's no whitespace between `</button>` and `<button>` tags in your HTML.

## Framework Integration

### React
```jsx
<button className="btn btn-primary">Click me</button>
```

### Vue
```vue
<button class="btn btn-primary">Click me</button>
```

### Vanilla JS
```javascript
const btn = document.querySelector('.btn');
btn.addEventListener('click', () => {
  btn.classList.add('btn-loading');
  btn.disabled = true;
});
```

## License

MIT - Free to use in personal and commercial projects