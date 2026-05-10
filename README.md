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

The site is deployed to **GitHub Pages** with automatic deployments via GitHub Actions.

### GitHub Pages Setup (One-Time)

1. Push your code to GitHub:
   ```bash
   git push origin master
   ```

2. In your GitHub repository, go to **Settings** → **Pages**

3. Under "Build and deployment":
   - **Source**: Select "GitHub Actions"
   - The workflow is already configured in `.github/workflows/deploy.yml`

4. After the first deployment, your site will be available at:
   - Default: `https://haimanot1989.github.io/church/`
   - Custom domain: `https://apostolicinternational.com` (after DNS setup)

### Custom Domain Setup (Optional)

1. In GitHub repo **Settings** → **Pages** → **Custom domain**:
   - Enter: `apostolicinternational.com`
   - Check "Enforce HTTPS"

2. Add DNS records at your domain registrar:
   ```
   Type: A
   Host: @
   Value: 185.199.108.153
   
   Type: A
   Host: @
   Value: 185.199.109.153
   
   Type: A
   Host: @
   Value: 185.199.110.153
   
   Type: A
   Host: @
   Value: 185.199.111.153
   
   Type: CNAME
   Host: www
   Value: haimanot1989.github.io
   ```

3. Wait for DNS propagation (can take up to 24-48 hours)

### Automatic Deployments

Every push to the `master` branch triggers:
1. Automatic build via GitHub Actions
2. Deployment to GitHub Pages
3. Site updates within 1-2 minutes

### Alternative Hosting Options

You can also deploy to:
- **Netlify**: Drop-in replacement, generous free tier
- **Vercel**: Similar to Netlify, great for static sites
- **Cloudflare Pages**: Fast global CDN, free tier available

## � Managing Content Without a CMS

Since you're not using a CMS, here are ways to manage content:

### Option 1: Direct File Editing (Current Setup)
1. Edit JSON files in `src/content/` directories
2. Commit and push to GitHub
3. GitHub Actions automatically rebuilds and deploys

### Option 2: GitHub Web Interface
1. Go to your repo on GitHub.com
2. Navigate to `src/content/sermons/`
3. Click on any file → Edit (pencil icon)
4. Make changes → Commit directly to master
5. Automatic deployment triggers

### Option 3: Add Decap CMS (Free)
If you want a user-friendly admin interface, I can help you add Decap CMS:
- Free and open-source
- Access at `yoursite.com/admin`
- No backend needed
- Works with GitHub Pages

## 📚 Learn More

- [Astro Documentation](https://docs.astro.build)
- [GitHub Pages Documentation](https://docs.github.com/en/pages)
- [Bootstrap 4 Documentation](https://getbootstrap.com/docs/4.3/)
