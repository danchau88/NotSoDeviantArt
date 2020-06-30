import React from "react";
import HomeContainer from "./Home/HomeContainer.js";
import LoginFormContainer from './sessions/LoginFormContainer';
import SignupFormContainer from './sessions/SignupFormContainer';
import {Route, Link, Switch} from 'react-router-dom';
import {AuthRoute} from './../util/route_util';
import My404From from "./my404/My404Form.jsx";
import DeviationsIndexContainer from "./deviations/DeviationsIndex/DeviationsIndexContainer.js";
import DeviationShowContainer from "./deviations/DeviationShow/DeviationShowContainer";


const App = () => (
  <div>
    <div className='navbar'>
      <header className='nav-left'> 
        <Link to='/'>
          <h1>NotSo</h1>
          <i className="fab fa-deviantart"></i>
          <h1>DeviantArt</h1>
        </Link>

        <Link id='home-btn' to='/'>
          <i className="fas fa-home"></i>
        </Link>

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
      <Route className='nav-right' path='/' component={HomeContainer} />
    </div>

    <div className='navbar-offset'>
      <Switch>
        <Route exact path="/" component={DeviationsIndexContainer} />
        <Route path="/deviations/:id" component={DeviationShowContainer} />
        <AuthRoute path="/login" component={LoginFormContainer} />
        <AuthRoute path="/signup" component={SignupFormContainer} />
        <Route component={My404From} />
      </Switch>
    </div>

  </div>
);

export default App;