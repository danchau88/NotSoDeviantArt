import React from 'react';
import {Link} from 'react-router-dom';

export default ({currentUser, logout}) => {
    const display = currentUser ? (
        <div className='logged-in'>
           <h3>{currentUser.username}</h3>
           <button className='logout' onClick={logout}>LOG OUT</button>
        </div>
    ) : (
        <div>
            <Link to='/signup'>JOIN</Link>
            <Link to='/login'>LOG IN</Link>
        </div>
    );
    return (
        <header className='nav-right-content'>
            {display}
        </header>
    );
};