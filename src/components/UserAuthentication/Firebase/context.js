import React from 'react';

const FirebaseContext = React.createContext(null);
export {FirebaseContext};

const withFirebase = Component => props => (
    <FirebaseContext.Consumer>
        {firebase => <Component {...props} firebase={firebase} />}
    </FirebaseContext.Consumer>
)

export {withFirebase}