import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../assets/image/profile.png';
import './Header.css';
import ActiveLink from '../ActiveLink/ActiveLink';

const Header = () => {
    return (
        <nav>
            <h1>Header</h1>
            <div className='menubar'>
                <ActiveLink to='/'>Home</ActiveLink>
                <ActiveLink to='/about'>About</ActiveLink>
                <ActiveLink to='/shop'>Shop</ActiveLink>
                <ActiveLink to='/inventory'>Inventory</ActiveLink>
                <ActiveLink to='/login'>Login</ActiveLink>
                <img src={logo} alt="" />
            </div>

        </nav>
    );
};

export default Header;