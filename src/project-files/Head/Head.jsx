import React from 'react';
import style from "./Head.module.css"

import logo from "../../images/logo.png"
import f_logo from "../../images/f_logo.png"

import Headers from "./components/headers/headers"
import SectionsCard from "./components/sections-card/sections"
import SectionNews from "./components/sections-news/sectionsNews"
import Footer from "./components/footer/footer"

import State from "./local_state/state"

let Head = () => {
    return(
        <div className={style.head}>
            <Headers logo={logo}/>
            <div className={style.container}>
                <SectionsCard logo={logo}/>
                <SectionNews {...State}/>
            </div>
            <Footer logo={f_logo}/>
        </div>
    )
}

export default Head;