"use client"
import React from 'react';
import AgendaItem from '../AgendaItem/AgendaItem';
import GoalItem from '../GoalItem/GoalItem';
import { useRouter } from 'next/navigation';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBullseye, faCalendar } from '@fortawesome/free-solid-svg-icons';
import ClassicButton from '../ClassicButton/ClassicButton';

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
            participantAvatar: "/img/user5.jpg",
            participantPseudo: "Franklin S",
            participantFirstname: "Franklin",
            participantLastname: "Sanders",
            lessonSubject: "Mathématiques",
            startTime: "13:30",
            endTime: "14:30",
            isCompleted: false

        },
        {
            agendaId: 2,
            participantAvatar: "/img/user2.jpeg",
            participantPseudo: "Candice M",
            participantFirstname: "Candice",
            participantLastname: "Merin",
            lessonSubject: "Informatique",
            startTime: "17:30",
            endTime: "18:00",
            isCompleted: false
        },
        {
            agendaId: 3,
            participantAvatar: "/img/user3.jpeg",
            participantPseudo: "Eloise M",
            participantFirstname: "Eloise",
            participantLastname: "Mango",
            lessonSubject: "Anglais",
            startTime: "18:30",
            endTime: "19:00",
            isCompleted: true
        },
        {
            agendaId: 4,
            participantAvatar: "/img/user1.jpg",
            participantPseudo: "Franklin S",
            participantFirstname: "Franklin",
            participantLastname: "Sanders",
            lessonSubject: "Mathématiques",
            startTime: "18:30",
            endTime: "19:00",
            isCompleted: false
        }
    ];

    const datasGoals = [
        {
            goalId: 1,
            creatorAvatar: "/img/user5.jpg",
            creatorPseudo: "Franklin S",
            creatorFirstname: "Franklin",
            creatorLastname: "Sanders",
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
            creatorAvatar: "/img/user2.jpeg",
            creatorPseudo: "Candice M",
            creatorFirstname: "Candice",
            creatorLastname: "Merin",
            lessonSubject: "Informatique",
            goalDescription: `
                <ul>
                    <li>Revoir la structure HTML de ton code</li>
                    <li>Télécharger l’extension « Wave »</li>
                    <li>Essayer de ne plus avoir aucune erreur ou alerte dans la console de ton navigateur</li>
                    <li>Comme tu avances très vite, si tu as le temps, tu peux essayer de mettre en place tes nouvelles connaissances en javascript en essayant de réaliser une petite calculatrice basique (addition, soustraction, multiplication et division) </li>
                </ul>
            `,
            isCompleted: true
        },
        {
            goalId: 3,
            creatorAvatar: "/img/user3.jpeg",
            creatorPseudo: "Eloise M",
            creatorFirstname: "Eloise",
            creatorLastname: "Mango",
            lessonSubject: "Anglais",
            goalDescription: `
                <p>Apprendre les 20 verbes irréguliers :)</p>
            `,
            isCompleted: true
        },
        {
            goalId: 4,
            creatorAvatar: "/img/profil.jpeg",
            creatorPseudo: "Aurore L",
            creatorFirstname: "Aurore",
            creatorLastname: "Lale",
            lessonSubject: "Mathématiques",
            goalDescription: `
                <ul>
                    <li>Mémoriser par cœur le Theoreme de Pythagore</li>
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