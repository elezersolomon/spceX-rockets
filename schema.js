const axios = require('axios');
const { response } = require('express');
const 
{ GraphQLObjectType,
  GraphQLInt,
  GraphQLString,
  GraphQLBoolean,
  GraphQLList,
  GraphQLSchema,
  
}
= require('graphql'); 

const LaunchType = new GraphQLObjectType({
    name:'Launch',
    fields:()=>({
        flight_number: {type: GraphQLInt},
        mission_name:{type: GraphQLString},
        launch_year:{type: GraphQLString},
        launch_date_local: {type: GraphQLString},
        launch_success: {type: GraphQLBoolean},
        launch_number:{type: GraphQLInt},
        rocket:{type: RocketType}
    })
})
  
  const RocketType = new GraphQLObjectType ({
     name: "rocket",
     fields:()=>({
         rocket_id:{type: GraphQLString},
         rocket_name:{type: GraphQLString},
         rocket_type:{type:GraphQLString}

     })
 })
 const RocketsType = new GraphQLObjectType ({
    name: "rockets",
    fields:()=>({
       id:{type: GraphQLInt},
       first_flight: {type: GraphQLString},
       stages : {type: GraphQLString},
       

    })
})
 const rootQuery = new GraphQLObjectType({
     name:"root",
    fields:{
        launches:{
          type: GraphQLList(LaunchType),
          resolve (parent,args){
           return axios.get('https://api.spacexdata.com/v3/launches').then(res=> res.data)
          }
        },
    launch:{
        type: LaunchType,
        args: {
            flight_number:{type: GraphQLInt}
        },
         resolve(parent,args){
             return axios.get(`https://api.spacexdata.com/v3/launches/${args.flight_number}`).then(res=> res.data)
             
         }       
        },
        rockets:{
            type: GraphQLList(RocketsType),
            resolve (parent,args){
             return axios.get('https://api.spacexdata.com/v3/rockets').then(res=> res.data)
            }
          },
      rocket:{
          type: RocketsType,  
          args: {
            rocket_id:{type: GraphQLString}
          },
           resolve(parent,args){console.log('test',args.id);
           
               return axios.get(`https://api.spacexdata.com/v3/rockets/${args.rocket_id}`).then(res=> res.data)
               
           }       
          },
    }
    })
 

 module.exports = new GraphQLSchema({
     query : rootQuery
 })