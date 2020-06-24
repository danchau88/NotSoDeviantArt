import React from "react";
import HomeContainer from "./Home/HomeContainer.js";
import LoginFormContainer from './sessions/LoginFormContainer';
import SignupFormContainer from './sessions/SignupFormContainer';
import {Route, Link} from 'react-router-dom';
import {AuthRoute} from './../util/route_util'



const App = () => (
  <div className='navbar'>
    <header className='nav-left'> 
      <Link>
        <h1>NotSoDeviantArt</h1>
      </Link>
      <div className='home-button'>
        <Link to='/'>
          <button className='nav-button'>HOME</button>
        </Link>
      </div>
    </header> 
    <div className='nav-right'>
    <Route exact path='/' component={HomeContainer} />
    <AuthRoute path="/login" component={LoginFormContainer} />
    <AuthRoute path="/signup" component={SignupFormContainer} />
    </div>
  </div>
);

export default App;