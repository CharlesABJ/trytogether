"use client";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import Avatar from "../(User)/Avatar/Avatar";

interface GoalItemProps {
    dataGoalItem: {
        creatorAvatar: string;
        creatorPseudo: string;
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
                    <Avatar
                        dataAvatar={{
                            src: dataGoalItem.creatorAvatar,
                            alt: `${dataGoalItem.creatorPseudo ? dataGoalItem.creatorPseudo : `${dataGoalItem.creatorFirstname} ${dataGoalItem.creatorLastname}`}`
                        }}
                    />
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