"use client";

import { faCamera } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Image from 'next/image';
import React, { useRef, useState } from 'react';

const user = {
    firstName: "Mery",
    avatar: "/img/profil.jpeg",
    level: "1"
}

function AvatarEditor() {

    const [avatar, setAvatar] = useState(user.avatar);
    const fileInputRef = useRef<HTMLInputElement | null>(null);
    const handleCameraClick = () => {
        fileInputRef.current?.click();
    }
    const handleAvatarChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const image = e.target.files?.[0];
        if (image) {
            const reader = new FileReader();
            reader.onloadend = () => {
                setAvatar(reader.result as string);
            }
            reader.readAsDataURL(image);
        }
    }
    return (
        <div className='AvatarEditor'>
            <div onClick={handleCameraClick} className="camera-editor">
                <input
                    type="file"
                    accept='image/*'
                    ref={fileInputRef}
                    onChange={handleAvatarChange}

                />
                <FontAwesomeIcon icon={faCamera} />
            </div>
            <div className="overlay"></div>
            <Image src={avatar} alt="Profil" width={50} height={50} />
        </div>
    );
}

export default AvatarEditor;