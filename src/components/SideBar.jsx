import React, { useState } from "react";
import Note from "./SideBar/Note.jsx";

const SideBar = function({noteList}) {

    return (<div className='side-bar'>
        {(noteList != null && noteList.length != 0) 
            ? noteList.map(note => <Note key={note.id} title={note.title} desc={note.desc}/>)
            : <h1>Записей нет</h1>
        }
    </div>);
}

export default SideBar;