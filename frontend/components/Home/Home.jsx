import React from 'react';
import {Link} from 'react-router-dom';

export default ({currentUser, logout}) => {
    const display = currentUser ? (
        <div className='navbar-user'>
           <h3>{currentUser.username}</h3>
           <br/>
           <button className='logout' onClick={logout}>LOG OUT</button>
        </div>
    ) : (
        <div className='navbar-nonuser'>
            <Link to='/signup'>JOIN</Link>
            <br/>
            <Link to='/login'>LOG IN</Link>
            <br/>
        </div>
    );
    return (
        <header className="navbar">
            <div className='nav-content'>
                {display}
                <Link to='/'>HOME</Link>
            </div>
        </header>
    );
};