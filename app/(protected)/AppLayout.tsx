"use client";

import { ReduxProvider } from "@/_redux/Provider";
import Header from "@/_components/Header/Header";
import Footer from "@/_components/Footer/Footer";

export default function AppLayout({ children }: { children: React.ReactNode }) {
    return (
        <ReduxProvider>
            <Header />
            <main data-main-color={"blue"}>{children}</main>
            <Footer />
        </ReduxProvider>
    );
}