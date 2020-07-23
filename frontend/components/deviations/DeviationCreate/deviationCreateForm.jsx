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
      artworkUrl: null,
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleFile = this.handleFile.bind(this);
    this.handleExit = this.handleExit.bind(this);
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
    const file = e.currentTarget.files[0]; //brackets needed to take file format needed
    const fileReader = new FileReader(); //neeed for image preview
    fileReader.onloadend = () => {
      
      this.setState({artworkFile: file, artworkUrl: fileReader.result});
    };
    if (file) {fileReader.readAsDataURL(file)}; //if tatement to make sure that an image file is present
  }
 
  handleExit() {
    this.props.history.goBack()
  }

  render() {
    const preview = this.state.artworkUrl ? 
      <div className="img-preview">
        <h3>Image Preview</h3>
        <img src={this.state.artworkUrl} />
      </div> 
      : null;
    return (
      <div className='create-page'>
        <div className='create-form-content'>
          <h3>Submit a New Deviaiton</h3>
          <form onSubmit={this.handleSubmit}>
            <input id="new-chosen" type="file" onChange={this.handleFile} />
            {preview}
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
          <span 
            className='exit-create'
            onClick={this.handleExit}
          >x</span>
        </div>
      </div>
    )
  }
}

export default DeviationCreateForm;