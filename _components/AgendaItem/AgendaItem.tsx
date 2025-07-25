"use client";
import { faEllipsisVertical } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState } from 'react';
import Avatar from '@/_components/User/Avatar/Avatar';

interface AgendaItemProps {
    dataAgendaItem: {
        participantAvatar: string;
        participantPseudo: string;
        participantFirstname: string;
        participantLastname: string;
        lessonSubject: string;
        startTime: string;
        endTime: string;
        isCompleted: boolean;
    };
    onAvatarClick?: () => void;
}

function AgendaItem({ dataAgendaItem, onAvatarClick }: AgendaItemProps) {
    const [isCompleted, setIsCompleted] = useState(dataAgendaItem.isCompleted);

    const safeLastnameInitial = dataAgendaItem.participantLastname
        ? dataAgendaItem.participantLastname.charAt(0)
        : "";

    return (
        <div className={`AgendaItem ${isCompleted ? 'completed' : ''}`}>
            <Avatar
                dataAvatar={{
                    src: dataAgendaItem.participantAvatar,
                    alt: `${dataAgendaItem.participantFirstname} ${dataAgendaItem.participantLastname || ""}`,
                }}
                canOpenModal={true}
                handleOpenModal={onAvatarClick}
            />
            <div className="infos">
                <div className="schedules">
                    <span className="start-time">{dataAgendaItem.startTime}</span>
                    <span className="end-time">{dataAgendaItem.endTime}</span>
                </div>
                <div className="name-and-subject">
                    <div className="name">
                        {dataAgendaItem.participantFirstname} {safeLastnameInitial}.
                    </div>
                    <div className="lesson-subject">({dataAgendaItem.lessonSubject})</div>
                </div>
            </div>
            <div className="settings">
                <FontAwesomeIcon icon={faEllipsisVertical} />
            </div>
        </div>
    );
}

export default AgendaItem;