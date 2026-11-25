# Brand & SEO

## Brand and domain

- Brand used by the site: **SistemGedung**.
- The owner reports purchasing `sistemgedung.com`. The repository now uses `https://sistemgedung.com` as its canonical production origin unless `NEXT_PUBLIC_SITE_URL` overrides it. DNS, Vercel domain assignment, HTTPS, and redirects still need to be verified after deployment.
- Preferred public host: `https://sistemgedung.com` (no `www`). Configure the Vercel project to redirect alternate hosts and HTTP to this HTTPS host.
- Before launch, set the Vercel Production environment variable `NEXT_PUBLIC_SITE_URL` to exactly `https://sistemgedung.com`. Do not set it to a preview deployment URL.

## On-page and technical SEO in the app

- Localized Indonesian titles/descriptions and canonical metadata are configured for public service, solution, article, news, and pricing pages.
- `/sitemap.xml` uses absolute production URLs and contains public landing/article routes, not the noindex demo request form or portal.
- `/robots.txt` advertises the sitemap. Portal routes use `noindex`; do not block those routes in robots.txt if crawlers need to read their noindex directives.
- Root metadata supplies Open Graph and Twitter defaults; the generated Open Graph image and favicon/logo are in the Next.js app.
- The root page emits `Organization` and `WebSite` JSON-LD using only supplied brand/site facts. Add business address, telephone, social profiles (`sameAs`), ratings, or `LocalBusiness` details only after they are verified and displayed accurately on the site.
- `/berita` contains evergreen articles mapped to search intent; do not create thin near-duplicate pages just to target every phrase. Search volume and competition remain unverified.

## Google Business Profile

Use the name **SistemGedung** only if it is the real-world business name. Do not append keywords or locations to the name. Create/verify a profile only if the business meets current Google eligibility rules. If the business operates as a service-area business and qualifies, configure the actual service area and hide a residential address where applicable. Do not invent a storefront, address, phone, reviews, or customer results.

Suggested description (publish only if it accurately represents the operating business):

> SistemGedung menyediakan pengembangan aplikasi manajemen gedung dan dukungan operasional untuk apartemen serta gedung perkantoran di Jakarta dan sekitarnya. Layanan membantu pengelola menangani kebutuhan tenant, keluhan, aset, dan pemeliharaan gedung secara lebih terstruktur.

## Off-page launch checklist

External profiles, citations, partnerships, and backlinks cannot be truthfully created by the codebase. Complete these after the production domain resolves:

1. **Verify the domain in Google Search Console** using a Domain property and DNS TXT verification. Add the exact production property, submit `https://sistemgedung.com/sitemap.xml`, and inspect the homepage, service pages, and several news URLs.
2. **Verify ownership in Bing Webmaster Tools** and import Search Console data if available; submit the same sitemap.
3. **Complete eligible official business profiles** (Google Business Profile and relevant social/company profiles) with consistent real business name, contact, website, service area, and category. Link to the canonical domain.
4. **Build real industry references:** participate in relevant property-management, facility-management, apartment, or engineering communities; publish useful contributions and link only where permitted and genuinely helpful.
5. **Publish original link-worthy resources:** practical maintenance checklists, implementation worksheets, and anonymized case studies. Get customer permission and substantiate all outcomes before naming clients or reporting metrics.
6. **Track acquisition and links:** review Search Console query/page data, indexing issues, and legitimate referring domains monthly. Improve pages based on impressions and qualified enquiries, not rank guarantees.

Avoid paid link schemes, automated directory submissions, reciprocal link networks, fake reviews, fabricated testimonials, keyword-stuffed business names, and mass-generated city/keyword pages. These tactics can harm visibility and trust.

## Keyword and content status

Keyword phrases supplied by the owner are mapped across the service pages and evergreen news articles. Two dedicated landing pages target the apartment-management keyword cluster with separate intent: `/aplikasi-pengelolaan-apartemen` covers daily use by role and module, while `/software-pengelolaan-apartemen` covers evaluation criteria and implementation. Both have their own canonical URL, metadata, FAQ structured data, and cross-links to avoid competing with `/solusi/apartemen` for the same query. Actual search volumes, ranking difficulty, and demand are **not verified**; validate them with Keyword Planner and Search Console after the site is indexed. Maintain natural language, useful detail, internal links, and accurate claims.

## Official guidance

- [Google Search Essentials](https://developers.google.com/search/docs/essentials)
- [Google SEO Starter Guide](https://developers.google.com/search/docs/fundamentals/seo-starter-guide)
- [Organization structured data](https://developers.google.com/search/docs/appearance/structured-data/organization)
- [Build and submit a sitemap](https://developers.google.com/search/docs/crawling-indexing/sitemaps/build-sitemap)
- [Google Search spam policies](https://developers.google.com/search/docs/essentials/spam-policies)
