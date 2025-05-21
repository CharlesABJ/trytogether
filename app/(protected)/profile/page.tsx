"use client";

import React from 'react';
import { signOut, useSession } from 'next-auth/react';

function Profile() {
    const { data: session, status } = useSession();

    const handleSignOut = async () => {
        try {
            await signOut();
            console.log("Déconnexion réussie");
        } catch (error) {
            console.error("Erreur lors de la déconnexion", error);
        }
    };

    if (status === "loading") {
        return <p>Chargement...</p>;
    }

    return (
        <section className='Profile'>
            <h1>Mon Compte</h1>
            {session?.user?.email && <p>{session.user.email}</p>}

            <div className="container-edit">
                <div className="avatar_name-and-email">
                    <div className="avatar"></div>
                    <div className="name-and-email">
                        <div className="name">{session?.user?.name}</div>
                        <div className="email">{session?.user?.email}</div>
                    </div>
                </div>

                <div className="personal-info">
                    <h2>Informations personnelles</h2>
                    <ul>
                        <li>Modifier mon profil</li>
                        <li>Notifications</li>
                    </ul>
                </div>

                <div className="account-and-security">
                    <h2>Compte et sécurité</h2>
                    <ul>
                        <li>Sécurité du compte</li>
                        <li>Paramètres</li>
                        <li>Abonnement et facturation</li>
                    </ul>
                </div>

                <div className="help">
                    <h2>Aide</h2>
                    <ul>
                        <li>Centre d'aide</li>
                    </ul>
                </div>
            </div>

            <button className='btn logout-btn' onClick={handleSignOut}>Se déconnecter</button>
        </section>
    );
}

export default Profile;