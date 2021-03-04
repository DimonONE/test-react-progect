import React from 'react';
import style from "./Head.module.css"

import Headers from "./components/headers/headers"
import Sections from "./components/sections-card/sections"



let Head = () => {
    return(
        <div className={style.head}>
            <Headers />
            <Sections />
        </div>
    )
}

export default Head;