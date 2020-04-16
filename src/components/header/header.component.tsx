import React from 'react';
import './header.styles.scss';
import { Link } from 'react-router-dom';
import { ReactComponent as Logo } from '../../assets/images/logo.svg';

const HeaderComponent = () => (
    <div className="header">
        <Link to='/' className="logo-container">
            <Logo className="logo"/>
        </Link>

        <div className="options">
            <Link className="option" to="/shop">Shop</Link>
            <Link className="option" to="/contact">Contact</Link>
            <Link className="option" to="/signin">Sign in</Link>
        </div>
    </div>
);

export default HeaderComponent;
