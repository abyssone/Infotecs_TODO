import React, { useState } from "react";

const NoteInfo = function({note, ...props}) {
    return (<div>
        <h1>{note.title}</h1>
        <p>{note.desc}</p>
    </div>);
}

export default NoteInfo;