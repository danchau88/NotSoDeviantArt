import React from 'react';

class DeviationCreateForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
      artist_id: this.props.currentUser.id,
      description: '',
    }
  }

  // componentDidMount(){ this.props.getCurrentUser() }

  render() {
    return (
      <div>

      </div>
    )
  }
}

export default DeviationCreateForm;