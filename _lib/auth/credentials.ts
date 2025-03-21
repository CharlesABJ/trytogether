import CredentialsProvider from "next-auth/providers/credentials";
import { PrismaClient } from "@prisma/client";
import bcrypt from "bcrypt";
import { signInSchema } from "@/_utils/validation/auth/signInSchema";

const prisma = new PrismaClient();


export const credentialsAuth = CredentialsProvider({
    id: "credentials",
    name: "Connexion avec email et mot de passe",
    credentials: {
        email: { type: "email" },
        password: { type: "password" },
    },

    async authorize(credentials) {
        const parsed = signInSchema.safeParse(credentials);

        if (!parsed.success) {
            console.error("❌ Erreur de validation des credentials :", parsed.error.format());
            throw new Error("Email ou mot de passe invalide");
        }

        const { email, password } = parsed.data;

        const user = await prisma.user.findUnique({ where: { email } });
        if (!user || !user.password) {
            throw new Error("Identifiants incorrects");
        }

        const isValid = await bcrypt.compare(password, user.password);
        if (!isValid) {
            throw new Error("Identifiants incorrects");
        }

        return {
            id: user.id,
            email: user.email,
            firstName: user.firstName,
            lastName: user.lastName,
        };
    },
});