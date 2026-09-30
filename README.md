# Chris Cox — Portfolio

Personal portfolio built with Next.js (App Router), React and TypeScript, using
the token-driven "Classical" design system.

## Running it

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

```bash
npm run build   # production build
npm run lint    # eslint
```

## Where the content lives

The site is bilingual: Dutch (default) at `/` and English at `/en`, switched
with the NL / EN toggle in the masthead. All copy and structured data
(projects, skills, timeline, contact form text) lives in
`src/content/nl.ts` and `src/content/en.ts`, typed by `src/content/types.ts`.
Anything that is the same in both languages (repo links, images, contact
links) is in `src/content/shared.ts`. There's no CMS or database — edit those
files to update the site, and keep both languages in step.

Components live one-per-folder in `src/components/`, composed in
`src/app/[lang]/page.tsx`. `/` is rewritten to `/nl` in `next.config.ts`. `src/styles/classical.css` is the design system's
tokens/components stylesheet; `src/app/globals.css` holds resets and the two
page-level rules (`.dropcap`, `.bleed`) plus the page shell.

## Contact form

The contact form (`src/components/Contact/Contact.tsx`) posts to
`src/app/api/contact/route.ts`, which validates the payload server-side and
sends the message via [Resend](https://resend.com).

Copy `.env.local.example` to `.env.local` and fill in:

| Variable                | Purpose                                                    |
| ------------------------ | ----------------------------------------------------------- |
| `RESEND_API_KEY`         | Resend API key (kept server-side, never sent to the client) |
| `CONTACT_TO`             | Inbox that receives submissions                              |
| `NEXT_PUBLIC_SITE_URL`   | Deployed URL, used to resolve the Open Graph image           |

Without `RESEND_API_KEY`/`CONTACT_TO` set, the form still validates but the
API route returns a 500 telling you it isn't configured yet.

## Images

Placeholder images ship in `public/images/` at the real aspect ratios (4:5
portraits, 16:10 project screenshots). Swap them for real photos/screenshots
under the same filenames.
