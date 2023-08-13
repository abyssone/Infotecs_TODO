import React, { useState } from "react";
import Button from "../UI/Button/Button";
import Input from "../UI/Input/Input"

const EditingNote = function({noteInfo, change, selectScreen,  ...props}) {
    const [note, setNote] = useState({
        title: noteInfo.title, 
        desc: noteInfo.desc, 
        endDate: (() => new Date().toLocaleDateString().split('.').reverse().join('-'))(),
    }); 

    return (<div>
        <h1>Редактировать</h1>
        <hr />
        <Input placeholder='Заголовок' value={note.title} onChange={(e) => setNote({...note, title: e.target.value})} />
        <Input placeholder='Описание' value={note.desc} onChange={(e) => setNote({...note, desc: e.target.value})} />
        <Input type="date" value={note.endDate} onChange={(e) => setNote({...note, endDate: e.target.value})}/>
        <p>
            <Button onClick={() => change({...noteInfo,
                title: note.title,
                desc: note.desc,
                endDate: note.endDate})}>Сохранить</Button>
            <Button onClick={() => selectScreen('info')}>Назад</Button>
        </p>
    </div>);
}

export default EditingNote;