import React from 'react';
import './header.styles.scss';
import { Link } from 'react-router-dom';
import { ReactComponent as Logo } from '../../assets/images/logo.svg';
import { User } from '../../utilities/_models/user.model';
import { auth } from '../../firebase/firebase-utils';

interface CurrUser {
    currUser: User | null
}

type Props = CurrUser

const HeaderComponent = ({ currUser }: Props) => (
    <div className="header">
        <Link to='/' className="logo-container">
            <Logo className="logo"/>
        </Link>

        <div className="options">
            <Link className="option" to="/shop">Shop</Link>
            <Link className="option" to="/contact">Contact</Link>
            <div className="option">
                {
                    currUser ? (
                        <div onClick={ () => auth.signOut() }>Sign out</div>
                    ) : (
                        <Link to="/auth">Sign in</Link>
                    )
                }
            </div>
        </div>
    </div>
);

export default HeaderComponent;
