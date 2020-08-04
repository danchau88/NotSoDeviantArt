import React from "react";
import HomeContainer from "./Home/HomeContainer.js";
import LoginFormContainer from './sessions/LoginFormContainer';
import SignupFormContainer from './sessions/SignupFormContainer';
import {Route, Link, Switch} from 'react-router-dom';
import {AuthRoute, ProtectedRoute} from './../util/route_util';
import My404From from "./my404/My404Form.jsx";
import DeviationsIndexContainer from "./deviations/DeviationsIndex/DeviationsIndexContainer.js";
import DeviationShowContainer from "./deviations/DeviationShow/DeviationShowContainer";
import SearchContainer from "./search/SearchContainer";
import deviationCreateContainer from "./deviations/DeviationCreate/deviationCreateContainer.js";
import UserShowContainer from "./users/UserShowContainer.js";
import PersonalPageContainer from "./users/PersonalPageContainer.js";
import FavoritesPageContainer from "./favorites/FavoritesPageContainer.js";
import EditCommentContainer from "./deviations/DeviationShow/EditCommentContainer.js";

//Will Change this later for a more proper Explore
function randomInteger(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min; //The maximum is inclusive and the minimum is inclusive 
}
//



class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      randomInteger: randomInteger(62,104), //change for explore button (based on deviation numbers) UPDATE THIS
    };
    this.randomDeviationId = this.randomDeviationId.bind(this);
  }

  randomDeviationId() {
    this.setState({randomInteger: randomInteger(62, 104)}) //change for explore button (based on deviation numbers) UPDATE THIS
  }

  render() {
    return(
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
                <button className='drop-button'><Link to='/myfavorites'>FAVORITES</Link></button>
                
                <button className='drop-button'>
                  <Link onClick={this.randomDeviationId} to={`/deviations/${this.state.randomInteger}`}>
                    EXPLORE
                  </Link>
                </button>
                
              </div>
            </div>
          </header>
          <div className='search-nav'>
            <Route path="/" component={SearchContainer} />
          </div>
          <Route className='nav-right' path='/' component={HomeContainer} />
        </div>

        <div className='navbar-offset'>
          <Switch>
            <Route path="/deviations/:id" component={DeviationShowContainer} />
            <Route path="/users/:id" component={UserShowContainer} />
            <ProtectedRoute path="/mypage" component={PersonalPageContainer} />
            <ProtectedRoute path="/myfavorites" component={FavoritesPageContainer} />
            <Route path="/comments/:id/edit" component={EditCommentContainer} />
            <ProtectedRoute path="/create/deviation" component={deviationCreateContainer} />
            <AuthRoute path="/login" component={LoginFormContainer} />
            <AuthRoute path="/signup" component={SignupFormContainer} />
            <Route exact path="/" component={DeviationsIndexContainer} />
            <Route component={My404From} />
          </Switch>
        </div>

      </div>
    )
  }
}

export default App;