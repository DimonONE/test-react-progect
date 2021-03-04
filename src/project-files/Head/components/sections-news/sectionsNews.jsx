import style from "./sectionsNews.module.css"
import imgs from "../../../../images/img.png" 
import img_2 from  "../../../../images/top_ledi.png" 
import { NavLink } from "react-router-dom";


const Block_with_newsProduct = (props) => {
    return(
            <div className={style.element_block_news}>
                <div>                        
                    <img src={props.img} alt=""/>
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

let sectionNews = (props) => {
    return(
        <div>
            <div className={style.sectionNews}>
                <div className={style.text_news}>Новинки</div>
                <div className={style.block_with_newsProduct}>
                    {props.newsProduct.map( newProduct =>
                    <Block_with_newsProduct 
                    poduct_info={newProduct.poduct_info} 
                    text_dostavka={newProduct.text_dostavka}
                    price={newProduct.price}
                    img={imgs} 
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
                    {props.newsProduct.map( newProduct =>
                        <Block_with_newsProduct 
                        poduct_info={newProduct.poduct_info} 
                        text_dostavka={newProduct.text_dostavka}
                        price={newProduct.price}
                        img={img_2} 
                    />)}
                </div>
                <div className={`${style.see_more} ${style.see_more_to}`}>
                    <NavLink to="more_see">
                        <p>Посмотреть еще</p>
                    </NavLink>
                </div>
            </div>
        </div>

    )
}

export default sectionNews;
