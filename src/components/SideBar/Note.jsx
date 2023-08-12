import React, { useState } from "react";

const Note = function(props) {

    return (<div>
        <p>{props.title}</p>
        <p>{props.desc}</p>
    </div>);
}

export default Note;