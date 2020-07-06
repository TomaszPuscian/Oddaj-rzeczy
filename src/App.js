import React from 'react';
import './scss/main.scss';
import {HashRouter, Route} from 'react-router-dom';
import Home from "./components/Home";
import * as ROUTES from "./constants/routes"
import {LoggedInUserPage} from "./components/LoggedInUserPage";
import {ContactForm} from "./components/ContactForm";

function App() {
  return (
      <HashRouter>
          <Route exact path={ROUTES.LANDING} component={Home} />
          <Route path={ROUTES.SIGN_IN} component={LoggedInUserPage} />
          <Route path={ROUTES.SIGN_UP} component={ContactForm} />
      </HashRouter>
  )
}

export default App;
