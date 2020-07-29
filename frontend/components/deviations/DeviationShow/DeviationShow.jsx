import React from 'react';
import CommentForm from './CommentForm';
import CommentItem from './CommentItem';
import { Link } from 'react-router-dom';
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
        this.props.clearAllFavorites()
    }
    
    render() {
        const {deviation, favoriteId, favorited, users, artist, comments, currentUser,
           createFavorite, createComment, updateComment, deleteComment, deleteFavorite} = this.props
        
        //Makes sure that these things are loaded
        if (!deviation || !artist || !comments) return (
            <div className='loader'>
                <div className="loadingio-spinner-bean-eater-916qsk75w7e"><div className="ldio-c4ah9yqoipt">
                <div><div></div><div></div><div></div></div><div><div></div><div></div><div></div></div>
                </div></div>
            </div>
        );

        const commentsList = comments.map(comment => (
            <CommentItem key={comment.id}
              comment={comment} 
              author={users[comment.author_id]}
              updateComment={updateComment} 
              deleteComment={deleteComment} 
              currentUser={currentUser}
            /> 
        ));
        
        let newCommentForm;
        
        if (!currentUser) {
            newCommentForm = <div></div>
        } else if (currentUser){
            newCommentForm = <CommentForm createComment={createComment} deviationId={deviation.id} authorId={currentUser.id} />
        };

        let favoriteStatus;
          favorited === false ? 
            favoriteStatus = 
              <button onClick={() => createFavorite({deviation_id: deviation.id, user_id: currentUser.id})}>
                <i className="far fa-star"></i>{` ADD TO FAVORITES`}
              </button> : 
            favoriteStatus = 
              <button onClick={() => deleteFavorite(favoriteId)}>
                <i className="fas fa-star"></i>{` ADD TO FAVORITES`}
              </button>

        return(
            <div className='dev-show'>

                <div className='img-block'>
                <img src={deviation.artworkUrl} />
                </div>

                <div className='options-bar'>
                    {favoriteStatus}
                </div>

                <div className='dev-show-content'>
                    <header>
                        <h2>{deviation.title}</h2>
                        <span>BY
                            <h3>
                              <Link to={`/users/${artist.id}`} >
                                {artist.username}
                                <span className="fa-stack">
                                  <i className="fas fa-circle fa-stack-2x"></i>
                                  <i className="fas fa-star fa-stack-1x fa-inverse"></i>
                                </span>
                              </Link>
                            </h3>
                        </span>
                    </header>

                    <div className='dev-description'>
                        <p>{deviation.description}</p>
                    </div>
                </div>

                <section className='dev-comments'>
                    <header><h3>COMMENTS</h3></header>
      
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