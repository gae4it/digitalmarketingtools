# ESLint Configuration for Astro Project

This document explains the ESLint configuration used in the project, defined in the `eslint.config.js` file.

## 📁 Configuration File

The `eslint.config.js` file uses the **new flat config** format for ESLint (ESLint 9+) instead of the legacy `.eslintrc.js` format.

## 🔧 Configuration Structure

```javascript
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
```

## 📋 Configuration Components

### 1. Astro Plugin

- **Import**: `eslint-plugin-astro@1.3.1`
- **Purpose**: Provides ESLint support for `.astro` files

### 2. Astro Recommended Configuration (`astro.configs.recommended`)

This configuration includes **5 separate configurations**:

#### Config 1: Plugin Registration

- Registers the `astro` plugin for use in rules

#### Config 2: Astro Files (\*.astro)

- **Target files**: `*.astro`, `**/*.astro`
- **Parser**: `astro-eslint-parser`
- **Purpose**: Handles parsing of Astro components

#### Config 3: JavaScript in Astro

- **Target files**: `**/*.astro/*.js`, `*.astro/*.js`
- **Rules**: Disables `prettier/prettier` for JS code in Astro files

#### Config 4: TypeScript in Astro

- **Target files**: `**/*.astro/*.ts`, `*.astro/*.ts`
- **Rules**: Disables `prettier/prettier` for TS code in Astro files

#### Config 5: Astro-Specific Rules

All rules are set to `"error"`:

| Rule                                        | Description                                             |
| ------------------------------------------- | ------------------------------------------------------- |
| `astro/missing-client-only-directive-value` | Requires a value for the `client:only` directive        |
| `astro/no-conflict-set-directives`          | Prevents conflicts between `set:*` directives           |
| `astro/no-deprecated-astro-canonicalurl`    | Prohibits use of deprecated `canonicalURL` property     |
| `astro/no-deprecated-astro-fetchcontent`    | Prohibits use of deprecated `fetchContent()` function   |
| `astro/no-deprecated-astro-resolve`         | Prohibits use of deprecated `resolve()` function        |
| `astro/no-deprecated-getentrybyslug`        | Prohibits use of deprecated `getEntryBySlug()` function |
| `astro/no-unused-define-vars-in-style`      | Prevents unused CSS variables in `<style>` tags         |
| `astro/valid-compile`                       | Ensures Astro code can be compiled correctly            |

### 3. TypeScript/JavaScript Configuration

- **Target files**: `**/*.ts`, `**/*.js`
- **Rules**: Empty section for additional custom rules

## 🎯 Benefits of This Configuration

### ✅ Correct Parsing

- Resolves parsing errors like "Expression expected" in Astro files
- Properly handles TypeScript frontmatter in Astro components

### ✅ Error Prevention

- Identifies usage of deprecated Astro APIs
- Prevents directive conflicts
- Validates Astro-specific syntax

### ✅ Better Developer Experience

- Clear and specific errors for Astro
- Complete TypeScript support in components
- Integration with VS Code and other editors

## 🚨 Issues Resolved

This configuration specifically resolves:

- **Parsing errors**: "Parsing error: Expression expected"
- **Unrecognized tokens**: "Unexpected token {" in imports
- **TypeScript support**: Correct typing in Astro frontmatter

## 📝 Customization

To add custom rules for TypeScript/JavaScript, modify the section:

```javascript
{
  files: ["**/*.ts", "**/*.js"],
  rules: {
    // Add your custom rules here
    "no-console": "warn",
    "@typescript-eslint/no-unused-vars": "error"
  },
}
```

## 🔗 References

- [eslint-plugin-astro](https://github.com/ota-meshi/eslint-plugin-astro)
- [ESLint Flat Config](https://eslint.org/docs/latest/use/configure/configuration-files-new)
- [Astro ESLint Integration](https://docs.astro.build/en/guides/integrations-guide/eslint/)

## 📊 Versions

- **ESLint**: ^9.34.0
- **eslint-plugin-astro**: ^1.3.1
- **Astro**: ^5.12.0

---

> **Note**: This configuration uses the new "flat config" format from ESLint 9+. If you're using a previous version of ESLint, you might need to adapt the configuration to the legacy `.eslintrc.js` format.
