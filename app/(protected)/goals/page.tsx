
import WillComming from '@/_components/WillComming/WillComming';
import React from 'react';

function Goals() {
    return (
        <main className='Goals page'>
            <WillComming dataWillComming={{
                title_a: "Objectifs",
                title_b: "Bientôt disponible",
                description: "Bientôt, vous pourrez suivre vos objectifs pas à pas et mesurer vos avancées directement depuis votre espace TryTogether."
            }} />
        </main>
    );
}

export default Goals;