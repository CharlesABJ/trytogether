import { signUpSchema } from "@/_utils/validation/auth/signUpSchema";
import { PrismaClient } from "@prisma/client";
import bcrypt from "bcryptjs";
import { NextResponse } from "next/server";


const prisma = new PrismaClient();

export async function POST(req: Request) {
    try {
        const body = await req.json(); // On récupère le corps de la requête
        const parsed = signUpSchema.safeParse(body); // On analyse les données avec le schéma Zod

        if (!parsed.success) {
            return NextResponse.json({ message: "Données invalides", errors: parsed.error.format() }, { status: 400 });
        }

        // On récupère les données validées par Zod
        const { firstName, lastName, email, password } = parsed.data;

        // On vérifie si l'utilisateur existe déjà
        const existingUser = await prisma.user.findUnique({ where: { email } });

        if (existingUser) {
            return NextResponse.json({ message: "Cet email est déjà utilisé" }, { status: 409 }); // 409 Car conflit avec une ressource existante
        }

        // On hash le mot de passe
        const hashedPassword = await bcrypt.hash(password, 10);


        // On crée l'utilisateur
        const user = await prisma.user.create({
            data: {
                email,
                password: hashedPassword,
                acceptLegalTerms: true,
                profile: {
                    create: {
                        firstName,
                        lastName
                    }
                }
            },
        });

        return NextResponse.json({ message: "Utilisateur créé avec succès", user }, { status: 201 });

    } catch (error) {
        return NextResponse.json({ message: "Erreur serveur", error }, { status: 500 });
    }
}