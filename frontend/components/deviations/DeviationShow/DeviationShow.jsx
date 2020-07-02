import React from 'react';
import CommentForm from './CommentForm';
import CommentItem from './CommentItem';
// import FullImage from './FullImage';

class DeviationShow extends React.Component{

    constructor(props){
        super(props)
    }

    componentDidMount(){
        this.props.getDeviation(this.props.match.params.id)
        .then(() => this.props.getUser(this.props.deviation.artist_id))
    }

    componentDidUpdate(prevProps){
        if (this.props.match.params.id !== prevProps.match.params.id) {
            this.props.getDeviation(this.props.match.params.id)
            .then(() => this.props.getUser(this.props.deviation.artist_id))
        }
    }

    componentWillUnmount(){
        this.props.clearAllComments()
    }
    
    render() {
        const {deviation, artist, comments, createComment, users, deleteComment, currentUser} = this.props
        
        //Makes sure that these things are loaded
        if (!deviation || !artist || !comments) return (
            <div></div>
        );

        const commentsList = comments.map(comment => (
            <CommentItem key={comment.id} comment={comment} author={users[comment.author_id]} deleteComment={deleteComment} /> 
        ));
        
        let newCommentForm;
        
        if (!currentUser) {
            newCommentForm = <div></div>
        } else if (currentUser){
            newCommentForm = <CommentForm createComment={createComment} deviationId={deviation.id} authorId={currentUser.id} />
        };

        return(
            <div className='dev-show'>

                <div className='img-block'>
                <img src={deviation.artworkUrl} />
                </div>

                <div className='options-bar'>
                    <button><i className="far fa-star"></i>{` ADD TO FAVORITES`}</button>
                    <button>
                        <a href="#dev_comments_section"><i className="far fa-comment-alt"></i>{` COMMENT`}</a>
                    </button>
                </div>

                <div className='dev-show-content'>
                    <header>
                        <h2>{deviation.title}</h2>
                        <span>BY
                            <h3>{artist.username}
                                <span className="fa-stack">
                                    <i className="fas fa-circle fa-stack-2x"></i>
                                    <i className="fas fa-star fa-stack-1x fa-inverse"></i>
                                </span>
                            </h3>
                        </span>
                    </header>

                    <div className='dev-description'>
                        <p>{deviation.description}</p>
                    </div>
                </div>

                <section className='dev-comments'>
                    <a id="dev_comments_section">
                    <header><h3>COMMENTS</h3></header>
                    </a>
                    <ul className='comments-list'>
                        {newCommentForm}
                        {commentsList}
                    </ul>
                </section>


            </div>
        )
    }
}

export default DeviationShow;