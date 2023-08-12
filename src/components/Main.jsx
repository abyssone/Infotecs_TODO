import React, { useState } from "react";
import CreatingNote from "./Main/CreatingNote.jsx";
import NoteInfo from "./Main/NoteInfo.jsx";

const Main = function({create, noteInfo, screen, ...props}) {

    return (<div className="main">
        {
            (screen === 'add')
            ? <CreatingNote create={create}/>
            : <NoteInfo note={noteInfo}/>
        }
    </div>)
}

export default Main;