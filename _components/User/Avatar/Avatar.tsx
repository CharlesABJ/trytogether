"use client";
import React, { useState } from 'react';
import Image from 'next/image';
import UserModal from '../UserModal/UserModal';

interface AvatarProps {
    dataAvatar: {
        src: string;
        alt: string;
    },
    canOpenModal?: boolean;
}

function Avatar({ dataAvatar, canOpenModal = true }: AvatarProps) {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const handleUserModal = () => {
        setIsModalOpen(!isModalOpen);
    }
    return (
        <>
            <div
                onClick={canOpenModal ? handleUserModal : undefined}
                className="Avatar">
                <Image
                    src={dataAvatar.src || "/img/user1.jpg"}
                    alt={dataAvatar.alt || "Avatar"}
                    width={50}
                    height={50}
                />
            </div>
            {isModalOpen && <UserModal />}
        </>
    );
}

export default Avatar;