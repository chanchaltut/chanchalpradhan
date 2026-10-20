# chanchalpradhan.com

Personal portfolio of Chanchal Pradhan, built with Next.js 15, Tailwind CSS v4, Motion and the Geist type family.

## Develop

```bash
npm install
npm run dev        # http://localhost:3000
npm run build && npm start
```

## Editing content

Everything on the page (bio roles, stats, stack, projects, experience, education, socials) lives in
`src/data/site.ts`. Project screenshots go in `public/projects/`, tech icons in `public/icons/`,
and the downloadable resume is `public/resume.pdf`.

The GitHub activity graph is fetched from the public contributions API and refreshed every 6 hours.

## Contact form

Set these environment variables (e.g. in Vercel) to deliver form messages by email through
[Resend](https://resend.com):

| Variable         | Purpose                                                        |
| ---------------- | -------------------------------------------------------------- |
| `RESEND_API_KEY` | Resend API key (required to send)                              |
| `CONTACT_FROM`   | Sender, e.g. `Portfolio <hello@chanchalpradhan.com>` (verified domain) |
| `CONTACT_TO`     | Inbox to receive messages (defaults to contact@chanchalpradhan.com) |

Without `RESEND_API_KEY` the form opens the visitor's mail app with the message prefilled.

## SEO, AEO & GEO

- Metadata, Open Graph / Twitter cards, canonical URL and geo meta tags: `src/app/layout.tsx`
- schema.org JSON-LD graph (Person, WebSite, ProfilePage, Organization, projects, FAQPage): `src/lib/structured-data.ts`
- `/llms.txt` and `/llms-full.txt` for AI assistants, generated from `src/data/site.ts`: `src/lib/llms.ts`
- `robots.txt` explicitly allows AI crawlers; `sitemap.xml`, `manifest.webmanifest`, `humans.txt`
- The visible FAQ and the FAQPage schema share the same `faqs` data, so answers never drift

Optional search console verification:

| Variable                               | Purpose                         |
| -------------------------------------- | ------------------------------- |
| `NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION` | Google Search Console token     |
| `NEXT_PUBLIC_BING_SITE_VERIFICATION`   | Bing Webmaster Tools token      |
