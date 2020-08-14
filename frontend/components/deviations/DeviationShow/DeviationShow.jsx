import React from 'react';
import CommentForm from './CommentForm';
import CommentItem from './CommentItem';
import { Link } from 'react-router-dom';


class DeviationShow extends React.Component{

    constructor(props){
        super(props)
    }

    componentDidMount(){
      !this.props.currentUser ?
        (this.props.getDeviation(this.props.match.params.id))
      : (this.props.getUser(this.props.currentUser.id)
        .then(() => this.props.getDeviation(this.props.match.params.id)))
    }
    
    //this is for updating information when going to different deviation_id show page from current show page
    componentDidUpdate(prevProps){
      // debugger
        if (this.props.match.params.id !== prevProps.match.params.id) {
            this.props.getDeviation(this.props.match.params.id)
            .then(() => {if (this.props.currentUser) this.props.getUser(this.props.currentUser.id)})
            // .then(() => {this.props.getUser(this.props.currentUser.id)})
        }
    }

    componentWillUnmount(){
        this.props.clearAllComments()
        this.props.clearAllFavorites()
    }
    
    render() {
        const {deviation, favoriteId, favorited, users, artist, comments, currentUser,
          createComment, deleteComment, createFavorite, deleteFavorite} = this.props
        
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
        if (!currentUser) {favoriteStatus = 
          <div className="login-req">
            <h3 className="like-this">Like This?</h3>
            <span> <Link to='/login'>Login</Link> / <Link to='/signup'>Signup</Link> to favorite and comment.</span>
          </div>}
        else { 
          favorited === false ? 
            favoriteStatus = 
              <button onClick={() => createFavorite({deviation_id: deviation.id, user_id: currentUser.id})}>
                <i className="far fa-star"></i>{` ADD TO FAVORITES`}
              </button> : 
            favoriteStatus = 
              <button onClick={() => deleteFavorite({deviation_id: deviation.id, user_id: currentUser.id})}>
                <i className="fas fa-star"></i>{` ADD TO FAVORITES`}
              </button>
        }

        return(
            <div className='dev-show'>

                <div className='img-block'>
                  <a target="_blank" href={deviation.artworkUrl}>
                    <img src={deviation.artworkUrl} />
                  </a>
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