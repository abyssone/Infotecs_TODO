import React, { useState } from "react";
import Button from "../UI/Button/Button";
import Input from "../UI/Input/Input"

const CreatingNote = function({create, ...props}) {

    // Состояние контролируемых элементов добавления нового TODO.
    // Дата в html формата yyyy-mm-dd, в js - dd.mm.yyyy
     const [note, setNote] = useState({
        title: '', 
        desc: '', 
        endDate: (() => new Date().toLocaleDateString().split('.').reverse().join('-'))(),
        startDate: (() => new Date().toLocaleDateString().split('.').reverse().join('-'))()
    });
        

    return (<div>
        <h1>Добавление TODO</h1>
        <Input placeholder='Title' value={note.title} onChange={(e) => setNote({...note, title: e.target.value})} />
        <Input placeholder='Desc' value={note.desc} onChange={(e) => setNote({...note, desc: e.target.value})} />
        <Input type="date" value={note.endData} onChange={(e) => setNote({...note, endData: e.target.value})}/>
        <p><Button onClick={() => create(note)}>Save</Button></p>
    </div>);
}

export default CreatingNote;