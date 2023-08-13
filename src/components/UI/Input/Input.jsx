import React from "react";
import classes from "./Input.module.css"

const Input = function(params) {

    return (
        <input className={classes.input} {...params} />
    );
}

export default Input;