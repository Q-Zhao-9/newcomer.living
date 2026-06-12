# Canada Life Toolkit Production MVP Readiness Plan

**Goal:** Turn the current prototype into a production-ready MVP by removing visible ad placeholders, replacing prototype/placeholder public wording, and adding basic SEO/AdSense-readiness infrastructure without integrating real AdSense code.

**Architecture:** Keep the existing Next.js App Router + TypeScript + Tailwind structure. Make small targeted edits to existing components/pages, remove unused ad placeholder UI, add static SEO files through App Router conventions, then verify with lint/build and browser QA.

**Tech Stack:** Next.js 16 App Router, React 19, TypeScript, Tailwind CSS, static content in `src/lib/content.ts`.

---

## Task 1: Remove visible advertisement placeholder UI

**Objective:** Remove all on-page ad placeholder boxes from public pages.

**Files:**
- Modify: `src/components/ArticleLayout.tsx`
- Modify: `src/app/tools/monthly-cost-calculator/page.tsx`
- Delete: `src/components/AdPlaceholder.tsx`

**Steps:**
1. Remove `import { AdPlaceholder } from "./AdPlaceholder";` from `ArticleLayout.tsx`.
2. Delete all `<AdPlaceholder />` render calls from article intro, mid-article, bottom, and sidebar.
3. Keep useful sidebar content such as `Useful tools`, but allow it to sit without ad blocks.
4. Remove `import { AdPlaceholder } from "@/components/AdPlaceholder";` from monthly calculator page.
5. Delete the calculator page `<AdPlaceholder />` call.
6. Delete `src/components/AdPlaceholder.tsx` if no references remain.
7. Run a source search for `AdPlaceholder`, `Advertisement placeholder`, and visible `placeholder` text.

**Verification:**
- `npm run lint`
- `npm run build`
- Browser check article and calculator pages show no ad placeholder boxes.

---

## Task 2: Replace public placeholder/prototype wording

**Objective:** Make public-facing copy feel production-ready, especially legal/privacy pages.

**Files:**
- Modify: `src/app/privacy-policy/page.tsx`
- Review/modify as needed: `src/app/about/page.tsx`, `src/app/disclaimer/page.tsx`, `src/app/page.tsx`, `src/lib/content.ts`
- Modify: `README.md` for project documentation only, if desired

**Steps:**
1. Rewrite privacy policy copy so it no longer says it is a prototype or placeholder policy.
2. Keep cautious wording and avoid claims that legal/privacy compliance is final legal advice.
3. Search public app code for terms: `prototype`, `placeholder`, `MVP`, `coming soon`, `draft`, `before production`, `prepared for review`.
4. Rewrite any public-facing occurrences into stable production copy.
5. README may still explain local development, but should not undermine the public website.

**Verification:**
- Source search returns no public-facing development-status wording.
- Privacy page reads like a real simple content-site privacy policy.

---

## Task 3: Add production SEO infrastructure

**Objective:** Add basic production MVP SEO files and canonical metadata support.

**Files:**
- Modify: `src/lib/content.ts`
- Modify: `src/app/layout.tsx`
- Create: `src/app/robots.ts`
- Create: `src/app/sitemap.ts`
- Create: `public/ads.txt`

**Steps:**
1. Set `site.url` to the chosen production domain if provided; otherwise keep a clearly configurable value until domain is confirmed.
2. Ensure root metadata uses the correct `metadataBase`.
3. Add `robots.ts` allowing normal indexing and referencing sitemap URL.
4. Add `sitemap.ts` including home, category, guide, tool, about, disclaimer, and privacy policy URLs.
5. Add `public/ads.txt` with comments only, no fake Google publisher ID.

**Verification:**
- `npm run build`
- Production preview returns `200` for `/robots.txt`, `/sitemap.xml`, and `/ads.txt`.
- Sitemap includes all intended public URLs.

---

## Task 4: Production polish pass

**Objective:** Improve MVP trust and usability without over-engineering.

**Files:**
- Review/modify: `src/components/Header.tsx`, `src/components/Footer.tsx`, `src/components/Logo.tsx`, key pages under `src/app/`

**Steps:**
1. Confirm header/footer navigation covers main routes and legal pages are accessible.
2. Confirm footer has About, Disclaimer, Privacy Policy, and main tools.
3. Keep no real AdSense script and no visible ad slots.
4. Preserve current clean white/teal visual system and logo.
5. Check mobile layout for header, home cards, calculator, checklist, and article pages.

**Verification:**
- Browser desktop check.
- Browser narrow/mobile width check for no horizontal overflow.
- Calculator still updates totals correctly.
- Checklist still persists checked items to localStorage.

---

## Task 5: Final QA and production-ready handoff

**Objective:** Deliver a production-ready MVP package and running preview.

**Files/Commands:**
- `npm run lint`
- `npm run build`
- `npm run start -- --hostname 0.0.0.0 --port 3011`

**Steps:**
1. Run lint and build.
2. Restart production preview.
3. Verify routes:
   - `/`
   - `/categories/cost-of-living`
   - `/guides/newcomer-monthly-cost-canada`
   - `/tools/monthly-cost-calculator`
   - `/tools/newcomer-checklist`
   - `/about`
   - `/disclaimer`
   - `/privacy-policy`
   - `/robots.txt`
   - `/sitemap.xml`
   - `/ads.txt`
4. Provide final summary of changed files, verification results, and preview URL.

**Definition of done:**
- No visible ad placeholders anywhere.
- No public-facing prototype/placeholder/MVP wording.
- Basic SEO files exist and build successfully.
- Legal/privacy pages are simple but credible for a content website.
- `npm run lint` and `npm run build` pass.
- Production preview runs locally.
