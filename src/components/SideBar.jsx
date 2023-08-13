import React from "react";
import Note from "./SideBar/Note.jsx";
import Input from "./UI/Input/Input.jsx";
import Button from "./UI/Button/Button.jsx";

const SideBar = function({noteList, selectNote, selectScreen, search, setSearch, ...props}) {

    return (<div className='side-bar'>
        <Button onClick={() => selectScreen('add')}>Добавить</Button>
        <Input placeholder="Поиск" value={search} onChange={(e) => setSearch(e.target.value)}/>
        {(noteList != null && noteList.length !== 0) 
            ? noteList.map(note => <Note key={note.id} select={selectNote} noteInfo ={note}/>)
            : <h1 style={{fontSize: '20px', textAlign: 'center'}}>Записей нет</h1>
        }
    </div>);
}

export default SideBar;