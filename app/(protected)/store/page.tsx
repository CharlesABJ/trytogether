import RemainingDuration from '@/_components/RemainingDuration/RemainingDuration';
import WillComming from '@/_components/WillComming/WillComming';
import React from 'react';

function Store() {
    return (
        <main className='Store page'>
            <WillComming dataWillComming={{
                title_a: "Boutique",
                title_b: "Bientôt disponible",
                description: "La boutique arrive bientôt, avec des produits sélectionnés pour accompagner votre progression au sein de TryTogether."
            }} />
            <RemainingDuration dataRemainingDuration={{
                date: "Printemps 2026",
                percentage: 10
            }} />
        </main>
    );
}

export default Store;