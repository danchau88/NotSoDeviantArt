import React from "react";
import HomeContainer from "./Home/HomeContainer.js";
import LoginFormContainer from './sessions/LoginFormContainer';
import SignupFormContainer from './sessions/SignupFormContainer';
import {Route, Link} from 'react-router-dom';
import {AuthRoute} from './../util/route_util';

const App = () => (
  <div className='navbar'>
    <header className='nav-left'> 
      <Link to='/'>
        <h1>NotSo</h1>
        <i className="fab fa-deviantart"></i>
        <h1>DeviantArt</h1>
      </Link>

      <Link id='home-btn' to='/'>HOME</Link>

      <div className='dropdown'>
        <button className="nav-button" id='more'>MORE</button>
        <div className='dropdown-content'>
          <button>WATCH</button>
          <button>FAVORITE</button>
          <button>EXPLORE</button>
        </div>
      </div>

      <button className='search-button'>
        <i className="fas fa-search"></i>
        {' SEARCH'}
      </button>

    </header> 

    <div className='nav-right'>
    <Route exact path='/' component={HomeContainer} />
    <AuthRoute path="/login" component={LoginFormContainer} />
    <AuthRoute path="/signup" component={SignupFormContainer} />
    </div>
  </div>
);

export default App;