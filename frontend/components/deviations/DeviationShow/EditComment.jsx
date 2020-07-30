import React from 'react';

export default class EditComment extends React.Component {
    constructor(props){
      super(props);
      this.state = {
        body: this.props.comment.body,
        author_id: this.props.comment.author_id,
        deviation_id: this.props.comment.deviation_id
      };
    }

    handleInput(type){
      return e => this.setState({[type]: e.target.value});
    }

    handleSubmit(e) {
      e.preventDefault();
      this.props.updateComment(this.state);
    }

    render(){
      return (
        <div className='edit-bg'>
          <div className='edit-comment-content'>
            <form onSubmit={handleSubmit}>
              <textarea value={this.state.body} onChange={this.handleInput('body')}></textarea>
            </form>
          </div>
        </div>
      )
    }
}