import React from "react"
import HomeForm from "../../modules/common/HomeForm/homeForm"


export default function HomePage(){
    return <div className="ak-page ak-home-page columns is-gapless is-centered">
                <div className="column is-desktop home-form">
                   
                      
                    <div className="columns has-text-left  has-background-grey-lighter dr-navbar">
                        <div className="column is-1 is-size-4-widescreen has-text-weight-bold "> 
                            <span class="icon">
                            <i class="fas fa-user-circle fa-2x"></i>
                            </span>
                        </div>
                        <div class="column is-three-quarters">
                            <h4 class="title is-4">Dr. Vijay Thakre</h4>
                            <div className="has-text-bottom is-one-fifth  is-widescreen is-family-code m-b-18">
                            <h5 class="title is-6"> General Physician</h5>
                        </div>
                       
                    </div>                              
                </div>
                <HomeForm/>                         
            </div>
        </div>
}




















