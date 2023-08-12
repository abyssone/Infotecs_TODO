import React, { useState } from "react";

const CreatingNote = function({create, ...props}) {

    // Состояние контролируемых элементов добавления нового TODO.
    // Дата в html формата yyyy-mm-dd, в js - dd.mm.yyyy
     const [note, setNote] = useState({
        title: '', 
        desc: '', 
        endData: (() => new Date().toLocaleDateString().split('.').reverse().join('-'))(),
        startData: (() => new Date().toLocaleDateString().split('.').reverse().join('-'))()
    });
        

    return (<div className="main">
        <h1>Добавление TODO</h1>
        <input placeholder='Title' value={note.title} onChange={(e) => setNote({...note, title: e.target.value})} />
        <input placeholder='Desc' value={note.desc} onChange={(e) => setNote({...note, desc: e.target.value})} />
        <input type="date" value={note.endData} onChange={(e) => setNote({...note, endData: e.target.value})}/>
        <p><button onClick={() => create(note)}>Save</button></p>
    </div>);
}

export default CreatingNote;