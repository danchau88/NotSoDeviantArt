import React from 'react';
import { Link } from 'react-router-dom';

class PersonalPage extends React.Component {

  componentDidMount(){
    this.props.getUser(this.props.currentUser.id)
  }

  render() {
    const { currentUser, deviations } = this.props;
    let deviationItems;
    deviationItems = deviations.map((deviation) => {
      if (currentUser.id === deviation.artist_id) {
        return <li key={deviation.id}>
          <h4>{deviation.title}</h4>
          <Link to={`/deviations/${deviation.id}`}><img src={deviation.artworkUrl} /></Link>
          <button id="delete-dev" >DELETE</button>
        </li>
      }
    })
    if (!currentUser) {return <div></div>}
    return (
      <div className="personal-page">
        <h1>{currentUser.username}</h1>
        <div className="options-pages">
          <button>MY DEVIATION</button>
          <button>FAVORITES</button>
        </div>
        <ul className="user-devs">
          {deviationItems}
        </ul>
      </div>
    )
  }
}

export default PersonalPage;