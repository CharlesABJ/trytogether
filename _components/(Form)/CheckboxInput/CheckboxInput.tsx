import React from 'react';
interface CheckboxInputProps {
    dataCheckboxInput: {
        label: string;
        name: string;
    }
}
function CheckboxInput({ dataCheckboxInput }: CheckboxInputProps) {
    return (
        <label
            className="CheckboxInput input"
            htmlFor={dataCheckboxInput.name}>
            <input type="checkbox" name={dataCheckboxInput.name} id={dataCheckboxInput.name} />
            <span className='label-title'>{dataCheckboxInput.label}</span>
        </label>
    );
}

export default CheckboxInput;