import React from 'react';
import './scss/main.scss';
import {HashRouter, Route} from 'react-router-dom';
import Home from "./components/Home";
import * as ROUTES from "./constants/routes"

import {ContactForm} from "./components/ContactForm";
import SignInPage from "./components/UserAuthentication/SignInPage";
import SignUpPage from "./components/UserAuthentication/SignUpPage";
import PasswordForgetPage from "./components/UserAuthentication/PasswordForget";
import {Form} from "./components/Form/Form";

function App() {
  return (
      <HashRouter>
          <Route exact path={ROUTES.LANDING} component={Home} />
          <Route path={ROUTES.SIGN_IN} component={SignInPage} />
          <Route path={ROUTES.SIGN_UP} component={SignUpPage} />
          <Route path={ROUTES.PASSWORD_FORGET} component={PasswordForgetPage} />
          <Route path={ROUTES.FORM} component={Form} />
      </HashRouter>
  )
}

export default App;
