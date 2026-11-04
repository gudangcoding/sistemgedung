# Project Plan: SistemGedung

## Approved scope

Create a Next.js website and building-management application for a business serving Jakarta and nearby areas. The business offers custom building-management software development and operational building-management services. The product serves apartment and office-building operators, tenants, and engineering technicians.

The user approved this scope and the initial recommendations on 2026-11-04.

## Brand, domain, and local presence

- Recommended working brand: **SistemGedung**.
- Domain candidate: **sistemgedung.com**. Availability and trademark status have not been checked; verify before purchase or launch. Alternatives to check: `gedungpro.com` and `aplikasigedung.com`.
- Google Business Profile name: **SistemGedung**, only if it is the real-world business name. Do not add keywords or service descriptions to the business name. Create a profile only if the business meets Google's current eligibility requirements; do not invent an address, phone number, or physical office.
- Initial service area: Jakarta and surrounding areas.

## Search and content strategy

Target Indonesian search intent with these unverified keyword candidates:

1. aplikasi building management
2. aplikasi manajemen gedung
3. software building management
4. aplikasi pengelolaan gedung
5. aplikasi pengelolaan apartemen
6. aplikasi maintenance gedung
7. aplikasi facility management

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
