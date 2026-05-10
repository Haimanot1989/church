# Jesus Alone is God Church of Europe

A static website built with [Astro](https://astro.build) and managed through [CloudCannon CMS](https://cloudcannon.com).

## 🚀 Quick Start

### Prerequisites

- Node.js 18+ 
- npm or pnpm

### Installation

```bash
npm install
```

## 📜 Available Scripts

### `npm run dev` or `npm start`

Starts the Astro development server at [http://localhost:4321](http://localhost:4321).

The page will automatically reload when you make changes to files in `src/`.

### `npm run build`

Builds the site for production to the `dist/` folder. The build is optimized and includes all static pages.

### `npm run preview`

Previews the production build locally. Run `npm run build` first.

### `npm run migrate`

Runs the content migration script to convert aggregated JSON files to individual content files. This is typically a one-time operation.

### `npm run format`

Formats code using Prettier (includes `.astro`, `.js`, `.jsx` files).

### `npm run lint`

Runs ESLint to check for code quality issues.

## 📁 Project Structure

```
/
├── public/              # Static assets (PDFs, images, favicons)
│   ├── sermons/        # Sermon PDFs and thumbnails
│   ├── books/          # Book PDFs and covers
│   └── announcements/  # Announcement PDFs and images
├── src/
│   ├── pages/          # Astro pages (file-based routing)
│   ├── layouts/        # Layout components (BaseLayout.astro)
│   ├── components/     # Reusable Astro components
│   ├── content/        # Content collections (individual JSON files)
│   │   ├── sermons/
│   │   ├── books/
│   │   ├── announcements/
│   │   ├── conferences/
│   │   ├── online-meetings/
│   │   └── podcasts/
│   ├── index.css       # Global styles
│   └── App.css         # Additional styles
├── schemas/            # JSON schemas for CloudCannon
├── scripts/            # Utility scripts (migration, etc.)
├── astro.config.mjs    # Astro configuration
└── cloudcannon.config.yml  # CloudCannon CMS configuration
```

## 📝 Content Management

Content is managed through CloudCannon CMS and stored as individual JSON files in `src/content/`:

- **Sermons**: 275 sermon files with order, slug, title, summary, PDF link, and image
- **Books**: 12 books with descriptions and PDF downloads
- **Announcements**: Global reports and updates
- **Podcasts**: Episode listings with embedded players
- **Conferences**: Event details with location and schedule information
- **Online Meetings**: Virtual meeting information

Each content type has:
- An `order` field for sorting (higher = newer)
- A `slug` field for identification
- A `date` field (optional, for manual entry)
- A `key` field (conferences/meetings only, for backward compatibility)

### Adding New Content

Through CloudCannon:
1. Log in to CloudCannon
2. Navigate to the appropriate collection (Sermons, Books, etc.)
3. Click "Add" to create new content
4. Fill in the form fields
5. Upload PDFs and images through the DAM
6. Save and publish

Manually:
1. Create a new JSON file in the appropriate `src/content/` subdirectory
2. Follow the schema defined in `schemas/` directory
3. Ensure `order` field is set correctly
4. Commit and push changes

## 🛠️ Development

### Local Development

```bash
npm run dev
```

Visit [http://localhost:4321](http://localhost:4321) to see your changes.

### Building for Production

```bash
npm run build
```

The static site will be generated in the `dist/` directory.

## 🚢 Deployment

The site is deployed through CloudCannon which handles:
- Git-based content management
- Automatic builds on content changes
- Static site hosting
- Custom domain and SSL

### CloudCannon Configuration

- **Build command**: `npm run build`
- **Output directory**: `dist/`
- **Source directory**: `src/`

### Manual Deployment

You can also deploy the `dist/` folder to any static hosting service:
- Netlify
- Vercel
- GitHub Pages
- AWS S3 + CloudFront
- Any static file server

## 📚 Learn More

- [Astro Documentation](https://docs.astro.build)
- [CloudCannon Documentation](https://cloudcannon.com/documentation/)
- [Bootstrap 4 Documentation](https://getbootstrap.com/docs/4.3/)
