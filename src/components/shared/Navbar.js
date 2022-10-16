import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css'

const Navbar = () => {
    return (
        <div className='na-area'>
            <div className="nav-container">
                <div className="nav-logo">
                    <h3>Quiz<span className='forest'>Forest</span></h3>
                </div>
                <div className="nav-content">
                            <Link to="/" className='nav-link'>Home</Link>
                            <Link to="/about" className='nav-link'>About</Link>
                            <Link to="/blog" className='nav-link'>Blog</Link>
                            <Link to="/statics" className='nav-link'>Statics</Link>
                </div>
            </div>
        </div>
    );
};

export default Navbar;