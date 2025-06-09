import React, { useState } from 'react';
import Avatar from '@/_components/User/Avatar/Avatar';

function UserModal() {
    const [isModalOpen, setIsModalOpen] = useState(true);
    const handleCloseModal = () => {
        setIsModalOpen(!isModalOpen);
    }

    if (!isModalOpen) return null;
    return (

        <div className="UserModal">

            <div onClick={handleCloseModal} className="overlay"></div>
            <div className="modal">
                <div className="avatar-and-banner">
                    <Avatar dataAvatar={{
                        src: "",
                        alt: ""
                    }} />
                </div>
                <div className="content">

                </div>
            </div>
        </div>
    );
}

export default UserModal;