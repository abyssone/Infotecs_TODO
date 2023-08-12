import React, { useState } from "react";

const Note = function({noteInfo, select, ...props}) {

    return (<div onClick={() => select(noteInfo)} className="note">
        <p className="note_header">{noteInfo.title}</p>
        <p className="note_desc">{noteInfo.desc}</p>
    </div>);
}

export default Note;