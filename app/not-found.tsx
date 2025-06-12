import { faHouse } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Link from 'next/link';
import React from 'react';

function NotFound() {
    return (
        <div className="NotFound">
            <div className="card">
                <h1>
                    <span>{"404"}</span>
                    {" Page introuvable"}
                </h1>
                <p className="description">{"C'est un peu embarrassant, mais que vous recherchez n'existe pas ou a été déplacée."}</p>
                <Link href={"/"}><FontAwesomeIcon icon={faHouse} /> Retour à l&apos;accueil</Link>
            </div>

        </div>
    );
}

export default NotFound;