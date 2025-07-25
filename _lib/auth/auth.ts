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
    callbacks: {
        async jwt({ token, user }) {
            if (user) {
                token.id = user.id;
                token.firstName = user.firstName;
                token.lastName = user.lastName;
            }
            return token;
        },
        async session({ session, token }) {
            const customToken = token as {
                id: string;
                firstName: string;
                lastName: string;
            };

            if (session.user) {
                session.user.id = customToken.id;
                session.user.firstName = customToken.firstName;
                session.user.lastName = customToken.lastName;
            }

            return session;
        }
    },

})