# Button Component

A flexible, accessible button component with multiple variants and sizes.

## Installation

1. Import the tokens:
```html
<link rel="stylesheet" href="path/to/tokens/tokens.css">
```

2. Import the button component:
```html
<link rel="stylesheet" href="path/to/components/button/button.css">
```

## Basic Usage
```html
<button class="btn btn-primary">Click me</button>
```

## Variants

- **Primary** (`.btn-primary`) - Main action buttons
- **Secondary** (`.btn-secondary`) - Secondary actions
- **Outline** (`.btn-outline`) - Less prominent actions
- **Ghost** (`.btn-ghost`) - Minimal style
- **Destructive** (`.btn-destructive`) - Delete/danger actions

## Sizes

- **Small** (`.btn-sm`) - Compact spaces
- **Default** - Standard size
- **Large** (`.btn-lg`) - Prominent actions

## Examples

### Primary button
```html
<button class="btn btn-primary">Save Changes</button>
```

### Small outline button
```html
<button class="btn btn-outline btn-sm">Cancel</button>
```

### Large destructive button
```html
<button class="btn btn-destructive btn-lg">Delete Account</button>
```

## Accessibility

- Buttons include focus-visible states
- Disabled state prevents interaction
- Semantic HTML button elements

## Dependencies

- `tokens/tokens.css` - Design tokens
```

3. Save

---

## **4. Test Your Button!**

1. Right-click on **`components/button/button.html`**
2. Click **"Open with Live Server"**
3. See all your beautiful buttons! 🎉

---

# **Part C: Push to GitHub**

Now let's share your work with the world!

---

## **1. Check What Changed**

In VS Code, look at the left sidebar. You should see a number on the **Source Control** icon (looks like a branching tree).

Click on **Source Control**.

You'll see all the files you created listed.

**What this shows:** All the new files you created that aren't on GitHub yet.

---

## **2. Stage Your Changes**

1. In the Source Control panel, click the **"+"** (plus) icon next to "Changes"
   - This stages ALL your files at once

**What this does:** Tells Git "yes, I want to save all these files"

---

## **3. Commit Your Changes**

1. At the top of the Source Control panel, there's a text box that says "Message"
2. Type: `Add design tokens and button component`
3. Click the **checkmark** ✓ above the message box

**What this does:** Saves a snapshot of your work with a description

---

## **4. Push to GitHub**

1. Click the **"..."** (three dots) at the top of Source Control panel
2. Click **"Push"**

**If this is your first time:**
- VS Code might ask you to log in to GitHub
- Follow the prompts to authorize VS Code
- Then click Push again

**What this does:** Uploads your code to GitHub!

---

## **5. View Your Work on GitHub**

1. Go to your GitHub repo in your browser
2. Refresh the page
3. You should see all your folders and files! 🎉

**Your repo now has:**
```
my-design-system/
├── README.md
├── tokens/
│   ├── colors.css
│   ├── spacing.css
│   ├── typography.css
│   ├── border-radius.css
│   └── tokens.css
├── components/
│   └── button/
│       ├── button.css
│       ├── button.html
│       └── README.md
├── examples/
│   └── test.html
└── docs/