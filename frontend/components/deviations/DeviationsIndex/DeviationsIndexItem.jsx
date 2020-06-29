import React from 'react';
import { Link } from 'react-router-dom';

class DeviationsIndexItem extends React.Component{
    render() {
        const {deviation} = this.props
        return(
            <li className='dev-index-item' >
                <Link>
                    {deviation.artworkUrl}
                    <h3>{deviation.title}</h3>
                </Link>
            </li>
        )
    }
};

export default DeviationsIndexItem;