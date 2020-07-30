import React, {useContext, useState} from "react";
import {FirebaseContext} from "../Firebase";
import {Link} from "react-router-dom";
import * as ROUTES from "../../../constants/routes"

const PasswordForgetPage = () => {
    return (
        <>
            <h1>Forgot your password?</h1>
            <PasswordForgetForm />
        </>
    )
}

const INITIAL_STATE = {
    email: '',
    error: null
}

const PasswordForgetForm = () => {
    const [state, setState] = useState({...INITIAL_STATE})
    const firebase = useContext(FirebaseContext)

    const onSubmit = () => {
        const {email} = state;

        firebase.doPasswordReset(email)
            .then(()=> {
                setState({...INITIAL_STATE})
            })
            .catch(error => {
                setState(prev => ({...prev, error}));
            })
    }

    const onChange = (({target: {name, value}}) => {
        setState(prev => ({...prev, [name]: value }))
    })

    const {email, error} = state;

    const isInvalid = email === '' || email.indexOf("@") === -1;

    return (
        <form onSubmit={onSubmit}>
            <input name="email" value={email} onChange={onChange} placeholder="Email you've used to register" type="text"/>
            <button disabled={isInvalid} type="submit">Send reminder</button>

            {error && <p>{error.message}</p>}
        </form>
    )
}

const PasswordForgetLink = () => (
    <p>
        <Link to={ROUTES.PASSWORD_FORGET}>Forgot your password?</Link>
    </p>
)

export {PasswordForgetPage, PasswordForgetLink}
