import React from 'react';

function Messages() {
    return (
        <section className='Messages'>
            <header>
                <button>
                    {/* Bouton pour commencer un chat */}
                </button>
                <h1>Boîte de reception</h1>
                <button>
                    {/* Bouton pour rechercher un ami */}
                </button>

            </header>
            <ul className="friend-list">
                {/* Afficher la liste des amis dans l'ordre alphabétique */}
            </ul>

            <ul>
                {/* Afficher les messages du plus récent au plus ancien */}
            </ul>
        </section>
    );
}

export default Messages;