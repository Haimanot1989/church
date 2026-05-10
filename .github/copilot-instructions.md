# Copilot Instructions for `church` Repository

These guidelines are for AI coding agents working in this repo.

## Project Overview
- **Type**: React single-page app (Create React App) with a small **Express** server for production hosting.
- **Entry points**:
  - Frontend: `src/index.js` → `src/App.js` → route components in `src/components/`.
  - Server: `server.js` serves a pre-built static bundle from `ABSOLUTE_STATIC_PATH`.
- **Routing**: Client-side navigation uses `@reach/router` inside `App.js` and `Header`.
- **Content model**: Many pages render from JSON data in `src/components/data/*.json` and static assets under `public/` (e.g. `/public/sermons`, `/public/books`).

## Local Development & Build
- **Install dependencies** (use npm or pnpm; repo includes `package-lock.json` and `pnpm-lock.yaml`):
  - `npm install`
- **Run React dev server**:
  - `npm start` (CRA dev server at `http://localhost:3000`).
- **Run tests** (Jest via CRA):
  - `npm test`
- **Build for production**:
  - `npm run build` (outputs to `build/`).
- **Production server**:
  - `server.js` expects `ABSOLUTE_STATIC_PATH` pointing to the CRA build’s `static` directory and serves `index.html` at `/`.
  - PM2 script: `npm run prod` (`pm2 start ./server.js --name church`).

## Frontend Architecture & Conventions
- **Component layout**:
  - All React components live under `src/components/` and are plain function components (no hooks-heavy patterns yet).
  - Routes in `App.js` map to components like `Home`, `Conferences`, `Sermons`, `Announcements`, `DoctrineOfSalvation`, etc.
  - `Header` defines `NAV_LINKS`; the `url` values must match the `path` props used in `App.js` for navigation to work.
- **Styling**:
  - Global styles: `src/index.css`, `src/App.css`.
  - Bootstrap 4 is imported in `src/index.js` (`bootstrap/dist/css/bootstrap.min.css` and `bootstrap.bundle.min`). Prefer using Bootstrap utility classes plus existing custom classes (e.g. `position-main`, `album`, `card-deck`) instead of introducing new CSS frameworks.
- **Data-driven pages**:
  - Components like `Sermons`, `Announcements`, `Books`, `Conferences`, and `Home` read from JSON files under `src/components/data/` (e.g. `sermons.json`, `announcement.json`, `conferences.json`, `onlineMeetings.json`).
  - When adding or modifying content, prefer editing these JSON files and letting components map over arrays (see `Sermons.js` and `Announcements.js` for examples).
  - Keys in JSON are often accessed by name (e.g. `onlineMeetings["europeBibleStudyOnZoom"]`), so preserve existing key shapes when possible.

## Sermons & Static Assets Workflow
- **Sermon metadata**:
  - Stored in `src/components/data/sermons.json` as an array under `"sermons"`, with objects containing `title`, `summary`, `pdfLink`, `image`, `imgRef`, and `pages`.
  - `Sermons.js` maps `sermons["sermons"]` to `SermonCard` components; keep this structure intact when editing.
- **Automated sermon updates**:
  - Script: `src/utils/update_sermon.js` is used to prepend new sermon entries and move corresponding files into `public/sermons`.
  - It reads from `~/Downloads/tmp_sermons` and renames files to match a generated base name derived from `rawTitle`.
  - Title/file naming helpers live in `src/utils/strManipulators.js`:
    - `capitalizeTitle(title)` applies project-specific title-casing rules.
    - `convertTitleToFileName(title)` strips non-alphanumerics, uppercases, and joins with underscores (used to form `pdfLink` and `image` paths).
  - When adding new automation around sermons or other assets, reuse these helpers and mirror this pattern.

## Server & Environment
- **Express server** (`server.js`):
  - Uses `compression` and serves static files from `process.env.ABSOLUTE_STATIC_PATH` under `/static`.
  - Responds to `/` with `index.html` located one level above `ABSOLUTE_STATIC_PATH`.
  - Listens on `process.env.PORT || 3000` on `0.0.0.0`.
- **Config & process management**:
  - `ecosystem.config.js` (with PM2) and `.env` control deployment-specific settings; when changing server behavior, preserve compatibility with the existing PM2 `prod` script and env vars.

## Coding Style & Tooling
- **Linting & formatting**:
  - ESLint: `.eslintrc.json` extends `react-app`; run `npm run lint` to check `src/**/*.{js,jsx}`.
  - Prettier: `.prettierrc` defines formatting; run `npm run format` to format `src/**/*.{js,jsx}`.
- **General style**:
  - Keep components small and presentational; most existing components are stateless and use props spread from JSON objects.
  - Prefer existing patterns (e.g. `PageDescriber`, `Card`, `Cards`, `OnlineMeetingCard`) when introducing similar UI.

## When Making Changes
- **Routes & navigation**: If you add a new page component, update both `App.js` routes and `NAV_LINKS` in `Header.js` to keep navigation consistent.
- **Data shape changes**: Changing JSON schemas in `src/components/data/` can break multiple components; search for usages before altering keys or nesting.
- **Static paths**: Keep public asset URLs consistent with existing patterns (`/sermons/FILE.pdf`, `/books/FILE.png`, etc.), as they may be referenced from JSON or templates.
- **Validation**: After non-trivial frontend changes, at minimum run `npm test` and `npm start` locally to verify rendering and routing.
