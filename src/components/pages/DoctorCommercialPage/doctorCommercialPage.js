import React from "react"
import DoctorCommercialForm from "../../modules/common/DoctorCommercialForm/doctorCommercialForm"
import "./doctorCommercialPage.sass"

export default function DoctorCommercialPage(){
    return <div className="ak-page ak-login-page columns is-gapless is-centered is-vcentered">
        <div className="column is-one-quarter-desktop doctor-commercial">
            <DoctorCommercialForm/>                 
        </div>
             
    </div>
}




