"use client";
import { faHeart } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React from 'react';

function Footer() {
    const pathname = usePathname();
    if (pathname === "/login") {
        return null;
    }
    return (
        <footer className='Footer' data-main-color={"blue"}>
            <div className="container">
                <p>Make with <FontAwesomeIcon icon={faHeart} /> by <Link target="_blank" href="https://charlesabj.com"><u>Charles ABJ</u></Link>
                </p>
            </div>
        </footer>
    );
}

export default Footer;