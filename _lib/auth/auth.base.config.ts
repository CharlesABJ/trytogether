import type { NextAuthConfig } from "next-auth";
import Google from "next-auth/providers/google";
import { credentialsAuth } from "./credentials";


export const authBaseConfig = {
    providers: [Google, credentialsAuth], // On ajoute les providers Google et Credentials
    secret: process.env.AUTH_SECRET, // On ajoute la clé secrète
    session: {
        strategy: "jwt",
    },
    // callbacks: {
    //     async jwt({ token, user }) { // On ajoute les données de user au token car user n’est disponible que lors de la connexion initiale
    //         if (user) {
    //             token.id = user.id;
    //             token.email = user.email;
    //             token.firstName = user.firstName;
    //             token.lastName = user.lastName;
    //         }
    //         return token;  // Le token sera signé, stocké et réutilisé pour les prochaines sessions
    //     },
    //     async session({ session, token }) {  // À chaque appel à useSession(), on récupère les infos stockées dans le token et on les injecte dans session.user pour les rendre accessibles côté client
    //         if (token && session.user) {
    //             session.user.id = token.id as string;
    //             session.user.firstName = token.firstName as string;
    //             session.user.lastName = token.lastName as string;
    //         }
    //         return session;
    //     },
    // },
    debug: process.env.NODE_ENV === 'development',
} satisfies NextAuthConfig;