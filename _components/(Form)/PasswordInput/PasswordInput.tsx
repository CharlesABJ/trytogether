'use client';
import { faEye, faEyeSlash, faLock } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Link from 'next/link';
import React, { useState } from 'react';

interface PasswordInputProps {
    dataPasswordInput: {
        label: string;
        name: string;
        placeholder: string;
        icon: string;
    }
    value: string
    onChange: (name: string, value: string, formName: string) => void
    formName: string
}
function PasswordInput({ dataPasswordInput, value, onChange, formName }: PasswordInputProps) {
    const [eyeActive, setEyeActive] = useState(false);
    const handleEyeActive = () => {
        setEyeActive(!eyeActive);
    }


    return (

        <label className='PasswordInput input' htmlFor={dataPasswordInput.name}>
            <div className="passord-zone">
                <span className='label-title'>{dataPasswordInput.label}</span> <Link href="/reset" className='passord-reset'>Mot de passe oublié ?</Link>
            </div>
            <div className="input-wrapper">
                <FontAwesomeIcon
                    className='icon'
                    icon={dataPasswordInput.icon ? faLock : faLock} aria-hidden="true" />
                <input
                    type={eyeActive ? "text" : "password"}
                    name={dataPasswordInput.name}
                    id={dataPasswordInput.name}
                    placeholder={dataPasswordInput.placeholder}
                    value={value}
                    onChange={(e) => onChange(dataPasswordInput.name, e.target.value, formName)}
                />
                <div onClick={handleEyeActive} className="eyes-icons-zone">
                    {eyeActive ?
                        <FontAwesomeIcon
                            className='icon eye-icon'
                            icon={faEyeSlash} /> :
                        <FontAwesomeIcon
                            className='icon eye-icon'
                            icon={faEye} />}
                </div>
            </div>
        </label>

    );
}

export default PasswordInput;