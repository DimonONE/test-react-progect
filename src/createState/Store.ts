
import imgs_1 from "../images/img.png" 
import imgs_2 from "../images/img_2.png" 
import imgs_3 from "../images/img_3.png" 
import imgs_4 from "../images/img_4.png" 
import imgs_5 from "../images/img_5.png" 
import imgs_6 from "../images/top_ledi.png" 
import imgs_8 from "../images/img_8.png" 
import post_img_1_png from "../images/post_img_1.png" 
import post_img_2_png from "../images/post_img_2.png" 
import post_img_3_png from "../images/post_img_3.png" 
import post_img_4_png from "../images/post_img_4.png" 

import { createGlobalState } from 'react-hooks-global-state';

const initialState = {
        newsProduct:[
                { 
                    id:1,
                    img: imgs_1,
                    poduct_info:"Рубашка оверсайз в клеточку с рукавом",
                    text_dostavka:"Доставку по России мы осуществляем",
                    text_discount:"2 075 ₽",
                    price:"6 578 ₽",
                    followLike: true,
                    inTheBasket:false,


                },

                { 
                    id:2,
                    img: imgs_2,
                    poduct_info:"Рубашка оверсайз в клеточку с рукавом",
                    text_dostavka:"Доставку по России мы осуществляем",
                    text_discount:"2 075 ₽",
                    price:"99 495 ₽",
                    followLike: false,
                    inTheBasket:false,


                },

                { 
                    id:3,
                    img: imgs_3,
                    poduct_info:"Рубашка оверсайз в клеточку с рукавом",
                    text_dostavka:"Доставку по России мы осуществляем",
                    text_discount:"2 075 ₽",
                    price:"12 567 ₽",
                    followLike: false,
                    inTheBasket:false,

                },

                { 
                    id:4,
                    img: imgs_4,
                    poduct_info:"Рубашка оверсайз в клеточку с рукавом",
                    text_dostavka:"Доставку по России мы осуществляем",
                    text_discount:"2 075 ₽",
                    price:"99 495 ₽",
                    followLike: false,
                    inTheBasket:false,

                },

                { 
                    id:5,
                    img: imgs_4,
                    poduct_info:"Рубашка оверсайз в клеточку с рукавом",
                    text_dostavka:"Доставку по России мы осуществляем",
                    text_discount:"2 075 ₽",
                    price:"99 495 ₽",
                    followLike: false,
                    inTheBasket:false,

                },

                { 
                    id:6,
                    img: imgs_4,
                    poduct_info:"Рубашка оверсайз в клеточку с рукавом",
                    text_dostavka:"Доставку по России мы осуществляем",
                    text_discount:"2 075 ₽",
                    price:"99 495 ₽",
                    followLike: false,
                    inTheBasket:false,

                },

                { 
                    id:7,
                    img: imgs_4,
                    poduct_info:"Рубашка оверсайз в клеточку с рукавом",
                    text_dostavka:"Доставку по России мы осуществляем",
                    text_discount:"2 075 ₽",
                    price:"99 495 ₽",
                    followLike: false,
                    inTheBasket:false,

                },

                { 
                    id:8,
                    img: imgs_4,
                    poduct_info:"Рубашка оверсайз в клеточку с рукавом",
                    text_dostavka:"Доставку по России мы осуществляем",
                    text_discount:"2 075 ₽",
                    price:"99 495 ₽",
                    followLike: false,
                    inTheBasket:false,

                }
        ],

        discountProducts:[
                {
                    id:1,
                    img: imgs_5,
                    poduct_info:"Рубашка оверсайз в клеточку с рукавом",
                    text_dostavka:"Доставку по России мы осуществляем",
                    text_discount:"2 075 ₽",
                    price:"6 578 ₽",
                    followLike: false

                },

                { 
                    id:2,
                    img: imgs_6,
                    poduct_info:"Рубашка оверсайз в клеточку с рукавом",
                    text_dostavka:"Доставку по России мы осуществляем",
                    text_discount:"2 075 ₽",
                    price:"99 495 ₽",
                    followLike: false
                },

                { 
                    id:3,
                    img: imgs_3,
                    poduct_info:"Рубашка оверсайз в клеточку с рукавом",
                    text_dostavka:"Доставку по России мы осуществляем",
                    text_discount:"2 075 ₽",
                    price:"12 567 ₽",
                    followLike: false

                },

                { 
                    id:4,
                    img: imgs_8,
                    poduct_info:"Рубашка оверсайз в клеточку с рукавом",
                    text_dostavka:"Доставку по России мы осуществляем",
                    text_discount:"2 075 ₽",
                    price:"12 567 ₽",
                    followLike: false
                },
        ],

        posts:[
            {id:1, img: post_img_1_png},
            {id:2, img: post_img_2_png},
            {id:3, img: post_img_3_png},
            {id:4, img: post_img_4_png},
        
        ],

        countLike: 0,
        countTheBasket: 0,
}

export const Reducer = (state=initialState, action:any) => {
    switch(action.type){
        case 'LIKE_ACTIVE': {
            return { state }
        }
        default:
            return state
    }
}

export const { useGlobalState } = createGlobalState(initialState);