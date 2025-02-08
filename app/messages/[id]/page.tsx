import { log } from 'console';
import React from 'react';
interface MessagesIDProps {
    params: {
        id: string;
    };
}
function MessagesID({ params }: MessagesIDProps) {
    const { id } = params; // 
    console.log(params);

    return (
        <section className='MessagesID'>
            {id}

        </section>
    );
}

export default MessagesID;