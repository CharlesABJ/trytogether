import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { iconMap } from '@/_utils/icons/iconMap';

function RemainingDuration() {
    return (
        <div className="RemainingDuration">
            <div className="title">    <FontAwesomeIcon className='icon' icon={iconMap["faClock"]} />
                <span>Lancement prévu</span>
            </div>

            <div className="goal">
                Printemps 2026
            </div>
            <div className="percentage">
                <div className="bar">
                    <div className="fill"></div>
                </div>
                <span>40% terminé</span>
            </div>
        </div>
    );
}

export default RemainingDuration;