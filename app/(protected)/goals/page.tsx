import Greetings from '@/_components/Greetings/Greetings';
import TitleTag from '@/_components/TitleTag/TitleTag';
import React from 'react';

function Goals() {
    return (
        <section className='Goals'>
            <TitleTag dataTitleTag={{ title: "Tes objectifs" }} />
            <Greetings
                dataGreeting={{
                    title: "Courage",
                    description: (
                        <>
                            <br />
                            <strong>Tu es sur ton espace Objectifs</strong><br />
                            Ici tu peux programmer et gérer tes objectifs !
                        </>
                    )
                }} />
        </section>
    );
}

export default Goals;