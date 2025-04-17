// import Credentials from "next-auth/providers/credentials";
// import bcrypt from "bcryptjs";
// import { PrismaClient } from "@prisma/client";
// import { signInSchema } from "@/_utils/validation/auth/signInSchema";

// const prisma = new PrismaClient();


// export const credentialsAuth = Credentials({
//     credentials: {
//         email: { type: "email" },
//         password: { type: "password" },
//     },

//     async authorize(credentials) {


//         const parsed = signInSchema.safeParse(credentials); // On analyse les données avec le schéma Zod

//         if (!parsed.success) {
//             throw new Error("Données invalides");
//         }

//         const { email, password } = parsed.data; // On récupère l'email et le mot de passe validés par Zod

//         // On vérifie si l'utilisateur existe en cherchant son email
//         const user = await prisma.user.findUnique({
//             where: { email },
//             include: { profile: true }
//         });
//         if (!user) {
//             throw new Error("Email ou mot de passe incorrect");
//         }

//         // On vérifie qu'il possède un mot de passe (si l'utilisateur existe mais sans mot de passe, c'est qu'il a été créé via Google)
//         if (!user.password) {
//             throw new Error("Ce compte semble avoir été créé via Google. Essayez de vous connecter avec Google.");
//         }

//         // On vérifie que le mot de passe saisi correspond à celui dans la base de données
//         const isValid = await bcrypt.compare(password, user.password);
//         if (!isValid) {
//             throw new Error("Email ou mot de passe incorrect");
//         }

//         return {
//             id: user.id.toString(),
//             email: user.email,
//             name: user.profile?.firstName + " " + user.profile?.lastName,
//             firstName: user.profile?.firstName,
//             lastName: user.profile?.lastName,


//         } // On retourne l'utilisateur connecté pour avoir accès à ses données

//     },
// });