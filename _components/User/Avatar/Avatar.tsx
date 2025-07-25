"use client";
import React from 'react';
import Image from 'next/image';

interface AvatarProps {
    dataAvatar: {
        src: string;
        alt: string;
    };
    canOpenModal?: boolean;
    handleOpenModal?: () => void;
}

function Avatar({ dataAvatar, canOpenModal = true, handleOpenModal }: AvatarProps) {
    return (
        <div
            onClick={canOpenModal && handleOpenModal ? handleOpenModal : undefined}
            className="Avatar"
        >
            <Image
                src={dataAvatar.src || "/img/user1.jpg"}
                alt={dataAvatar.alt || "Avatar"}
                width={50}
                height={50}
            />
        </div>
    );
}

export default Avatar;