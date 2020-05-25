import React from "react";
import { Form, Field } from 'react-final-form';
import { FORM_ERROR } from 'final-form'
import { validate, required, email } from '../../common/validations';

import cx from "classnames";

const sleep = ms => new Promise(resolve => setTimeout(resolve, ms))

export default class SignupForm extends React.Component{
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
                <div className="has-text-center m-b-16">
                    <h3>Sign Up</h3>
                </div>
                <div>
                    <Field name="username" 
                            validate={validate(required, email)}>
                        {({ input, meta }) => (
                            <div className="field">
                                <label className="label has-text-black has-text-weight-bold is-size-7">Email</label>
                                <div class="control">
                                    <input className={cx("input is-size-7",
                                     {  "is-success": !meta.error && meta.touched,
                                        "is-danger": meta.error && meta.touched})}
                                        {...input} 
                                        type="username" placeholder="Email"
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
		    
                                         
                    <Field name="Email" 
                            validate={validate(required)}>
                        {({ input, meta }) => (
                            <div className="field">
                                <label className="label has-text-black has-text-weight-bold is-size-7">Password</label>
                                <div class="control">
                                    <input className={cx("input is-size-7",
                                     {  "is-success": !meta.error && meta.touched,
                                        "is-danger": meta.error && meta.touched})}
                                        {...input} 
                                        type="email" placeholder="Email"
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
                <button className={cx("button is-primary has-text-center m-t-16 m-b-16 is-fullwidth", {
                    "is-loading": submitting
                })} type="submit">Submit</button>
		
            </form>

                   

                   

            )}
        />
    }
}

