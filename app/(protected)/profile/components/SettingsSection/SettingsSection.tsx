import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { IconDefinition } from '@fortawesome/free-solid-svg-icons';
import React from 'react';
import Link from 'next/link';

interface SettingsSectionProps {
    dataSettingsSection: {
        settingId: number;
        title: string;
        className?: string;
        items: {
            item: string;
            icon: IconDefinition;
            link?: string;
            onClick?: () => void;
        }[];
    }

}

function SettingsSection({ dataSettingsSection }: SettingsSectionProps) {
    return (
        <div className={`SettingsSection ${dataSettingsSection.className}`}>
            <h2>{dataSettingsSection.title}</h2>
            <ul className='items-list'>
                {dataSettingsSection.items.map((item, index) => (
                    <li className='item' key={index}>
                        {
                            item.link ? (
                                <Link href={item.link}>
                                    <FontAwesomeIcon className='icon' icon={item.icon} />
                                    <span>{item.item}</span>
                                </Link>
                            ) : (
                                <button onClick={item.onClick}>
                                    <FontAwesomeIcon className='icon' icon={item.icon} />
                                    <span>{item.item}</span>
                                </button>
                            )
                        }
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default SettingsSection;