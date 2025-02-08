"use client";
import { faHeart } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { usePathname } from 'next/navigation';
import React from 'react';

function Footer() {
    const pathname = usePathname();
    if (pathname === "/login") {
        return null;
    }
    return (
        <footer className='Footer'>
            <div className="container">
                <span>Make with <FontAwesomeIcon icon={faHeart} /> by TryItTogether</span>
            </div>
        </footer>
    );
}

export default Footer;