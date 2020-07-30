import React from 'react';

export default class EditComment extends React.Component {
  constructor(props){
    super(props);
    //needs id for patch api util call
    this.state = {
      id:'',
      body: '',
      author_id: '',
      deviation_id: ''
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  componentWillReceiveProps(props) {
    if (props.comment) {     //fixes the undefined problem
      this.setState({
        id: props.comment.id,
        body: props.comment.body,
        author_id: props.comment.author_id,
        deviation_id: props.comment.deviation_id
      })
    }
  }

  componentDidMount(){
    this.props.getComment(this.props.match.params.id)
  }

  handleInput(type){
    return e => this.setState({[type]: e.currentTarget.value});
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.updateComment(this.state);
    this.props.history.goBack()
  }

  render(){
    return (
      <div className='edit-bg'>
        <div className='edit-comment-content'>
          <form onSubmit={this.handleSubmit}>
            <textarea value={this.state.body} onChange={this.handleInput('body')}></textarea>
            <button>EDIT</button>
          </form>
        </div>
      </div>
    )
  }
}