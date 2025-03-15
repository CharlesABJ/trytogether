import { faUser, faEnvelope, faLock } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';

interface TextInputProps {
    dataTextInput: {
        label: string;
        name: string;
        icon: string;
        placeholder: string;
    };
    value: string;
    onChange: (name: string, value: string, formName: string) => void;
    errors?: { [key: string]: string };
    formName: string;
}
function TextInput({ dataTextInput, value, onChange, errors, formName }: TextInputProps) {
    return (
        <>
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
                        value={value}
                        onChange={(e) => onChange(dataTextInput.name, e.target.value, formName)}
                    />
                </div>
                {errors && <span className="errors-message">{errors[dataTextInput.name]}</span>}
            </label>

        </>
    );
}

export default TextInput;