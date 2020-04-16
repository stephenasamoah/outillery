import React from 'react';
import { Section } from '../../utilities/_models/section.model';
import './menu-item.styles.scss';

const MenuItem = ({ title, imageUrl, size }: Section) => {
    return (
        <li className={ `${ size } menu-item` }>
            <div className="background-image" style={ {
                backgroundImage: `url(${ imageUrl })`
            } }>

            </div>
            <div className="content">
                <h1 className="title">{ title?.toUpperCase() }</h1>
                <span className="subtitle">Shop Now</span></div>
        </li>
    );
};

export default MenuItem;
