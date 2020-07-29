import React from 'react';
import EditComment from './EditComment';

class CommentItem extends React.Component{
    // goToEdit() {

    // }

    render(){
        const { currentUser, comment, author, deleteComment, updateComment } = this.props 

        let deleteOption;
        currentUser.id === author.id ? (
          deleteOption = <button className="del-comment" onClick={() => deleteComment(comment.id) }>DELETE</button>)
          : (deleteOption = null)
        
        let editOption;
        currentUser.id === author.id ? (
          editOption = <button className="edit-comment" onClick={() => goToEdit() }>EDIT</button>)
          : (editOption = null)

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
                <div>
                    {editOption}
                    {deleteOption}
                </div>
            </li>
        )
    }
}

export default CommentItem;