import RemainingDuration from '@/_components/RemainingDuration/RemainingDuration';
import WillComming from '@/_components/WillComming/WillComming';

import React from 'react';

function Messages() {
    return (
        <main className="Messages page">
            <WillComming dataWillComming={{
                title_a: "Messagerie",
                title_b: "En Construction",
                description: "La messagerie sera bientôt disponible pour faciliter les échanges avec vos mentors et partenaires de progression."
            }} />

            <RemainingDuration dataRemainingDuration={{
                date: "Automne 2026",
                percentage: 5
            }} />

        </main>
    );
}

export default Messages;