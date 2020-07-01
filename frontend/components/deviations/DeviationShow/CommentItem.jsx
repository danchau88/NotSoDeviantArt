import React from 'react';

class CommentItem extends React.Component{

    render(){
        const {comment, author, deleteComment} = this.props 
        return(
            <li>
                <label className="commenter">{author.username}</label>
                <p>{comment.body}</p>
            </li>
        )
    }
}

export default CommentItem;