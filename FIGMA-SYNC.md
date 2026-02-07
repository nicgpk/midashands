# Syncing Design Tokens with Figma

This guide explains how to sync your JSON design tokens with Figma using the Tokens Studio plugin.

## 📦 Prerequisites

- Figma account (free or paid)
- Tokens Studio for Figma plugin
- Your tokens in JSON format (already set up!)

## 🚀 Quick Start

### 1. Generate Figma-Compatible Tokens

```bash
npm run build:figma
```

This creates `figma-tokens.json` with the correct format for Figma Tokens plugin.

### 2. Install Figma Plugin

1. Open Figma
2. Go to **Plugins** → **Browse plugins in Community**
3. Search for **"Tokens Studio for Figma"**
4. Click **Install** (or **Run** if already installed)

### 3. Load Tokens into Figma

**Method A: File Upload (Easiest)**
1. In Figma, run the Tokens Studio plugin
2. Click the **Settings** icon (⚙️)
3. Choose **Load from file**
4. Select `figma-tokens.json`
5. Click **Import**

**Method B: GitHub Sync (Best for teams)**
1. Push your project to GitHub
2. In Tokens Studio: **Settings** → **Sync Providers**
3. Select **GitHub**
4. Authenticate with GitHub
5. Configure:
   - Repository: `your-username/midashands`
   - Branch: `main`
   - File path: `figma-tokens.json`
6. Click **Save** and **Sync**

**Method C: URL (Public hosting)**
1. Host `figma-tokens.json` on a public URL
2. In Tokens Studio: **Settings** → **Sync Providers**
3. Select **URL**
4. Paste the URL
5. Click **Sync**

## 🎨 Using Tokens in Figma

### Applying Color Tokens

1. Select an element in Figma
2. Open Tokens Studio plugin
3. Click on a color token (e.g., `colors/primary`)
4. Token is applied to the selected element
5. Changes in JSON will update in Figma when you sync

### Applying Spacing/Sizing Tokens

1. Select an element
2. In Tokens Studio, go to **Spacing** tab
3. Click a spacing token for padding/margins
4. Or use in Auto Layout spacing

### Typography Tokens

1. Select text layer
2. Apply font family, size, weight, and line height tokens
3. Create text styles based on token combinations

### Creating Figma Styles from Tokens

1. Apply tokens to an element
2. Right-click → **Create style**
3. The style is now linked to your token
4. When token updates, style updates automatically

## 🔄 Two-Way Sync Workflow

### From Code to Figma

```bash
# 1. Edit tokens
vim tokens-json/colors.json

# 2. Build Figma tokens
npm run build:figma

# 3. Commit and push (if using GitHub sync)
git add .
git commit -m "Update primary color"
git push

# 4. In Figma plugin, click "Sync"
```

### From Figma to Code (Optional)

If designers update tokens in Figma:
1. In Tokens Studio, click **Export**
2. Download the JSON
3. Run conversion script to match your format
4. Commit changes to version control

## 📋 Token Mapping

### Color Tokens
- JSON: `color.primary.value: "#18181B"`
- Figma: `colors/primary` or `color-primary`

### Spacing Tokens
- JSON: `spacing.4.value: "1rem"`
- Figma: `spacing/4` → Converts to `16px`

### Typography Tokens
- JSON: `font.size.lg.value: "1.125rem"`
- Figma: `font-size-lg` → Converts to `18px`

### Radius Tokens
- JSON: `radius.md.value: "0.5rem"`
- Figma: `radius-md` → Converts to `8px`

### Shadow Tokens
- JSON: `shadow.sm.value: "0 1px 3px ..."`
- Figma: `shadow-sm` → Applied as effect

## 🔧 Advanced Configuration

### Custom Themes (Light/Dark Mode)

```json
{
  "$themes": [
    {
      "id": "light",
      "name": "Light",
      "selectedTokenSets": {
        "colors": "enabled",
        "colors/light": "enabled"
      }
    },
    {
      "id": "dark",
      "name": "Dark",
      "selectedTokenSets": {
        "colors": "enabled",
        "colors/dark": "enabled"
      }
    }
  ]
}
```

### Token References (Aliases)

In your JSON tokens, you can reference other tokens:

```json
{
  "color": {
    "brand": {
      "value": "#18181B"
    },
    "button": {
      "primary": {
        "value": "{color.brand.value}",
        "description": "References brand color"
      }
    }
  }
}
```

Figma Tokens will resolve these references automatically.

## 🎯 Best Practices

### 1. Naming Convention
Use consistent naming between code and Figma:
- Use hyphens or slashes for hierarchy
- Keep names descriptive but concise
- Example: `color-primary`, `spacing-4`, `font-size-lg`

### 2. Version Control
- Always commit `figma-tokens.json` to Git
- Tag releases when publishing design system updates
- Use branches for experimental token changes

### 3. Team Workflow
1. **Designers**: Update tokens in Figma
2. **Export**: Download updated tokens
3. **Developers**: Convert and merge into codebase
4. **Build**: Regenerate CSS tokens
5. **Deploy**: Update components with new tokens

### 4. Documentation
- Add descriptions to all tokens
- Document token purposes in comments
- Maintain a changelog for token updates

## 🔍 Troubleshooting

### Tokens not syncing
- Check internet connection
- Verify GitHub token hasn't expired
- Ensure file path in sync settings is correct

### Colors look different
- Figma uses RGB, ensure hex colors are consistent
- Check color profiles (sRGB vs Display P3)

### Spacing values incorrect
- Verify rem to pixel conversion (1rem = 16px)
- Check if Figma is set to correct units

### Plugin not loading
- Clear Figma cache
- Reinstall the plugin
- Check Figma plugin permissions

## 📚 Additional Resources

- [Tokens Studio Documentation](https://docs.tokens.studio/)
- [Design Tokens W3C Spec](https://www.w3.org/community/design-tokens/)
- [Figma API Documentation](https://www.figma.com/developers/api)

## 🤝 Alternative Tools

### 1. Figma Variables (Native)
Figma now has native variable support:
- Go to **Local variables** in Figma
- Create variables manually
- No plugin needed, but less automation

### 2. Style Dictionary + Figma API
For advanced needs, use Style Dictionary with Figma API:
- Programmatically create Figma styles
- Requires API token and custom scripts
- More control, more complexity

### 3. Specify
- [Specify.app](https://specifyapp.com/) - Commercial tool
- Automated sync between design and code
- Supports multiple platforms

## 📊 Workflow Summary

```
┌─────────────────┐
│  Edit JSON      │
│  tokens-json/   │
└────────┬────────┘
         │
         ▼
┌─────────────────┐
│  npm run        │
│  build:figma    │
└────────┬────────┘
         │
         ▼
┌─────────────────┐
│  figma-tokens   │
│  .json          │
└────────┬────────┘
         │
         ▼
┌─────────────────┐
│  Push to        │
│  GitHub         │
└────────┬────────┘
         │
         ▼
┌─────────────────┐
│  Figma Plugin   │
│  Syncs          │
└────────┬────────┘
         │
         ▼
┌─────────────────┐
│  Tokens applied │
│  to components  │
└─────────────────┘
```

---

**Need help?** Open an issue or check the [Tokens Studio Discord](https://discord.gg/tokens-studio).
