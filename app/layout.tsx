
import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "../_styles/app.scss";
import Header from "@/_components/Header/Header";
import Footer from "@/_components/Footer/Footer";
import SessionWrapper from "@/lib/SessionWrapper";


const monserrat = Montserrat(
  {
    subsets: ['latin'],
    weight: ["400", "700"],
  }
);




export const metadata: Metadata = {
  title: "TryItTogether",
  description: "Essayons d'apprendre des choses ensemble",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  return (
    <SessionWrapper>
      <html lang="fr">
        <body className={monserrat.className}>
          <Header />
          {children}
          <Footer />
        </body>
      </html>
    </SessionWrapper>
  );
}
