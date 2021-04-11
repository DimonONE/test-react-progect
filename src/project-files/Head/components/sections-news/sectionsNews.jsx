import React, { useState }  from 'react';

import style from "./sectionsNews.module.css"
import { ButtonSeeMore } from '../../../../common/Button/Button';
import { FollowUs } from './follow-us/FollowUs';
import { BlockWithNewsProduct } from './block-with-news-product/BlockWithNewsProduct';
import { useGlobalState } from '../../../../createState/Store';

export const SectionNews = (props) => {
    let [newsProduct] = useGlobalState('newsProduct')
    const [discountProducts] = useGlobalState('discountProducts')

    const count = 4
    let [countPost, setCountPost] = useState(count)


    return(
        <div className={style.section_news}>
            <div className={style.containet_news}>
                <div className={style.sectionNews}>
                    <div className={style.text_news_pos} >
                        <p className={style.text_news}>Новинки</p>
                    </div>
                    <div className={style.block_with_newsProduct}>
                        {newsProduct.map( newProduct => countPost >= newProduct.id &&
                            <BlockWithNewsProduct key={newProduct.id} poduct_info={newProduct.poduct_info} 
                            text_discount={newProduct.text_discount} text_dostavka={newProduct.text_dostavka}
                            price={newProduct.price} imgs={newProduct.img} 
                            followLike={newProduct.followLike}/>
                        )}
                    </div>
                </div>
                <div className={`${style.see_more}`}>
                    {countPost < newsProduct.length &&
                        <span onClick={() => {setCountPost(countPost + count)}}>
                            <ButtonSeeMore />
                        </span>}
                </div>
            </div>

            <div className={style.containet_news}>
                <div className={style.sectionNews}>
                    <div className={style.text_news}>Скидки</div>
                    <div className={style.block_with_newsProduct}>
                        {discountProducts.map( newProduct =>
                                <BlockWithNewsProduct key={newProduct.id} poduct_info={newProduct.poduct_info} 
                                text_dostavka={newProduct.text_dostavka} text_discount={newProduct.text_discount}
                                price={newProduct.price} imgs={newProduct.img}
                                followLike={newProduct.followLike}
                            />)}
                    </div>
                </div>
            </div>
            <div>
                <FollowUs />
            </div>
        </div>
    )
}


