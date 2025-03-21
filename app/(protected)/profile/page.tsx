"use client";
import React from 'react';
import { signOut } from 'next-auth/react';
// import { redirect } from 'next/navigation';


function Profile() {
    // const session = useSession();
    const handleSignOut = async () => {
        try {
            await signOut();

        } catch (error) {
            console.error("Erreur lors de la déconnexion", error);
        }

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