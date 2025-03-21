import { AuthOptions } from "next-auth";
import { googleAuth } from "./google";
import { credentialsAuth } from "./credentials";

export const authOptions: AuthOptions = {
    providers: [googleAuth, credentialsAuth],
    secret: process.env.AUTH_SECRET,
    session: {
        strategy: "jwt",
    },
    pages: {
        signIn: "/login",
    },
    callbacks: {
        async jwt({ token, user }) {
            if (user) {
                token.id = user.id;
                token.email = user.email;
                token.firstName = user.firstName;
                token.lastName = user.lastName;
            }
            return token;
        },
        async session({ session, token }) {
            if (token && session.user) {
                session.user.id = token.id as string;
                session.user.firstName = token.firstName as string;
                session.user.lastName = token.lastName as string;
            }
            return session;
        },
    },
};