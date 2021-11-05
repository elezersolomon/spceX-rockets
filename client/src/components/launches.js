import React, { Component,Fragment } from 'react'
import gql from 'graphql-tag';
import{Query} from 'react-apollo'
import Launcher from './Launcher'

const LAUNCH_QUERY = gql`
query LauncheQuery{
    launches{
   flight_number,
   mission_name,
   launch_date_local,
   launch_success
    }
}
`

export class Launches extends Component {
    render() {
        return (
            <Fragment>
           <h4 className="display-4 my-3">Launches</h4>
           <Query query={LAUNCH_QUERY}>{
                ({loading,error,data})=>{
              if(loading) return <h2>loading..</h2>
              if(error) console.log(error); console.log("data:-",data);
                
            
                return  (
                <Fragment>
                     <div>
                
                
                <p> <span className={"px-3 mr-2 bg-success"}></span>= SUCCESS</p>
                <p> <span className={"px-3 mr-2 bg-danger"}> </span>= failure</p>
                
            </div>
                    {
                     data.launches.map(launches => (
                      <Launcher key={launches.flight_number} launch={launches}/>
                      ))
            }
                 </Fragment>
                 )
                } 
                     }
                </Query> 
            </Fragment>
            
        )
    }
}

export default Launches

