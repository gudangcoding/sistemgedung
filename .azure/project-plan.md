# Project Plan: SistemGedung

**Status: Approved**

## Approved scope

Create a Next.js website and building-management application for a business serving Jakarta and nearby areas. The business offers custom building-management software development and operational building-management services. The product serves apartment and office-building operators, tenants, and engineering technicians.

The user approved this scope and the initial recommendations on 2026-11-04.

## Brand, domain, and local presence

- Recommended working brand: **SistemGedung**.
- Domain candidate: **sistemgedung.com**. Availability and trademark status have not been checked; verify before purchase or launch. Alternatives to check: `gedungpro.com` and `aplikasigedung.com`.
- Google Business Profile name: **SistemGedung**, only if it is the real-world business name. Do not add keywords or service descriptions to the business name. Create a profile only if the business meets Google's current eligibility requirements; do not invent an address, phone number, or physical office.
- Initial service area: Jakarta and surrounding areas.

## Search and content strategy

Target Indonesian search intent with these unverified keyword candidates supplied by the user. Organize content by distinct search intent; do not make unsupported claims about volume, competition, or ranking:

### Commercial / vendor intent

- jasa pembuatan aplikasi building management
- software building management system Indonesia
- jasa pembuat aplikasi pengelola gedung
- developer property management system
- aplikasi manajemen apartemen custom
- vendor aplikasi building management
- jasa pembuatan aplikasi manajemen apartemen
- software pengelola apartemen Indonesia
- aplikasi P3SRS apartemen custom
- developer sistem tagihan IPL apartemen
- vendor software apartemen dan kondominium

### Cost and feature intent

- biaya pembuatan aplikasi manajemen gedung
- aplikasi IPL dan iuran apartemen berbasis web
- software tenant & maintenance management gedung
- jasa buat sistem ticketing perawatan gedung
- aplikasi pengelolaan gedung perkantoran dan mall
- aplikasi pencatatan meteran air dan listrik apartemen
- sistem cetak invoice dan IPL apartemen otomatis
- aplikasi komplain dan ticketing penghuni apartemen
- biaya pembuatan aplikasi mobile tenant apartemen
- software absensi & gate pass pengunjung apartemen

Create separate evergreen articles to address vendor selection, cost components, and apartment operations (IPL, utility meters, complaints, visitor access, and fit-out). Use phrases naturally in useful copy, metadata keywords, and internal links; do not create thin pages for every phrase. Do not promise compliance or integrations unless verified.

Do not claim search-volume rankings or numbers without current keyword research. Validate demand and competition using Google Keyword Planner and later Search Console. Use clear, helpful landing pages for service and audience intent, with natural terminology rather than keyword stuffing.

Suggested SEO description:

> SistemGedung membantu pengelola apartemen dan gedung perkantoran mengelola tenant, keluhan, aset, dan pemeliharaan melalui aplikasi building management yang dapat disesuaikan.

Suggested Google Business Profile description, to be published only if it accurately represents the operating business:

> SistemGedung menyediakan pengembangan aplikasi manajemen gedung dan dukungan operasional untuk apartemen serta gedung perkantoran di Jakarta dan sekitarnya. Layanan membantu pengelola menangani kebutuhan tenant, keluhan, aset, dan pemeliharaan gedung secara lebih terstruktur.

Provide static, indexable Indonesian editorial pages (not fabricated news or dates). Initial evergreen topics:

- Panduan memilih aplikasi building management untuk apartemen dan gedung perkantoran.
- Cara mengelola keluhan tenant dan work order secara terstruktur.
- Checklist preventive maintenance untuk fasilitas gedung.
- Peran aplikasi facility management dalam pencatatan aset dan pekerjaan teknisi.

Each article should have a useful, factual body, descriptive title, metadata, canonical URL, and links to relevant services. Do not imply current events or publish dates that are not real.

## Public website

- Homepage describing software development and operational services, with a clear demo/consultation CTA.
- Service pages for custom building-management software and building operations support.
- Solution pages for apartments and office buildings.
- Static article index and article detail pages.
- Contact/demo request form. Until supplied, do not fabricate contact details.

## Application rental and support pricing (approved update)

Publish original, clearly labeled configurable launch estimates for application rental, managed server, and support. These are initial estimates pending business cost/load validation, not verified market rates. Availability, final sizing, scope, and commercial terms must be confirmed before contract; do not imply guaranteed uptime or resolution times.

All three monthly packages include a building-management application license and SSL, with a minimum 12-month term:

- **Basic — Rp3.900.000/month:** 1 property, up to 100 units; managed application server 4 GB RAM / 80 GB SSD; managed PostgreSQL allocation sized after onboarding; daily backups; weekday remote support with next-business-day response target; one remote onboarding session; application updates.
- **Growth — Rp6.900.000/month:** up to 3 properties / 400 units; managed application server 8 GB RAM / 160 GB SSD; daily backups; priority remote support with a 4-business-hour response target; 2 onsite visits per month, 4 hours each, within the Jakarta area; 2 training sessions.
- **Enterprise — Rp12.900.000/month:** up to 10 properties / 1,500 units; managed application server 16 GB RAM / 300 GB SSD; daily backups and a quarterly restore test; critical-support 2-business-hour response target; 4 onsite visits per month within the Jakarta area; dedicated onboarding.

Display support business hours as the proposed service window, Monday–Friday, 09.00–17.00 WIB, excluding public holidays; final hours and terms must be agreed in writing. Response targets are acknowledgements/initial response, not resolution-time guarantees or uptime SLAs. Clearly state how requests outside business hours are handled and that Jakarta-area onsite travel scope is limited to the agreed Jakarta service area.

Separate estimate add-ons: managed server-only from Rp1.500.000/month (final sizing after assessment); an extra onsite visit Rp750.000 per 4-hour session within the Jakarta area; remote training Rp1.250.000 per 2-hour session; migration and custom modules quoted after assessment. Overage, extra server resources, custom features, domains, and third-party charges are quoted separately.

Pricing page must disclose that all figures are initial configurable estimates pending cost/load validation, not verified market rates. Before agreement, clarify applicable taxes, PostgreSQL inclusion/scope and sizing (Basic allocation is sized after onboarding), backup-retention details, property/unit overages, onsite travel beyond Jakarta, billing/payment terms, and any third-party costs. Provide a package-specific CTA to the existing request form; do not fabricate contact data.

## Application modules

### Admin

- Role-aware dashboard and building/property, unit, tenant, and user management.
- Complaint and maintenance ticket intake, prioritization, assignment, status tracking, and escalation.
- Asset registry and preventive-maintenance schedules.
- Vendor records, building announcements, and operational reports.

### Tenant

- Unit/profile details, complaint and service requests, and ticket status tracking.
- Facility information and reservation requests.
- Building announcements, billing/document access where configured.

### Engineering technician

- Assigned work orders, inspection checklists, and preventive-maintenance schedule.
- Asset details, work notes, photo attachments, work status updates, and escalation.

## Technical direction

- Next.js with TypeScript and server-rendered/indexable public pages.
- TypeScript application API using Next.js server capabilities where appropriate.
- Azure Database for PostgreSQL for relational application data.
- Authenticated role-based access for admin, tenant, and engineering technician.
- Keep public marketing/content routes separate from protected application areas.
- Do not seed fabricated business contacts, claims, customer testimonials, or performance metrics.

## Acceptance criteria

- The public site presents the approved brand, services, target audience, and CTA consistently.
- Article pages are static, Indonesian, indexable, and support the relevant keyword themes without unsupported volume claims.
- Admin, tenant, and technician experiences expose the modules listed above and are separated by role.
- Contact and local-business details remain placeholders or configurable until the business supplies verified information.
- Project builds and its available tests pass.
