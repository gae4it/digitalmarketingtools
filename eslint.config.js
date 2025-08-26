import astro from "eslint-plugin-astro";
import tseslint from "@typescript-eslint/eslint-plugin";
import tsparser from "@typescript-eslint/parser";

export default [
  {
    files: ["**/*.astro"],
    plugins: { astro },
    languageOptions: {
      parser: tsparser,
    },
    rules: {
      ...astro.configs.recommended.rules,
    },
  },
  {
    files: ["**/*.ts", "**/*.js"],
    plugins: { "@typescript-eslint": tseslint },
    languageOptions: {
      parser: tsparser,
    },
    rules: {
      ...tseslint.configs.recommended.rules,
    },
  },
];