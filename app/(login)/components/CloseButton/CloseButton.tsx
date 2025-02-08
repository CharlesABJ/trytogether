"use client";
import { redirect } from 'next/navigation';
import React from 'react';

function CloseButton() {
    const handleHomeRedirect = () => {
        redirect('/');
    };
    return (
        <div className="CloseButton" onClick={handleHomeRedirect}>
            X
        </div>
    );
}

export default CloseButton;