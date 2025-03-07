"use client"
import React from 'react';
import AgendaItem from '../AgendaItem/AgendaItem';
import GoalItem from '../GoalItem/GoalItem';
import { useRouter } from 'next/navigation';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBullseye, faCalendar } from '@fortawesome/free-solid-svg-icons';
import ClassicButton from '../ClassicButton/ClassicButton';
import { redirect } from 'next/navigation';

interface AgendaGoalsPreviewProps {
    dataAgendaGoalsPreview: {
        title: string;
        isForMeeting: boolean;
    };
}

function AgendaGoalsPreview({ dataAgendaGoalsPreview }: AgendaGoalsPreviewProps) {
    const datasAgenda = [
        {
            agendaId: 1,
            participantAvatar: "/img/profil.jpeg",
            participantFirstname: "Mery",
            participantLastname: "Nod",
            lessonSubject: "Mathématiques",
            startTime: "12:00",
            endTime: "13:00",
            isCompleted: false

        },
        {
            agendaId: 2,
            participantAvatar: "/img/profil.jpeg",
            participantFirstname: "Tom",
            participantLastname: "Leblanc",
            lessonSubject: "Français",
            startTime: "10:00",
            endTime: "11:30",
            isCompleted: false

        }
    ];

    const datasGoals = [
        {
            goalId: 1,
            creatorAvatar: "/img/profil.jpeg",
            creatorFirstname: "Mery",
            creatorLastname: "Nod",
            lessonSubject: "Mathématiques",
            goalDescription: `
                <p>Résoudre les 3 équations linéaires de l’exo page 47.</p>
                <br>
                <br>
                <p><strong>Ps :</strong> Tu peux y arriver 💪💪</p>
            `,
            isCompleted: false
        },
        {
            goalId: 2,
            creatorAvatar: "/img/profil.jpeg",
            creatorFirstname: "Tom",
            creatorLastname: "Leblanc",
            lessonSubject: "Français",
            goalDescription: `
                <ul>
                    <li>Revoir la structure HTML de ton code</li>
                    <li>Télécharger l’extension « Wave »</li>
                    <li>Essayer de ne plus avoir aucune erreur ou alerte dans la console de ton navigateur</li>
                    <li>Comme tu avances très vite, si tu as le temps, tu peux essayer de mettre en place tes nouvelles connaissances en javascript en essayant de réaliser une petite calculatrice basique (addition, soustraction, multiplication et division) </li>
                </ul>
            `,
            isCompleted: false
        }
    ];

    const router = useRouter();
    const handleRedirect = () => {
        if (dataAgendaGoalsPreview.isForMeeting) {
            router.push("/meetings");
        } else {
            router.push("/goals");
        }
    }

    return (
        <div className="AgendaGoalsPreview">
            <div className="title">
                <h3>{dataAgendaGoalsPreview.title} {dataAgendaGoalsPreview.isForMeeting ? <FontAwesomeIcon icon={faCalendar} /> : <FontAwesomeIcon icon={faBullseye} />}</h3>
            </div>

            {dataAgendaGoalsPreview.isForMeeting ? (
                datasAgenda.map((dataAgendaItem) => (
                    <AgendaItem key={dataAgendaItem.agendaId} dataAgendaItem={dataAgendaItem} />
                ))
            ) : (
                datasGoals.map((dataGoalItem) => (
                    <GoalItem key={dataGoalItem.goalId} dataGoalItem={dataGoalItem} />
                ))
            )}

            {dataAgendaGoalsPreview.isForMeeting ? (
                <ClassicButton dataClassicButton={{ backgroundColor: "bg-color1-light", value: "Ouvrir mon calendrier", onClick: handleRedirect }} />
            ) : (
                <ClassicButton dataClassicButton={{ backgroundColor: "bg-color1-light", value: "Ouvrir ma liste d’objectifs", onClick: handleRedirect }} />

            )}
        </div>
    );
}

export default AgendaGoalsPreview; 