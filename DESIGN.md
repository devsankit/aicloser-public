# AI Closer Design System

This is the source of truth for the AI Closer marketing site. Keep this file aligned with the implementation whenever the brand, motion, typography, or visual language changes.

## Brand

- **Name:** AI Closer
- **Short name:** Closer
- **Positioning:** An intelligent CRM for high-growth sales teams.
- **Voice:** Clear, confident, direct, useful, and warm. Prefer short sentences and concrete outcomes.
- **Logo:** A rounded orange square containing white `AI`, followed by the `Closer` wordmark. Build the lockup with CSS where possible so it remains crisp on light, orange, and dark surfaces.
- **Do not use:** The previous product name, raster logo patches, placeholder copy, or a competing brand mark.

## Color tokens

```css
:root {
  --closer-canvas: #fafaf8;
  --closer-surface: #ffffff;
  --closer-soft: #f0f0ed;
  --closer-ink: #101010;
  --closer-muted: #6f706e;
  --closer-line: #e8e8e4;
  --closer-orange: #ff6b2f;
  --closer-orange-dark: #eb5a24;
  --closer-dark: #121212;
}
```

Use orange for actions, progress, focus rings, accents, and the AI mark. Use ink for primary text, canvas for page backgrounds, and dark for the power-tools/footer surfaces. Maintain a minimum 3:1 contrast for large text and 4.5:1 for body text.

## Typography

- **Primary UI/body:** Google Sans, with DM Sans and Arial fallbacks.
- **Display/headings:** Google Sans Flex, with Google Sans and Space Grotesk fallbacks.
- **Display style:** Tight tracking (`-0.04em` to `-0.075em`), compact line-height, medium weight.
- **Body style:** 14–16px, 1.5–1.6 line-height, muted gray for supporting copy.
- **Labels:** 10–11px, semibold, uppercase, `0.12em–0.14em` tracking.

Never mix unrelated typefaces within one section. Use the same display family for headings, logo wordmarks, feature titles, and CTA headings.

## Layout and shape language

- Maximum content width: `1180px`.
- Desktop page gutters: `32px`; mobile gutters: `20px`.
- Header: fixed, translucent white, 16px radius, soft shadow, blurred backdrop.
- Cards: white or soft-gray surfaces, 18–25px radius, 1px neutral border.
- Primary controls: 10–12px radius, at least 44px tall on touch devices.
- Orange CTA panels: use a subtle horizontal orange gradient, not a flat red or neon fill.
- Avoid horizontal overflow. Marquees may overflow only inside their clipped viewport.

## Motion principles

- Hero dashboard starts with a gentle perspective tilt and settles flat as the user scrolls through the hero.
- Hero path lines use a slow, linear orange stroke pass over a quiet gray path.
- Dashboard and feature visuals may float subtly; keep the amplitude small enough that text remains stable.
- Company and testimonial marquees must use duplicated tracks and loop at the exact track boundary. Add seam spacing inside each repeated set, never between the two sets.
- Tab changes should update label, title, body copy, and artwork together, with a short opacity/translate transition.
- Respect `prefers-reduced-motion: reduce`: remove transforms, disable looping, and preserve readable static content.
- Do not animate layout-critical text or use per-word clipping that can reveal half-rendered headings.

## Responsive behavior

- **Desktop:** 901px and above. Use two-column compositions and the full dashboard visual.
- **Tablet:** 621–900px. Collapse complex grids while retaining generous spacing.
- **Phone:** 620px and below. Stack content, keep controls touch-friendly, scale the dashboard from its top center, and hide only decorative motion—not meaningful content.

## Interaction rules

- Navigation anchors must point to real sections: `#features`, `#pricing`, `#about`, `#blog`, and `#contact`.
- Feature tabs are buttons with visible active state and keyboard support.
- Clickable visuals need a visible focus ring and an accessible label.
- FAQ uses native `details`/`summary` behavior or an equivalent keyboard-accessible disclosure.
- External social/partner links open safely with `rel="noopener noreferrer"`.
- Forms must have labels, required states, and a visible submit action.

## Implementation conventions

- The app uses the Next.js App Router, TypeScript, and Tailwind CSS.
- Keep reusable content data-driven; avoid duplicating a brand string in components.
- Prefer semantic HTML and Tailwind utilities for new layout work.
- Keep legacy visual compatibility styles isolated in `app/legacy.css` while sections are progressively migrated to React components.
- Store public images and fonts under `public/assets` and reference them with root-relative URLs such as `/assets/...`.
- Run `npm run typecheck` and `npm run build` before handing off visual changes.

## QA checklist

- [ ] Page title and all visible copy say **AI Closer**; no previous brand name remains.
- [ ] Light, orange, and dark logo variants are legible and aligned.
- [ ] Fonts load consistently across the whole page.
- [ ] Hero tilt/settle motion works and reduced-motion mode is readable.
- [ ] Logo and testimonial loops do not crop or join at the seam.
- [ ] No horizontal overflow at 390px, 810px, and 1200px widths.
- [ ] Tabs, FAQ, navigation, CTA, and newsletter controls remain keyboard accessible.
