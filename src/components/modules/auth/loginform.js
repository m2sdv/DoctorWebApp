import React from "react";
import { Form, Field } from 'react-final-form';
import { FORM_ERROR } from 'final-form'
import { validate, required, email } from "../common/validations";

import cx from "classnames";

const sleep = ms => new Promise(resolve => setTimeout(resolve, ms))

export default class LoginForm extends React.Component{
    onSubmit = async values => {
        await sleep(2000)        
    }
    validate = async values => {
        await sleep(2000)        
    }
    render(){
        return <Form
            onSubmit={this.onSubmit}
            validate={this.validate}
            render={({ handleSubmit, submitting }) => (
            <form className="p-64" onSubmit={handleSubmit}>  
                <div className="has-text-center has-text-black has-text-weight-bold is-size-10 m-b-16 ">
                    <h3>Sign In</h3>
                </div>
                <div>
                    <Field name="username" 
                            validate={validate(required, email)}>
                        {({ input, meta }) => (
                            <div className="field">
                                <label className="label has-text-black has-text-weight-bold is-size-7">Registration Number</label>
                                <div class="control">
                                    <input className={cx("input is-size-7",
                                     {  "is-success": !meta.error && meta.touched,
                                        "is-danger": meta.error && meta.touched})}
                                        {...input} 
                                        type="username" placeholder="Registration Number"
                                    />                                                                    
                                </div>     
                                { meta.error && meta.touched && 
                                    <p className={cx("help has-text-left is-size-7", 
                                        {"is-success": !meta.error && meta.touched,
                                        "is-danger": meta.error && meta.touched})}>
                                        {meta.error}
                                    </p>
                                }                           
                            </div>                            
                        )}                        
                    </Field>                   
                    <Field name="password" 
                            validate={validate(required)}>
                        {({ input, meta }) => (
                            <div className="field">
                                <label className="label has-text-black has-text-weight-bold is-size-7">Password</label>
                                <div class="control">
                                    <input className={cx("input is-size-7",
                                     {  "is-success": !meta.error && meta.touched,
                                        "is-danger": meta.error && meta.touched})}
                                        {...input} 
                                        type="password" placeholder="Password"
                                    />                                                                    
                                </div>     
                                { meta.error && meta.touched && 
                                    <p className={cx("help has-text-left is-size-7", {"is-danger": meta.error && meta.touched})}>
                                        {meta.error}
                                    </p>
                                }                           
                            </div>                            
                        )}                        
                    </Field>
                </div>                
                <button className={cx("button is-primary has-text-left m-t-16 m-b-16 is-fullwidth", {
                    "is-loading": submitting
                })} type="submit">Sign In</button>                
                <div className="m-t-16">
                    <p className="is-size-7 has-text-black">
                        Don`t Have account?
                    </p>
                    <p className="is-size-7 has-text-black has-text-weight-bold">
                       Create New
                    </p>
                  
                </div>
                
                <a className="button is-primary is-outlined has-text-left m-t-16 m-b-16 is-fullwidth" href="/signup">Sign Up</a>
            </form>
            )}
        />
    }
}