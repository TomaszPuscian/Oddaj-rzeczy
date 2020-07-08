import React, {useContext, useState} from 'react';
import { useHistory } from 'react-router-dom';
import { Link, withRouter } from 'react-router-dom';
import * as ROUTES from '../../../constants/routes';


import {FirebaseContext} from "../Firebase"

const SignUpPage = () => (
    <div>
        <h1>SignUp</h1>
        <SignUpForm />
    </div>
);

const INITIAL_STATE = {
    username: '',
    email: '',
    passwordOne: '',
    passwordTwo: '',
    error: null
};

const SignUpForm = () => {
    const [state, setState] = useState({...INITIAL_STATE})
    const firebase = useContext(FirebaseContext)
    const history = useHistory()

    const onSubmit = event => {
        const { email, passwordOne } = state;

        firebase
            .doCreateUserWithEmailAndPassword(email, passwordOne)
            .then(() => {
                setState({...INITIAL_STATE});
                history.push(ROUTES.HOME);
            })
            .catch(error => {
                setState(prev => ({...prev, error }));
            });

        event.preventDefault();
    }
    //po co ten target?
    const onChange = ({target: { name, value }}) => {
        setState( prev => ({...prev, [name]: value }));
    };

    //[event.target.name]: event.target.value }

    const {username, email, passwordOne, passwordTwo, error} = state;

    const isInvalid = passwordOne !== passwordTwo || passwordOne === "" || email === "" || username === "";

    return (
        <form onSubmit={onSubmit}>
            <input name="username" value={username} onChange={onChange} type="text" placeholder= "Full name"/>
            <input name="email" value={email} onChange={onChange} type="text" placeholder="Email"/>
            <input name="passwordOne" value={passwordOne} onChange={onChange} type="password" placeholder= "Password"/>
            <input name="passwordTwo" value={passwordTwo} onChange={onChange} type="password" placeholder= "Confirm password"/>

            <button disabled={isInvalid} type="submit">Sign up</button>
            {error && <p>{error.message}</p>}
        </form>
    );
}

const SignUpLink = () => <p>Don't have an account? <Link to={ROUTES.SIGN_UP}>Sign Up</Link></p>;

// const SignUpForm = compose(
//     withRouter,
//     withFirebase
// )(SignUpFormBase);

//Lub bez paczki recompose: const SignUpForm = withRouter(withFirebase(SignUpFormBase));

export {SignUpPage};

export { SignUpForm, SignUpLink };