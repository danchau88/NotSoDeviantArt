import React from 'react';
import {Link} from 'react-router-dom';

export default ({currentUser, logout}) => {
    const display = currentUser ? (
        <div className='logged-in'>
           <Link to='/'>
                <h3><i className="fas fa-user-ninja"></i>{currentUser.username}</h3>
           </Link>
           <div className='dropdown-content'>     
                <button className='drop-button' onClick={logout}>
                <Link to='/'>LOG OUT</Link>
                </button>     
           </div>
        </div>
    ) : (
        <div className= 'unlogged-in'>
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
                    {/* <button>NOTE</button> */}
                    {/* <button>COMMENT</button> */}
                </div>
            </div>
            {/* Submission section for the deviations */}

        </header>
    );
};