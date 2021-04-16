import React, { useState } from "react"
import style from "./footer.module.css"

export const Footer: React.FC<PropsType> = (props) => {
    const [email, setEmail] = useState('')
    const emailChange = (event:React.ChangeEvent<HTMLInputElement>) => {
        setEmail(event.target.value)
    }
    return(
        <div className={style.footer}>
            <div className={style.block_up}>
                <div className={style.f_logo}>
                    <img src={props.logo} alt=""/>
                    <div className={style.we_in_sociale}>
                        <p>Мы в соц-сетях:</p>
                        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M8.15749 16C8.10451 16 8.05153 16 7.99819 15.9998C6.74403 16.0028 5.58522 15.9709 4.45826 15.9023C3.42506 15.8395 2.48194 15.4824 1.73072 14.8699C1.00586 14.2788 0.510865 13.4796 0.259522 12.4947C0.0407716 11.6373 0.0291749 10.7956 0.0180664 9.98155C0.0100098 9.39744 0.00170899 8.7053 0 8.00144C0.00170899 7.29465 0.0100098 6.60251 0.0180664 6.0184C0.0291749 5.20444 0.0407716 4.36276 0.259522 3.50521C0.510865 2.52035 1.00586 1.72115 1.73072 1.13009C2.48194 0.517535 3.42506 0.160478 4.45838 0.0976116C5.58534 0.02913 6.7444 -0.00285251 8.00124 0.000199254C9.25576 -0.0024863 10.4142 0.02913 11.5412 0.0976116C12.5744 0.160478 13.5175 0.517535 14.2687 1.13009C14.9937 1.72115 15.4886 2.52035 15.7399 3.50521C15.9587 4.36264 15.9703 5.20444 15.9814 6.0184C15.9894 6.60251 15.9978 7.29465 15.9994 7.99851V8.00144C15.9978 8.7053 15.9894 9.39744 15.9814 9.98155C15.9703 10.7955 15.9588 11.6372 15.7399 12.4947C15.4886 13.4796 14.9937 14.2788 14.2687 14.8699C13.5175 15.4824 12.5744 15.8395 11.5412 15.9023C10.4619 15.968 9.35329 16 8.15749 16ZM7.99819 14.7498C9.23195 14.7527 10.3648 14.7216 11.4652 14.6547C12.2465 14.6072 12.9239 14.3536 13.4788 13.9011C13.9917 13.4828 14.345 12.9056 14.5287 12.1857C14.7108 11.4719 14.7213 10.7056 14.7315 9.96446C14.7394 9.38426 14.7477 8.697 14.7494 7.99998C14.7477 7.30283 14.7394 6.6157 14.7315 6.03549C14.7213 5.2944 14.7108 4.52804 14.5287 3.81418C14.345 3.0942 13.9917 2.51705 13.4788 2.09872C12.9239 1.64632 12.2465 1.39278 11.4652 1.3453C10.3648 1.27828 9.23195 1.2474 8.00112 1.25008C6.76759 1.24715 5.63466 1.27828 4.53419 1.3453C3.75294 1.39278 3.07557 1.64632 2.52064 2.09872C2.00769 2.51705 1.65442 3.0942 1.47071 3.81418C1.28858 4.52804 1.27808 5.29428 1.26795 6.03549C1.26001 6.61618 1.25171 7.30381 1.25 8.00144C1.25171 8.69602 1.26001 9.38377 1.26795 9.96446C1.27808 10.7056 1.28858 11.4719 1.47071 12.1857C1.65442 12.9056 2.00769 13.4828 2.52064 13.9011C3.07557 14.3535 3.75294 14.6071 4.53419 14.6545C5.63466 14.7216 6.76784 14.7528 7.99819 14.7498ZM7.9684 11.9062C5.81459 11.9062 4.06214 10.1539 4.06214 7.99998C4.06214 5.84604 5.81459 4.09372 7.9684 4.09372C10.1223 4.09372 11.8747 5.84604 11.8747 7.99998C11.8747 10.1539 10.1223 11.9062 7.9684 11.9062ZM7.9684 5.34372C6.5038 5.34372 5.31215 6.53537 5.31215 7.99998C5.31215 9.46458 6.5038 10.6562 7.9684 10.6562C9.43313 10.6562 10.6247 9.46458 10.6247 7.99998C10.6247 6.53537 9.43313 5.34372 7.9684 5.34372ZM12.3122 2.84371C11.7945 2.84371 11.3747 3.26339 11.3747 3.78122C11.3747 4.29904 11.7945 4.71872 12.3122 4.71872C12.83 4.71872 13.2497 4.29904 13.2497 3.78122C13.2497 3.26339 12.83 2.84371 12.3122 2.84371Z" fill="white"/>
                        </svg>
                    </div>
                </div>
                <div className={style.contacts}>
                    <h3>КОНТАКТЫ</h3>
                    <p>г. Москва, м. Автозаводская, ТРЦ Ривьера, 2 этаж</p>
                    <h4>+7 965 307 92 83</h4>
                </div>
                <form className={style.get_discount} >
                    <label className={style.get_discount__label} htmlFor="email">ПОЛУЧИТЕ СКИДКУ 1000 РУБ НА ПЕРВЫЙ ЗАКАЗ</label>
                    <input onChange={emailChange} value={email} id="email" placeholder="Введите Email" />
                    <div>
                        {/* Кнопка не активна */}
                        {console.warn("Кнопка не активна")}
                        <button disabled className={style.see_more} > <p> Получить скидку</p></button>
                    </div>
                </form>
            </div>
            <div className={style.block_buttons}>
                <div className={style.nav_info_f}>
                    <h2>МОЙ ПРОФИЛЬ</h2>
                    <p>Войти </p>
                    <p>Создать учетную запись</p>
                </div>
                <div className={style.nav_info_f}>
                    <h2>ИНФОРМАЦИЯ</h2>
                    <p>О компании </p>
                    <p>Карта сайта</p>
                    <p>Женский Блог</p>
                </div>
                <div className={style.nav_info_f}>
                    <h2>ОБЩИЕ СВЕДЕНИЯ</h2>
                    <p>Политика </p>
                    <p>конфиденциальности</p>
                </div>
                <div className={style.nav_info_f}>
                    <h2>ПОМОЩЬ ПО ЗАКАЗАМ</h2>
                    <p>О вашем заказе</p>
                    <p>Отложенные товары</p>
                    <p>Список сравнения</p>
                </div>
            </div>
        </div>
    )
}


type PropsType = {
    logo: string
}