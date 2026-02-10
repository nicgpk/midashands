# Button Component

A fully-featured, production-ready button component with shadcn/ui dark mode styling. Multiple variants, sizes, states, and configurations included.

**Note:** Button groups and split buttons have been moved to the [button-group](../button-group/) component.

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

- ✅ **6 visual variants** - Primary, Secondary, Outline, Tertiary, Soft, Destructive
- ✅ **3 sizes** - Small, Default, Large
- ✅ **Icon support** - Icon-only, left, and right positions
- ✅ **Loading states** - Modern animated dot spinner
- ✅ **Badges** - Notification counts and dots
- ✅ **Tooltips** - Pure CSS hover tooltips
- ✅ **Full-width** - `btn-block` for responsive layouts
- ✅ **Link support** - Works with `<button>`, `<a>`, and `<input>`
- ✅ **shadcn/ui styling** - Dark mode first with focus rings
- ✅ **Fully accessible** - ARIA, focus states, keyboard navigation
- ✅ **Token-driven** - All styles use design tokens

**See also:** [Button Group Component](../button-group/) for button groups and split buttons

## Basic Usage

### Variants
```html
<!-- Primary - Main actions -->
<button class="btn btn-primary">Primary</button>

<!-- Secondary - Less prominent actions -->
<button class="btn btn-secondary">Secondary</button>

<!-- Outline - Bordered style -->
<button class="btn btn-outline">Outline</button>

<!-- Tertiary - Minimal style -->
<button class="btn btn-tertiary">Tertiary</button>

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

**Note:** Button groups have been moved to their own component for better organization.

See the **[Button Group Component](../button-group/)** for:
- Horizontal button groups
- Vertical button groups
- Split buttons
- Toggle states

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
  <button class="btn btn-tertiary btn-sm btn-icon" aria-label="Undo">
    <svg><!-- undo icon --></svg>
  </button>
  <button class="btn btn-tertiary btn-sm btn-icon" aria-label="Redo">
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
<button class="btn btn-tertiary btn-icon" data-tooltip="Edit document" aria-label="Edit">
  <svg><!-- icon --></svg>
</button>
```

### Split Buttons

Split buttons have been moved to the [Button Group Component](../button-group/).

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

- ✅ All interactive states (hover, focus, active) have visual feedback
- ✅ shadcn-style focus rings using `--shadow-focus-ring` token
- ✅ Icon-only buttons require `aria-label` attributes
- ✅ Disabled buttons are not keyboard-focusable
- ✅ Loading state maintains button dimensions (no layout shift)
- ✅ `aria-busy="true"` for loading states
- ✅ Proper color contrast ratios (WCAG AA compliant)

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