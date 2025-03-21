
import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "@/_styles/app.scss";
import SessionWrapper from "@/_lib/auth/sessionWrapper";

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
      <html data-main-color="original" lang="fr">
        <body className={monserrat.className}>
          {children}
        </body>
      </html>
    </SessionWrapper>
  );
}
