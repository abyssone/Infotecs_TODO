import React, { useEffect, useState } from "react";
import Button from "../UI/Button/Button";
import Input from "../UI/Input/Input"
import useNotEmpty from "../../hooks/useNotEmpty";

const CreatingNote = function({create, ...props}) {

    // Состояние контролируемых элементов добавления нового TODO.
    // Дата в html формата yyyy-mm-dd, в js - dd.mm.yyyy
     const [note, setNote] = useState({
        title: '', 
        desc: '', 
        endDate: (() => new Date().toLocaleDateString().split('.').reverse().join('-'))(),
        startDate: (() => new Date().toLocaleDateString().split('.').reverse().join('-'))()
    });  
    const [validateTitle, titleIsValid] = useNotEmpty(note.title);

    // Состояние для скрытия предупреждения при установке фокуса на input
    const [isBlocked, setBlocked] = useState(true);

    useEffect(() => {
        validateTitle(note.title);
    }, [note.title, validateTitle])

    function checkInput() {
        setBlocked(!titleIsValid)
    }

    return (<div>
        <h1>Добавление TODO</h1>
        <hr />
        <div style={{width: '100%'}}>
            <Input style={{width: '100%'}} 
                onBlur={() => {checkInput(note.title)}}
                onFocus={() => setBlocked(false)}
                placeholder='Заголовок'
                value={note.title} 
                onChange={(e) => setNote({...note, title: e.target.value})} />
            {
                isBlocked
                ? <p style={{color: 'red', fontSize: '14px'}}>&#9888; Заголовок не может быть пустым!</p>
                : null        
            }
        </div>
        <textarea cols="30" 
            rows="10" 
            placeholder="Описание" 
            value={note.desc} 
            onChange={(e) => setNote({...note, desc: e.target.value})}></textarea>
        <p>
        Срок выполнения: <Input type="date" value={note.endDate} onChange={(e) => setNote({...note, endDate: e.target.value})}/>
        </p>
        <p><Button disabled={isBlocked} onClick={() => create(note)}>Сохранить</Button></p>
    </div>);
}

export default CreatingNote;