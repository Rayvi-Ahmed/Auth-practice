import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div>
            <div className="navbar bg-neutral text-neutral-content">
                <a className="btn btn-ghost normal-case text-xl">Auth Master</a>
                <Link to="/" className='btn btn-ghost normal-case text-l' >Home</Link>
                <Link to="/login" className='btn btn-ghost normal-case text-l' >Login</Link>
                <Link to="/register" className='btn btn-ghost normal-case text-l' >Register</Link>
            </div>
        </div>
    );
};

export default Header;