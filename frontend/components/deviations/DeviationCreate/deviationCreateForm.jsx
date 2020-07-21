import React from 'react';

class DeviationCreateForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
      artist_id: this.props.currentUser.id,
      description: '',
      artworkFile: null,
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleFile = this.handleFile.bind(this);
  }

  handleInput(type){
    return e => this.setState({[type]: e.currentTarget.value})
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.createDeviation(this.state);
  }

  handleFile(e) {
    e.preventDefault();
    this.setState({artworkFile: e.currentTarget.files[0]});
  }
  // componentDidMount(){ this.props.getCurrentUser() }

  render() {
    return (
      <div className='create-page'>
        <div className='create-form-content'>
          <form onSubmit={this.handleSubmit}>
            <input type="file"/>
            <input 
              type="text" 
              value={this.state.title} 
              placeholder="Title of deviation..."
              onChange={this.handleInput('title')}
            />
            <textarea 
              value={this.state.description}
              placeholder="Describe your deviation..."
              onChange={this.handleInput('description')}
            />
            <button>SUBMIT</button>
          </form>
        </div>
      </div>
    )
  }
}

export default DeviationCreateForm;