import React from "react";
import HomeContainer from "./Home/HomeContainer.js";
import LoginFormContainer from './sessions/LoginFormContainer';
import SignupFormContainer from './sessions/SignupFormContainer';
import {Route} from 'react-router-dom';
import {AuthRoute} from './../util/route_util'

const App = () => (
  <div className='home'>
    <header className='navbar'> 
      <h1 className='title'>
        NotSoDeviantArt
      </h1>
    </header> 

    <Route exact path='/' component={HomeContainer} />
    <AuthRoute path="/login" component={LoginFormContainer} />
    <AuthRoute path="/signup" component={SignupFormContainer} />
  </div>
);

export default App;