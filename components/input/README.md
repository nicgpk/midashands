# Input Component

Form input component matching shadcn/ui dark mode styling.

## Features

- **Multiple Input Types**: text, email, password, number, tel, url, date, time, file, etc.
- **Size Variants**: Small, default, and large sizes
- **Icon Support**: Icons on left or right side
- **File Input**: Styled file upload with custom button
- **Textarea**: Multi-line text input with optional resize control
- **Validation States**: Error and success styling
- **States**: Disabled and readonly support
- **Focus Ring**: shadcn-style focus indication
- **Dark Mode**: Optimized for dark backgrounds
- **Fully Accessible**: Proper labels, ARIA attributes, and keyboard support

## Dependencies

- `tokens/tokens.css` - Design tokens

## Usage

### Basic Input

```html
<label class="form-label" for="email">Email</label>
<input type="email" id="email" class="input" placeholder="email@example.com">
```

### Input Sizes

```html
<!-- Small -->
<input type="text" class="input input-sm" placeholder="Small input">

<!-- Default -->
<input type="text" class="input" placeholder="Default input">

<!-- Large -->
<input type="text" class="input input-lg" placeholder="Large input">
```

### With Icon (Left)

```html
<div class="input-group">
  <span class="input-group-icon">
    <svg>...</svg>
  </span>
  <input type="text" class="input" placeholder="Search...">
</div>
```

### With Icon (Right)

```html
<div class="input-group input-group-right">
  <input type="text" class="input" placeholder="Select date">
  <span class="input-group-icon">
    <svg>...</svg>
  </span>
</div>
```

### Textarea

```html
<textarea class="input textarea" placeholder="Enter your message..."></textarea>

<!-- No resize -->
<textarea class="input textarea textarea-no-resize" rows="4"></textarea>
```

### File Input

```html
<input type="file" class="input">

<!-- Multiple files -->
<input type="file" class="input" multiple>
```

### With Validation

```html
<!-- Error state -->
<input type="email" class="input input-error" value="invalid-email">
<p class="form-error">Please enter a valid email address</p>

<!-- Success state -->
<input type="text" class="input input-success" value="johndoe">
<p class="form-description" style="color: #22c55e;">Username is available!</p>
```

## Classes

### Input Classes

- `.input` - Base input class (required)
- `.input-sm` - Small size variant
- `.input-lg` - Large size variant
- `.input-error` - Error state styling
- `.input-success` - Success state styling

### Textarea Classes

- `.textarea` - Base textarea (use with `.input`)
- `.textarea-no-resize` - Disable resize handle

### Form Helper Classes

- `.form-label` - Label styling
- `.form-description` - Helper text below input
- `.form-error` - Error message styling

### Input Group Classes

- `.input-group` - Container for input with icon
- `.input-group-icon` - Icon container (left by default)
- `.input-group-right` - Modifier for right-aligned icon

## Styling

The input component uses these design tokens:

```css
/* Colors */
--color-background      /* Input background */
--color-foreground      /* Input text */
--color-input           /* Border color */
--color-ring            /* Focus ring */
--color-muted-foreground /* Placeholder text */
--color-destructive     /* Error states */

/* Spacing */
--spacing-2, --spacing-3, --spacing-4  /* Padding */
--spacing-10           /* Icon offset */

/* Sizing */
--component-height-sm, --component-height-default, --component-height-lg

/* Border radius */
--radius-sm, --radius-md

/* Typography */
--font-sans, --font-size-xs, --font-size-sm, --font-size-base
```

## Accessibility

### Best Practices

1. **Always use labels**: Connect labels to inputs with `for` and `id`
   ```html
   <label class="form-label" for="email">Email</label>
   <input type="email" id="email" class="input">
   ```

2. **Use appropriate input types**: Helps with validation and mobile keyboards
   - `type="email"` for email addresses
   - `type="tel"` for phone numbers
   - `type="number"` for numeric input
   - `type="url"` for URLs

3. **Provide helpful text**: Use descriptions and error messages
   ```html
   <p class="form-description">We'll never share your email</p>
   <p class="form-error">This field is required</p>
   ```

4. **Mark required fields**: Use the `required` attribute
   ```html
   <input type="email" class="input" required>
   ```

5. **Support keyboard navigation**: All inputs are keyboard accessible by default

## Input Types Supported

- `text` - Plain text
- `email` - Email addresses
- `password` - Password fields
- `number` - Numeric input
- `tel` - Telephone numbers
- `url` - URLs
- `date` - Date picker
- `time` - Time picker
- `datetime-local` - Date and time
- `file` - File upload
- `search` - Search fields

## Examples

See [input.html](./input.html) for complete interactive examples including:

- All input types
- Size variants
- Icons (left and right)
- File uploads
- Validation states
- Disabled and readonly states
- Textarea variants
- Complete form example
- Accessibility guidelines
