import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
interface EmailInputProps {
    dataEmailInput: {
        label: string
        name: string
        placeholder: string
        icon: string
    }
}
function EmailInput({ dataEmailInput }: EmailInputProps) {
    return (
        <label className='EmailInput input' htmlFor={dataEmailInput.name}>
            <span className='label-title'>{dataEmailInput.label}</span>
            <div className="input-wrapper">
                <FontAwesomeIcon className='icon' icon={dataEmailInput.icon == 'envelope' ? faEnvelope : faEnvelope} aria-hidden="true" />
                <input
                    type="email"
                    name={dataEmailInput.name}
                    id={dataEmailInput.name}
                    placeholder={dataEmailInput.placeholder}
                />
            </div>
        </label>
    );
}

export default EmailInput;