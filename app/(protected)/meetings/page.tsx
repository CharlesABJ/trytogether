import Greetings from '@/_components/Greetings/Greetings';
import TitleTag from '@/_components/TitleTag/TitleTag';
import React from 'react';

function Meetings() {
    return (
        <section className='Meetings'>
            <TitleTag dataTitleTag={{ title: "Tes rendez-vous" }} />
            <Greetings
                dataGreeting={{
                    title: "2 secondes",
                    description: (
                        <>
                            <br />
                            <strong>Tu es sur ton espace Calendrier Ici tu peux programmer et gérer tes RDV ! </strong><br />
                            Ici tu peux programmer et gérer tes rendez-vous !
                        </>
                    )
                }} />
        </section>
    );
}

export default Meetings;