
import React from 'react';
import RemainingDuration from '@/_components/RemainingDuration/RemainingDuration';
import WillComming from '@/_components/WillComming/WillComming';

function Goals() {
    return (
        <main className='Goals page'>
            <WillComming dataWillComming={{
                title_a: "Objectifs",
                title_b: "Bientôt disponible",
                description: "Bientôt, vous pourrez suivre vos objectifs pas à pas et mesurer vos avancées directement depuis votre espace TryTogether."
            }} />
            <RemainingDuration dataRemainingDuration={{
                date: "Automne 2025",
                percentage: 40
            }} />
        </main>
    );
}

export default Goals;