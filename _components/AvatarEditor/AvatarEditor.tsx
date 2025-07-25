"use client";

import { faCamera } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Image from 'next/image';
import React, { useRef, useState } from 'react';

const user = {
    firstName: "Mery",
    avatar: "/img/profil.webp",
    level: "1"
};

interface AvatarEditorProps {
    hasEditable?: boolean;
}

function AvatarEditor({ hasEditable = true }: AvatarEditorProps) {
    const [avatar, setAvatar] = useState<string>(user.avatar);
    const [banner, setBanner] = useState<string | null>(null);

    const avatarInputRef = useRef<HTMLInputElement | null>(null);
    const bannerInputRef = useRef<HTMLInputElement | null>(null);

    const handleAvatarClick = () => {
        avatarInputRef.current?.click();
    };

    const handleBannerClick = () => {
        bannerInputRef.current?.click();
    };

    const handleAvatarChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const image = e.target.files?.[0];
        if (image) {
            const reader = new FileReader();
            reader.onloadend = () => {
                setAvatar(reader.result as string);
            };
            reader.readAsDataURL(image);
        }
    };

    const handleBannerChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const image = e.target.files?.[0];
        if (image) {
            const reader = new FileReader();
            reader.onloadend = () => {
                setBanner(reader.result as string);
            };
            reader.readAsDataURL(image);
        }
    };

    return (
        <div className="AvatarEditor" style={banner ? { backgroundImage: `url(${banner})` } : undefined}>            {hasEditable && (
            <div onClick={handleBannerClick} className="camera-editor banner-editor">
                <input
                    type="file"
                    accept="image/*"
                    ref={bannerInputRef}
                    onChange={handleBannerChange}
                    hidden
                />
                <FontAwesomeIcon icon={faCamera} />
            </div>
        )}

            <div className="avatar">
                {hasEditable && (
                    <div onClick={handleAvatarClick} className="camera-editor avatar-editor">
                        <input
                            type="file"
                            accept="image/*"
                            ref={avatarInputRef}
                            onChange={handleAvatarChange}
                            hidden
                        />
                        <FontAwesomeIcon icon={faCamera} />
                    </div>
                )}
                <Image src={avatar} alt="Profil" width={200} height={200} />
            </div>
        </div>
    );
}

export default AvatarEditor;