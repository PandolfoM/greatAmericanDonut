# Great American Donut

Careers landing page for Great American Donut, a Dunkin' franchisee.

A Vite + React Router single-page app. The build in `dist/` is served from
S3 + CloudFront by MJP Hub, which returns `index.html` for every path.

| Command | What it does |
|---|---|
| `npm install` | installs dependencies |
| `npm run dev` | dev server on http://localhost:3000 |
| `npm run build` | type-checks, then builds the static site into `dist/` |
| `npm run preview` | serves `dist/` locally |
| `npm run typecheck` | `tsc --noEmit` |
| `npm run lint` | ESLint |

## Layout

- `index.html`: the page's `<head>` (title, description, icon)
- `app/main.tsx`: entry point
- `app/router.tsx`: routes; pages load on demand, anything unknown gets `app/not-found.tsx`
- `app/page.tsx`: the home page
- `app/assets/`: images imported by pages; `public/`: files served as-is (favicon)
