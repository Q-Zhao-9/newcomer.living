# Mobile, Accessibility, and Readability QA

Date: 2026-06-13

## Scope

QA focused on the routes requested by issue #20:

- `/`
- `/guides/newcomer-monthly-cost-canada`
- `/tools/monthly-cost-calculator`
- `/tools/newcomer-checklist`

Representative supporting routes were also checked by HTTP:

- `/categories/cost-of-living`
- `/school`
- `/privacy-policy`
- `/sitemap.xml`
- `/robots.txt`

## Changes made during QA

- Added a global `:focus-visible` outline for links, buttons, summaries, and form fields.
- Added mobile tap highlighting for common interactive controls.
- Made the mobile header logo more resilient with smaller mobile logo sizing, truncation, and `min-w-0` handling.
- Made the mobile menu trigger at least 44px tall and made mobile menu links taller/easier to tap.
- Constrained the mobile menu panel to `calc(100vw - 2rem)` so it cannot overflow narrow screens.
- Added explicit `aria-label` text to calculator number inputs.
- Increased checklist action buttons and checklist rows to at least 44px touch-friendly height.
- Increased checklist checkbox visual size to 24px.

## Verification summary

### Build and route checks

- `npm run lint && npm run build`: passed.
- Production preview: `http://127.0.0.1:3011`.
- HTTP status checks returned `200` for the scoped pages and representative supporting routes.

### Mobile width checks

Browser checks were run with iframe viewports for 360px, 390px, and 430px widths across:

- Home page
- First-month cost guide
- Monthly cost calculator
- Newcomer checklist

Results:

- No horizontal overflow detected.
- Each scoped page had exactly one `<h1>`.
- Mobile menu trigger rendered at 44px height.
- Calculator inputs were labelled and usable.
- Checklist checkboxes were labelled and at least 24px square.
- Buttons/summaries visible in the tested mobile viewport had touch-friendly dimensions.

### Accessibility checks

- Calculator fields have accessible names.
- Checklist checkbox labels are associated through wrapping labels.
- Buttons use descriptive visible text.
- Headings follow a logical structure with one H1 and section-level H2/H3 content.
- Color is not the only indicator for the calculator budget level or checklist progress; text labels are present.
- Visible keyboard focus styles are globally available.

### Contrast spot checks

Manual WCAG contrast calculations for the primary color pairs:

- Body text `slate-950` on white: 20.17:1
- Paragraph `slate-700` on white: 10.35:1
- Muted `slate-600` on white: 7.58:1
- Teal accent `teal-700` on `teal-50`: 5.25:1
- White text on `teal-700` button: 5.47:1
- Amber disclaimer text on amber background: 8.75:1

These spot checks pass the common 4.5:1 AA threshold for normal text.

### Interaction checks

- Monthly cost calculator updates totals after changing rent.
- Checklist check state updates progress and writes to `localStorage`.
- No browser console errors were observed during the interaction checks.

## Notes

The QA was limited to representative pages and common mobile widths rather than every generated guide/category route. The checked layouts cover the main reusable templates used by the site.
