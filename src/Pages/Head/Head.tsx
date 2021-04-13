import React from 'react';
import style from "./Head.module.css"
import logo from "../../images/logo.png"
import f_logo from "../../images/f_logo.png"
import Headers from "./components/headers/headers"
import { SectionsCard } from "./components/sections-card/SectionsCard"
import { SectionNews } from "./components/sections-news/sectionsNews"
import { Footer } from "./components/footer/footer"


export const Head: React.FC = (props:PropsType) => {
    return(
        <div className={style.head}>
            <Headers logo={logo}/>
            <div className={style.container}>
                <SectionsCard logo={logo}/>
                <SectionNews />
            </div>
            <Footer logo={f_logo}/>
        </div>
    )
}


type PropsType={}