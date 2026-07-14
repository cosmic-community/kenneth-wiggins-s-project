# Kenneth Wiggins's Project

![App Preview](https://imgix.cosmicjs.com/3882e720-7f20-11f1-bda7-c54391d68ce2-autopilot-photo-1454165804606-c3d57bc86b40-1783991178890.jpeg?w=1200&h=630&fit=crop&auto=format,compress)

A beautiful, modern, and fully responsive website built with Next.js 16 and powered by [Cosmic](https://www.cosmicjs.com). This application dynamically renders content pages organized by categories, all managed effortlessly through your Cosmic bucket.

## Features

- 🏠 **Dynamic Homepage** showcasing categories and featured pages
- 📄 **Individual Page Views** with rich content and featured images
- 🏷️ **Category Browsing** to filter and explore related pages
- 🎨 **Modern, Responsive Design** built with Tailwind CSS
- ⚡ **Server-Side Rendering** for optimal performance and SEO
- 🖼️ **Optimized Images** via imgix for lightning-fast loading
- 🔒 **Type-Safe** with full TypeScript coverage
- 📱 **Mobile-First** layout that looks great on any device

## Clone this Project

Want to create your own version of this project with all the content and structure? Clone this Cosmic bucket and code repository to get started instantly:

[![Clone this Project](https://img.shields.io/badge/Clone%20this%20Project-29abe2?style=for-the-badge&logo=cosmic&logoColor=white)](https://app.cosmicjs.com/projects/new?clone_bucket=6a558b688be639e4dddbbd59&clone_repository=6a558c0a8be639e4dddbbdba)

## Prompts

This application was built using the following prompts to generate the content structure and code:

### Content Model Prompt

> "Create content models for: Test"

### Code Generation Prompt

> Build a Next.js application for a website called "Kenneth Wiggins's Project". The content is managed in Cosmic CMS with the following object types: categories, pages. Create a beautiful, modern, responsive design with a homepage and pages for each content type. User instructions: Test

The app has been tailored to work with your existing Cosmic content structure and includes all the features requested above.

## Technologies Used

- **Next.js 16** – React framework with App Router
- **React 19** – UI library
- **TypeScript** – Type safety
- **Tailwind CSS** – Utility-first styling
- **Cosmic** – Headless CMS ([docs](https://www.cosmicjs.com/docs))

## Getting Started

### Prerequisites

- [Bun](https://bun.sh) or Node.js 18+
- A Cosmic account with a bucket containing `categories` and `pages` object types

### Installation

1. Clone the repository
2. Install dependencies:
   ```bash
   bun install
   ```
3. Set up your environment variables (see below)
4. Run the development server:
   ```bash
   bun run dev
   ```
5. Open [http://localhost:3000](http://localhost:3000)

### Environment Variables

Set these in your hosting platform or a local `.env` file:

```
COSMIC_BUCKET_SLUG=your-bucket-slug
COSMIC_READ_KEY=your-read-key
COSMIC_WRITE_KEY=your-write-key
```

## Cosmic SDK Examples

```typescript
import { cosmic } from '@/lib/cosmic'

// Fetch all pages with connected category data
const { objects: pages } = await cosmic.objects
  .find({ type: 'pages' })
  .props(['id', 'slug', 'title', 'metadata'])
  .depth(1)

// Fetch a single page by slug
const { object: page } = await cosmic.objects
  .findOne({ type: 'pages', slug: 'my-page' })
  .depth(1)
```

## Cosmic CMS Integration

This app reads from two object types in your Cosmic bucket:

- **Categories** (`categories`): `name`, `description`
- **Pages** (`pages`): `title`, `content`, `featured_image`, `category` (connected object)

The `depth(1)` parameter is used when querying pages so that the connected category data is available directly in the response. Learn more in the [Cosmic docs](https://www.cosmicjs.com/docs).

## Deployment Options

### Vercel (Recommended)

1. Push your code to a Git repository
2. Import the project in [Vercel](https://vercel.com)
3. Add environment variables in the project settings
4. Deploy

### Netlify

1. Connect your repository to [Netlify](https://netlify.com)
2. Set build command to `bun run build`
3. Add environment variables
4. Deploy

<!-- README_END -->