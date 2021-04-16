
import React from 'react';
import style from './Button.module.css'
import { NavLink } from "react-router-dom";


export const Button: React.FC<ButtonPropsType> = (props) => {
    return(
            <NavLink to="/to_on_catalog">
                <div className={style.__card_button}>
                    {props.text}
                </div>
            </NavLink> 
    )
}

export const ButtonSeeMore: React.FC<ButtonPropsType> = (props) => {
    return(
        <div className={`${style.see_more}  ${style.__card_button}`}>
            <button className={`${style.__card_button}`}>
                <p>{props.text}</p>
            </button>
        </div>
    )
}

type ButtonPropsType = {
    text: string
}
