import React from 'react';
interface ClassicButtonProps {
    dataClassicButton: {
        backgroundColor: string;
        value: string;
        onClick?: () => void;
    }
}
function ClassicButton({ dataClassicButton }: ClassicButtonProps) {
    return (
        <button className={`ClassicButton ${dataClassicButton.backgroundColor}`} onClick={dataClassicButton.onClick}>
            {dataClassicButton.value}
        </button>
    );
}

export default ClassicButton;