import React from "react";
import classes from './Button.module.css';

const Button = function({children, ...props}) {

    return (
        <button className={classes.button} {...props}>{children}</button>
    );
}

export default Button;