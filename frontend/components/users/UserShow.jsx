import React from "react";
import { Link } from "react-router-dom";

class UserShow extends React.Component {
  
  componentDidMount(){
    this.props.getUser(this.props.match.params.id)
  }
  
  render() {
    const { user, deviations } = this.props;
    if (!user) {return (<div></div>)};
    let deviationItems;
      deviationItems = deviations.map((deviation) => {
        if (user.id === deviation.artist_id) {
          return <li id={deviation.id}>
            <h4><Link to={`/deviations/${deviation.id}`}>{deviation.title}</Link></h4>
            <Link to={`/deviations/${deviation.id}`}><img src={deviation.artworkUrl} /></Link>
          </li>
        }
      })
    if (deviationItems.length === 0) {deviationItems = <h1 className="none-yet">No Deviations Yet...</h1>};
    return (
      <div className="user-show">
        <h2>{user.username}
          <span className="fa-stack">
            <i className="fas fa-circle fa-stack-2x"></i>
            <i className="fas fa-star fa-stack-1x fa-inverse"></i>
          </span>
        </h2>
        <ul className="user-devs">
          {deviationItems}
        </ul>
      </div>
    )
  }
}

export default UserShow;