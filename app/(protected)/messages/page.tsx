import React from 'react';
import './_Messages.scss';
import MessageBubble from './components/MessageBubble';
import ChatInput from './components/ChatInput';

function Messages() {
    return (
        <main className="Home">
            <section className="chat-container">
                <div className="chat-header">
                    <h1>Boîte de réception</h1>
                </div>
                <div className="chat-messages">
                    <MessageBubble text={"Je suis une bonne prof dis donc 😎"} time="17:28" />
                    <MessageBubble text={"Coucou Mery ça va ?"} time="13:11" sent />
                    <MessageBubble text={"De rien, c'est un plaisir :) À la semaine prochaine Mery !"} time="17:29" />
                    <MessageBubble text={<span>Tu remplaces « log » par « error » et ça fait : <code>console.error(&quot;Message&quot;);</code></span>} time="17:29" sent />
                </div>
                <ChatInput />
            </section>
        </main>
    );
}

export default Messages;