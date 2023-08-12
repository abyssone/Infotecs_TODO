import React, { useState } from "react";

const CreatingNote = function({create, ...props}) {
    // Состояние контролируемых элементов добавления нового TODO
     const [note, setNote] = useState({title: '', desc: ''});

    return (<div className="main">
        <h1>Добавление TODO</h1>
        <input plaseholder='Title' value={note.title} onChange={(e) => setNote({...note, title: e.target.value})} />
        <input plaseholder='Desc' value={note.desc} onChange={(e) => setNote({...note, desc: e.target.value})} />
        <p><button onClick={() => create(note)}>Save</button></p>
    </div>);
}

export default CreatingNote;