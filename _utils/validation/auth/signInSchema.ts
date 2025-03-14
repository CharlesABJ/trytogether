import { z } from 'zod'
export const signInSchema = z.object({
    email: z.string()
        .email({ message: "Veuillez entrer une adresse email valide." }),

    password: z.string()
        .min(6, { message: "Le mot de passe doit contenir au moins 6 caractères." })
    // Pas besoin de regex pour le mot de passe dans un formulaire de connexion
})