import { useState } from 'react';

function LogInOutButton() {
    //const isLoggedIn = props.isLoggedIn;
    const [logStatus, setStatus] = useState(false);

    function handleClick() {
        setStatus(!logStatus)
    };

    if (logStatus) {
        return (
            <>
                <h1>You are currently logged in</h1>
                <button onClick={handleClick}>Log out</button>
            </>
        );
    } else {
        return (
            <>
                <h1>Would you like to log in?</h1>
                <button onClick={handleClick}>Log in</button>
            </>
        );
    };
};

export default LogInOutButton;

