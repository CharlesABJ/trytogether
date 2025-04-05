import NextAuth from "next-auth";
import { authBaseConfig } from "@/_lib/auth/auth.base.config";

export const middlneware = NextAuth(authBaseConfig).auth;


export const config = { // On définit les pages à protéger, non accessibles sans authentification
    matcher: ["/", "/dashboard/path:", "/goals", "/meetings", "/messages", "/store", "/profile"]
}
