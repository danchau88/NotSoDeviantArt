import React from 'react';
import {Link} from 'react-router-dom';

class My404From extends React.Component {
    render() {
        return (
            <div className='my404-content'>
                <h1>Page Not Found</h1>
                <p>Lost in space? Check the browse button to explore the ever-expanding universe of NotSoDeviantArt instead.</p>
                <Link to='/'>
                    <button>BROWSE ART</button>
                </Link>
            </div>
        )
    }
}

export default My404From;