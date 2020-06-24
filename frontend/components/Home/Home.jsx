import React from 'react';
import {Link} from 'react-router-dom';

export default ({currentUser, logout}) => {
    const display = currentUser ? (
        <div className='logged-in'>
           <h3>{currentUser.username}</h3>
           <button className='nav-button' onClick={logout}>LOG OUT</button>
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
        </header>
    );
};