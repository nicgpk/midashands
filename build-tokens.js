const StyleDictionary = require('style-dictionary');
const fs = require('fs');
const path = require('path');

// Custom name transform to match existing variable names
StyleDictionary.registerTransform({
  name: 'name/cti/kebab-custom',
  type: 'name',
  transformer: function(token, options) {
    const path = token.path;

    // Custom mappings for specific tokens to match existing names
    const customMappings = {
      'font-family-sans': 'font-sans',
      'font-family-mono': 'font-mono',
      'font-line-height-none': 'line-height-none',
      'font-line-height-tight': 'line-height-tight',
      'font-line-height-snug': 'line-height-snug',
      'font-line-height-normal': 'line-height-normal',
      'font-line-height-relaxed': 'line-height-relaxed',
      'font-line-height-loose': 'line-height-loose',
      'color-base-background': 'color-background',
      'color-base-foreground': 'color-foreground',
      'size-component-height-sm': 'component-height-sm',
      'size-component-height-default': 'component-height-default',
      'size-component-height-lg': 'component-height-lg',
      'size-icon-sm': 'icon-size-sm',
      'size-icon-default': 'icon-size-default',
      'size-icon-lg': 'icon-size-lg',
      'z-index-base': 'z-index-base',
      'z-index-elevated': 'z-index-elevated',
      'z-index-sticky': 'z-index-sticky',
      'z-index-fixed': 'z-index-fixed',
      'z-index-overlay': 'z-index-overlay',
      'z-index-modal': 'z-index-modal',
      'z-index-popover': 'z-index-popover',
      'z-index-tooltip': 'z-index-tooltip',
      'z-index-dropdown': 'z-index-dropdown',
      'z-index-button-hover': 'z-index-button-hover',
      'z-index-button-active': 'z-index-button-active',
      'z-index-button-focus': 'z-index-button-focus',
      'transition-preset-fast': 'transition-fast',
      'transition-preset-normal': 'transition-normal',
      'transition-preset-slow': 'transition-slow',
      'transition-preset-colors': 'transition-colors',
      'transition-preset-opacity': 'transition-opacity',
      'transition-preset-transform': 'transition-transform',
      'transition-preset-all': 'transition-all',
      'shadow-inner-default': 'shadow-inner'
    };

    // Generate base name from path
    let name = path.join('-');

    // Apply custom mapping if it exists
    if (customMappings[name]) {
      return customMappings[name];
    }

    // Handle font-lineHeight-* tokens - convert to line-height-*
    if (name.match(/^font-lineHeight-/)) {
      return name.replace('font-lineHeight-', 'line-height-');
    }

    return name;
  }
});

// Custom CSS format with headers
StyleDictionary.registerFormat({
  name: 'css/variables-with-header',
  formatter: function({ dictionary, file, options }) {
    // Extract category from destination filename
    const filename = file.destination || '';
    const categoryMap = {
      'colors.css': 'color',
      'spacing.css': 'spacing',
      'typography.css': 'font',
      'border-radius.css': 'radius',
      'component-sizes.css': 'size',
      'shadows.css': 'shadow',
      'z-index.css': 'zIndex',
      'transitions.css': 'transition'
    };
    const category = categoryMap[filename] || file.filter?.attributes?.category || '';

    // Map category to header info
    const headers = {
      color: {
        title: 'COLORS',
        description: 'Color palette for the design system.\nBased on shadcn/ui zinc color scheme.',
        usage: 'background: var(--color-primary);'
      },
      spacing: {
        title: 'SPACING',
        description: 'Consistent spacing scale using rem units.\nBased on 4px (0.25rem) baseline.',
        usage: 'padding: var(--spacing-4);'
      },
      font: {
        title: 'TYPOGRAPHY',
        description: 'Font sizes, weights, and line heights.\nUses Geist font - the same font as shadcn/ui.',
        usage: 'font-size: var(--font-size-lg);\nfont-weight: var(--font-weight-medium);'
      },
      radius: {
        title: 'BORDER RADIUS',
        description: 'Consistent corner rounding for components.',
        usage: 'border-radius: var(--radius-md);'
      },
      size: {
        title: 'COMPONENT SIZES',
        description: 'Standard sizes for components like buttons and inputs.',
        usage: 'height: var(--component-height-default);'
      },
      shadow: {
        title: 'SHADOWS',
        description: 'Consistent shadow system for depth and elevation.\nBased on shadcn/ui shadow scale.',
        usage: 'box-shadow: var(--shadow-sm);'
      },
      zIndex: {
        title: 'Z-INDEX',
        description: 'Layering system for stacking elements.',
        usage: 'z-index: var(--z-index-dropdown);'
      },
      transition: {
        title: 'TRANSITIONS',
        description: 'Consistent animation timing for interactions.',
        usage: 'transition: all var(--transition-normal);'
      }
    };

    const header = headers[category] || { title: 'TOKENS', description: 'Design tokens', usage: '' };

    let output = `/**\n * DESIGN TOKENS - ${header.title}\n * \n`;
    if (header.description) {
      header.description.split('\n').forEach(line => {
        output += ` * ${line}\n`;
      });
      output += ` * \n`;
    }
    if (header.usage) {
      output += ` * Usage:\n`;
      header.usage.split('\n').forEach(line => {
        output += ` *   ${line}\n`;
      });
    }
    output += ` */\n\n`;

    // Add font imports for typography
    if (category === 'font') {
      output += `/* Import Geist font from Google Fonts */\n`;
      output += `@import url('https://fonts.googleapis.com/css2?family=Geist:wght@100;200;300;400;500;600;700;800;900&display=swap');\n\n`;
      output += `/* Fallback: Geist Mono for code */\n`;
      output += `@import url('https://fonts.googleapis.com/css2?family=Geist+Mono:wght@100;200;300;400;500;600;700;800;900&display=swap');\n\n`;
    }

    output += `:root {\n`;

    dictionary.allTokens.forEach(token => {
      if (token.comment) {
        output += `  /* ${token.comment} */\n`;
      }
      // Ensure variable name starts with --
      const varName = token.name.startsWith('--') ? token.name : `--${token.name}`;
      output += `  ${varName}: ${token.value};\n`;
    });

    output += `}\n`;

    // Add animations for transitions
    if (category === 'transition') {
      output += `\n/* Animations */\n`;
      output += `@keyframes spin {\n`;
      output += `  from {\n    transform: rotate(0deg);\n  }\n`;
      output += `  to {\n    transform: rotate(360deg);\n  }\n`;
      output += `}\n\n`;
      output += `@keyframes dotPulse {\n`;
      output += `  0% {\n`;
      output += `    opacity: 1;\n`;
      output += `    box-shadow: var(--dot-spacing) 0 0 transparent, calc(var(--dot-spacing) * -1) 0 0 transparent;\n`;
      output += `  }\n`;
      output += `  33% {\n`;
      output += `    opacity: 1;\n`;
      output += `    box-shadow: var(--dot-spacing) 0 0 transparent, calc(var(--dot-spacing) * -1) 0 0 var(--dot-color);\n`;
      output += `  }\n`;
      output += `  66% {\n`;
      output += `    opacity: 1;\n`;
      output += `    box-shadow: var(--dot-spacing) 0 0 var(--dot-color), calc(var(--dot-spacing) * -1) 0 0 var(--dot-color);\n`;
      output += `  }\n`;
      output += `  100% {\n`;
      output += `    opacity: 1;\n`;
      output += `    box-shadow: var(--dot-spacing) 0 0 transparent, calc(var(--dot-spacing) * -1) 0 0 transparent;\n`;
      output += `  }\n`;
      output += `}\n`;
    }

    // Add dark mode for shadows
    if (category === 'shadow') {
      output += `\n/* Dark Mode Adjustments */\n`;
      output += `@media (prefers-color-scheme: dark) {\n`;
      output += `  :root {\n`;
      output += `    /* Stronger shadows in dark mode for better visibility */\n`;
      output += `    --shadow-xs: 0 1px 2px 0 rgba(0, 0, 0, 0.3);\n`;
      output += `    --shadow-sm: 0 1px 3px 0 rgba(0, 0, 0, 0.4), 0 1px 2px -1px rgba(0, 0, 0, 0.4);\n`;
      output += `    --shadow-md: 0 4px 6px -1px rgba(0, 0, 0, 0.4), 0 2px 4px -2px rgba(0, 0, 0, 0.4);\n`;
      output += `    --shadow-lg: 0 10px 15px -3px rgba(0, 0, 0, 0.4), 0 4px 6px -4px rgba(0, 0, 0, 0.4);\n`;
      output += `    --shadow-xl: 0 20px 25px -5px rgba(0, 0, 0, 0.4), 0 8px 10px -6px rgba(0, 0, 0, 0.4);\n`;
      output += `    --shadow-2xl: 0 25px 50px -12px rgba(0, 0, 0, 0.5);\n`;
      output += `    \n`;
      output += `    /* Inner shadows for dark mode */\n`;
      output += `    --shadow-inner: inset 0 2px 4px 0 rgba(0, 0, 0, 0.3);\n`;
      output += `    --shadow-inner-sm: inset 0 1px 2px 0 rgba(0, 0, 0, 0.2);\n`;
      output += `    --shadow-inner-md: inset 0 2px 4px 0 rgba(0, 0, 0, 0.4);\n`;
      output += `    --shadow-inner-lg: inset 0 4px 6px 0 rgba(0, 0, 0, 0.5);\n`;
      output += `  }\n`;
      output += `}\n`;
    }

    return output;
  }
});

// Register custom transform group for CSS
StyleDictionary.registerTransformGroup({
  name: 'custom/css',
  transforms: [
    'attribute/cti',
    'name/cti/kebab-custom',
    'time/seconds',
    'content/icon',
    'size/rem',
    'color/css'
  ]
});

// Load config
const config = require('./config.json');

// Replace the format and transform group with our custom ones
config.platforms.css.transformGroup = 'custom/css';
config.platforms.css.files = config.platforms.css.files.map(file => ({
  ...file,
  format: 'css/variables-with-header'
}));

// Build tokens
const sd = StyleDictionary.extend(config);
console.log('Building tokens...\n');
sd.buildAllPlatforms();
console.log('\n✅ Tokens built successfully!');
console.log('\nGenerated files:');
console.log('  tokens/*.css - CSS custom properties');
console.log('  dist/tokens.json - Flat JSON format');
console.log('  dist/tokens.js - JavaScript/ES6 module');
