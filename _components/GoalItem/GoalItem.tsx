import Image from "next/image";

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
    return (
        <div className="GoalItem">
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
                    <div className="subject">{dataGoalItem.lessonSubject}</div>
                </div>

                <div className={`goal-status ${dataGoalItem.isCompleted ? 'completed' : ''}`}></div>
            </div>

            <div className="goal-description">
                <div dangerouslySetInnerHTML={{ __html: dataGoalItem.goalDescription }}></div>
            </div>
        </div>
    );
};

export default GoalItem;