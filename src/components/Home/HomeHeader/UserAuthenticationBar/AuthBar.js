import React, {useContext} from "react";
import {Link} from "react-router-dom";
import {AuthBarButton} from "./AuthBarButton";
import * as ROUTES from "../../../../constants/routes"
// import {FirebaseContext} from "../../../UserAuthentication/Firebase";
import SignOutButton from "../../../UserAuthentication/SignOut";
import withAuthentication from "../../../UserAuthentication/Session";
import {AuthUserContext} from "../../../UserAuthentication/Session/context"
import {FirebaseContext} from "../../../UserAuthentication/Firebase";
import GetUserEmail from "../../../UserAuthentication/UserEmail";

const UserAuthenticationBar = () => {
    const user = useContext(AuthUserContext)
    return user ? <UserAuthBar /> : <UserNonAuthBar />
}


const UserNonAuthBar = () => {
    const firebase = useContext(FirebaseContext)
    // const user = firebase.getEmail;

    return (
        <div className="userAuthBar">
            {/*<GetUserEmail />*/}
            <Link to={ROUTES.SIGN_IN}>
                <AuthBarButton text="Zaloguj" />
            </Link>
            <Link to={ROUTES.SIGN_UP}>
                <AuthBarButton text="Załóż konto" />
            </Link>
        </div>
    )
}

const UserAuthBar = () => {
    return (
        <div className="userAuthBar">

            <AuthBarButton text="Oddaj rzeczy" />

            <Link to={ROUTES.LANDING}>
                <SignOutButton text="Wyloguj się"/>
            </Link>
        </div>
    )
}

export default withAuthentication(UserAuthenticationBar)