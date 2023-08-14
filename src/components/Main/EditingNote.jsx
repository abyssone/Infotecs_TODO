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
        <Input style={{width: '100%'}} placeholder='Заголовок' value={note.title} onChange={(e) => setNote({...note, title: e.target.value})} />
        <textarea cols="30" rows="10" value={note.desc} onChange={(e) => setNote({...note, desc: e.target.value})}></textarea>
        <Input type="date" value={note.endDate} onChange={(e) => setNote({...note, endDate: e.target.value})}/>
        <p className="buttons-line">
            <Button onClick={() => change({...noteInfo,
                title: note.title,
                desc: note.desc,
                endDate: note.endDate})}>Сохранить</Button>
            <Button onClick={() => selectScreen('info')}>Назад</Button>
        </p>
    </div>);
}

export default EditingNote;