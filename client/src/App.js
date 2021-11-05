import React,{Component}from 'react';
import logo from './SpaceX Logo.jpg';
import ApolloClient from 'apollo-boost'; 
import {ApolloProvider} from 'react-apollo';
import './App.css';
import Launches from './components/launches'
import launch from './components/launch'
import {BrowserRouter as Router, Route } from 'react-router-dom';
import { render } from '@testing-library/react';
  const client = new ApolloClient({
    uri: '/graphql'
  });

class  App extends Component  {
  render(){
  return (
    <ApolloProvider client={client}>
      <Router>
    <div className="container">
      <img src={logo} style={{width:300, display:'block', margin:'auto',color:'blue'}} alt="space x"/>
      <Route exact path='/'  component={Launches}/>
    <Route exact path="/launch/:flight_number" component={launch}/> 
    </div>
    
    </Router>
    </ApolloProvider>
  );
}
}


export default App;
