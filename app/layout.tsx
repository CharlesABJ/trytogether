import "@/_styles/app.scss";
import type { Metadata } from "next";
import { SessionProvider } from "next-auth/react";
import { Montserrat } from "next/font/google";

const monserrat = Montserrat(
  {
    subsets: ['latin'],
    weight: ["400", "700"],
  }
);


export const metadata: Metadata = {
  title: "TryItTogether",
  description: "Essayons d'apprendre des choses ensemble",
  keywords: ["TryItTogether", "apprendre", "mentoring", "mentor", "apprendre des choses ensemble", "cours en ligne", "cours en ligne gratuit", "professeur en ligne", "professeur en ligne gratuit", "apprendre à développer"],
  icons: {
    icon: "/img/favicon.png",
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  return (
    <SessionProvider>
      <html data-main-color="original" lang="fr">
        <body className={monserrat.className}>
          {children}
        </body>
      </html>
    </SessionProvider>
  );
}
