import { iconMap } from '@/_utils/icons/iconMap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Image from 'next/image';
import React from 'react';

interface UserProfileModalProps {
    dataUserProfileModal: {
        avatar: string;
        firstname: string;
        lastname: string;
        pseudo: string;
        description: string;
        badges?: string[];
    },
    handleModalClose: () => void;

}

function UserProfileModal({ dataUserProfileModal, handleModalClose }: UserProfileModalProps) {
    return (
        <div className="UserProfileModal">
            <div onClick={handleModalClose} className="overlay"></div>
            <div className="modal">
                <div className="banner">
                    <div className="level" title="Level">42</div>
                    <div className="settings">
                        <FontAwesomeIcon icon={iconMap["faEllipsis"]} />
                    </div>
                </div>
                <div className="body">
                    <div className="profile-picture">
                        <div className="content">
                            <Image
                                src={dataUserProfileModal.avatar}
                                alt={dataUserProfileModal.pseudo}
                                width={50}
                                height={50}
                            />
                            <div title="En ligne" className="status status-online">

                            </div>
                        </div>
                    </div>
                    <div className="user-name">
                        <span className='first-name'>{dataUserProfileModal.firstname}</span>
                        <span className='last-name'>{dataUserProfileModal.lastname}</span>
                    </div>
                    <div className="user-pseudo">
                        {dataUserProfileModal.pseudo}
                    </div>
                    <div className="add-to-friend">


                    </div>

                    <div className="description">{dataUserProfileModal.description}</div>
                    <div className="badges">
                        <span className='title'>Badges :</span>
                        <ul className="badges-list">

                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default UserProfileModal;