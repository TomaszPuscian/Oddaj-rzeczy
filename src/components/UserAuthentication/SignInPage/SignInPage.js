import React, {useContext, useState} from 'react';
import { useHistory } from 'react-router-dom';

import { SignUpLink } from '../SignUpPage';
import { FirebaseContext } from '../Firebase';
import * as ROUTES from '../../../constants/routes';
import {PasswordForgetLink} from "../PasswordForget";

const SignInPage = () => (
    <div>
        <h1>SignIn</h1>
        <SignInForm />
        <PasswordForgetLink />
        <SignUpLink />
    </div>
);

const INITIAL_STATE = {
    email: '',
    password: '',
    error: null,
};

const SignInForm = () => {
    const [state, setState] = useState({...INITIAL_STATE})
    const firebase = useContext(FirebaseContext)
    const history = useHistory();
    const onSubmit = event => {
        const { email, password } = state;

        firebase
            .doSignInWithEmailAndPassword(email, password)
            .then(() => {
                setState({ ...INITIAL_STATE });
                history.push(ROUTES.HOME);
            })
            .catch(error => {
                setState(prev => ({...prev, error }));
            });

        event.preventDefault();
    };

    const onChange = ({target: { name, value }}) => {
        setState(prev => ({...prev, [name]: value }));
    };


    const { email, password, error } = state;

    const isInvalid = password === '' || email === '';

    return (
        <form onSubmit={onSubmit}>
            <input name="email" value={email} onChange={onChange} type="text" placeholder="Email Address"/>
            <input name="password" value={password} onChange={onChange} type="password" placeholder="Password"/>

            <button disabled={isInvalid} type="submit">Sign In</button>

            {error && <p>{error.message}</p>}
        </form>
    );
}

export {SignInPage}