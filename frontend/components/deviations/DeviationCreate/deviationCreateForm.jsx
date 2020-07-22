import React from 'react';
import { $CombinedState } from 'redux';

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
    
    const formData = new FormData();
    formData.append('deviation[title]', this.state.title);
    formData.append('deviation[artist_id]', this.state.artist_id);
    formData.append('deviation[description]', this.state.description);
    formData.append('deviation[artwork]', this.state.artworkFile);

    this.props.createDeviation(formData);
  }

  handleFile(e) {
    // e.preventDefault();
    this.setState({artworkFile: e.currentTarget.files[0]});
  }
  // componentDidMount(){ this.props.getCurrentUser() }

  render() {
    return (
      <div className='create-page'>
        <div className='create-form-content'>
          <h3>Submit a New Deviaiton</h3>
          <form onSubmit={this.handleSubmit}>
            <input type="file" onChange={this.handleFile} />
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