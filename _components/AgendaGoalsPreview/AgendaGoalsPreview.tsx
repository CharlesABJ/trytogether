import React from 'react';
import AgendaItem from '../AgendaItem/AgendaItem';
import GoalItem from '../GoalItem/GoalItem';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBullseye, faCalendar } from '@fortawesome/free-solid-svg-icons';

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
            lessonSubject: "Maths",
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
            lessonSubject: "Maths",
            goalDescription: "<p>Résoudre les 3 équations linéaires de l’exo page 47.</p><br><br><p><strong>Ps :</strong> Tu peux y arriver 💪💪</p>",
            isCompleted: false
        },
        {
            goalId: 2,
            creatorAvatar: "/img/profil.jpeg",
            creatorFirstname: "Tom",
            creatorLastname: "Leblanc",
            lessonSubject: "Français",
            goalDescription: "Rendre le cours plus efficace.",
            isCompleted: false
        }
    ];

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
        </div>
    );
}

export default AgendaGoalsPreview; 