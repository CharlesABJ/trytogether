
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
        </main>
    );

}

export default Meetings;