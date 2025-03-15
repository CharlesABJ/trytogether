"use client";
import React from 'react';
import { signOut } from 'next-auth/react';


function Profile() {
    // const session = useSession();
    const handleSignOut = async () => {
        await signOut();
        alert('Vous êtes déconnecté, redirection vers la page d\'accueil');
        window.location.href = '/';

    };
    return (
        <section className='Profile'>
            <div className="test">
                <button onClick={handleSignOut}>Se déconnecter</button>

            </div>
        </section>
    );
}

export default Profile;