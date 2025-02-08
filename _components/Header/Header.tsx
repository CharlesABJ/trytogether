"use client";
import React from 'react';
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBullseye } from '@fortawesome/free-solid-svg-icons/faBullseye';
import { faCalendar, faMessage } from '@fortawesome/free-regular-svg-icons';
import { faBookOpen, faCartShopping, faHouse } from '@fortawesome/free-solid-svg-icons';
import Image from 'next/image';



function Header() {
    const user = {
        name: "John Doe",
        avatar: "/img/profil.jpeg"
    };

    const navLinks = [
        {
            navId: 1,
            name: "Accueil",
            href: "/dashboard",
            icon: faHouse
        },
        {
            navId: 2,
            name: "Messagerie",
            href: "/messages",
            icon: faMessage
        },
        {
            navId: 3,
            name: "Rendez-vous",
            href: "/meetings",
            icon: faCalendar

        },
        {
            navId: 4,
            name: "Objectifs",
            href: "/goals",
            icon: faBullseye
        },
        {
            navId: 5,
            name: "Boutique",
            href: "/store",
            icon: faCartShopping
        },

    ];

    return (
        <header className="Header bg-color1">
            <div className="container">
                <div className="logo">
                    <Link href="/">
                        <FontAwesomeIcon icon={faBookOpen} />TryItTogether
                    </Link>
                </div>
                <nav>
                    <ul>
                        {navLinks.map((link) => (
                            <li key={link.navId}>
                                <Link href={link.href}> <FontAwesomeIcon icon={link.icon} /> {link.name ?? ""}
                                </Link>
                            </li>
                        ))}

                    </ul>
                </nav>
                <Link title='Profil' className='profile' href="/profile">
                    <Image width={50} height={50} src={user.avatar} alt={`${user.name} profil`} />
                </Link>
            </div>
        </header>
    );
}

export default Header;