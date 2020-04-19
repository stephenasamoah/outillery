import React from 'react';
import './custom-button.styles.scss';

const CustomButtonComponent: React.FC<any> = ({ children, ...props }) => (
    <button { ...props } className='custom-button'>{ children }</button>
);

export default CustomButtonComponent;

