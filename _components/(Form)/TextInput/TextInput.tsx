import { faUser, faEnvelope, faLock } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';

interface TextInputProps {
    dataTextInput: {
        label: string;
        name: string;
        placeholder: string;
        icon: string
    }
}
function TextInput({ dataTextInput }: TextInputProps) {
    return (
        <label className='TextInput input' htmlFor={dataTextInput.name}>
            <span className='label-title'>{dataTextInput.label}</span>
            <div className="input-wrapper">
                <FontAwesomeIcon
                    className='icon'
                    icon={dataTextInput.icon == 'user' ? faUser : dataTextInput.icon == 'envelope' ? faEnvelope : faLock}
                    aria-hidden="true" />
                <input
                    type="text"
                    name={dataTextInput.name}
                    id={dataTextInput.name}
                    placeholder={dataTextInput.placeholder}
                />
            </div>
        </label>
    );
}

export default TextInput;