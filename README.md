# Canada Life Toolkit / 加拿大生活工具箱

A local production-ready Next.js content-and-tool website for Chinese-speaking newcomers, students, workers, and families in Canada.

## Pages

- `/` Home
- `/categories/cost-of-living` category layout example
- `/guides/newcomer-monthly-cost-canada` guide article template example
- `/tools/monthly-cost-calculator` interactive monthly cost calculator
- `/tools/newcomer-checklist` interactive checklist with localStorage persistence
- `/about`
- `/disclaimer`
- `/privacy-policy`

## Run locally

```bash
npm install
npm run dev
```

Open http://localhost:3000.

## Production preview

```bash
npm run build
npm run start -- --hostname 0.0.0.0 --port 3011
```

Open http://localhost:3011.

## Build check

```bash
npm run lint
npm run build
```

## Structure

- `src/lib/content.ts` categories, guides, tools, and site metadata
- `src/components/` reusable UI components
- `src/app/` Next.js App Router pages, metadata, robots, and sitemap
- `public/ads.txt` comments-only AdSense preparation file

No real Google AdSense code is integrated. Visible ad slots are not shown in the current local production-ready version.
