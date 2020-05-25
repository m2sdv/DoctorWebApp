import React from "react";
import { Form, Field } from 'react-final-form';
import { FORM_ERROR } from 'final-form';
import { validate, required } from '../../common/validations';

import cx from "classnames";

const sleep = ms => new Promise(resolve => setTimeout(resolve, ms))

export default class HomeForm extends React.Component{
  constructor () {
      super();
  }
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
            
      <div class="columns ">
      <div class="column is-6 has-text-center">
       <div className="has-text-center m-b-16 home-form">
              
                  <div className="field">
                    <label className="label has-text-grey is-size-5">
                      Patient ID
                    </label>
                    <div className="control has-icons-right">
                      <input class="input is-medium" type="Patient Id" placeholder="Enter Your Id" />
                        <span class="icon is-right">
                          <i class="fa fa-qrcode fa-2x" aria-hidden="true"></i>
                        </span>
                      </div>
                    </div>
                </div>
              </div>
        </div>

    
        <div class="columns">
           <div class="column is-6">
            <div className="has-text-center m-b-16">
              <Field name="My Status" validate={validate(required)}>
                {({ input, meta }) => (
                  <div className="field">
                    <label className="label has-text-grey is-size-5">
                      My Status
                    </label>
                    <div className="control ">
                    <div class="select is-medium">
                                     <select>
                                       <option>OPD</option>
				                               <option>IPD</option>
				                               <option>Not Available</option>
                                    </select>
                                 </div>

                    </div>
                    {meta.error && meta.touched && (
                      <p
                        className={cx("help has-text-left is-size-5", {
                          "is-success": !meta.error && meta.touched,
                          "is-danger": meta.error && meta.touched,
                        })}
                      >
                        {meta.error}
                      </p>
                    )}
                  </div>
                )}
              </Field>
            </div>
            </div>
           </div>
          
           <div class="column is-6">
            <div className="has-text-center m-16">
              <Field name="Approximately till" validate={validate(required)}>
                {({ input, meta }) => (
                  <div className="field is-horizontal">
                    <label className="label has-text-grey is-size-5">
                      Approximately till
                    </label>
                    <div className="control m-l-16">
                    <div class="select is-medium">
                                    <select>
                                       <option>11:00  </option>
				                               <option>10:30  </option>
				                               <option>08:00  </option>
                                    </select>
                                 </div>

                    </div>
                  
                    {meta.error && meta.touched && (
                      <p
                        className={cx("help has-text-left is-size-7", {
                          "is-success": !meta.error && meta.touched,
                          "is-danger": meta.error && meta.touched,
                        })}
                      >
                        {meta.error}
                      </p>
                    )}
                  </div>
                )}
              </Field>
            </div>
            </div>
          
            </form>
            )}
            
        />
    }
    
}



