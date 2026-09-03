# Prompt for Claude Code

Copy everything below the line into Claude Code, with the folder `design_handoff_portfolio/` present in the repo (it holds the HTML reference and the design tokens).

---

Build my personal portfolio as a **Next.js (App Router) + React + TypeScript** site.

`design_handoff_portfolio/Portfolio.reference.html` is a **design reference**, not code to ship: it is a prototype of the intended look, written in a custom HTML component runtime. Recreate the design faithfully in idiomatic Next.js/React. `design_handoff_portfolio/classical.css` is the real token/component stylesheet the design uses — keep it as the project's stylesheet and build against its variables. `design_handoff_portfolio/Chris-Cox-CV.pdf` goes in `public/`.

## Setup

- `npx create-next-app@latest` — App Router, TypeScript, ESLint, no Tailwind (the design is token-driven CSS, not utility classes), `src/` directory.
- Import `classical.css` in `app/layout.tsx` as a global stylesheet, plus one `app/globals.css` for resets and the page-specific rules listed below.
- Fonts: load **Cormorant Garamond** (400, 600) and **Lora** (400, 600) via `next/font/google` and bind them to the CSS variables `--font-heading` / `--font-body` so `classical.css` keeps working (override the `@import` at the top of that file — delete the `@import` line and rely on `next/font`).
- Styling approach: **CSS Modules per component**, all values taken from the `var(--*)` tokens in `classical.css`. Never hard-code a hex or a font name that a token already carries.
- Static site: no database, no CMS. All content lives in one typed data module, `src/content/portfolio.ts`, exporting `projects`, `skillGroups`, `timeline` and `contact` (types in `src/content/types.ts`). Every component reads from it — no copy inlined in JSX except headings and running prose.

## Design system (Classical)

Editorial and book-like. Soft near-white ground, Cormorant Garamond display headings over justified Lora body copy, hairline rules carrying the structure, gold used as **stroke only** — never as a fill. Photographs are matted in the `.plate` wrapper so they read as tipped-in book plates. Bold is avoided: weight and italics do the emphasis, and the larger the type the lighter it sets (display sizes take the 400 cut, not 600). Numbers that stand as figures set tabular (`font-variant-numeric: tabular-nums`); running prose does not.

Tokens (all already in `classical.css`): `--color-bg #f3f2f2`, `--color-surface #eae9e9`, `--color-text #201f1d`, `--color-accent #b68235`, `--color-accent-700 #7d5411` (use this for accent-colored body-size text — the base accent is only 3:1), `--color-divider` (`#201f1d` at 16%), neutral and accent ramps 100–900, `--space-1..8` (4.6px–36.8px), `--radius-sm/md/lg` (2/4/7px), `--shadow-sm/md/lg`.

Use the existing component classes rather than writing parallel ones: `.btn` + `.btn-primary` / `.btn-ghost`, `.tag` + `.tag-outline`, `.field` / `.input`, `.nav` + `.nav-brand`, `.hr`, `.plate`. Focus is a 2px `--color-accent` `:focus-visible` outline with 2px offset; hovers and pressed states come from the accent ramp. Don't restyle them.

Two page-level rules go in `globals.css`:

```css
.dropcap::first-letter {
  font-family: var(--font-heading); font-weight: 400; font-size: 4.6em;
  line-height: 0.82; float: left; padding: 6px 12px 0 0; color: var(--color-accent-700);
}
.bleed { /* full-viewport-width band inside a centered column */
  margin-inline: calc(50% - 50vw); padding-inline: calc(50vw - 50%);
}
```

Page shell: `max-width: 1120px`, centered, `padding: 0 clamp(20px, 5vw, 56px) 72px`. `html { scroll-behavior: smooth }`, disabled under `prefers-reduced-motion`. `body { overflow-x: clip; text-wrap: pretty }`.

## Components to build

One component per section, in `src/components/`, composed in `app/page.tsx` in this order. Section spacing between them is ~92px top padding.

**1. `Masthead`** — a 4px solid `--color-text` rule above a `.nav` bar: brand "Chris Cox" in Cormorant, 21px, `letter-spacing: .16em`, uppercase, pushed left with `margin-right: auto`; links Work / Skills / About (13px, `.12em`, uppercase, `--color-text`) anchoring to `#work`, `#skills`, `#about`; then a `.btn .btn-primary` "Get in touch" → `#contact`. Below the bar a 1px `--color-divider` rule, 3px below it (the double-rule masthead effect). Flex, `gap: 28px`, `align-items: baseline`, wraps.

**2. `Hero`** — a title page.
- Availability line, centered between two 1px `--color-accent` rules that flex to fill: "Open to internships and freelance work", 12px, `letter-spacing: .2em`, uppercase, `--color-accent-700`. Gate it behind a boolean prop `available` (default true).
- `h1`, centered, Cormorant **400**, `clamp(46px, 9vw, 124px)`, `line-height: .94`, `letter-spacing: -.03em`, two lines: "Front-end developer" then "with a backend habit." — the second line italic in `--color-accent-700`.
- Below it the same rule treatment around the word "Portfolio" (Cormorant, 15px, `letter-spacing: .3em`, uppercase, text at 60% opacity) on `--color-divider` hairlines.
- Then a 1.5fr / 1fr grid, `gap: clamp(32px, 6vw, 72px)`: left is the intro paragraph with `.dropcap`, 17.5px, `line-height: 1.85`, justified, `hyphens: auto`, followed by a button row (`.btn-primary` "See my projects" → `#work`, and `.btn-ghost` "Download CV (PDF)" as `<a href="/Chris-Cox-CV.pdf" download>`); right is a portrait figure in `.plate` with `box-shadow: var(--shadow-sm)`, `aspect-ratio: 4/5`, the whole figure `transform: rotate(-1.4deg)`, and a right-aligned caption "Heerlen, 2026" (11.5px, `.14em`, uppercase).

Intro copy, verbatim: "I study HBO-ICT at Zuyd Hogeschool in Heerlen, where I picked Backend Development and Interface Development. I like building interfaces people can actually use, and I like knowing what happens behind them. Currently looking for an internship where I can build alongside experienced developers."

**3. `ChapterHeading`** (reused by sections 4, 6, 7) — a `border-top: 4px double var(--color-text)` with 22px top padding, a ghost Roman numeral absolutely positioned at `right: -6px; top: -46px`, Cormorant 132px, colored `color-mix(in srgb, var(--color-accent) 20%, transparent)`, `pointer-events: none; user-select: none`; a kicker ("Chapter one", "Chapter three — About me", "Chapter four — Path") at 11.5px, `.2em`, uppercase, `--color-accent-700`; and an `h2` in Cormorant 400 at `clamp(32px, 4.2vw, 54px)`, `line-height: 1.04`. Props: numeral, kicker, title, optional right-hand intro paragraph.

**4. `Work`** (`id="work"`) — heading "Projects I built while studying" (line break before "while"), with the right-hand intro "Two things I am happy to walk you through line by line, including the parts I would do differently now." *(Note: there are three projects now — reword this to "Three things…" or drop the count.)*

Then one `<article>` per project, stacked, each `border-top: 1px solid var(--color-divider)`, `padding: 40px 0`, laid out as `repeat(auto-fit, minmax(300px, 1fr))` with `gap: clamp(28px, 4vw, 56px)`, `align-items: center`. The image figure's CSS `order` alternates (0 / 2 / 0) so the plate flips side to side down the page — derive it from the index rather than storing it in the data. Image: `.plate`, `aspect-ratio: 16/10`.

Text column: the numeral ("01"/"02"/"03") in Cormorant 46px `--color-accent` with tabular figures, beside a 11.5px `.18em` uppercase meta label "HBO-ICT project" at 62% text opacity; `h3` Cormorant 400 `clamp(28px, 3vw, 38px)`; description paragraph 16.5px `line-height: 1.8` justified; then the "what I did" note — 15.5px, `padding-left: 18px`, `border-left: 2px solid var(--color-accent)`, opening with an italic `--color-accent-700` "What I did:" — behind a boolean prop `showRoles` (default true); then `.tag .tag-outline` chips in a `flex` + `gap: 8px` row (11px, `.1em`, uppercase); then the repo link, 13.5px with `border-bottom: 1px solid var(--color-accent)`, opening in a new tab.

Project data, verbatim:

1. **KlantBestelSysteem** — "Ordering system for customers of a fictional mechanical parts website." / What I did: "the full ASP.NET Core MVC application — data model, order flow and the customer-facing screens." / Stack: C#, ASP.NET Core MVC, HTML, CSS, JavaScript / https://github.com/chriscox2301/KlantBestelSysteem
2. **BezorgApplicatie** — "Mobile application in .NET MAUI for delivery drivers." / What I did: "the app's screens and navigation, plus the delivery data it works from." / Stack: .NET MAUI, C#, XAML, Responsive design / https://github.com/chriscox2301/BezorgersApplicatie
3. **AdminBackOffice** — "Web-based admin back-office application" / What I did: "the navigation and the flow of the back office." / Stack: C#, ASP.NET Core MVC / https://github.com/chriscox2301/De_Codekloppers

**5. `Stack`** (`id="skills"`) — a full-bleed dark colophon band: `.bleed`, background `#16140f`, text `--color-neutral-100`, `padding-block: 84px`. A huge ghost "II" at the band's left edge, Cormorant `clamp(120px, 18vw, 240px)`, `line-height: .8`, `color-mix(in srgb, var(--color-accent) 16%, transparent)`. Kicker "Chapter two — Stack" in `--color-accent-400`; `h2` "What I work with" Cormorant 400 `clamp(34px, 4.6vw, 62px)`; a 1px gold-at-45% rule under it. Then three columns (`auto-fit, minmax(230px, 1fr)`), each: `h3` Cormorant 25px, an italic 14.5px note at 62% opacity, and the items as a stacked list, each 15.5px with `padding: 8px 0` and a `border-bottom` of neutral-100 at 18%.

- **Front-end** — "Where I spend most of my time" — HTML, CSS, JavaScript, Responsive design
- **Back-end** — "From the backend track at Zuyd" — C#, ASP.NET Core MVC, Python, .NET MAUI
- **Working style** — "Habits from study and from leading a team" — Leadership, Team player, Communicative, Problem solving, Linux

**6. `About`** (`id="about"`) — chapter III, "A second start that stuck". Body is a 7fr / 4fr grid; the left column is set as two CSS columns (`column-count: 2; column-gap: 42px; column-rule: 1px solid var(--color-divider)`), first paragraph with `.dropcap`, both 16px `line-height: 1.85` justified with hyphens. Right: a `.plate` photo, `aspect-ratio: 4/5`, `transform: rotate(1.2deg)`, `--shadow-sm`.

Paragraph one, verbatim: "I began at Zuyd in Engineering and left after a year without the propedeuse. It was the right call: I came back in 2024 for HBO-ICT and found the thing I actually want to do. Design and code are the same job to me, which is why I care as much about how a page feels as about what the API returns."

Paragraph two, verbatim: "Alongside my studies I lead the stocking team at Jumbo in Maastricht. Planning shifts, training people and cutting down on out-of-stock situations turns out to be good practice for teamwork under time pressure. Outside of that: the gym, Linux, and side projects I keep breaking on purpose."

**7. `Path`** — chapter IV, "Education and experience". Rows of `grid-template-columns: 190px 1fr`, `gap: 34px`, `padding: 26px 0`, `border-bottom: 1px solid var(--color-divider)`. Left: the period in Cormorant 17px, tabular figures, `--color-accent-700`. Right: `h3` Cormorant 24px, an italic 14.5px place at 65% opacity, then a 15.5px description capped at `62ch` at 80% opacity.

| Period | Title | Place | Text |
| --- | --- | --- | --- |
| 2024 — present | HBO-ICT | Zuyd Hogeschool, Heerlen | Tracks: Backend Development and Interface Development. |
| Feb 2026 — present | Stocking team lead | Jumbo Supermarkten, Maastricht Mosae Forum | Leading and training the stocking team, planning shifts and deliveries, and fixing the bottlenecks that slow a shift down. |
| Jun 2026 | Emergency response certificate (BHV) | Certified | First aid, evacuation coordination and fire-fighting technique. |
| 2022 — 2023 | Engineering | Zuyd Hogeschool, Heerlen | Stopped after the first year; the propedeuse was not completed. |
| Feb 2019 — Oct 2020 | Shelf stocker | Nettorama, Sittard | Stocking shelves, checking dates and helping customers find what they came for. |

**8. `Contact`** (`id="contact"`) — the word "Colophon" centered between gold rules (Cormorant 15px, `.3em`, uppercase, `--color-accent-700`), then a two-column `auto-fit, minmax(300px, 1fr)` grid.

Left: `h2` "Looking for an intern or a hand with a project?" Cormorant 400 `clamp(30px, 3.8vw, 48px)`, `max-width: 22ch`; paragraph "Send a message and I reply within a day. A short call or a technical assignment, both work for me."; then a stacked list of links, each `padding: 10px 0` with a `--color-divider` bottom border: `chriscox23012005@gmail.com` (mailto), `+31 6 11 25 98 12` (tel `+31611259812`, tabular figures), `linkedin.com/in/chris-cox-1b7b2b289`, `github.com/chriscox2301`.

Right: the form, `border-left: 1px solid var(--color-divider)`, `padding-left: clamp(0px, 3vw, 40px)`, fields Name / Email / Message using `.field` + `.input` (labels 11.5px, `.16em`, uppercase; inputs keep `--font-body` at 15px, normal case), placeholders "Your name", "you@company.nl", "What would you like to build?", all required, message is a 4-row textarea with `resize: vertical`. Submit is `.btn .btn-primary` reading "Send message", switching to "Thanks — I'll be in touch" after submit.

Make this a **real** submission, not the prototype's fake one: a client component with `useState` for the field values and status (`idle | sending | sent | error`), posting to a `app/api/contact/route.ts` Route Handler. Validate on the server (required fields, email shape) and send via Resend or Nodemailer with the credentials in `.env.local` (`RESEND_API_KEY`, `CONTACT_TO`); return 400 with a field-level message on invalid input. Show inline errors under the offending field, disable the button while sending, and keep the success state accessible (`aria-live="polite"`). Never leak the API key to the client.

**9. `Footer`** — `border-top: 4px solid var(--color-text)`, 20px top padding: "Chris Cox — HBO-ICT, Zuyd Hogeschool Heerlen. Built with Next.js and React." at 12.5px, `letter-spacing: .1em`, uppercase, 66% text opacity.

## Images

The reference uses drop-in placeholders. In the real site use `next/image` with real files in `public/images/`: `portrait.jpg` (4:5), `about.jpg` (4:5), `klantbestelsysteem.png`, `bezorgapplicatie.png`, `adminbackoffice.png` (all 16:10). Keep the `.plate` wrapper around each, give every image a real `alt`, and set `sizes` so the portrait and plates don't over-fetch. Until the real files exist, commit neutral placeholder images of the right dimensions rather than letting layout collapse.

## Responsive

Desktop-first, as the reference is. Below ~900px the two-column grids collapse to one (the `auto-fit`/`minmax` grids do this already — the fixed `1.5fr/1fr`, `7fr/4fr` and `190px 1fr` ones need media queries), the About column-count drops to 1, the hero `h1` scales down through its `clamp`, and the nav wraps. Verify at 1440, 1024, 768 and 390px: no horizontal scroll, no text below 14px in body copy, tap targets ≥44px.

## Also do

- Metadata in `app/layout.tsx`: title "Chris Cox — Front-end developer", a description from the intro, `lang="en"`, Open Graph tags and an OG image.
- Semantic landmarks (`header`, `nav`, `main`, `section` with `aria-labelledby`, `footer`), heading levels in order, a skip link, and visible `:focus-visible` on every interactive element.
- Deploy-ready on Vercel; `npm run build` and `npm run lint` clean, no `any`, no unused exports.
- A short `README.md`: how to run it, where the content lives, and which env vars the contact form needs.

Start by scaffolding the app, wiring the fonts and the stylesheet, and building the content module and `Hero` — show me that before continuing with the rest.
