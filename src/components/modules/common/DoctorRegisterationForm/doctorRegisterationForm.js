import React from "react";
import { Form, Field } from 'react-final-form';
import { FORM_ERROR } from 'final-form'
import { validate, required, presence } from '../../common/validations';

import cx from "classnames";

const sleep = ms => new Promise(resolve => setTimeout(resolve, ms))

export default class DoctorRegisterationForm extends React.Component{
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
                <div className="has-text-center ">
                    <h3>Basic Information</h3>
                </div>
                <div>
                    <Field name="Name" 
                            validate={validate(required)}>
                        {({ input, meta }) => (
                            <div className="field">
                                <label className="label has-text-grey is-size-7">Name</label>
                                <div className="control">
                                    <input className={cx("input is-size-7",
                                     {  "is-success": !meta.error && meta.touched,
                                        "is-danger": meta.error && meta.touched})}
                                        {...input} 
                                        type="name" placeholder="Name"
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

		    <Field name="Sex" 
                            validate={validate(required)}>
                        {({ input, meta }) => (
                            <div className="field">
                                <label className="label has-text-center has-text-grey is-size-7">Gender</label>
                                <div className="control">
				     <div class="select ">
                                     <select>
                                       <option>Select Gender</option>
                                       <option>Male</option>
                                       <option>Female</option>
                                      </select>
                                    </div>       
                                     
                                                                                                       
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
                    <Field name="DOB"
                            validate={validate(required)}>
                        {({ input, meta }) => (
                            <div className="field">
                                <label className="label has-text-grey is-size-7">Date Of Birth</label>
                                <div className="control">
                                    <input className={cx("input is-size-7",
                                     {  "is-success": !meta.error && meta.touched,
                                        "is-danger": meta.error && meta.touched})}
                                        {...input}
                                        type="address" placeholder="01/01/1990"
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

                    <Field name="Registeration Number"
                            validate={validate(required)}>
                        {({ input, meta }) => (
                            <div className="field">
                                <label className="label has-text-grey is-size-7">Registeration Number</label>
                                <div className="control">
                                    <input className={cx("input is-size-7",
                                     {  "is-success": !meta.error && meta.touched,
                                        "is-danger": meta.error && meta.touched})}
                                        {...input}
                                        type="address" placeholder="Registeration Number"
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

                    <Field name="Speciality"
                            validate={validate(required)}>
                        {({ input, meta }) => (
                            <div className="field">
                                <label className="label has-text-grey is-size-7">Speciality</label>
                                <div className="control">
                                    <input className={cx("input is-size-7",
                                     {  "is-success": !meta.error && meta.touched,
                                        "is-danger": meta.error && meta.touched})}
                                        {...input}
                                        type="address" placeholder="Speciality"
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

                    


                    <Field name="Qualification"
                            validate={validate(required)}>
                         {({ input, meta }) => (
                            <div className="field">
                                <label className="label has-text-grey is-size-7">State</label>
                                <div className="control">
	
		                 <div class="select">
                                    <select>
                                       <option>Select Qualification</option>
                                       <option>MBBS</option>
				                         <option>MD</option>
				                         <option>BAMS</option>
                                         <option>BHMS</option>
                                    </select>
                                 </div>
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
		   

                    <Field name="Password"
                            validate={validate(required)}>
                        {({ input, meta }) => (
                            <div className="field">
                                <label className="label has-text-grey is-size-7">Password</label>
                                <div className="control">
                                    <input className={cx("input is-size-7",
                                     {  "is-success": !meta.error && meta.touched,
                                        "is-danger": meta.error && meta.touched})}
                                        {...input}
                                        type="password" placeholder="Password"
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

                    <Field name="Confrim Password"
                            validate={validate(required)}>
                        {({ input, meta }) => (
                            <div className="field">
                                <label className="label has-text-grey is-size-7">Confirm Password</label>
                                <div className="control">
                                    <input className={cx("input is-size-7",
                                     {  "is-success": !meta.error && meta.touched,
                                        "is-danger": meta.error && meta.touched})}
                                        {...input}
                                        type="password" placeholder="Confirm Password"
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

                </div>                
                
              
             
            <button className={cx("button is-primary has-text-left m-t-16 m-b-16 is-fullwidth", {
                    "is-loading": submitting
                })} type="submit">Submit</button>

            </form>
            )}
        />
    }
}

            
   
          
        
    



