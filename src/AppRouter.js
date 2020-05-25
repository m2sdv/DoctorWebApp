import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import LoginPage from "./components/pages/LoginPage/loginPage";
import HomePage from "./components/pages/HomePage/homePage";
import SignupPage from "./components/pages/SignupPage/signupPage";
import DoctorCommercialPage from "./components/pages/DoctorCommercialPage/doctorCommercialPage";
import DoctorRegistrationPage from "./components/pages/DoctorRegisterationPage/doctorRegisterationPage";
export default class AppRouter extends React.Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route path="/" exact={true}>
          <LoginPage></LoginPage>
           </Route>
           <Route path="/signup" exact={true}>
            <SignupPage />
          </Route>
          <Route path="/doctorCommercial" exact={true}>
            <DoctorCommercialPage />
          </Route>
          <Route path="/doctor/register" exact={true}>
            <DoctorRegistrationPage />
          </Route>
           <Route path="/homePage" exact={true}>
            <HomePage />
          </Route>
          
          
        </Switch>
      </Router>
    );
  }
}
