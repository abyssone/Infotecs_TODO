import React, { useState } from "react";
import CreatingNote from "./Main/CreatingNote.jsx";
import NoteInfo from "./Main/NoteInfo.jsx";

const Main = function({create, noteInfo, screen, change, ...props}) {

    return (<div className="main">
        {
            (screen === 'add')
            ? <CreatingNote create={create}/>
            : <NoteInfo note={noteInfo} change={change} delete={props.delete}/>
        }
    </div>)
}

export default Main;