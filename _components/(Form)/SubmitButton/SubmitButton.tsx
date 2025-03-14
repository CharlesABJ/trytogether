import Image from 'next/image';
import React from 'react';
interface SubmitButtonProps {
    dataSubmitButton: {
        label: string
    }
    isGoogle: boolean,
    disabled: boolean,
    formName?: string
}
function SubmitButton({ dataSubmitButton, isGoogle = false, disabled }: SubmitButtonProps) {
    return (
        <button
            className="SubmitButton submit-button"
            type="submit"
            disabled={disabled}
        >
            {isGoogle && <Image src="/img/icon/google-icon.png" alt="Google" width={18} height={18} />}
            {dataSubmitButton.label}
        </button>
    );
}

export default SubmitButton;