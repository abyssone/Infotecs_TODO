import React, { useState } from "react";
import Button from "../UI/Button/Button";

const NoteInfo = function({note, change, ...props}) {

    return (<div>
        <h1>{note.title}</h1>
        <hr />
        <p>{note.desc}</p>
        {
            note.status === 'pending'
            ? <Button onClick={() => change({...note, status: 'in-progress'})}>Начать</Button>
            : note.status === 'in-progress'
            ? <Button onClick={() => change({...note, status: 'completed'})}>Завершить</Button>
            : null
        }
        <Button onClick={() => props.delete(note.id)}>Удалить</Button>
    </div>);
}

export default NoteInfo;