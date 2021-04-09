
import React from 'react';
import style from './Button.module.css'
import { NavLink } from "react-router-dom";


export const Button = (props) => {
    return(
        <div className={style.__card_button}>
            <NavLink to="/to_on_catalog">
                {props.text}
            </NavLink> 
        </div>
    )
}

export const ButtonSeeMore = (props) => {
    return(
        <div className={`${style.see_more}  ${style.__card_button}`}>
            <button className={`${style.__card_button}`}>
                <p>Посмотреть еще</p>
            </button>
        </div>
    )
}