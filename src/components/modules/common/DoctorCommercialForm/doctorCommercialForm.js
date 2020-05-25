import React from "react";
import { Form, Field } from 'react-final-form';
import { FORM_ERROR } from 'final-form'
import { validate, required, presence } from '../../common/validations';

import cx from "classnames";

const sleep = ms => new Promise(resolve => setTimeout(resolve, ms))

export default class DoctorCommercialForm extends React.Component{
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
                <div className="has-text-center m-b-7">
                    <h3>Commercial Facilities</h3>
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
                                        type="name" placeholder="Plase enter your full name"
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

		    <Field name="Address"
                            validate={validate(required)}>
                        {({ input, meta }) => (
                            <div className="field">
                                <label className="label has-text-grey is-size-7">Address</label>
                                <div className="control">
                                    <input className={cx("input is-size-7",
                                     {  "is-success": !meta.error && meta.touched,
                                        "is-danger": meta.error && meta.touched})}
                                        {...input}
                                        type="address" placeholder="Please enter your Address"
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
		    <Field name="City/District" 
                            validate={validate(required)}>
                        {({ input, meta }) => (
                            <div className="field">
                                <label className="label has-text-center has-text-grey is-size-7">City/District</label>
                                <div className="control">
				     <div class="select ">
                                     <select>
                                       <option>Select City/District</option>
                                       <option>Nagpur</option>
                                       <option>Mumbai</option>
                                       <option>Pune</option>
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
                    <Field name="State"
                            validate={validate(required)}>
                         {({ input, meta }) => (
                            <div className="field">
                                <label className="label has-text-grey is-size-7">State</label>
                                <div className="control">
	
		                 <div class="select">
                                    <select>
                                       <option>Select State</option>
                                       <option>Maharashtra</option>
				       <option>Hydrabad</option>
				       <option>kolkata</option>
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
		    <Field name="Phone"
                            validate={validate(required)}>
                         {({ input, meta }) => (
                            <div className="field">
                                <label className="label has-text-grey is-size-7">Phone</label>
                                <div className="control">
                                    <input className={cx("input is-size-7",
                                     {  "is-success": !meta.error && meta.touched,
                                        "is-danger": meta.error && meta.touched})}
                                        {...input}
                                        type="phone" placeholder="Please enter your Phone"
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
                
                    
                               
                <div className="m-t-32 m-b-32">
                    <p className="is-size-7">
                          Add a Commercial Facility
		    </p>
		     <a className="button is-primary is-outlined has-text-left m-t-16 m-b-16 is-fullwidth" href="/doctorcommercial">Add</a>


		    <div className="columns m-t-8">
                        <div className="column">
                            
                                
                            
                        </div>
		    

                        <div className="column">
                           
                        </div>         
                        <div className="column">
                            

                            
                        </div>         
                    </div>
                </div>
                
                   
                

             
            <button className={cx("button is-primary has-text-left m-t-16 m-b-16 is-fullwidth", {
                    "is-loading": submitting
                })} type="submit">Submit</button>

            </form>
            )}
        />
    }
}

            
   
          
        
    



