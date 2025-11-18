# Development Guidelines & Patterns

## Project Overview

This document outlines the development patterns, conventions, and guidelines discovered and established while building the Digital Marketing Tools website. This serves as a reference for maintaining consistency and best practices throughout the project.

## Project Stack

- **Framework**: Astro.js
- **Styling**: Tailwind CSS
- **TypeScript**: Full TypeScript support
- **Package Manager**: pnpm
- **Build Tool**: Astro's built-in build system

## File Structure & Organization

### Directory Structure

```
src/
├── assets/           # Static assets (images, icons)
├── components/       # Reusable Astro components
│   └── ui/          # UI-specific components
├── content/         # Content collections (blog posts)
├── data/            # Type definitions and data files
├── layouts/         # Page layout components
├── pages/           # Route pages
└── utils/           # Utility functions
```

### Naming Conventions

- **Files**: PascalCase for components (`Hero.astro`, `BlogFilter.astro`)
- **Directories**: lowercase with hyphens if needed
- **TypeScript interfaces**: Use `Props` interface pattern, export as type alias

## Component Development Patterns

### 1. Type Definition Pattern

**✅ Correct Pattern**: Define types in separate files

```typescript
// src/data/hero.ts
export interface Props {
  title: string;
  subtitle: string;
  imageSrc: string;
  imageAlt?: string;
  textPosition?: "left" | "center" | "right";
  variant?: "default" | "large" | "compact";
}

export type HeroProps = Props;
```

**❌ Avoid**: Defining types directly in component files

```astro
---
export interface Props {
  // ... props definition
}
---
```

### 2. Component Import Pattern

**✅ Correct**: Import types from data files

```astro
---
import type { HeroProps } from "@/data/hero";

const {
  title,
  subtitle,
  imageSrc,
  imageAlt = title,
  textPosition = 'center',
  variant = 'default'
}: HeroProps = Astro.props;
---
```

### 3. Component Structure Pattern

```astro
---
// 1. Type imports
import type { ComponentProps } from "@/data/componentName";

// 2. Component imports
import Container from "@/components/container.astro";
import OtherComponent from "@/components/OtherComponent.astro";

// 3. Utility imports
import { utilityFunction } from "@/utils/all";

// 4. Props destructuring with types
const {
  prop1,
  prop2 = "defaultValue",
  optionalProp
}: ComponentProps = Astro.props;

// 5. Component logic
const computedValue = prop1 + prop2;
---

<!-- 6. HTML/JSX with conditional rendering -->
<section class="component-wrapper">
  {prop1 && (
    <div class="conditional-content">
      {prop1}
    </div>
  )}
</section>

<!-- 7. Component-scoped styles -->
<style>
  .component-wrapper {
    /* Component-specific styles */
  }
</style>
```

## Styling Guidelines

### Tailwind CSS Patterns

1. **Responsive Design**: Mobile-first approach

```html
<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3"></div>
```

2. **Dark Mode Support**: Always include dark mode variants

```html
<div class="bg-white dark:bg-gray-900 text-gray-900 dark:text-white"></div>
```

3. **Spacing Consistency**: Use standard Tailwind spacing scale

```html
<section class="py-16 md:py-24">
  <!-- Standard section padding -->
  <div class="mt-8 mb-6"><!-- Standard element spacing --></div>
</section>
```

### CSS Custom Properties Pattern

Use CSS custom properties for theme-aware styling:

```css
.hero {
  background: linear-gradient(
    135deg,
    theme("colors.gray.50") 0%,
    theme("colors.blue.50") 50%,
    theme("colors.purple.50") 100%
  );
}

.dark .hero {
  background: linear-gradient(
    135deg,
    theme("colors.gray.900") 0%,
    theme("colors.blue.900") 50%,
    theme("colors.purple.900") 100%
  );
}
```

## Content Management

### Blog Post Structure

All blog posts follow this frontmatter pattern:

```markdown
---
title: "Post Title"
excerpt: "Brief description of the post content"
publishDate: "YYYY-MM-DD"
image: "/path/to/image.jpg"
category: "category-slug"
author: "author-slug"
tags: [tag1, tag2, tag3]
---
```

### Image Handling

1. **Static Images**: Place in `src/assets/`
2. **Blog Images**: Place in `src/assets/blog/`
3. **Author Images**: Place in `src/assets/authors/`
4. **Use Astro Image Components**: Always use `<Image>` or `<Picture>` for optimization

```astro
import { Image, Picture } from "astro:assets";

<Picture
  src={post.data.image}
  widths={[200, 400, 800]}
  sizes="(max-width: 640px) 90vw, 480px"
  alt="Thumbnail"
  loading={preloadImage ? "eager" : "lazy"}
  width={800}
  height={600}
  class="w-full h-64 object-cover"
/>
```

## Data Management

### Authors Pattern

```typescript
// src/data/authors.ts
export interface Props {
  name: string;
  slug: string;
  image: ImageMetadata;
  bio: string;
}

export type Author = Props;

export const authors: Props[] = [
  // ... author data
];
```

### Categories Pattern

```typescript
// src/data/category.ts
export interface Props {
  title: string;
  slug: string;
  color:
    | "red"
    | "orange"
    | "yellow"
    | "green"
    | "blue"
    | "purple"
    | "pink"
    | "brown"
    | "gray"
    | "black";
  description: string;
}

export type Category = Props;

export const categories: Props[] = [
  // ... category data
];
```

## Component Reusability Guidelines

### Props Design Principles

1. **Sensible Defaults**: Provide default values for optional props
2. **Flexible Configuration**: Allow customization without breaking changes
3. **Type Safety**: Use TypeScript for all prop definitions
4. **Slot Support**: Include slots for flexible content insertion

Example:

```astro
---
import type { HeroProps } from "@/data/hero";

const {
  title,
  subtitle,
  imageSrc,
  imageAlt = title,        // Default to title
  textPosition = 'center', // Sensible default
  variant = 'default'      // Sensible default
}: HeroProps = Astro.props;
---

<section class={`hero ${sizeClasses[variant]}`}>
  <!-- Content -->
  <div class="mt-8">
    <slot />  <!-- Flexible content insertion -->
  </div>
</section>
```

## Performance Guidelines

### Image Optimization

1. Use `loading="eager"` only for above-the-fold images
2. Use `loading="lazy"` for below-the-fold images
3. Provide multiple widths for responsive images
4. Always include proper `alt` attributes

### Code Splitting

1. Import components only where needed
2. Use dynamic imports for heavy components when possible
3. Leverage Astro's built-in code splitting

## Accessibility Guidelines

1. **Semantic HTML**: Use proper HTML elements
2. **Alt Text**: Always provide meaningful alt text for images
3. **Color Contrast**: Ensure sufficient contrast for dark/light modes
4. **Keyboard Navigation**: Ensure all interactive elements are keyboard accessible

## Error Handling

### TypeScript Configuration

- Enable `strictNullChecks` in tsconfig.json
- Use optional chaining and nullish coalescing
- Provide fallback values for optional props

### Conditional Rendering

```astro
{post.data?.image ? (
  <Picture src={post.data.image} alt="Post image" />
) : (
  <div class="placeholder-image">
    <Icon name="heroicons:photo" />
  </div>
)}
```

## Build & Deployment

### Package Management

- Use `pnpm` for package management
- Lock dependencies with `pnpm-lock.yaml`
- Regular dependency updates and security audits

### Environment Configuration

- Use environment variables for configuration
- Separate development and production settings
- Secure sensitive information

## Testing Guidelines

### Component Testing

1. Test component rendering with different props
2. Test responsive behavior
3. Test dark/light mode variants
4. Test accessibility compliance

### Performance Testing

1. Lighthouse audits for each page type
2. Image optimization verification
3. Bundle size monitoring

## Documentation Standards

### Code Documentation

1. Use JSDoc comments for complex functions
2. Include prop descriptions in TypeScript interfaces
3. Document component usage examples
4. Maintain this guidelines document

### README Updates

Keep the project README.md updated with:

- Setup instructions
- Development workflow
- Deployment process
- Contribution guidelines

## Future Considerations

### Scalability

- Consider component library extraction
- Plan for internationalization (i18n)
- Prepare for CMS integration
- Consider micro-frontend architecture

### Performance Monitoring

- Implement analytics
- Monitor Core Web Vitals
- Track user engagement metrics
- Regular performance audits

---

## Changelog

- **2025-08-30**: Initial guidelines document created
- Document patterns discovered during Hero component development
- Established type definition conventions
- Defined component structure patterns

---

_This document should be updated as new patterns and guidelines are discovered during development._
