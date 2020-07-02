import React from 'react';

class CommentItem extends React.Component{

    render(){
        const {comment, author, deleteComment} = this.props 
        return(
            <li>
                <i className="fas fa-user-astronaut"></i>
                <div className='comment-content'>
                <label className="commenter">
                    {author.username}
                    <span className="fa-stack">
                        <i className="fas fa-circle fa-stack-2x"></i>
                        <i className="fas fa-star fa-stack-1x fa-inverse"></i>
                    </span>
                </label>
                <p>{comment.body}</p>
                </div>
            </li>
        )
    }
}

export default CommentItem;