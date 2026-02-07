const fs = require('fs');
const path = require('path');

// Load all token files
const colors = require('./tokens-json/colors.json');
const spacing = require('./tokens-json/spacing.json');
const typography = require('./tokens-json/typography.json');
const radius = require('./tokens-json/border-radius.json');
const shadows = require('./tokens-json/shadows.json');
const sizes = require('./tokens-json/component-sizes.json');

// Convert to Figma Tokens format
function convertToFigmaFormat(tokens, tokenType) {
  const result = {};

  function traverse(obj, path = []) {
    for (const key in obj) {
      const value = obj[key];

      if (value.value !== undefined) {
        // This is a token
        const tokenPath = [...path, key].join('/');
        const tokenName = [...path, key].join('-');

        // Convert value format
        let figmaValue = value.value;

        // Remove 'rem' for spacing values in Figma (use pixels)
        if (tokenType === 'spacing' || tokenType === 'borderRadius') {
          figmaValue = value.value.replace('rem', '').trim();
          // Convert rem to pixels (1rem = 16px)
          if (!isNaN(figmaValue)) {
            figmaValue = String(parseFloat(figmaValue) * 16);
          }
        }

        // Map type to Figma type
        const typeMap = {
          'color': 'color',
          'dimension': tokenType === 'borderRadius' ? 'borderRadius' : 'sizing',
          'fontFamily': 'fontFamilies',
          'fontWeight': 'fontWeights',
          'number': 'lineHeights',
          'shadow': 'boxShadow'
        };

        result[tokenName] = {
          value: figmaValue,
          type: typeMap[value.type] || value.type,
          description: value.comment || ''
        };
      } else {
        // This is a nested object, traverse deeper
        traverse(value, [...path, key]);
      }
    }
  }

  traverse(tokens);
  return result;
}

// Build Figma tokens structure
const figmaTokens = {
  "$themes": [],
  "$metadata": {
    "tokenSetOrder": [
      "colors",
      "spacing",
      "typography",
      "radius",
      "shadows",
      "sizes"
    ]
  },
  "colors": convertToFigmaFormat(colors, 'color'),
  "spacing": convertToFigmaFormat(spacing, 'spacing'),
  "typography": convertToFigmaFormat(typography, 'typography'),
  "radius": convertToFigmaFormat(radius, 'borderRadius'),
  "shadows": convertToFigmaFormat(shadows, 'shadow'),
  "sizes": convertToFigmaFormat(sizes, 'sizing')
};

// Write to file
const outputPath = path.join(__dirname, 'figma-tokens.json');
fs.writeFileSync(outputPath, JSON.stringify(figmaTokens, null, 2));

console.log('✅ Figma tokens generated successfully!');
console.log(`📁 Output: ${outputPath}`);
console.log('\nNext steps:');
console.log('1. Install "Tokens Studio for Figma" plugin in Figma');
console.log('2. Load figma-tokens.json into the plugin');
console.log('3. Apply tokens to your Figma components');
