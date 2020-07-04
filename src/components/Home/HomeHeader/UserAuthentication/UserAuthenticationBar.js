import React from "react";
import {LogInButton} from "./LogInButton";
import {RegisterButton} from "./RegisterButton";

const UserAuthenticationBar = () => {
    return (
        <div>
            <LogInButton />
            <RegisterButton />
        </div>
    )

}

export {UserAuthenticationBar}