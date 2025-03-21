// app/(protected)/layout.tsx
import { getUserSession } from "@/_lib/auth/session";
import { redirect } from "next/navigation";
import Header from "@/_components/Header/Header";
import Footer from "@/_components/Footer/Footer";

export default async function ProtectedLayout({ children }: { children: React.ReactNode }) {
  const session = await getUserSession();

  if (!session) {
    redirect("/login");
  }

  return (
    <>
      <Header />
      <main>{children}</main>
      <Footer />
    </>
  );
}