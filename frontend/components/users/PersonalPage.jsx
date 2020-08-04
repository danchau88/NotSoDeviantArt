import React from 'react';
import { Link } from 'react-router-dom';

class PersonalPage extends React.Component {

  componentDidMount(){
    this.props.getUser(this.props.currentUser.id)
  }

  render() {
    const { currentUser, deviations, deleteDeviation } = this.props;
    let deviationItems;
    deviationItems = deviations.map((deviation) => {
      if (currentUser.id === deviation.artist_id) {
        return <li className="personal-li" key={deviation.id}>
          <div>
            <h4>{deviation.title}</h4>
            <Link to={`/deviations/${deviation.id}`}><img className="personal-img" src={deviation.artworkUrl} /></Link>
          </div>
          <button onClick={ () => deleteDeviation(deviation.id) } className="delete-dev" >DELETE</button>
        </li>
      }
    })
    if (!currentUser) {return <div></div>}
    return (
      <div className="personal-page">
        <h1 className="user-title">{currentUser.username}</h1>
        <h1 className="personal-title">MY DEVIATIONS</h1>
        <div className="options-pages">
          <Link to="/mypage"><button className="top-bar">MY DEVIATIONS</button></Link>
          <Link to="/myfavorites"><button className="top-bar">FAVORITES</button></Link>
        </div>
        <ul className="user-devs">
          {deviationItems}
        </ul>
      </div>
    )
  }
}

export default PersonalPage;