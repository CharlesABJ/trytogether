import React from 'react';

interface LoginButtonProps { // On crée une interface pour typer les props
    LoginButtonData: {
        backgroundColor: string;
        color: string;
    };
    children: React.ReactNode; // children est un élément React
}

function LoginButton({ LoginButtonData, children }: LoginButtonProps) {
    return (
        <button className={`LoginButton ${LoginButtonData.backgroundColor} ${LoginButtonData.color}`}>
            {children}
        </button>
    );
}

export default LoginButton;