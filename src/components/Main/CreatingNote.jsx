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
        <hr />
        <Input style={{width: '100%'}} placeholder='Заголовок' value={note.title} onChange={(e) => setNote({...note, title: e.target.value})} />
        <textarea cols="30" rows="10" placeholder="Описание" value={note.desc} onChange={(e) => setNote({...note, desc: e.target.value})}></textarea>
        <p>
        Срок выполнения: <Input type="date" value={note.endDate} onChange={(e) => setNote({...note, endDate: e.target.value})}/>
        </p>
        <p><Button onClick={() => create(note)}>Сохранить</Button></p>
    </div>);
}

export default CreatingNote;