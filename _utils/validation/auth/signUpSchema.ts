import { z } from 'zod';

export const signUpSchema = z.object(
    {
        firstName: z.string()
            .trim()
            .min(2, { message: "Le prénom doit contenir au moins 2 caractères." })
            .max(20, { message: "Le prénom doit contenir moins de 20 caractères." }),

        lastName: z.string()
            .trim()
            .min(2, { message: "Le nom doit contenir au moins 2 caractères." })
            .max(20, { message: "Le nom doit contenir moins de 20 caractères." }),

        email: z.string().email({ message: "Veuillez entrer une adresse email valide." }),

        password: z.string()
            .min(6, { message: "Le mot de passe doit contenir au moins 6 caractères." })
            .regex(/^(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9])(?=.*[!@#$%^&*\?\\\/])/, {
                message: "Le mot de passe doit contenir au moins une lettre majuscule, une lettre minuscule, un chiffre et un caractère special."
            }),

        acceptLegalTerms: z.boolean().refine(value => value, { message: "Vous devez accepter les conditions d'utilisation." })
    }
)


