
"use client";
import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight, faEnvelope, faEye, faEyeSlash, faLock, faUser } from '@fortawesome/free-solid-svg-icons';
import Image from 'next/image';
import Link from 'next/link';

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
                        <label htmlFor="sign-in-email">
                            <span>Email</span>
                            <div className="input-wrapper">
                                <FontAwesomeIcon icon={faEnvelope} aria-hidden="true" />
                                <input
                                    type="email"
                                    name="sign-in-email"
                                    id="sign-in-email"
                                    placeholder="nom@exemple.com"
                                />
                            </div>
                        </label>
                        <label htmlFor="sign-in-password">
                            <div className="passord-zone">
                                <span>Mot de passe</span> <Link href="/reset" className='passord-reset'>Mot de passe oublié ?</Link>
                            </div>
                            <div className="input-wrapper">
                                <FontAwesomeIcon icon={faLock} aria-hidden="true" />
                                <input
                                    type="password"
                                    name="sign-in-password"
                                    id="sign-in-password"
                                    placeholder="••••••••"
                                />
                                <FontAwesomeIcon className='eye-icon active' icon={faEye} />
                                <FontAwesomeIcon className='eye-icon' icon={faEyeSlash} />
                            </div>
                        </label>
                        <label htmlFor="remember-me">
                            <input type="checkbox" name="remember-me" id="remember-me" />
                            <span>Se souvenir de moi</span>
                        </label>
                        <button type="submit" disabled>Se connecter</button>
                    </form>
                    <form id="sign-up-form" action="" method="POST">
                        <div className="name-and-firstname-zone">
                            <label htmlFor="sign-up-firstname">
                                <span>Prénom</span>
                                <div className="input-wrapper">
                                    <FontAwesomeIcon icon={faUser} aria-hidden="true" />
                                    <input
                                        type="text"
                                        name="sign-up-firstname"
                                        id="sign-up-firstname"
                                        placeholder="John"
                                    />
                                </div>
                            </label>
                            <label htmlFor="sign-up-lastname">
                                <span>Nom</span>
                                <div className="input-wrapper">
                                    <FontAwesomeIcon icon={faUser} aria-hidden="true" />
                                    <input
                                        type="text"
                                        name="sign-up-lastname"
                                        id="sign-up-lastname"
                                        placeholder="Doe"
                                    />
                                </div>
                            </label>
                        </div>
                        <label htmlFor="sign-up-email">
                            <span>Email</span>
                            <div className="input-wrapper">
                                <FontAwesomeIcon icon={faEnvelope} aria-hidden="true" />
                                <input
                                    type="email"
                                    name="sign-up-email"
                                    id="sign-up-email"
                                    placeholder="john.doe@ex"
                                />
                            </div>
                        </label>
                        <label htmlFor="sign-up-password">
                            <span>Mot de passe</span>
                            <div className="input-wrapper">
                                <FontAwesomeIcon icon={faLock} aria-hidden="true" />
                                <input
                                    type="password"
                                    name="sign-up-password"
                                    id="sign-up-password"
                                    placeholder="••••••••"
                                />
                                <FontAwesomeIcon className='eye-icon active' icon={faEye} />
                                <FontAwesomeIcon className='eye-icon' icon={faEyeSlash} />
                            </div>
                        </label>
                        <label htmlFor="accept-legal-terms">
                            <input type="checkbox" name="accept-legal-terms" id="accept-legal-terms" />
                            J'accepte les conditions d'utilisation et la politique de confidentialité
                        </label>
                        <button type="submit" disabled>S'inscrire</button>
                    </form>
                    <div className="continue-with-google">
                        <p className='separator'><span>Ou continuer avec</span></p>
                        <button><Image src="/img/icon/google-icon.png" alt="Google" width={18} height={18} /><span>Continuer avec Google</span></button>
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