
import RemainingDuration from '@/_components/RemainingDuration/RemainingDuration';
import WillComming from '@/_components/WillComming/WillComming';
import React from 'react';

function Meetings() {
    return (
        <main className='Meetings page'>
            <WillComming dataWillComming={{
                title_a: "Rendez-vous",
                title_b: "En Construction",
                description: "Bientôt, vous pourrez suivre vos objectifs pas à pas et mesurer vos avancées directement depuis votre espace TryTogether."
            }} />
            <RemainingDuration dataRemainingDuration={{
                date: "Automne 2025",
                percentage: 20
            }} />
        </main>
    );

}

export default Meetings;