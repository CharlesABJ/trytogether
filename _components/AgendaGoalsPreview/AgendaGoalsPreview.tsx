"use client";
import React, { useState } from 'react';
import AgendaItem from '../AgendaItem/AgendaItem';
import GoalItem from '../GoalItem/GoalItem';
import { useRouter } from 'next/navigation';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBullseye, faCalendar } from '@fortawesome/free-solid-svg-icons';
import ClassicButton from '../ClassicButton/ClassicButton';
import UserProfileModal from '../Modal/UserProfileModal/UserProfileModal';

import datasAgenda from "@/_datas/agendasList.json";
import datasGoals from "@/_datas/goalsList.json";
import usersList from "@/_datas/usersList.json";

// --- Types
interface AgendaGoalsPreviewProps {
    dataAgendaGoalsPreview: {
        title: string;
        isForMeeting: boolean;
    };
}

function AgendaGoalsPreview({ dataAgendaGoalsPreview }: AgendaGoalsPreviewProps) {
    const router = useRouter();

    const [selectedUser, setSelectedUser] = useState<null | {
        avatar: string;
        firstname: string;
        lastname: string;
        pseudo: string;
        description: string;
        badges?: string[];
    }>(null);

    const handleAvatarClick = (userId: number) => {
        const user = usersList.find((u) => u.userId === userId);
        if (!user) return;

        setSelectedUser({
            avatar: user.avatar,
            firstname: user.firstname,
            lastname: user.lastname,
            pseudo: user.pseudo,
            description: user.description,
            badges: user.badges
        });
    };

    const handleModalClose = () => {
        setSelectedUser(null);
    };

    const handleRedirect = () => {
        router.push(dataAgendaGoalsPreview.isForMeeting ? "/meetings" : "/goals");
    };

    return (
        <div className="AgendaGoalsPreview">
            <div className="title">
                <h3>
                    {dataAgendaGoalsPreview.title}{" "}
                    <FontAwesomeIcon icon={dataAgendaGoalsPreview.isForMeeting ? faCalendar : faBullseye} />
                </h3>
            </div>

            {dataAgendaGoalsPreview.isForMeeting ? (
                datasAgenda.map((item) => {
                    const user = usersList.find((u) => u.userId === item.userId);
                    if (!user) return null;

                    return (
                        <AgendaItem
                            key={item.agendaId}
                            dataAgendaItem={{
                                ...item,
                                participantAvatar: user.avatar,
                                participantPseudo: user.pseudo,
                                participantFirstname: user.firstname,
                                participantLastname: user.lastname,
                            }}
                            onAvatarClick={() => handleAvatarClick(user.userId)}
                        />
                    );
                })
            ) : (
                datasGoals.map((item) => {
                    const user = usersList.find((u) => u.userId === item.userId);
                    if (!user) return null;

                    return (
                        <GoalItem
                            key={item.goalId}
                            dataGoalItem={{
                                ...item,
                                creatorAvatar: user.avatar,
                                creatorPseudo: user.pseudo,
                                creatorFirstname: user.firstname,
                                creatorLastname: user.lastname
                            }}
                            onAvatarClick={() => handleAvatarClick(user.userId)}
                        />
                    );
                })
            )}

            <ClassicButton
                dataClassicButton={{
                    backgroundColor: "bg-color1-light",
                    value: dataAgendaGoalsPreview.isForMeeting
                        ? "Ouvrir mon calendrier"
                        : "Ouvrir ma liste d’objectifs",
                    onClick: handleRedirect
                }}
            />

            {selectedUser && (
                <UserProfileModal
                    handleModalClose={handleModalClose}
                    dataUserProfileModal={selectedUser}
                />
            )}
        </div>
    );
}

export default AgendaGoalsPreview;