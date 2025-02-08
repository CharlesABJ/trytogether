import React from 'react';
import LoginButton from '../LoginButton/LoginButton';

function LoginContainer() {
    return (
        <div className="LoginContainer bg-color6">
            <div className="icon">
                <span></span>
            </div>
            <h1>Connexion</h1>
            <p className='instruction'>Connectez-vous grâce à votre adresse e-mail</p>
            <form>
                <label htmlFor="email">
                    Adresse e-mail
                    <input type="email" name="email" id="email" placeholder="Email" required />
                </label>
                <label htmlFor="password">
                    Mot de passe
                    <input type="password" name="password" id="password" required />
                    <a className='password-forgot' href="#">Mot de passe oublié ?</a>
                </label>
                <LoginButton LoginButtonData={{ backgroundColor: 'bg-color1', color: 'text-color6' }}>
                    Se connecter
                </LoginButton>
                <div className="separator">
                    <hr />
                    <span>OU</span>
                </div>
                <button className='bg-color6' type="button">Continuer avec Google</button>
                <LoginButton LoginButtonData={{ backgroundColor: 'bg-color6', color: 'text-color5' }}>
                    S'inscrire
                </LoginButton>
            </form>

        </div>
    );
}

export default LoginContainer;