import React from 'react';
interface CheckboxInputProps {
    dataCheckboxInput: {
        label: string;
        name: string;
    };
    value: boolean
    onChange: (name: string, value: boolean, form: string) => void
    formName: string
}
function CheckboxInput({ dataCheckboxInput, value, onChange, formName }: CheckboxInputProps) {
    return (
        <label
            className="CheckboxInput input"
            htmlFor={dataCheckboxInput.name}>
            <input
                type="checkbox"
                name={dataCheckboxInput.name}
                id={dataCheckboxInput.name}
                checked={value}
                onChange={(e) => onChange(dataCheckboxInput.name, e.target.checked, formName)}
            />
            <span className='label-title'>{dataCheckboxInput.label}</span>
        </label>
    );
}

export default CheckboxInput;