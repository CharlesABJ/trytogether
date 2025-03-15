
"use client";
import React, { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import Link from 'next/link';
import PasswordInput from '@/_components/(Form)/PasswordInput/PasswordInput';
import TextInput from '@/_components/(Form)/TextInput/TextInput';
import EmailInput from '@/_components/(Form)/EmailInput/EmailInput';
import CheckboxInput from '@/_components/(Form)/CheckboxInput/CheckboxInput';
import Testimony from '@/_components/(Reinsurance)/Testimony/Testimony';
import SubmitButton from '@/_components/(Form)/SubmitButton/SubmitButton';
import { signInSchema } from '@/_utils/validation/auth/signInSchema';
import { signUpSchema } from '@/_utils/validation/auth/signUpSchema';
import dynamic from 'next/dynamic';
import { number } from 'zod';

const testimonyData = [
    {
        testimonyId: 1,
        avatar: "/img/user1.png",
        content: "Grâce à TryTogether, j'ai trouvé un mentor qui m'a initié au dessin numérique. Aujourd’hui, je réalise mes propres illustrations et j’envisage même d’en faire mon métier.",
        author: "Léa M. - Future illustratrice"
    },
    {
        testimonyId: 2,
        avatar: "/img/user2.jpeg",
        content: "Apprendre le japonais tout seul était un vrai défi. Mon mentor m’a aidé à progresser avec une méthode efficace, et aujourd’hui, je peux enfin tenir une conversation basique !",
        author: "Nathan S. - Étudiant en langues"
    },
    {
        testimonyId: 3,
        avatar: "/img/user3.jpeg",
        content: "J’ai toujours voulu apprendre à jouer aux échecs. Grâce à TryTogether, j’ai compris les bases et appris des stratégies avancées. Mes parties sont devenues bien plus intéressantes !",
        author: "Lucas D. - Joueur d’échecs amateur"
    },
    {
        testimonyId: 4,
        avatar: "/img/user4.jpg",
        content: "Je galérais en maths jusqu’à ce que mon mentor me montre une autre approche. Maintenant, les équations me paraissent bien plus claires et je gagne en confiance pour mes examens.",
        author: "Inès T. - Lycéenne en terminale"
    },
    {
        testimonyId: 5,
        avatar: "/img/user5.jpg",
        content: "J’ai toujours voulu apprendre à coder mais je ne savais pas par où commencer. Mon mentor a su m’expliquer les bases avec clarté et aujourd’hui, j’ai créé mon premier site web !",
        author: "Samir K. - Développeur en herbe"
    },
    {
        testimonyId: 6,
        avatar: "/img/user6.jpeg",
        content: "Je voulais améliorer mon niveau en anglais pour être plus à l’aise en voyage et au travail. Grâce à mon mentor, j’ai fait des progrès concrets et je prends enfin confiance à l’oral.",
        author: "Sarah P. - Consultante en marketing"
    },
    {
        testimonyId: 7,
        avatar: "/img/user7.jpeg",
        content: "J’ai toujours aimé la cuisine asiatique mais je ne savais pas par où commencer. Mon mentor m’a guidée pas à pas, et aujourd’hui, je réussis mes propres ramen maison !",
        author: "Sophie R. - Chef amateur"
    },
    {
        testimonyId: 8,
        avatar: "/img/user8.jpg",
        content: "Je voulais progresser sur *Valorant*, et grâce à un mentor expert, j’ai amélioré mon niveau et compris les vraies stratégies du jeu. Résultat : plus de victoires et moins de frustration !",
        author: "David P. - Joueur passionné d'e-sport"
    },
    {
        testimonyId: 9,
        avatar: "/img/user9.jpeg",
        content: "J’adorais filmer mes voyages, mais mes montages étaient… disons, un peu chaotiques. Mon mentor m’a appris à structurer mes vidéos, à choisir les bons cuts et à jouer avec les transitions. Maintenant, mes vidéos ressemblent enfin à celles des pros !",
        author: "Lucas R. - Futur monteur pro"
    },
    {
        testimonyId: 10,
        avatar: "/img/user10.jpeg",
        content: "Je voulais me remettre en forme, mais je manquais de motivation. Avec TryTogether, j’ai trouvé un coach qui m’a aidé à établir une routine adaptée. Résultat : je suis en meilleure forme que jamais !",
        author: "Emma C. - Sportive motivée"
    }
];

function Login() {

    // ============================ VARIABLES ==============================
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
    const colors = ["blue", "red", "teal", "yellow", "purple", "orange", "green"];

    const [colorIndex, setColorIndex] = useState(Math.floor(Math.random() * colors.length));


    // (7) Etat 
    // const words = ["compétences", "talents", "potentiel", "connaissances", "créativité", "curiosité"];
    // const words = ["compétences", "talents", "idées", "connaissances", "envies", "capacités"];
    const words = ["compétences", "connaissances"];
    const [wordIndex, setWordIndex] = useState<number>(0);
    const [letters, setLetters] = useState<string[]>([]);
    const [letterIndex, setLetterIndex] = useState(0);
    const [isDeleting, setIsDeleting] = useState(false);


    // ============================= FONCTIONS =============================

    // (1) Changer l'index du temoignage actif toute les x secondes
    useEffect(() => {
        const interval = setInterval(() => {
            setActiveTestimonyIndex((prevIndex) =>
                prevIndex === testimonyData.length - 1 ? 0 : prevIndex + 1
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
    const handleFormSubmit = (e: React.FormEvent, form: string) => {
        e.preventDefault();
        // On vérifie si les données sont valides
        const result = form === 'sign-in' ?
            signInSchema.safeParse(signInFormData) : signUpSchema.safeParse(signUpFormData);

        if (!result.success) {
            const errors: { [key: string]: string } = {}; // Stocke les erreurs de validation
            result.error.issues.forEach((issue) => { // 
                errors[issue.path[0]] = issue.message;
            });
            console.log("Gros y a des erreurs");

            setErrors(errors);
            return;
        }

        console.log("Y a pas d'erreurs!");
        setErrors({}); // On supprime les erreurs après la validation
    }


    // (4) Fonction pour vérifier si le bouton doit être activé ou non
    useEffect(() => {

        const formData = activeForm === 'sign-in' ? signInFormData : signUpFormData;
        // Liste des champs obligatoires pour chaque formulaire
        const requiredFields = activeForm === 'sign-in'
            ? ["email", "password"]  // Champs obligatoires pour la connexion
            : ["firstName", "lastName", "email", "password"];  // Champs obligatoires pour l'inscription

        // On vérifie si tous les champs obligatoires sont remplis
        let isFormValid = requiredFields.every(field => formData[field as keyof typeof formData].trim() !== "");

        setButtonIsDisabled(!isFormValid);

    }, [signInFormData, signUpFormData, activeForm]);


    // (6) Fonction pour changer la couleur principale de la page
    const handleChangeColor = () => {
        const newColorIndex = Math.floor(Math.random() * colors.length);
        setColorIndex(newColorIndex);
    }


    // (7) Fonction pour changer la phrase dynamique

    useEffect(() => {
        let currentWord = words[wordIndex].split(""); // On coupe le mot en lettres

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
    }, [letterIndex, isDeleting]);
    return (
        <main data-main-color={colors[colorIndex]} className="main-of-Login ">
            <section className="presentation">
                <div className="try-together">
                    <div className="icon arrow">
                        <FontAwesomeIcon onClick={handleChangeColor} icon={faArrowRight} />
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
                    {testimonyData.map((testimony, index) => (
                        <div key={testimony.testimonyId} className={index === activeTestimonyIndex ? 'testimony active' : 'testimony'}>
                            <Testimony dataTestimony={testimony} />
                        </div>
                    ))}
                </div>
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
                            disabled={false} />
                    </div>
                    <div className="legals-zone">
                        En vous connectant, vous acceptez nos <Link href="/cgu">Conditions d'utilisation</Link> et notre <Link href="/confidentialite">Politique de confidentialité</Link>.
                    </div>
                </div>
            </section>
        </main>
    );
}

export default Login;
