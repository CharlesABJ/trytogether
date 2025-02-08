import Image from 'next/image';
import React from 'react';

const user = {
    firstName: "Mery",
    avatar: "/img/profil.jpeg",
    level: "1"
}

function AvatarEditor() {
    return (
        <div className='AvatarEditor'>
            <div className="overlay"></div>
            <Image src={user.avatar} alt="Profil" width={50} height={50} />
        </div>
    );
}

export default AvatarEditor;