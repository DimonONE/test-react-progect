import style from "./sectionsNews.module.css"
import { NavLink } from "react-router-dom";


const Block_with_newsProduct = (props) => {
    return(
            <div className={style.element_block_news}>
                <div className={style.card_hovers}>
                    <div className={style.item_pos}>
                        <div className={style.pos_hover_item}>
                            <NavLink to="#">
                                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M4 1V0H0.5C0.223844 0 0 0.223844 0 0.5V4H1V1.705L5.645 6.35L6.35 5.645L1.705 1H4Z" fill="black"/>
                                <path d="M15.5 0H12V1H14.295L9.64999 5.645L10.355 6.35L15 1.705V4H16V0.5C16 0.223844 15.7761 0 15.5 0Z" fill="black"/>
                                <path d="M15 14.2949L10.355 9.6499L9.64999 10.3549L14.295 14.9999H12V15.9999H15.5C15.7761 15.9999 16 15.7761 16 15.4999V11.9999H15V14.2949Z" fill="black"/>
                                <path d="M5.645 9.64502L1 14.295V12H0V15.5C0 15.7762 0.223844 16 0.5 16H4V15H1.705L6.35 10.355L5.645 9.64502Z" fill="black"/>
                                </svg>
                            </NavLink>
                        </div>
                        <div className={style.pos_hover_item}>
                            <NavLink to="#">
                                <svg width="19" height="17" viewBox="0 0 19 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M9.49998 16.943C9.22949 16.943 8.96871 16.845 8.76548 16.667C7.99792 15.9958 7.25791 15.3651 6.60502 14.8087L6.60169 14.8058C4.68751 13.1746 3.03456 11.7659 1.88446 10.3782C0.598822 8.82688 0 7.35599 0 5.74912C0 4.18792 0.535331 2.74761 1.50728 1.69333C2.49082 0.626579 3.84038 0.0390625 5.30779 0.0390625C6.40454 0.0390625 7.40896 0.385803 8.29306 1.06957C8.73924 1.41472 9.14367 1.83713 9.49998 2.32984C9.85643 1.83713 10.2607 1.41472 10.707 1.06957C11.5911 0.385803 12.5956 0.0390625 13.6923 0.0390625C15.1596 0.0390625 16.5093 0.626579 17.4928 1.69333C18.4648 2.74761 19 4.18792 19 5.74912C19 7.35599 18.4013 8.82688 17.1157 10.3781C15.9656 11.7659 14.3127 13.1745 12.3989 14.8055C11.7448 15.3628 11.0036 15.9945 10.2343 16.6673C10.0313 16.845 9.77033 16.943 9.49998 16.943ZM5.30779 1.15205C4.15494 1.15205 3.09587 1.61215 2.32542 2.44769C1.54352 3.29585 1.11284 4.46827 1.11284 5.74912C1.11284 7.10057 1.61512 8.30923 2.7413 9.66808C3.8298 10.9815 5.44883 12.3613 7.32343 13.9588L7.32691 13.9617C7.98227 14.5203 8.72518 15.1535 9.49839 15.8295C10.2762 15.1521 11.0203 14.518 11.677 13.9586C13.5514 12.361 15.1703 10.9815 16.2588 9.66808C17.3848 8.30923 17.8871 7.10057 17.8871 5.74912C17.8871 4.46827 17.4564 3.29585 16.6745 2.44769C15.9042 1.61215 14.845 1.15205 13.6923 1.15205C12.8478 1.15205 12.0724 1.42052 11.3878 1.94991C10.7776 2.42189 10.3526 3.01854 10.1034 3.43602C9.9753 3.6507 9.74975 3.77885 9.49998 3.77885C9.25022 3.77885 9.02466 3.6507 8.89652 3.43602C8.64748 3.01854 8.22247 2.42189 7.61219 1.94991C6.92755 1.42052 6.15217 1.15205 5.30779 1.15205Z" fill="black"/>
                                </svg>
                            </NavLink>
                        </div>
                    </div>
                    <div className={style.the_basket}>
                        <button>В корзину</button>
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
                <div className={style.image_hovers}>                        
                    <img src={props.imgs} alt=""/>
                </div>
                <div className={style.poduct_info}>{props.poduct_info}</div>
                <div className={style.text_dostavka}>{props.text_dostavka}</div>

                <div className={style.position_text}>
                    <div className={style.text_discount}>{props.text_discount}</div>
                    <div className={style.text_price}>{props.price}</div>
                </div>
            </div>
    )
}

let Post = (props) => {
    return(
        <div className={style.post}><img src={props.imgs} alt=""/></div>
    )
}

let sectionNews = (props) => {
    return(
        <div>
            <div className={style.sectionNews}>
                <div className={style.text_news}>Новинки</div>
                <div className={style.block_with_newsProduct}>
                    {props.newsProduct.map( newProduct =>
                    <Block_with_newsProduct 
                    poduct_info={newProduct.poduct_info} 
                    text_discount={newProduct.text_discount}
                    text_dostavka={newProduct.text_dostavka}
                    price={newProduct.price}
                    imgs={newProduct.img}
                    />)}
                </div>
                <div className={style.see_more}>
                    <NavLink to="more_see">
                        <p>Посмотреть еще</p>
                    </NavLink>
                </div>
            </div>

            <div className={style.sectionDiscount}>
                <div className={style.text_news}>Скидки</div>
                <div className={style.block_with_newsProduct}>
                    {props.discountProducts.map( newProduct =>
                        <Block_with_newsProduct 
                        poduct_info={newProduct.poduct_info} 
                        text_dostavka={newProduct.text_dostavka}
                        text_discount={newProduct.text_discount}
                        price={newProduct.price}
                        imgs={newProduct.img}
                    />)}
                </div>
                <div className={`${style.see_more} ${style.see_more_to}`}>
                    <NavLink to="more_see">
                        <p>Посмотреть еще</p>
                    </NavLink>
                </div>
            </div>

            <div className={style.text_title}>
                Следите за нами
            </div>
            <div className={style.link_on_insta}>
                <svg width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M18.3543 36C18.2351 36 18.1159 36 17.9959 35.9995C15.1741 36.0063 12.5667 35.9346 10.0311 35.7803C7.70638 35.6388 5.58436 34.8354 3.89411 33.4572C2.26319 32.1273 1.14945 30.3291 0.583925 28.1132C0.0917361 26.184 0.0656435 24.2902 0.0406495 22.4585C0.022522 21.1442 0.00384522 19.5869 0 18.0032C0.00384522 16.413 0.022522 14.8557 0.0406495 13.5414C0.0656435 11.71 0.0917361 9.81621 0.583925 7.88673C1.14945 5.67078 2.26319 3.87259 3.89411 2.54269C5.58436 1.16445 7.70638 0.361076 10.0314 0.219626C12.567 0.0655425 15.1749 -0.00641816 18.0028 0.000448322C20.8255 -0.00559418 23.432 0.0655425 25.9676 0.219626C28.2923 0.361076 30.4143 1.16445 32.1046 2.54269C33.7358 3.87259 34.8493 5.67078 35.4148 7.88673C35.907 9.81594 35.9331 11.71 35.9581 13.5414C35.9762 14.8557 35.9951 16.413 35.9987 17.9967V18.0032C35.9951 19.5869 35.9762 21.1442 35.9581 22.4585C35.9331 24.2899 35.9072 26.1837 35.4148 28.1132C34.8493 30.3291 33.7358 32.1273 32.1046 33.4572C30.4143 34.8354 28.2923 35.6388 25.9676 35.7803C23.5394 35.928 21.0449 36 18.3543 36ZM17.9959 33.1869C20.7719 33.1935 23.3207 33.1235 25.7968 32.973C27.5546 32.8661 29.0787 32.2957 30.3273 31.2775C31.4814 30.3363 32.2763 29.0377 32.6896 27.4177C33.0994 25.8118 33.123 24.0875 33.1458 22.42C33.1637 21.1146 33.1824 19.5683 33.1862 17.9999C33.1824 16.4314 33.1637 14.8853 33.1458 13.5799C33.123 11.9124 33.0994 10.1881 32.6896 8.58189C32.2763 6.96196 31.4814 5.66337 30.3273 4.72211C29.0787 3.70422 27.5546 3.13376 25.7968 3.02692C23.3207 2.87613 20.7719 2.80664 18.0025 2.81268C15.2271 2.80609 12.678 2.87613 10.2019 3.02692C8.44411 3.13376 6.92003 3.70422 5.67143 4.72211C4.51731 5.66337 3.72245 6.96196 3.30909 8.58189C2.8993 10.1881 2.87568 11.9121 2.85288 13.5799C2.83503 14.8864 2.81635 16.4336 2.81251 18.0032C2.81635 19.5661 2.83503 21.1135 2.85288 22.42C2.87568 24.0875 2.8993 25.8118 3.30909 27.4177C3.72245 29.0377 4.51731 30.3363 5.67143 31.2775C6.92003 32.2954 8.44411 32.8659 10.2019 32.9727C12.678 33.1235 15.2276 33.1938 17.9959 33.1869ZM17.9289 26.789C13.0828 26.789 9.13982 22.8463 9.13982 17.9999C9.13982 13.1536 13.0828 9.21086 17.9289 9.21086C22.7753 9.21086 26.718 13.1536 26.718 17.9999C26.718 22.8463 22.7753 26.789 17.9289 26.789ZM17.9289 12.0234C14.6335 12.0234 11.9523 14.7046 11.9523 17.9999C11.9523 21.2953 14.6335 23.9765 17.9289 23.9765C21.2245 23.9765 23.9055 21.2953 23.9055 17.9999C23.9055 14.7046 21.2245 12.0234 17.9289 12.0234ZM27.7024 6.39835C26.5375 6.39835 25.593 7.34263 25.593 8.50774C25.593 9.67284 26.5375 10.6171 27.7024 10.6171C28.8675 10.6171 29.8117 9.67284 29.8117 8.50774C29.8117 7.34263 28.8675 6.39835 27.7024 6.39835Z" fill="black"/>
                </svg>
                <div className={style.text_link}>@matvienko.shop</div>
            </div>

            <div className={style.nav_posts} >
                <div className={style.nav_sections_card__left_button}>
                    <NavLink to="/scip_nav_sections_l">
                        <p>
                            <svg width="10" height="18" viewBox="0 0 10 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M1.82354 9.00416L9.64554 1.18216C9.91595 0.911709 9.91595 0.473235 9.64554 0.20278C9.37504 -0.0675934 8.93661 -0.0675934 8.66615 0.20278L0.354468 8.51447C0.0840943 8.78492 0.0840943 9.2234 0.354468 9.49385L8.66615 17.8055C8.94132 18.0713 9.37979 18.0637 9.64554 17.7885C9.90475 17.5201 9.90475 17.0945 9.64554 16.8262L1.82354 9.00416Z" fill="black"/>
                            </svg>
                        </p>
                    </NavLink> 
                </div>
                <div className={style.post_content}>
                    <div className={style.posts}>
                        {props.posts.map( post => <Post imgs={post.img} />)}
                    </div>
                    <div className={style.pos_nav_sections_card}>
                        <div className={style.focus_card}></div>
                        <div className={style.focus_card}></div>
                        <div className={style.focus_card}></div>
                    </div>
                </div>
                <div className={style.nav_sections_card__rigth_button}>
                    <NavLink to="/scip_nav_sections_r">
                        <p>
                            <svg width="10" height="18" viewBox="0 0 10 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M8.17647 9.00416L0.35447 1.18216C0.0840559 0.911709 0.0840559 0.473235 0.35447 0.20278C0.624965 -0.0675934 1.0634 -0.0675934 1.33385 0.20278L9.64554 8.51447C9.91591 8.78492 9.91591 9.2234 9.64554 9.49385L1.33385 17.8055C1.05869 18.0713 0.620216 18.0637 0.35447 17.7885C0.0952568 17.5201 0.0952568 17.0945 0.35447 16.8262L8.17647 9.00416Z" fill="white"/>
                            </svg>
                        </p>
                    </NavLink> 
                </div>
            </div>
        </div>

    )
}

export default sectionNews;
