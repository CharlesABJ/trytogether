import { auth } from "@/_lib/auth/auth";
import { redirect } from "next/navigation";
import Header from "@/_components/Header/Header";
import Footer from "@/_components/Footer/Footer";

export default async function ProtectedLayout({ children }: { children: React.ReactNode }) {
  const session = await auth();
  if (!session) redirect("/login");


  return (
    <>
      <Header />
      <main>{children}</main>
      <Footer />
    </>
  );
}