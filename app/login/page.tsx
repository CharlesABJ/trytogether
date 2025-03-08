
"use client";
import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import Image from 'next/image';
import Link from 'next/link';
import PasswordInput from '@/_components/(Form)/PasswordInput/PasswordInput';
import TextInput from '@/_components/(Form)/TextInput/TextInput';
import EmailInput from '@/_components/(Form)/EmailInput/EmailInput';
import CheckboxInput from '@/_components/(Form)/CheckboxInput/CheckboxInput';

function Login() {
    const [signInFormActive, setSignInFormActive] = useState(true);
    const [signUpFormActive, setSignUpFormActive] = useState(false);

    const handleActive = (form: string) => {
        if (form === 'sign-in') {
            setSignInFormActive(true);
            setSignUpFormActive(false);
        } else if (form === 'sign-up') {
            setSignInFormActive(false);
            setSignUpFormActive(true);
        }
    }
    return (
        <main className="main-of-Login">
            <section className="presentation">
                <div className="try-together">
                    <div className="icon">
                        <FontAwesomeIcon icon={faArrowRight} />
                    </div>
                    <span>TryTogether</span>
                </div>
                <h1>Développez vos compétences avec des mentors passionnés</h1>
                <p>Rejoignez notre communauté et connectez-vous avec des experts dans votre domaine pour accélérer votre apprentissage.</p>

                <div className="testimonials-zone">
                    <div className="testimony">
                        <div className="avatar">
                            <Image src="/images/avatar.png" alt="Avatar" width={40} height={40} />
                        </div>
                        <div className="testimony-content">
                            "TryTogether m'a permis de trouver un mentor qui a transformé ma carrière."
                        </div>
                        <div className="testimony-author">
                            Sophie L. - Développeuse Web
                        </div>
                    </div>
                </div>
            </section>
            <section className="login">
                <p className="welcome">Bienvenue sur <span>TryTogether</span></p>
                <p className="slogan">Programmation, Maths, Anglais, Français, Physique, Poterie... <br /> Et si on essayait de le faire ensemble ? </p>

                <div className="forms-zone">
                    <div className="toggle-choice">
                        <button onClick={() => handleActive('sign-in')} id='sign-in-button' className={signInFormActive ? 'active' : ''}>Connexion</button>
                        <button onClick={() => handleActive('sign-up')} id='sign-up-button' className={signUpFormActive ? 'active' : ''}>Inscription</button>
                    </div>
                    <form
                        id="sign-in-form"
                        className={signInFormActive ? 'active' : ''}
                        action=""
                        method="POST">
                        <EmailInput dataEmailInput={{ label: "Email", name: "sign-in-email", placeholder: "nom@exemple.com", icon: "envelope" }} />
                        <PasswordInput
                            dataPasswordInput={{
                                label: "Mot de passe",
                                name: "sign-in-password", placeholder: "••••••••",
                                icon: "lock"
                            }} />
                        <CheckboxInput
                            dataCheckboxInput={{
                                label: "Se souvenir de moi",
                                name: "remember-me"
                            }} />
                        <button className="submit-button" type="submit" disabled>Se connecter</button>
                    </form>
                    <form
                        id="sign-up-form"
                        className={signUpFormActive ? 'active' : ''}
                        action=""
                        method="POST">
                        <div className="name-and-firstname-zone">
                            <TextInput dataTextInput={{ label: "Prénom", name: "sign-up-firstname", placeholder: "Candice", icon: "user" }} />
                            <TextInput dataTextInput={{ label: "Nom", name: "sign-up-lastname", placeholder: "Lale", icon: "user" }} />

                        </div>
                        <EmailInput
                            dataEmailInput={{
                                label: "Email",
                                name: "sign-up-email",
                                placeholder: "nom@exemple.com", icon: "envelope"
                            }} />
                        <PasswordInput
                            dataPasswordInput={{
                                label: "Mot de passe",
                                name: "sign-up-password",
                                placeholder: "••••••••",
                                icon: "lock"
                            }} />
                        <CheckboxInput
                            dataCheckboxInput={{
                                label: "J'accepte les conditions d'utilisation et la politique de confidentialité",
                                name: "accept-legal-terms"
                            }} />
                        <button type="submit" className="submit-button" disabled>S'inscrire</button>
                    </form>
                    <div className="continue-with-google">
                        <p className='separator'><span>Ou continuer avec</span></p>
                        <button className="submit-button"><Image src="/img/icon/google-icon.png" alt="Google" width={18} height={18} /><span>Continuer avec Google</span></button>
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