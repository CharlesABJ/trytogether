import React from 'react';
interface CheckboxInputProps {
    dataCheckboxInput: {
        label: string;
        name: string;
    };
    required?: boolean
    value: boolean
    onChange: (name: string, value: boolean, form: string) => void
    errors?: { [key: string]: string }
    formName: string
}
function CheckboxInput({ dataCheckboxInput, required, value, onChange, errors, formName }: CheckboxInputProps) {
    return (

        <div>
            <label
                className="CheckboxInput input"
                htmlFor={`${dataCheckboxInput.name}-${formName}`}>
                <input
                    type="checkbox"
                    name={dataCheckboxInput.name}
                    id={`${dataCheckboxInput.name}-${formName}`}
                    checked={value}
                    required={required}
                    onChange={(e) => onChange(dataCheckboxInput.name, e.target.checked, formName)}
                />
                <span className='label-title'>{dataCheckboxInput.label}</span>

            </label>
            {errors && <span className="errors-message">{errors[dataCheckboxInput.name]}</span>}
        </div>
    );
}

export default CheckboxInput;