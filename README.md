# Aanya Jain — Industrial Design Portfolio

A responsive Next.js portfolio for Aanya Jain. The project includes the homepage, project filters and detail dialogs, education and workshop details, design-tool list, a design-process section, contact links, and the original Heyzine portfolio embed.

## Tech stack

- Next.js 15 / React 19 / TypeScript
- Framer Motion
- Lucide React icons
- Plain CSS with responsive breakpoints

## Run locally

Use Node.js 20 or 22 (Node 22 is recommended).

```bash
npm install
npm run dev
```

Open http://localhost:3000.

## Production build

```bash
npm run build
npm start
```

## Push this folder to GitHub

1. Create a new empty repository in your GitHub account named `aanya-interior-portfolio`.
2. Open Terminal in this project folder.
3. Run:

```bash
git init
git add .
git commit -m "Initial Aanya Jain portfolio source"
git branch -M main
git remote add origin https://github.com/Aradhy20/aanya-interior-portfolio.git
git push -u origin main
```

If the repository already exists, skip the GitHub creation step. If `origin` is already configured, check it with `git remote -v` before adding it again.

## Deploy with Vercel

Import the GitHub repository into Vercel and select Next.js. The build command is `npm run build`; the output directory is managed by Next.js. After Git integration is enabled, pushes to the connected production branch will trigger deployments.

Current live site: https://aanya-interior-portfolio.vercel.app

## Open in Antigravity

1. Extract the ZIP file to a location with enough free disk space.
2. Open Antigravity and choose **Open Folder**.
3. Select the extracted `aanya-interior-portfolio` folder.
4. Open the integrated terminal and run `npm install`, then `npm run dev`.
5. Ask Antigravity to inspect the existing code before changing it. Keep the current design/content unless a requested change specifically modifies it.

Suggested first prompt:

> Review the complete Aanya Jain portfolio codebase. Do not replace the current design or remove existing content. First inspect the Next.js App Router structure, responsive CSS, six project records, local image assets, animations, modal interactions, and Heyzine embed. Then create a prioritized improvement plan. Wait for my approval before editing files. Keep the site responsive, accessible, and compatible with Vercel.

## Project image assets

All image files are inside `public/images/`:

- `aanya-portrait.webp`
- `worker-module.webp`
- `centre-table.webp`
- `tide-terra.webp`
- `universal-toilet.webp`
- `shulabh.webp`
- `dining-chair.webp`

The six project images are optimised crops from the screenshots supplied for the portfolio. For final high-resolution case studies, replace them with original exports/renderings from the source portfolio. The original Heyzine flipbook is linked and embedded in the site.

## Before publishing publicly

- Confirm the contact email, Instagram handle, YouTube handle, education wording, scores and workshop names with Aanya.
- Confirm whether the software label `Rayon` is correct as written in the source.
- Review the portrait to ensure it is the final approved profile image.
- Use original high-resolution project exports for detailed project galleries.
