
import React from 'react'
import successer from'../provider/successer'
import classnames from 'classnames'
import Moment from'react-moment'
import {Link} from 'react-router-dom'


 function Launcher ({launch:{flight_name,flight_number,mission_name,launch_date_local,launch_success}}) {
     console.log(launch_success)
     var success=successer(launch_success)
        return (
            <div className="card card-body mb-3">
            <div className="row">
            <div className="col-md-9">
        <h3>MISSION :{mission_name}</h3>
        <h3 className={classnames({"text-success": launch_success,"text-danger":!launch_success})}>SUCCESS: <img src={success}></img></h3>
        <p>date :<Moment format="DD-MM-YYYY HH:MM">{launch_date_local}</Moment></p>
            </div>
            <div >
            <Link to={`/launch/${flight_number}`} className='btn btn-secondary><button '>DETAILS</Link>
            </div>
            </div>
            </div>
        )
    
}

export default Launcher
