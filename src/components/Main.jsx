import React, { useState } from "react";
import CreatingNote from "./Main/CreatingNote.jsx";

const Main = function({create, ...props}) {

    return (
        <CreatingNote create={create}/>
    );
}

export default Main;