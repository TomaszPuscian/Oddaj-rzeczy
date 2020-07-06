import React from "react";
import {LogInButton} from "./LogInButton";
import {RegisterButton} from "./RegisterButton";
import {Link} from "react-router-dom";

import * as ROUTES from "../../../../constants/routes"

const UserAuthBar = () => {
    return (
        <div className="userAuthBar">
            <Link to={ROUTES.SIGN_IN}>
                <LogInButton text="Zaloguj" />
            </Link>
            <Link to={ROUTES.SIGN_UP}>
                <RegisterButton text="Załóż konto" />
            </Link>
        </div>
    )

}

export {UserAuthBar}