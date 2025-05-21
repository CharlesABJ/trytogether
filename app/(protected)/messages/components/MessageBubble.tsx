import React from 'react';

interface MessageBubbleProps {
    text: React.ReactNode;
    time: string;
    sent?: boolean;
}

const MessageBubble: React.FC<MessageBubbleProps> = ({ text, time, sent }) => (
    <div className={`message ${sent ? 'message--sent' : 'message--received'}`}>
        <div className="avatar" />
        <div className="bubble">
            <span className="text">{text}</span>
            <span className="time">{time}</span>
        </div>
    </div>
);

export default MessageBubble; 