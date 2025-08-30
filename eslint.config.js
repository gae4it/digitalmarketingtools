import astro from "eslint-plugin-astro";

export default [
  // Add the Astro configuration
  ...astro.configs.recommended,
  {
    files: ["**/*.ts", "**/*.js"],
    rules: {
      // Add any additional TypeScript/JavaScript rules here
    },
  },
];