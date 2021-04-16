import React from 'react';
import style from "./Heading.module.css"
import { Slide  } from "react-awesome-reveal";

export const Heading: React.FC<{text:string}> = (props) => {
    return(
        <div className={style.text_title}>
            <Slide >
                {props.text}
            </Slide >
        </div>
)}
