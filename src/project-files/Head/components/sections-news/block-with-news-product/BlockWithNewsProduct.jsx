import React, { useState } from 'react';
import style from "./BlockWithNewsProduct.module.css"
import { NavLink } from "react-router-dom";
import { useGlobalState } from '../../../../../createState/Store';
import like from '../../../../../images/like_favorite_heart.png'
import likeActive from '../../../../../images/heart_icon-active.png'

export const BlockWithNewsProduct = (props) => {
    const [likeFolowing, setLike] = useState(false)
    let [countLike, setLikeProduct] = useGlobalState('countLike')

    const [inTheBasket, setTheBasket] = useState(false)
    let [countTheBasket, setBasket] = useGlobalState('countTheBasket')

    return(
            <div className={style.element_block_news}>
                <div className={style.card_hovers}>
                    <div className={style.item_pos}>
                        <div className={style.pos_hover_item}>
                            <span onClick={ () => alert("открить")}>
                                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M4 1V0H0.5C0.223844 0 0 0.223844 0 0.5V4H1V1.705L5.645 6.35L6.35 5.645L1.705 1H4Z" fill="black"/>
                                <path d="M15.5 0H12V1H14.295L9.64999 5.645L10.355 6.35L15 1.705V4H16V0.5C16 0.223844 15.7761 0 15.5 0Z" fill="black"/>
                                <path d="M15 14.2949L10.355 9.6499L9.64999 10.3549L14.295 14.9999H12V15.9999H15.5C15.7761 15.9999 16 15.7761 16 15.4999V11.9999H15V14.2949Z" fill="black"/>
                                <path d="M5.645 9.64502L1 14.295V12H0V15.5C0 15.7762 0.223844 16 0.5 16H4V15H1.705L6.35 10.355L5.645 9.64502Z" fill="black"/>
                                </svg>
                            </span>
                        </div>
                        <div className={style.pos_hover_item}>
                            <span onClick={() => {
                                setLike(!likeFolowing)
                                setLikeProduct(!likeFolowing ? (++countLike) :  --countLike) }} >
                                 <img width='21' src={!likeFolowing ? like : likeActive} alt=""/>
                            </span>
                        </div>
                    </div>
                    <div className={style.the_basket}>
                        <button onClick={ () => {
                                setTheBasket(!inTheBasket)
                                setBasket(!inTheBasket ? ++countTheBasket : --countTheBasket)
                            }}>{!inTheBasket ? 'В корзину' : 'Удалить'}</button>
                    </div>
                    <div className={style.buy_one_click}>
                        <button>Купить в 1 клик</button>
                    </div>
                    <div className={style.link_details}>
                        <NavLink to="#">
                            Подробнее
                        </NavLink>
                    </div>
                </div>
                
                <div className={style.card}>
                    <div className={style.images}>                        
                        <img src={props.imgs} alt=""/>
                    </div>
                    <div>
                        <div className={style.poduct_info}>{props.poduct_info}</div>
                        <div className={style.text_dostavka}>{props.text_dostavka}</div>
                    </div>
                    <div className={style.position_text}>
                        <div className={style.text_discount}>{props.text_discount}</div>
                        <div className={style.text_price}>{props.price}</div>
                    </div>
                </div>
            </div>
    )
}