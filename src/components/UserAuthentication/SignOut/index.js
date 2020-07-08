import React, {useContext} from 'react';
import {FirebaseContext} from "../Firebase";

const firebase = useContext(FirebaseContext)

const SignOutButton = () => (
    <button type="button" onClick={firebase.doSignOut}>Sign out</button>
);

export default SignOutButton;