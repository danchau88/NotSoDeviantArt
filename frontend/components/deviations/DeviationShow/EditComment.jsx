import React from 'react';

export default class EditComment extends React.Component {
    constructor(props){
      super(props);
      this.state = {
        body: this.props.match.body,
        author_id: this.props.match.author_id,
        deviation_id: this.props.match.deviation_id
      };
      this.handleSubmit = this.handleSubmit.bind(this);
    }

    // componentDidMount(){
    //   this.props.getAllComments(this.state.deviation_id);
    // }

    handleInput(type){
      return e => this.setState({[type]: e.target.value});
    }

    handleSubmit(e) {
      e.preventDefault();
      this.props.updateComment(this.state);
    }

    render(){
      console.log(this.props.comment)
      return (
        <div className='edit-bg'>
          <div className='edit-comment-content'>
            <form onSubmit={this.handleSubmit}>
              <textarea value={this.state.body} onChange={this.handleInput('body')}></textarea>
            </form>
            <button>EDIT</button>
          </div>
        </div>
      )
    }
}