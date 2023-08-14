import React from "react";
import classes from "./Input.module.css"

const Input = function(props) {

    return (
        <input className={classes.input} {...props} />
    );
}

export default Input;