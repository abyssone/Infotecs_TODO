import React from "react";
import Note from "./SideBar/Note.jsx";

const SideBar = function({noteList, selectNote, selectScreen, search, setSearch, ...props}) {

    return (<div className='side-bar'>
        <button onClick={() => selectScreen('add')}>Добавить</button>
        <input placeholder="Поиск" value={search} onChange={(e) => setSearch(e.target.value)}/>
        {(noteList != null && noteList.length !== 0) 
            ? noteList.map(note => <Note key={note.id} select={selectNote} noteInfo ={note}/>)
            : <h1>Записей нет</h1>
        }
    </div>);
}

export default SideBar;