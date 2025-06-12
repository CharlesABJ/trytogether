
"use client";
import React, { useEffect, useState, useMemo } from 'react';
import { signIn, useSession } from 'next-auth/react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faExclamationCircle, faLightbulb } from '@fortawesome/free-solid-svg-icons';
import Link from 'next/link';
import PasswordInput from '@/_components/Form/PasswordInput/PasswordInput';
import TextInput from '@/_components/Form/TextInput/TextInput';
import EmailInput from '@/_components/Form/EmailInput/EmailInput';
import CheckboxInput from '@/_components/Form/CheckboxInput/CheckboxInput';
import Testimony from '@/_components/Reinsurance/Testimony/Testimony';
import SubmitButton from '@/_components/Form/SubmitButton/SubmitButton';
import { signInSchema } from '@/_utils/validation/auth/signInSchema';
import { signUpSchema } from '@/_utils/validation/auth/signUpSchema';
import { useRouter } from 'next/navigation';
import testimonialsData from '@/_datas/testimonials.json';

function Login() {
    const router = useRouter();


    // ============================ VARIABLES ==============================

    // (0) État de la session
    const { data: session, status } = useSession();

    // (1) État pour savoir quel témoignage est actif
    const [activeTestimonyIndex, setActiveTestimonyIndex] = useState(0);

    // (2) État pour savoir quel formulaire est actif
    const [activeForm, setActiveForm] = useState("sign-in");

    // (3) État pour stocker les données des formulaires
    // Sign-in
    const [signInFormData, setSignInFormData] = useState({
        email: "",
        password: "",
        rememberMe: false
    });
    // Sign-up
    const [signUpFormData, setSignUpFormData] = useState({
        firstName: "",
        lastName: "",
        email: "",
        password: "",
        acceptLegalTerms: false
    });

    // (4) État pour savoir si le bouton est disabled
    const [buttonIsDisabled, setButtonIsDisabled] = useState(true);

    // (5) État pour stocker les erreurs des formulaires
    const [errors, setErrors] = useState<{ [key: string]: string }>();

    // (6) État pour stocker la couleur principale de la page
    const colors = ["original", "blue", "red", "teal", "yellow", "purple", "orange", "green"];

    const [colorIndex, setColorIndex] = useState<null | number>(null);
    useEffect(() => {
        if (colorIndex === null) {
            setColorIndex(Math.floor(Math.random() * colors.length));
        }
    }, [colorIndex, colors.length]);

    // (7) Etat 
    // const words = ["compétences", "talents", "potentiel", "connaissances", "créativité", "curiosité"];
    // const words = ["compétences", "talents", "idées", "connaissances", "envies", "capacités"];
    const words = useMemo(() => ["compétences", "connaissances", "idées"], []);
    const [wordIndex, setWordIndex] = useState<number>(0);
    const [letters, setLetters] = useState<string[]>([]);
    const [letterIndex, setLetterIndex] = useState(0);
    const [isDeleting, setIsDeleting] = useState(false);


    // ============================= FONCTIONS =============================

    // Vérifier le statut
    useEffect(() => {
        if (status === "authenticated") {
            router.push("/dashboard");
        }
    }, [status, session, router])

    // (0a) Se connecter avec Google
    const handleSignIn = async () => {

        try {
            await signIn("google", { redirectTo: "/dashboard" });

        } catch (error) {
            console.error("Erreur lors de la connexion avec Google", error);
        }
    };

    // (1) Changer l'index du temoignage actif toute les x secondes
    useEffect(() => {
        const interval = setInterval(() => {
            setActiveTestimonyIndex((prevIndex) =>
                prevIndex === testimonialsData.length - 1 ? 0 : prevIndex + 1
            );
        }, 9000);

        return () => clearInterval(interval);
    }, []);

    // (2) Fonction pour activer le formulaire de connexion ou de inscription
    const handleActiveForm = (form: 'sign-in' | 'sign-up') => {
        if (form === 'sign-in') {
            setActiveForm("sign-in");
        } else if (form === 'sign-up') {
            setActiveForm("sign-up");
        }
    }

    // (3) Fonction pour changer l'état des inputs des formulaires
    const handleInputChange = (name: string, value: string | boolean, form: string) => {
        if (form === 'sign-in') {
            setSignInFormData((prevData) => ({
                ...prevData,
                [name]: value
            }));
        } else if (form === 'sign-up') {
            setSignUpFormData((prevData) => ({
                ...prevData,
                [name]: value
            }));
        }
    };


    // (3b, 5) Fonction pour gérer la soumission des formulaires
    const handleFormSubmit = async (e: React.FormEvent, form: string) => {
        e.preventDefault();
        // On vérifie si les données sont valides
        const result = form === 'sign-in' ?
            signInSchema.safeParse(signInFormData) : signUpSchema.safeParse(signUpFormData);

        if (!result.success) {
            const errors: { [key: string]: string } = {}; // Stocke les erreurs de validation
            result.error.issues.forEach((issue) => { // 
                errors[issue.path[0]] = issue.message;
            });
            setErrors(errors);
            return;
        }
        setErrors({}); // On supprime les erreurs lié à Zod après la validation
        // Il n'y a plus d'erreurs, on envoie les données et on vérifie dans la base de données
        try {
            if (form === "sign-up") {
                //On envoi des données d'inscription à `/api/auth/signup`
                const response = await fetch("/api/auth/signup", {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json", // On envoie du JSON 
                        "Accept": "application/json" // On accepte du JSON 
                    },
                    body: JSON.stringify(signUpFormData),
                });

                const data = await response.json();
                if (!response.ok) {
                    setErrors({ api: data.message }); // On affiche l'erreur de l'API
                } else {
                    console.log("Inscription réussie !");
                    await signIn("credentials", {
                        email: signUpFormData.email,
                        password: signUpFormData.password,
                        redirect: true,
                        callbackUrl: "/dashboard"
                    });
                }
            } else if (form === "sign-in") {
                //  Envoi des données de connexion à NextAuth.js
                const response = await signIn("credentials", {
                    redirect: false, // Pour empêcher la redirection par défaut de NextAuth
                    email: signInFormData.email,
                    password: signInFormData.password,
                });

                if (response?.error) {
                    if (response.error === "Configuration") {
                        setErrors({ loginError: "Email ou mot de passe incorrect" })
                    }
                } else {
                    router.push("/dashboard");
                }
            }
        } catch (error) {
            console.error("Erreur serveur :", error);
            setErrors({ loginError: `Une erreur inattendue s'est produite: ${error}` });
        }
    }


    // (4) Fonction pour vérifier si le bouton doit être activé ou non
    useEffect(() => {

        const formData = activeForm === 'sign-in' ? signInFormData : signUpFormData;
        // Liste des champs obligatoires pour chaque formulaire
        const requiredFields = activeForm === 'sign-in'
            ? ["email", "password"]  // Champs obligatoires pour la connexion
            : ["firstName", "lastName", "email", "password"];  // Champs obligatoires pour l'inscription

        // On vérifie si tous les champs obligatoires sont remplis
        const isFormValid = activeForm === 'sign-in'
            ? requiredFields.every(field => formData[field as keyof typeof formData].trim() !== "")
            : requiredFields.every(field => formData[field as keyof typeof formData].trim() !== "") && signUpFormData.acceptLegalTerms;


        setButtonIsDisabled(!isFormValid);


    }, [signInFormData, signUpFormData, activeForm]);


    // (6) Fonction pour changer la couleur principale de la page
    const handleChangeColor = () => {
        const newColorIndex = Math.floor(Math.random() * colors.length);
        setColorIndex(newColorIndex);
    }


    // (7) Fonction pour changer la phrase dynamique

    useEffect(() => {
        const currentWord = words[wordIndex].split(""); // On coupe le mot en lettres

        if (!isDeleting) {
            if (letterIndex < currentWord.length) {
                setTimeout(() => {
                    setLetters((prev) => [...prev, currentWord[letterIndex]]);
                    setLetterIndex((prev) => prev + 1);
                }, 100);
            } else {
                // **Pause avant suppression**
                setTimeout(() => setIsDeleting(true), 2000);
            }
        } else {
            // **Suppression des lettres une par une**
            if (letterIndex > 0) {
                setTimeout(() => {
                    setLetters((prev) => prev.slice(0, -1));
                    setLetterIndex((prev) => prev - 1);
                }, 50);
            } else {
                // **Changement de mot après suppression**
                setIsDeleting(false);
                setWordIndex((prevIndex) => (prevIndex + 1) % words.length);
            }
        }
    }, [letterIndex, isDeleting, words, wordIndex]);


    if (colorIndex === null) return null;
    return (
        <main data-main-color={colors[colorIndex]} className="main-of-Login ">
            <section className="presentation">
                <div className="try-together">
                    <div onClick={handleChangeColor} className="icon lightbulb">
                        <FontAwesomeIcon icon={faLightbulb} />
                    </div>
                    <span>TryTogether</span>
                </div>
                <h1>Développez vos <br />
                    <i>
                        {letters.map((letter, index) => (
                            <span key={index} >
                                {letter}
                            </span>
                        ))}</i> avec des mentors passionnés</h1>
                <p>Rejoignez notre communauté et connectez-vous avec des experts dans votre domaine pour accélérer votre apprentissage.</p>

                <div className="testimonials-zone">
                    {testimonialsData.map((testimony, index) => (
                        <div key={testimony.testimonyId} className={index === activeTestimonyIndex ? 'testimony active' : 'testimony'}>
                            <Testimony dataTestimony={testimony} />
                        </div>
                    ))}
                </div>
                <i>Les commentaires présentés ci-dessus sont simulés à des fins de démonstration.</i>
            </section>
            <section className="login">
                <p className="welcome">Bienvenue sur <span>TryTogether</span></p>
                <p className="slogan">Programmation, Maths, Anglais, Français, Physique, Poterie... <br /> Et si on essayait de le faire ensemble ? </p>

                <div className="forms-zone">
                    <div className="toggle-choice">
                        <button onClick={() => handleActiveForm('sign-in')} id='sign-in-button' className={activeForm === 'sign-in' ? 'active' : ''}>Connexion</button>
                        <button onClick={() => handleActiveForm('sign-up')} id='sign-up-button' className={activeForm === 'sign-up' ? 'active' : ''}>Inscription</button>
                    </div>
                    <form
                        onSubmit={(e) => handleFormSubmit(e, 'sign-in')}
                        id="sign-in-form"
                        className={activeForm === 'sign-in' ? 'active' : ''}
                        action=""
                        method="POST">

                        {errors?.loginError && <p className="errors-message login-error"><FontAwesomeIcon icon={faExclamationCircle} /> {errors.loginError}</p>}

                        <EmailInput
                            dataEmailInput={{
                                label: "Email",
                                name: "email",
                                placeholder: "nom@exemple.com",
                                icon: "envelope"
                            }}
                            value={signInFormData.email}
                            onChange={handleInputChange}
                            errors={errors}
                            formName="sign-in"
                        />
                        <PasswordInput
                            dataPasswordInput={{
                                label: "Mot de passe",
                                name: "password", placeholder: "••••••••",
                                icon: "lock"
                            }}
                            value={signInFormData.password}
                            onChange={handleInputChange}
                            errors={errors}
                            formName="sign-in" />
                        <CheckboxInput
                            dataCheckboxInput={{
                                label: "Se souvenir de moi",
                                name: "rememberMe"
                            }}
                            value={signInFormData.rememberMe}
                            onChange={handleInputChange}
                            errors={errors}
                            formName="sign-in" />
                        <SubmitButton
                            dataSubmitButton={{
                                label: "Se connecter"
                            }}
                            isGoogle={false}
                            disabled={buttonIsDisabled}
                            formName="sign-in"
                        />
                    </form>
                    <form
                        onSubmit={(e) => handleFormSubmit(e, 'sign-up')}
                        id="sign-up-form"
                        className={activeForm === 'sign-up' ? 'active' : ''}
                        action=""
                        method="POST">
                        <div className="name-and-firstname-zone">
                            <TextInput
                                dataTextInput={{
                                    label: "Prénom",
                                    name: "firstName",
                                    placeholder: "Candice",
                                    icon: "user"
                                }}
                                value={signUpFormData.firstName}
                                onChange={handleInputChange}
                                errors={errors}
                                formName="sign-up" />
                            <TextInput
                                dataTextInput={{
                                    label: "Nom",
                                    name: "lastName",
                                    placeholder: "Lale",
                                    icon: "user"
                                }}
                                value={signUpFormData.lastName}
                                onChange={handleInputChange}
                                errors={errors}
                                formName="sign-up" />
                        </div>
                        <EmailInput
                            dataEmailInput={{
                                label: "Email",
                                name: "email",
                                placeholder: "nom@exemple.com", icon: "envelope"
                            }}
                            value={signUpFormData.email}
                            onChange={handleInputChange}
                            errors={errors}
                            formName="sign-up" />
                        <PasswordInput
                            dataPasswordInput={{
                                label: "Mot de passe",
                                name: "password",
                                placeholder: "••••••••",
                                icon: "lock"
                            }}
                            value={signUpFormData.password}
                            onChange={handleInputChange}
                            errors={errors}
                            formName="sign-up" />
                        <CheckboxInput
                            required={true}
                            dataCheckboxInput={{
                                label: "J'accepte les conditions d'utilisation et la politique de confidentialité",
                                name: "acceptLegalTerms"
                            }}
                            value={signUpFormData.acceptLegalTerms}
                            onChange={handleInputChange}
                            errors={errors}
                            formName="sign-up" />
                        <SubmitButton
                            dataSubmitButton={{
                                label: "S'inscrire"
                            }}
                            isGoogle={false}
                            disabled={buttonIsDisabled}
                            formName="sign-up" />
                    </form>
                    <div className="continue-with-google">
                        <p className='separator'><span>Ou continuer avec</span></p>
                        <SubmitButton
                            dataSubmitButton={{
                                label: "Continuer avec Google"
                            }}
                            isGoogle={true}
                            disabled={false}
                            onClick={handleSignIn} />
                    </div>
                    <div className="legals-zone">
                        En vous connectant, vous acceptez nos <Link href="/cgu">{"Conditions d'utilisation"}</Link>{" et notre "}<Link href="/confidentialite">Politique de confidentialité</Link>.
                    </div>
                </div>
            </section>
        </main>
    );
}

export default Login;
