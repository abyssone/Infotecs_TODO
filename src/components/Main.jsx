import React, { useState } from "react";
import CreatingNote from "./Main/CreatingNote.jsx";
import NoteInfo from "./Main/NoteInfo.jsx";
import EditingNote from "./Main/EditingNote.jsx";

const Main = function({create, noteInfo, screen, change, selectScreen, ...props}) {

    return (<div className="main">
        {
            (screen === 'info')
            ? <NoteInfo note={noteInfo} 
            change={change} 
            delete={props.delete} 
            selectScreen={selectScreen}/>
            : (screen === 'edit')
            ? <EditingNote noteInfo={noteInfo} change={change} selectScreen={selectScreen}/>
            : <CreatingNote create={create}/>
        }
    </div>)
}

export default Main;