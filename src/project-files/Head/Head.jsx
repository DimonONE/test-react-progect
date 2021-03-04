import React from 'react';
import style from "./Head.module.css"

import Headers from "./components/headers/headers"
import SectionsCard from "./components/sections-card/sections"
import SectionNews from "./components/sections-news/sectionsNews"

import State from "./local_state/state"

let Head = () => {
    return(
        <div className={style.head}>
            <Headers />
            <div className={style.container}>
                <SectionsCard />
                <SectionNews {...State}/>
            </div>
        </div>
    )
}

export default Head;