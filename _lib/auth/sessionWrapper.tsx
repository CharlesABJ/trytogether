"use client";
import { SessionProvider } from "next-auth/react";

function sessionWrapper({ children }: { children: React.ReactNode }) {
    return (
        <SessionProvider>
            {children}
        </SessionProvider>
    );
}

export default sessionWrapper;