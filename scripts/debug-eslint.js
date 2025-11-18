/**
 * Debug script to inspect ESLint Astro configuration
 * Usage: node scripts/debug-eslint.js
 * Purpose: Shows the structure and rules of astro.configs.recommended
 */
import astro from "eslint-plugin-astro";

console.log("astro.configs.recommended structure:");
console.log("- Length:", astro.configs.recommended.length);

astro.configs.recommended.forEach((config, index) => {
  console.log(`\nConfig ${index}:`);
  console.log("- files:", config.files);
  console.log("- plugins:", Object.keys(config.plugins || {}));
  if (config.rules) {
    console.log("- rules:", Object.keys(config.rules));
    Object.entries(config.rules).forEach(([rule, value]) => {
      console.log(`  ${rule}: ${JSON.stringify(value)}`);
    });
  }
  if (config.languageOptions) {
    console.log("- parser:", config.languageOptions.parser?.name || "default");
  }
});
