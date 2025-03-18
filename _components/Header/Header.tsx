"use client";
import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBullseye } from '@fortawesome/free-solid-svg-icons/faBullseye';
import { faCalendar, faMessage } from '@fortawesome/free-regular-svg-icons';
import { faBookOpen, faCartShopping, faHouse, faMoon, faSun } from '@fortawesome/free-solid-svg-icons';
import Image from 'next/image';



function Header() {
    const pathname = usePathname(); // On récupère l'url actuelle
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
    if (pathname === "/" || pathname === "/login") {
        return;
    }
    return (
        <header className="Header">
            <div className="container">
                <div className="logo">
                    <Link href="/">
                        <FontAwesomeIcon icon={faBookOpen} />TryTogether
                    </Link>
                </div>
                <nav>
                    <ul>
                        {navLinks.map((link) => (
                            <li key={link.navId}>
                                <Link
                                    className={`nav-link ${link.href === pathname ? "active" : ""}`}
                                    href={link.href}>
                                    <FontAwesomeIcon icon={link.icon} />
                                    {link.name ?? ""}
                                </Link>
                            </li>
                        ))}

                    </ul>
                </nav>
                <div className="account-zone">
                    <div className="toggle-darkmode">
                        <FontAwesomeIcon icon={faMoon} />
                        {/* <FontAwesomeIcon icon={faSun} /> */}
                    </div>
                    <Link title='Profil' className={`profile ${pathname === "/profile" ? "active" : ""}`} href="/profile">
                        <Image width={50} height={50} src={user.avatar} alt={`${user.name} profil`} />
                    </Link>
                </div>
            </div>
        </header>
    );
}

export default Header;