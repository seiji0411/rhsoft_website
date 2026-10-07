# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project

Marketing website for RhSoft, a software development company. It uses Next.js 14 (App Router), React 18, TypeScript, Tailwind CSS and shadcn/ui. The package manager is Yarn (`yarn.lock`).

## Commands

```sh
yarn dev      # dev server
yarn build    # production build
yarn start    # serve the production build
yarn lint     # next lint
```

The repo has no test suite. `next.config.mjs` sets `eslint.ignoreDuringBuilds` and `typescript.ignoreBuildErrors`, so `yarn build` passes even when there are type or lint errors. To check types, run `npx tsc --noEmit`.

## Architecture

- **Routing**: pages live in `app/` (`/`, `/services`, `/portfolio`, `/careers`, `/contact`, `/privacy`, `/terms`, `/sitemap`). `app/layout.tsx` wraps every page in `ThemeProvider` (next-themes, class-based, light by default), `Navbar` and `Footer`. It also loads Google Analytics through an inline gtag script.
- **Home page**: `app/page.tsx` is a stack of section components from `components/*-section.tsx`.
- **Content is data-driven**: services, portfolio projects and job listings are typed arrays in `lib/services.ts`, `lib/projects.ts` and `lib/careers.ts`. Both the section components and the full pages render from these arrays. To add or edit content, change these files rather than the JSX.
- **UI primitives**: `components/ui/` holds generated shadcn/ui components (config in `components.json`, alias `@/*` → repo root). Feature components sit directly in `components/`. Merge classes with `cn()` from `lib/utils.ts`.
- **Styling**: the active global stylesheet is `app/globals.css`, which `app/layout.tsx` imports. `styles/globals.css` is a separate, unused copy. Brand colors are the `brand-*` palette in `tailwind.config.ts`.
- **Redirects**: `/crm` and `/crm/*` redirect to an external lead-management app (configured in `next.config.mjs`).

### Forms and email

- `components/contact-form.tsx` posts JSON to `app/api/contact/route.ts`. `components/quote-form.tsx` (used on `/contact`) posts multipart `FormData` to `app/api/quote/route.ts`, with the form data as a `quoteData` JSON string plus `files`.
- Both routes validate input with zod and then call helpers in `lib/email.ts`: a notification email to the team and a confirmation email to the user. If the confirmation fails, the request still succeeds.
- `lib/email.ts` sends mail with Nodemailer over SMTP through a lazily created, cached transporter. It retries once on `ETIMEDOUT`, `ESOCKET` and `ECONNECTION` errors. Mail is sent *from* `SMTP_USER`, with `FROM_EMAIL` set as reply-to, because the SMTP account (Gmail app password) can only send as itself. `@sendgrid/mail` is installed but not used.
- Required env vars (in `.env.local`): `SMTP_HOST`, `SMTP_PORT`, `SMTP_USER`, `SMTP_PASS`, `FROM_EMAIL`. Optional: `CONTACT_EMAIL`, `SALES_EMAIL`, `NEXT_PUBLIC_SITE_URL`. `EMAIL_SETUP.md` has the setup notes.
- The quote zod schema still has leftover glass-company fields (`glassType`, `dimensions`, etc.). The quote form and the schema must stay in sync.
