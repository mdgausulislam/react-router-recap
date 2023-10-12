import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../assets/image/profile.png';
import './Header.css';

const Header = () => {
    return (
        <nav>
            <h1>Header</h1>
            <div className='menubar'>
                <Link to='/'>Home</Link>
                <Link to='/about'>About</Link>
                <Link to='/shop'>Shop</Link>
                <Link to='/inventory'>Inventory</Link>
                <Link to='/login'>Login</Link>
                <img src={logo} alt="" />
            </div>

        </nav>
    );
};

export default Header;