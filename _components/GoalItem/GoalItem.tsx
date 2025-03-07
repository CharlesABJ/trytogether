"use client";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";
import { useState } from "react";

interface GoalItemProps {
    dataGoalItem: {
        creatorAvatar: string;
        creatorFirstname: string;
        creatorLastname: string;
        lessonSubject: string;
        goalDescription: string;
        isCompleted: boolean;
    };
}

function GoalItem({ dataGoalItem }: GoalItemProps) {
    const [isCompleted, setIsCompleted] = useState(dataGoalItem.isCompleted);
    const [isDeleted, setIsDeleted] = useState(false);

    const handleToggleCompletion = () => {
        setIsCompleted(!isCompleted);
    };

    const handleDelete = () => {
        setIsDeleted(true);
    }
    return (
        <div className={`GoalItem ${isCompleted ? 'completed' : ''} 
        ${isDeleted ? 'deleted' : ''}`}>
            <div className="infos-and-content">
                <div className="infos">
                    <div className="avatar">
                        <Image
                            src={dataGoalItem.creatorAvatar}
                            alt={`Avatar de ${dataGoalItem.creatorFirstname} ${dataGoalItem.creatorLastname}`}
                            width={50}
                            height={50}
                        />
                    </div>
                    <div className="name-and-subject">
                        <div className="name">
                            {dataGoalItem.creatorFirstname}{" "}
                            {dataGoalItem.creatorLastname.charAt(0)}.
                        </div>
                        <div className="subject">({dataGoalItem.lessonSubject})</div>
                    </div>
                </div>
                <div className="content">
                    <div className="goal-description">
                        <div dangerouslySetInnerHTML={{ __html: dataGoalItem.goalDescription }}></div>

                    </div>
                </div>
            </div>

            <div className="settings">
                <div onClick={handleToggleCompletion} className="goal-status"></div>
                {isCompleted && <div className="trash"><FontAwesomeIcon onClick={handleDelete} className="trash-icon" icon={faTrash} /></div>}
            </div>
        </div>
    );
};

export default GoalItem;