import React, { useState } from "react";
import classes from './Note.module.css';

const Note = function({noteInfo, select, ...props}) {

    function ddMMyyyy(date) {    
        return date.split('-').reverse().join('.');
    }

    return (<div onClick={() => select(noteInfo)} className={['note', classes[noteInfo.status]].join(' ')}>
        <p className="note_header">{noteInfo.title}</p>
        <p className="note_desc">До: {ddMMyyyy(noteInfo.endDate)}</p>
    </div>);
}

export default Note;