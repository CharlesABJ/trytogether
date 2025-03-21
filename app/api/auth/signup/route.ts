import { signUpSchema } from "@/_utils/validation/auth/signUpSchema";
import { PrismaClient } from "@prisma/client";
import bcrypt from "bcrypt";
import { NextResponse } from "next/server";


const prisma = new PrismaClient();

export async function POST(req: Request) {
    try {
        console.log("📩 Requête reçue :", req.method);

        const body = await req.json();
        console.log("📊 Corps de la requête :", body);

        const parsedBody = signUpSchema.safeParse(body);

        // Valider les données avec Zod
        if (!parsedBody.success) {
            console.error("❌ Erreur de validation Zod :", parsedBody.error.format());
            return NextResponse.json({ message: "Données invalides", errors: parsedBody.error.format() }, { status: 400 });
        }

        // Extraire les données validées
        const { firstName, lastName, email, password } = parsedBody.data;
        console.log("✅ Données validées :", { firstName, lastName, email });



        // Vérifier si l'utilisateur existe déjà
        const existingUser = await prisma.user.findUnique({ where: { email } });
        console.log("🔍 Recherche utilisateur :", existingUser);

        if (existingUser) {
            return NextResponse.json({ message: "Cet email est déjà utilisé" }, { status: 400 });
        }

        // Hasher le mot de passe
        const hashedPassword = await bcrypt.hash(password, 10);
        console.log("🔑 Mot de passe hashé :", hashedPassword);




        // Créer l'utilisateur
        const user = await prisma.user.create({
            data: {
                firstName,
                lastName,
                email,
                password: hashedPassword,
            },
        });
        console.log("✅ Utilisateur créé :", user);


        return NextResponse.json({ message: "Utilisateur créé avec succès" }, { status: 201 });

    } catch (error) {
        console.error("🚨 Erreur API signup :", error);
        return NextResponse.json({ message: "Erreur serveur", error }, { status: 500 });
    }
}