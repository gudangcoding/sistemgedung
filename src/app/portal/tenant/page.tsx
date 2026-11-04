import type { Metadata } from "next";
import { PortalDashboard } from "@/components/portal-dashboard";
export const metadata: Metadata = { title: "Portal Tenant", robots: { index: false, follow: false } };
export default function TenantPortalPage() { return <PortalDashboard role="tenant" />; }
