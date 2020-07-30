import React, {useContext} from "react";
import {FirebaseContext} from "../Firebase";


const GetUserEmail = () => {
    const firebase = useContext(FirebaseContext)
    firebase.auth.onAuthStateChanged((user) => {
        if (user) {
            return <span>{user.email}</span>
        } else {
            return null
        }
    })
}

export default GetUserEmail