import React from 'react';

const ChatInput: React.FC = () => (
    <div className="chat-input">
        <input type="text" placeholder="Écrire un message" />
        <button className="btn-mic" aria-label="Microphone" />
        <button className="btn-plus" aria-label="Ajouter" />
        <button className="btn-emoji" aria-label="Emoji" />

        test
    </div>
);

export default ChatInput; 