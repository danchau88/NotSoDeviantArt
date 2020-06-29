import React from 'react';
import { Link } from 'react-router-dom';

class DeviationsIndexItem extends React.Component{
    render() {
        const {deviation} = this.props
        return(
            <Link className='dev-index-item'>
                <img src={deviation.artworkUrl}/>
                <div className='dii-text'>
                    <p>{deviation.title}</p>
                    {/* <p>{deviation.artist.username}</p> */}
                </div>
            </Link>
        )
    }
};

export default DeviationsIndexItem;