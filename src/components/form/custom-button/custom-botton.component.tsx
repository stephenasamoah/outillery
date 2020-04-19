import React from 'react';
import './custom-button.styles.scss';

const CustomButtonComponent: React.FC<any> = ({ children, isGoogle, ...props }) => (
    <button { ...props } className={ `${ isGoogle ? 'google-login' : '' } custom-button` }>{ children }</button>
);

export default CustomButtonComponent;

