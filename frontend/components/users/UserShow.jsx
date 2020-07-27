import React from "react";

class UserShow extends React.Component {
  
  componentDidMount(){
    this.props.getUser(this.props.match.params.id)
  }
  
  render() {
    const { user, deviations } = this.props;
    if (!user) {return (<div></div>)};
    const deviationItem = deviations.map((deviation) => {
      if (user.id === deviation.artist_id) {
        return <li id={deviation.id}>
          <h4>{deviation.title}</h4>
          <img src={deviation.artworkUrl} />
        </li>
      }
    })
    return (
      <div className="user-show">
        <h2>{user.username}</h2>
        <ul className="user-devs">
          {deviationItem}
        </ul>
      </div>
    )
  }
}

export default UserShow;