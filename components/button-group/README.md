# Button Group Component

Groups of buttons with connected borders and toggle states.

## Features

- **Horizontal Groups**: Seamlessly connected buttons in a row
- **Vertical Groups**: Stacked buttons with connected borders
- **Split Buttons**: Primary action with attached dropdown trigger
- **Toggle States**: Active/pressed states with proper ARIA attributes
- **Z-index Management**: Proper layering for hover and focus states
- **Multi-variant Support**: Works with all button variants (primary, secondary, outline, ghost, soft, destructive)

## Dependencies

- `tokens/tokens.css` - Design tokens
- `components/button/button.css` - Base button component

## Usage

### Horizontal Button Group

```html
<div class="btn-group">
  <button class="btn btn-outline btn-active" aria-pressed="true">Left</button>
  <button class="btn btn-outline" aria-pressed="false">Center</button>
  <button class="btn btn-outline" aria-pressed="false">Right</button>
</div>
```

### Vertical Button Group

```html
<div class="btn-group-vertical">
  <button class="btn btn-outline">Option 1</button>
  <button class="btn btn-outline btn-active" aria-pressed="true">Option 2</button>
  <button class="btn btn-outline">Option 3</button>
</div>
```

### Split Button

```html
<div class="btn-split">
  <button class="btn btn-primary">Save</button>
  <button class="btn btn-primary btn-icon" aria-label="More save options">
    <svg>...</svg>
  </button>
</div>
```

## Classes

### Layout Classes

- `.btn-group` - Horizontal button group container
- `.btn-group-vertical` - Vertical button group container
- `.btn-split` - Split button container

### State Classes

- `.btn-active` - Marks a button as active/selected in a group
- `aria-pressed="true"` - ARIA attribute for toggle button semantics

## JavaScript

The component includes toggle functionality that:

- Handles single-selection in button groups
- Updates both visual state (`.btn-active`) and ARIA attributes
- Respects disabled and loading states
- Works for both horizontal and vertical groups

```javascript
// Automatically included in button-group.html
// Handles click events on button groups
```

## Accessibility

- Uses `aria-pressed` for toggle button semantics
- Maintains proper focus management with z-index layering
- Works with keyboard navigation
- Includes `aria-label` for icon-only split button triggers

## Best Practices

1. **Single Selection**: Use button groups for mutually exclusive options (like radio buttons)
2. **Split Buttons**: Combine with dropdown menus for related actions
3. **Consistent Variants**: Keep all buttons in a group the same variant for visual consistency
4. **Aria Attributes**: Always include `aria-pressed` for toggle states

## Examples

See [button-group.html](./button-group.html) for complete interactive examples including:

- Multiple button variants in groups
- Toolbar with icon buttons
- Alignment controls
- View switchers
- Split buttons for various actions
