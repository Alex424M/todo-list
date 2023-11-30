import React from 'react';
import cl from './Button.module.css'
const Button = (props) => {
    return (
        <button {...props} className={cl.btn}>

            {props.children}
        </button>
    );
};

export default Button;