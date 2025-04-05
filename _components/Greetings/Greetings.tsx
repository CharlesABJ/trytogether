import { auth } from '@/_lib/auth/auth';
import React from 'react';
interface GreetingsProps {
    dataGreeting: {
        title: string,
        description: React.ReactNode
    }
}
async function Greetings({ dataGreeting }: GreetingsProps) {
    const session = await auth();
    const user = session?.user;
    return (
        <div className="Greetings">
            <h2 >{dataGreeting.title}, <span className="username">
                {user?.name || user?.firstName}
            </span> !!
            </h2>
            <p>{dataGreeting.description}</p>
        </div>
    );
}

export default Greetings;