# Astro Blog Example

A static、lightweight blog template developed based on Astro

## 😇 Feature
- [x] Developed on Astro, vue, and unocss    
- [x] Light/Dark mode change
- [x] Article list pagination 
- [x] SEO optimization

## 👋 Preview
### Index
![bloglight](https://raw.githubusercontent.com/yikafu/astro-blog/v2_vue/preview/blogLight.png)

### Tags
![blogTags](https://raw.githubusercontent.com/yikafu/astro-blog/v2_vue/preview/blogTags.png)

### Archive
![blogAs](https://raw.githubusercontent.com/yikafu/astro-blog/v2_vue/preview/blogAs.png)

### Dark mode
![blogdark](https://raw.githubusercontent.com/yikafu/astro-blog/v2_vue/preview/blogDark.png)

## 🖥 Commands

All commands are run from the root of the project, from a terminal:

| Command                   | Action                                           |
| :------------------------ | :----------------------------------------------- |
| `npm install`             | Installs dependencies                            |
| `npm run dev`             | Starts local dev server at `localhost:4321`      |
| `npm run dev:network`     | Starts local dev server on local network         |
| `npm run sync`            | Generates TypeScript types for all Astro modules.|
| `npm run build`           | Build your production site to `./dist/`          |
| `npm run preview`         | Preview your build locally, before deploying     |
| `npm run preview:network` | Preview build on local network                   |
| `npm run astro ...`       | Run CLI commands like `astro add`, `astro check` |
| `npm run astro -- --help` | Get help using the Astro CLI                     |
| `npm run lint`            | Run ESLint                                       |
| `npm run lint:fix`        | Auto-fix ESLint issues                           |

## Post Template
```
---
title: string,
description: string,
date: string,
tags: array,
heroImage：string,
---

```

## Other
- Add the "CNAME" file to change the Github-Page domain.
- Add the ".nojekyll" file to tell github not allowed to be used jekyll.
