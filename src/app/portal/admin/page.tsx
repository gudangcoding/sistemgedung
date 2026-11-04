import type { Metadata } from "next";
import { PortalDashboard } from "@/components/portal-dashboard";
export const metadata: Metadata = { title: "Portal Admin", robots: { index: false, follow: false } };
export default function AdminPortalPage() { return <PortalDashboard role="admin" />; }
