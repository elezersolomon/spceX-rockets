import React, { Component,Fragment } from 'react'
import  gql from 'graphql-tag'
import  {Query} from "react-apollo"
import successer from"../provider/successer"
import {Link} from"react-router-dom"

console.log('test1'); 
const  LAUNCH_QUERY = gql`
query  LaunchQuery($flight_number:Int!) {
    launch (flight_number: $flight_number) {
        flight_number,
        mission_name,
        launch_year,
        launch_date_local,
        launch_success,
        launch_number,
        rocket{
            rocket_id,
            rocket_name,
            rocket_type,
        }
}}
`




export class launch extends Component {


    render() {
        let { flight_number } = this.props.match.params
         flight_number= parseInt(flight_number);
        console.log('testfl');
 
        return (
            <Fragment >
            <Query  query={LAUNCH_QUERY}  variables={{flight_number}}>
                {
                 ({loading,error,data})=>{
                if(loading) return<h4>loading</h4>

                if(error){console.log('error : ',error)}


                console.log('testdata',JSON.stringify(data));
                
                    console.log('testdata',JSON.stringify(data));
                    
                    const { flight_number,
                        mission_name,
                        launch_year,
                        launch_date_local,
                        launch_success,
                        launch_number,
                        rocket :{
                            rocket_id,
                             rocket_name,
                            rocket_type,
                        }
                        }= data.launch
                        var success = successer(launch_success);
                    console.log('testmission',launch_number);
                    
                    return (
                        <div>
                        
                        <h1 className={"display-4 my-3"}><span className={'text-dark'}> MISSION : ${mission_name}</span></h1>
                        <h4 calssname={"display-4 my-3"}>launch details</h4>
                        <ul className={"list-group"}>
                            <li className={"list-group-item"}>launch number : {flight_number}</li>
                            <li className="list-group-item">launch year: {launch_year}</li>
                            <li className="list-group-item">launch date:  {launch_date_local}</li>
                            <li className="list-group-item">launch success: <img src={success}/></li>
                            <li className="list-group-item"></li>
                        </ul>
                        <h4 calssname={"display-4 my-3"}>rocket details</h4>
                        <ul className={"list-group"}>
                            <li className={"list-group-item"}>rocket id : {rocket_id}</li>
                            <li className="list-group-item">rocket name: {rocket_name}</li>
                            <li className="list-group-item">rocket_type:  {rocket_type}</li>
                            
                            </ul>
                        <Link to={'/'} className={'btn btn-secondary'} style={{'margin-top':'5px'}}>Back</Link>
                        </div  >
                    )
                }
                }
                
            </Query> 
            </Fragment>
        )
    }
}

export default launch
