import React from 'react';
import {Link} from 'react-router-dom';

export default ({currentUser, logout}) => {
    const display = currentUser ? (
        <div className='logged-in'>
           <h3>{currentUser.username}</h3>
           <div className='dropdown-content'>
                <button className='drop-button' onClick={logout}>LOG OUT</button>
           </div>
        </div>
    ) : (
        <div>
            <Link to='/signup'>
                <button className='nav-button'>JOIN</button>
            </Link>
            <Link to='/login'>
                <button className='nav-button'>LOG IN</button>
            </Link>
        </div>
    );
    return (
        <header className='nav-right-content'>

            {display}

            {/* Submission section for the deviations */}
            <div className="dropdown">
                <button className="submission-btn">SUBMIT</button>
                <div className='dropdown-content'>
                    <button>DEVIATION</button>
                    <button>NOTE</button>
                    <button>COMMENT</button>
                </div>
            </div>
            {/* Submission section for the deviations */}

        </header>
    );
};