import React from "react"
import "./loginPage.sass"
import LoginForm from "../../modules/auth/loginform"


export default function LoginPage(){
    return <div className="ak-page ak-login-page columns is-gapless is-centered is-vcentered">
        <div className="column is-one-quarter-desktop login-form">
            <LoginForm/>                 
        </div>
            
    </div>
}


