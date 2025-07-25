import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { iconMap } from '@/_utils/icons/iconMap';

interface RemainingDurationProps {
    dataRemainingDuration: {
        date: string;
        percentage: number;

    }
}
function RemainingDuration({ dataRemainingDuration }: RemainingDurationProps) {
    return (
        <div className="RemainingDuration">
            <div className="title">    <FontAwesomeIcon className='icon' icon={iconMap["faClock"]} />
                <span>Lancement prévu</span>
            </div>

            <div className="goal">
                {dataRemainingDuration.date}
            </div>
            <div className="percentage">
                <div className="bar">
                    <div className="fill" style={{ width: `${dataRemainingDuration.percentage}%` }}></div>
                </div>
                <span>{dataRemainingDuration.percentage}% terminé</span>
            </div>
        </div>
    );
}

export default RemainingDuration;