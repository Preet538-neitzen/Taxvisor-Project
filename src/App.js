import React,{Component} from 'react';
import AuthPage from './Authentication/AuthPage'
import './App.css';
import {Header} from './Components/Header'
import SignUpPage from './Authentication/SignUpPage'
import fire from './Config/fbConfig'
import firebase from 'firebase/app'
import 'firebase/database';
import 'firebase/auth'
import { render } from '@testing-library/react';
import SignIn from './Authentication/SignIn'
import DetailedStory from './Authentication/DetailedStory'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

class App extends Component  {


  
  
  
  
  render(){
  return (
  <>

{/* 
<BrowserRouter>
    <Switch>
  
    <Route path="/" component={SignUpPage}/>
    <Route exact path="/SignIn" component={SignIn}/>
    </Switch>

</BrowserRouter> */}


<Router>
      <div>
       

        

        {/*
          A <Switch> looks through all its children <Route>
          elements and renders the first one whose path
          matches the current URL. Use a <Switch> any time
          you have multiple routes, but you want only one
          of them to render at a time
        */}
        <Switch>
          <Route exact path="/">
            <SignUpPage />
          </Route>
          <Route path="/SignIn">
            <SignIn />
          </Route>
         
        </Switch>
      </div>
    </Router>

  
  


  </>
  );
}}

export default App;
