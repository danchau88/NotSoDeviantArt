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
                </label>
                <p>{comment.body}</p>
                </div>
            </li>
        )
    }
}

export default CommentItem;