import React from 'react';
import LoginContainer from '../../(login)/components/LoginContainer/LoginContainer';
import CloseButton from '../../(login)/components/CloseButton/CloseButton';

function Login() {

    return (
        <div className="Login bg-color1">
            <CloseButton />
            <LoginContainer />
        </div>
    );
}

export default Login;