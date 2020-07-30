import React, {useContext} from 'react';
import {FirebaseContext} from "../Firebase";


const SignOutButton = ({text}) => {
const firebase = useContext(FirebaseContext)
    return (
    <button type="button" onClick={firebase.doSignOut} className="authBarButton">{text}</button>
)};

export default SignOutButton;