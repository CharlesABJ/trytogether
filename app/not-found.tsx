import React from 'react';

function NotFound() {
    return (
        <div className="NotFound">
            <h1>
                <span>{"Oups… Erreur 404 !"}</span>
                {" Personne n'était jamais allé aussi loin !"}
            </h1>
            <p>{"C'est un peu embarrassant, mais il semblerait que vous ayez exploré une zone cachée..."}</p>
            <p>{"Pas de panique, on est là pour vous guider ! On aurait dû prévoir des panneaux pour éviter les détours comme celui-ci, mais bon, ça reste entre nous, n’est-ce pas ? 🤫 "}</p>

            <p>{"En attendant, pourquoi ne pas explorer nos expertises et voir ce qu’on fait de mieux "}<br /> {"promis, on ne se perd jamais ici ! :"}</p>

            <p>{"Sinon, n’hésitez pas à "}<strong>{"nous contacter directement"}</strong>{", on sera ravis de vous guider personnellement !"}</p>

        </div>
    );
}

export default NotFound;