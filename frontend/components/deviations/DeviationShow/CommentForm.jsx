import React from 'react';

class CommentForm extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            body: '',
            author_id: this.props.authorId,
            deviation_id: this.props.deviationId
        }
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleInput(type){
        return e => this.setState({[type]: e.target.value})
    }

    handleSubmit(e){
        e.preventDefault();
        this.props.createComment(this.state);
        this.setState({ body: '' });
    }

    render(){
        return(
            <li className='add-comment'>
                <i className="fas fa-user-astronaut"></i>
                <form onSubmit={this.handleSubmit}>
                    <textarea 
                        value={this.state.body}
                        onChange={this.handleInput('body')}
                    ></textarea>
                    <button>COMMENT</button>
                </form>
            </li>
        )
    }
}

export default CommentForm;