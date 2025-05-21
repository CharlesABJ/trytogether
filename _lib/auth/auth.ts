import NextAuth from "next-auth"
import { PrismaAdapter } from "@auth/prisma-adapter"
import { prisma } from "@/prisma/prisma"
import { credentials } from "./credentials"
import Google from "next-auth/providers/google"


export const { handlers, auth, signIn, signOut } = NextAuth({
    adapter: PrismaAdapter(prisma),
    providers: [Google, credentials],
    debug: process.env.NODE_ENV === 'development',
    session: {
        strategy: "jwt",
    },

})