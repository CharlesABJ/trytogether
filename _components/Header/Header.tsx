"use client";
import React, { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBullseye } from '@fortawesome/free-solid-svg-icons/faBullseye';
import { faCalendar, faMessage } from '@fortawesome/free-regular-svg-icons';
import { faBars, faBookOpen, faCartShopping, faHouse, faMoon, faSun, faXmark } from '@fortawesome/free-solid-svg-icons';
import Image from 'next/image';



function Header() {
    const [isBurgerMenuOpen, setIsBurgerMenuOpen] = useState(false);
    const [isDarkMode, setIsDarkMode] = useState(false);
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
    const handleBurgerMenu = () => {
        setIsBurgerMenuOpen(!isBurgerMenuOpen);
    }
    const handleChangeMode = () => {
        setIsDarkMode(!isDarkMode);
    }
    return (
        <header className="Header">
            <div className="container">
                <div className="logo">
                    <Link href="/">
                        <FontAwesomeIcon icon={faBookOpen} /><span>TryTogether</span>
                    </Link>
                </div>
                <nav className={isBurgerMenuOpen ? "menu-is-open" : "menu-is-closed"}>
                    <div onClick={handleBurgerMenu} className={isBurgerMenuOpen ? "burger-nav-menu menu-is-open" : "burger-nav-menu menu-is-closed"}>
                        <FontAwesomeIcon className="faBars" icon={faBars} />
                        <FontAwesomeIcon className="faXmark" icon={faXmark} />
                    </div>
                    <ul className={isBurgerMenuOpen ? "menu-is-open" : "menu-is-closed"}>
                        {navLinks.map((link) => (
                            <li key={link.navId}>
                                <Link
                                    className={`nav-link ${link.href === pathname ? "active" : ""}`}
                                    href={link.href}>
                                    <FontAwesomeIcon icon={link.icon} />
                                    {link.name && <span className="nav-link-text">{link.name}</span>}
                                </Link>
                            </li>
                        ))}

                    </ul>
                </nav>
                <div className={isBurgerMenuOpen ? "account-zone menu-is-open" : "account-zone"}>
                    <div
                        onClick={handleChangeMode}
                        className={isDarkMode ? "toggle-darkmode darkmode" : "toggle-darkmode lightmode"}>
                        <FontAwesomeIcon className='faMoon' icon={faMoon} />
                        <FontAwesomeIcon className='faSun' icon={faSun} />
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