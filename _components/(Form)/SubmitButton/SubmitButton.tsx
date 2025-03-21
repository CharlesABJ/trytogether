import Image from 'next/image';
import React from 'react';
interface SubmitButtonProps {
    dataSubmitButton: {
        label: string
    }
    onClick?: () => void
    isGoogle: boolean,
    disabled: boolean,
    formName?: string
}
function SubmitButton({ dataSubmitButton, isGoogle = false, disabled, onClick }: SubmitButtonProps) {
    return (
        <button
            onClick={onClick}
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