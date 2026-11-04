# SistemGedung

Next.js + TypeScript scaffold for Indonesian building-management services and role-oriented operational portals.

## Run locally

```bash
npm install
npm run dev
```

Visit `http://localhost:3000`. `npm run build` and `npm run typecheck` validate the app.

## Important scaffold boundaries

- Portal pages use clearly identified illustrative sample data and a demo role chooser. **This is not authentication or authorization**; do not expose operational data or deploy these routes until real identity, tenant isolation, and server-side role checks are integrated.
- No production database, persistent demo-request storage, contact details, real customer claims, or seeded records are included. The demo-request API validates and acknowledges a request without saving or forwarding it.
- Configure PostgreSQL and authentication through secured environment variables and complete the integration work before production use.

## Brand and SEO notes

See [Brand and SEO guidance](docs/brand-seo.md) for the production domain setup, Search Console launch steps, and off-page recommendations. The owner reports purchasing `sistemgedung.com`; DNS and Vercel domain configuration must still be verified. Trademark status and keyword volumes have not been verified. Use the Google Business Profile name only if it matches the real-world business name and eligibility requirements. Supply verified business contact information before publishing it.
