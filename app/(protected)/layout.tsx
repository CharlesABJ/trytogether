import { auth } from "@/_lib/auth/auth";
import { redirect } from "next/navigation";
import AppLayout from "./AppLayout"; // Composant client

export default async function ProtectedLayout({ children }: { children: React.ReactNode }) {
  const session = await auth();
  if (!session) redirect("/login");

  return <AppLayout>{children}</AppLayout>;
}