"use client";

import React from 'react';
import { signOut, useSession } from 'next-auth/react';
import SettingsSection from './components/SettingsSection/SettingsSection';
import settingsData from '@/_datas/profile-settings.json';
import { iconMap } from '@/_utils/icons/iconMap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import Image from 'next/image';
function Profile() {
    const { data: session, status } = useSession();

    const mappedSettings = settingsData.map(section => ({
        ...section,
        items: section.items.map(item => ({
            ...item,
            icon: iconMap[item.icon]
        }))
    }));

    const handleSignOut = async () => {
        try {
            await signOut({ redirect: true, callbackUrl: "/login" });
            console.log("Déconnexion réussie");


        } catch (error) {
            console.error("Erreur lors de la déconnexion", error);
        }
    };

    if (status === "loading") {
        return <p>Chargement...</p>;
    }

    return (
        <main className='Profile'>
            <h1>Mon Compte</h1>

            <div className="container-edit">
                <div className="avatar_name-and-email">
                    <div className="avatar">
                        <Image
                            src={"/img/user1.jpg"}
                            alt={session?.user?.name || ""}
                            width={64}
                            height={64}
                        />

                    </div>
                    <div className="name-and-email">
                        <div className="name">{session?.user?.name}</div>
                        <div className="email">{session?.user?.email}</div>
                    </div>
                </div>

                {mappedSettings.map((setting) => (
                    <SettingsSection key={setting.settingId} dataSettingsSection={setting} />
                ))}
            </div>

            <button className='btn logout-btn' onClick={handleSignOut}><FontAwesomeIcon className='icon' icon={iconMap["faRightFromBracket"]} /> <span>Se déconnecter</span>
            </button>
        </main>
    );
}

export default Profile;