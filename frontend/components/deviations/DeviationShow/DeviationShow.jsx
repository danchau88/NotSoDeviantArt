import React from 'react';

// import FullImage from './FullImage';

class DeviationShow extends React.Component{

    constructor(props){
        super(props)
    }

    componentDidMount(){
        this.props.getDeviation(this.props.match.params.id)
        .then(() => this.props.getUser(this.props.deviation.artist_id))
    }
    
    render() {
        const {deviation, artist} = this.props

        if (!deviation || !artist) return (
            <div></div>
        );

        return(
            <div className='dev-show'>

                <div className='img-block'>
                <img src={deviation.artworkUrl} />
                </div>

                <div className='options-bar'>
                    <button><i className="far fa-star"></i>{` ADD TO FAVORITES`}</button>
                    <button><i className="far fa-comment-alt"></i>{` COMMENT`}</button>
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
                    <header><h3>COMMENTS</h3></header>
                    <p>Coming Soon!</p>
                </section>

            </div>
        )
    }
}

export default DeviationShow;