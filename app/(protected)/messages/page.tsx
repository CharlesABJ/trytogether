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



        </main>
    );
}

export default Messages;