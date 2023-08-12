import React, { useState } from "react";

const Note = function(props) {

    return (<div className="note">
        <p className="note_header">{props.title}</p>
        <p className="note_desc">{props.desc}</p>
    </div>);
}

export default Note;