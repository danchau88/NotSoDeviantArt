import React from 'react';
import { Link } from 'react-router-dom';

class DeviationsIndexItem extends React.Component{
    render() {
        const {deviation, artist} = this.props
        return(
            <Link className='dev-index-item' to={`/deviations/${deviation.id}`}>
                <img src={deviation.artworkUrl}/>
                <div className='dii-text'>
                    <p>{deviation.title}</p>
                    <p className='dii-username'>{artist.username}
                        <span className="fa-stack">
                            <i className="fas fa-circle fa-stack-2x"></i>
                            <i className="fas fa-star fa-stack-1x fa-inverse"></i>
                        </span>
                    </p>
                </div>
            </Link>
        )
    }
};

export default DeviationsIndexItem;