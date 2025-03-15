import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
interface EmailInputProps {
    dataEmailInput: {
        label: string
        name: string
        placeholder: string
        icon?: string
    }
    value: string
    onChange: (name: string, value: string, formName: string) => void
    errors?: { [key: string]: string }
    formName: string
}
function EmailInput({ dataEmailInput, value, onChange, errors, formName }: EmailInputProps) {
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
                    value={value}
                    onChange={(e) => onChange(dataEmailInput.name, e.target.value, formName)}
                />
            </div>
            {errors && <span className="errors-message">{errors[dataEmailInput.name]}</span>}
        </label>
    );
}

export default EmailInput;