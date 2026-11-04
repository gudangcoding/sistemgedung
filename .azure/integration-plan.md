# Integration hand-off

## Services and commands

- **Backend + frontend:** repository root (`D:\PROYEK CODING\sistemgedung`); Next.js App Router, TypeScript.
- **Run:** `npm install`; `npm run dev` (port 3000).
- **Build / check:** `npm run build`; `npm run typecheck`; `npm run lint`.
- **Health:** `GET /api/health`.
- **Database:** Azure Database for PostgreSQL, not connected yet. Choose/document a migration tool and migration directory during integration. Read connection string from `DATABASE_URL`; add no seed data.
- **Authentication:** not implemented. Demo role selection is not authorization. Add real authentication, server-side role checks, and property/tenant data isolation before exposing private data.

## Frontend wiring

- **Frontend folder:** repository root.
- **API seam:** create/standardize `src/lib/api/index.ts`; route portal data access through this client. Current illustrative operational data is inline in `src/components/portal-dashboard.tsx` (`initialTickets`, metrics, schedules, unit/tenant counts); replace with live reads and remove the inline datasets after wiring.
- **Existing direct API call:** `src/components/demo-form.tsx` posts to `/api/demo-request`, including optional `packageInterest` (`basic`, `growth`, `enterprise`, `custom`). The current handler validates and returns 202 without storing or forwarding personal data; configure an approved destination/persistence policy before production.
- **Pricing page:** `/harga` lists initial configurable package/add-on estimates; treat all amounts as pending cost/load validation and confirm PostgreSQL scope, taxes, and commercial terms before contract.
- **Mock files to remove:** no standalone mock-client or mock-data files exist yet. Remove inline illustrative operational arrays and placeholder values in `src/components/portal-dashboard.tsx` when live data is connected. Keep clearly-marked empty states; do not retain a mock-state switcher.
- **Frontend commands:** `npm run dev`, `npm run build`.

## Existing API routes

- `GET /api/health` — `src/app/api/health/route.ts`.
- `POST /api/demo-request` — `src/app/api/demo-request/route.ts`; transient validation only, no storage.

## Portal API inventory to implement and probe

- Buildings/units: `GET, POST /api/buildings`; `GET, PATCH /api/buildings/{buildingId}`; `GET, POST /api/buildings/{buildingId}/units`; `GET, PATCH /api/units/{unitId}`.
- Users/tenants: `GET, POST /api/tenants`; `GET, PATCH /api/tenants/{tenantId}`; `GET, POST /api/users`; `GET, PATCH /api/users/{userId}`.
- Complaints/work orders: `GET, POST /api/tickets`; `GET, PATCH /api/tickets/{ticketId}`; `POST /api/tickets/{ticketId}/assign`; `POST /api/tickets/{ticketId}/escalate`.
- Assets/preventive maintenance: `GET, POST /api/assets`; `GET, PATCH /api/assets/{assetId}`; `GET, POST /api/maintenance-schedules`; `GET, PATCH /api/maintenance-schedules/{scheduleId}`.
- Vendors/announcements/reports: `GET, POST /api/vendors`; `GET, PATCH /api/vendors/{vendorId}`; `GET, POST /api/announcements`; `GET, PATCH /api/announcements/{announcementId}`; `GET /api/reports/operations`.
- Tenant: `GET /api/tenant/me`; `GET, POST /api/tenant/requests`; `GET /api/tenant/requests/{requestId}`; `GET /api/tenant/facilities`; `GET, POST /api/tenant/reservations`; `GET /api/tenant/announcements`.
- Technician: `GET /api/technician/work-orders`; `GET, PATCH /api/technician/work-orders/{workOrderId}`; `POST /api/technician/work-orders/{workOrderId}/notes`; `POST /api/technician/work-orders/{workOrderId}/attachments`; `POST /api/technician/work-orders/{workOrderId}/escalate`; `GET /api/technician/schedules`; `GET /api/technician/assets/{assetId}`.

Implement route contracts and validation, enforce authenticated role/property scopes server-side, and smoke-test every route with appropriate authorized and unauthorized cases. Keep file uploads disabled until secure storage, size/type limits, and access controls are designed.

## Shared types and service classification

- **Shared types:** no cross-service shared package currently; introduce `src/types` or a typed API package and import it consistently through `@/types` (existing TypeScript path alias `@/*` maps to `src/*`).
- **Services:** Next.js web frontend and Next.js TypeScript API — **Essential**. PostgreSQL datastore and authentication — **Essential**, pending integration. Blob/file storage — **Enhancement**, not configured; do not enable uploads yet.
