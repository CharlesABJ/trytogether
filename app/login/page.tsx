
"use client";
import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight, faEnvelope, faEye, faEyeSlash, faLock, faUser } from '@fortawesome/free-solid-svg-icons';
import Image from 'next/image';
import Link from 'next/link';
import PasswordInput from '@/_components/(Form)/PasswordInput/PasswordInput';
import TextInput from '@/_components/(Form)/TextInput/TextInput';
import EmailInput from '@/_components/(Form)/EmailInput/EmailInput';

function Login() {
    const [formActive, setFormActive] = useState(false);
    const [eyeActive, setEyeActive] = useState(false);
    const handleActive = () => {

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
                        <button id='sign-in-button' className='active'>Connexion</button>
                        <button id='sign-up-button'>Inscription</button>
                    </div>
                    <form id="sign-in-form" className='active' action="" method="POST">
                        <EmailInput dataEmailInput={{ label: "Email", name: "sign-in-email", placeholder: "nom@exemple.com", icon: "envelope" }} />
                        <PasswordInput
                            dataPasswordInput={{
                                label: "Mot de passe",
                                name: "sign-in-password", placeholder: "••••••••",
                                icon: "lock"
                            }} />
                        <label htmlFor="remember-me">
                            <input type="checkbox" name="remember-me" id="remember-me" />
                            <span>Se souvenir de moi</span>
                        </label>
                        <button className="submit-button" type="submit" disabled>Se connecter</button>
                    </form>
                    <form id="sign-up-form" action="" method="POST">
                        <div className="name-and-firstname-zone">
                            <TextInput dataTextInput={{ label: "Prénom", name: "sign-up-firstname", placeholder: "John", icon: "user" }} />
                            <TextInput dataTextInput={{ label: "Nom", name: "sign-up-lastname", placeholder: "Doe", icon: "user" }} />

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
                        <label htmlFor="accept-legal-terms">
                            <input type="checkbox" name="accept-legal-terms" id="accept-legal-terms" />
                            J'accepte les conditions d'utilisation et la politique de confidentialité
                        </label>
                        <button type="submit" disabled>S'inscrire</button>
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