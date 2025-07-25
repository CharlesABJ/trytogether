import AgendaGoalsPreview from '@/_components/AgendaGoalsPreview/AgendaGoalsPreview';
import AvatarEditor from '@/_components/AvatarEditor/AvatarEditor';
import TitleTag from '@/_components/TitleTag/TitleTag';
import { faSuitcase } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import Greetings from '@/_components/Greetings/Greetings';

async function Dashboard() {
    // On récupère l'heure actuel
    const hour = new Date().getHours();


    return (
        <main className="Dashboard page">
            <AvatarEditor />
            <TitleTag dataTitleTag={{ title: "Tableau de bord" }} />

            <div className="greetings-and-level">
                <Greetings
                    dataGreeting={{
                        title: hour > 18 ? "Bonsoir" : "Bonjour",
                        description: "Bienvenu(e) sur ton tableau de bord personnel"
                    }} />
                <div className="badges-zone level">
                    <FontAwesomeIcon icon={faSuitcase} />
                    <span>{"17"}</span>
                </div>
            </div>

            <div className="infos-zone">
                <AgendaGoalsPreview dataAgendaGoalsPreview={{ title: "Tes prochains rendez-vous", isForMeeting: true }} />
                <AgendaGoalsPreview dataAgendaGoalsPreview={{ title: "Tes objectifs", isForMeeting: false }} />
            </div>
        </main>
    );
}

export default Dashboard;