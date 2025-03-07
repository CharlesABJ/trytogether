"use client";
import React from 'react';
import LoginContainer from '../../(login)/components/LoginContainer/LoginContainer';
import CloseButton from '../../(login)/components/CloseButton/CloseButton';
import { useSession, signIn, signOut } from 'next-auth/react';

function Login() {
    const handleSignIn = async () => {
        await signIn('google');

    };
    const handleSignUp = async () => { };

    const session = useSession();
    if (session.data) {
        // window.location.href = '/';
    }

    return (
        <main className="Login bg-color1-50">
            {JSON.stringify(session)}
            <div className="test">
                <button onClick={handleSignIn}>Sign in</button>
                <button onClick={handleSignUp}>Sign up</button>
                <button className="logout" onClick={() => {
                    signOut();
                }}>
                    Se deco
                </button>
            </div>
            <CloseButton />
            <LoginContainer />
        </main>
    );
}

export default Login;