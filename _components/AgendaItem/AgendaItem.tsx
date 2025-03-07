import { faEllipsisVertical } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Image from 'next/image';
import React from 'react';

interface AgendaItemProps {
    dataAgendaItem: {
        participantAvatar: string;
        participantFirstname: string;
        participantLastname: string;
        lessonSubject: string;
        startTime: string;
        endTime: string;
        isCompleted: boolean;
    }
}
function AgendaItem({ dataAgendaItem }: AgendaItemProps) {
    return (
        <div className="AgendaItem">
            <div className="avatar">
                <Image src={dataAgendaItem.participantAvatar} alt="Avatar" width={50} height={50} />
            </div>
            <div className="infos">
                <div className="schedules">
                    <span className="start-time">{dataAgendaItem.startTime}</span>
                    <span className="end-time">{dataAgendaItem.endTime}</span>
                </div>
                <div className="name-and-subject">
                    <div className="name">
                        {dataAgendaItem.participantFirstname} {dataAgendaItem.participantLastname.charAt(0)}.
                    </div>
                    <div className="lesson-subject">({dataAgendaItem.lessonSubject})</div>
                </div>

            </div>
            <div className="settings">
                <FontAwesomeIcon icon={faEllipsisVertical} />
            </div>
        </div >
    );
}

export default AgendaItem;