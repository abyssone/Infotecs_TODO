import React, { useState } from "react";
import Note from "./SideBar/Note.jsx";

const SideBar = function({noteList, selectNote, selectScreen, ...props}) {

    return (<div className='side-bar'>
        <button onClick={() => selectScreen('add')}>Добавить</button>
        {(noteList != null && noteList.length != 0) 
            ? noteList.map(note => <Note key={note.id} select={selectNote} noteInfo ={note}/>)
            : <h1>Записей нет</h1>
        }
    </div>);
}

export default SideBar;