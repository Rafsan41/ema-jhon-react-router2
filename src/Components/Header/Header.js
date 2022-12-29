import React from 'react';
import { NavLink } from 'react-router-dom';
import logo from '../../images/logo.png';
import useAuth from '../Hooks/UseAuth';

import './Header.css';



const Header = () => {
    const { user, logOut } = useAuth();

    return (
        <div className='header'>
            
            <img className='logo' src={logo} alt="" />
            <nav>
                <NavLink to='/shop'>shop
                </NavLink>
                <NavLink to='/review'>Over review
                </NavLink>
                <NavLink to='/inventory'>manage Inventory
                </NavLink>
                { user.email && <span style={{ color: 'white' }}>Hellow {user.displayName} </span>}
                {
                    user.email? <button onClick={logOut}>Log Out</button>:
                <NavLink to='/login'>Login
                </NavLink>}
                
              
            </nav>
        </div>
    );
};

export default Header;