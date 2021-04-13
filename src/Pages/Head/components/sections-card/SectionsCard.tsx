import style from "./sections.module.css";
import { NavLink } from "react-router-dom";
import { Button } from "../../../../Button/Button";


export const SectionsCard: React.FC<PropsType> = (props) => {
    return(
        <div className={style.sections_card}>
            <div className={style.nav_sections_card}>
                <div className={style.nav_sections_card__left_button}>
                <span >
                    <p>
                        <svg width="10" height="18" viewBox="0 0 10 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M1.82354 9.00416L9.64554 1.18216C9.91595 0.911709 9.91595 0.473235 9.64554 0.20278C9.37504 -0.0675934 8.93661 -0.0675934 8.66615 0.20278L0.354468 8.51447C0.0840943 8.78492 0.0840943 9.2234 0.354468 9.49385L8.66615 17.8055C8.94132 18.0713 9.37979 18.0637 9.64554 17.7885C9.90475 17.5201 9.90475 17.0945 9.64554 16.8262L1.82354 9.00416Z" fill="black"/>
                        </svg>
                    </p>
                </span> 

                </div>
                <div className={style.pos_nav_sections_card}>
                    <div className={style.focus_card}></div>
                    <div className={style.focus_card}></div>
                    <div className={style.focus_card}></div>
                </div>
                <div className={style.nav_sections_card__rigth_button}>
                    <span >
                        <p>
                            <svg width="10" height="18" viewBox="0 0 10 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M8.17647 9.00416L0.35447 1.18216C0.0840559 0.911709 0.0840559 0.473235 0.35447 0.20278C0.624965 -0.0675934 1.0634 -0.0675934 1.33385 0.20278L9.64554 8.51447C9.91591 8.78492 9.91591 9.2234 9.64554 9.49385L1.33385 17.8055C1.05869 18.0713 0.620216 18.0637 0.35447 17.7885C0.0952568 17.5201 0.0952568 17.0945 0.35447 16.8262L8.17647 9.00416Z" fill="white"/>
                            </svg>
                        </p>
                    </span> 
                </div>
            </div>
            <div className={style.cards}>
                <div className={style.image_product}></div>
                <div className={style.card}>
                    <p className={style.title}>Платья</p>
                    <p className={style.info}>В современном мире моды известны десятки вариантов лаконичных платьев на каждый день,
                    в которых есть своя изюминка. </p>
                    <div className={style.pos_buttonANDprise}>
                    <p className={style.price}>от 99 495 ₽</p>
                    <div className={style.scip_on_card}>
                        <NavLink to="/sckip_on_card_one">
                            <p>
                                <svg width="8" height="12" viewBox="0 0 8 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M6.11764 6.00277L0.902975 0.788109C0.722699 0.607806 0.722699 0.31549 0.902975 0.135187C1.0833 -0.0450622 1.37559 -0.0450622 1.5559 0.135187L7.09702 5.67631C7.27727 5.85662 7.27727 6.14893 7.09702 6.32923L1.5559 11.8704C1.37246 12.0475 1.08014 12.0424 0.902975 11.859C0.730166 11.68 0.730166 11.3964 0.902975 11.2174L6.11764 6.00277Z" fill="white"/>
                                </svg>
                            </p>
                        </NavLink>
                    </div>
                </div>
                </div>
            </div>
            <div className={style.main_card_bg}></div>
            <div className={style.main_card}>
                <div className={style.main_card_img}>
                    <svg width="217" height="133" viewBox="0 0 217 133" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M91.3677 108.426C90.6581 108.069 89.626 108.718 88.8842 109.205C79.6919 115.178 70.2094 120.632 59.7592 124.073C45.6643 128.715 31.4082 129.884 17.0876 125.112C12.0883 123.456 7.60507 120.826 4.37971 116.574C-3.29665 106.51 -0.651854 93.8174 10.5079 87.0976C12.2173 86.0588 14.0558 85.1823 15.9588 84.598C17.6682 84.0786 18.3778 83.2995 18.7648 81.4491C20.8613 70.8013 28.2796 65.4774 38.0525 63.1076C45.2773 61.3546 52.6311 62.2636 59.8559 63.7569C60.8235 63.9517 61.7912 64.1464 63.049 64.4061C63.049 43.7274 63.049 2.01269 63.049 2.01269L63.5328 2.49963C63.5328 2.49963 93.5932 44.1818 108.785 65.2502C123.783 43.4677 138.587 21.9773 153.746 0C153.746 21.1008 153.746 41.6822 153.746 62.4908C157.23 61.8741 160.358 61.1599 163.551 60.8028C170.808 59.9912 178.065 59.8614 184.871 63.1401C192.257 66.7435 197.482 72.0998 198.514 80.7349C198.579 81.3193 199.579 82.0334 200.32 82.2931C204.707 83.8513 208.771 85.9614 211.867 89.5323C220.511 99.5309 217.963 113.1 206.287 120.145C199.675 124.138 192.386 125.663 184.839 126.053C165.616 127.059 148.392 120.697 132.394 110.698L125.686 106.77C121.589 103.978 117.848 101.479 114.139 98.9465C108.881 95.3432 108.849 95.3432 103.656 98.9465C99.8182 101.576 96.0445 104.27 91.9483 107.127L91.3677 108.426ZM68.887 19.153C68.6612 19.218 68.4354 19.2504 68.2096 19.3154C68.2096 20.1918 68.2096 21.0683 68.2096 21.9448C68.2096 35.7415 68.2741 49.5057 68.1451 63.3024C68.1129 65.5423 68.9837 66.3539 70.8867 67.0032C84.0139 71.548 95.9477 78.3327 106.753 87.0976C108.301 88.3637 109.236 88.4935 110.978 87.2599C122.492 78.9495 134.136 70.7689 147.199 65.0229C148.553 64.4062 148.715 63.5297 148.715 62.2636C148.682 48.0449 148.715 33.8587 148.682 19.64C148.682 19.0232 148.553 18.4064 148.424 17.0105C135.007 36.4882 122.009 55.349 108.817 74.5021C95.3672 55.8684 82.1109 37.4945 68.887 19.153ZM18.5068 86.3834C16.1523 87.5196 13.8945 88.3961 11.8948 89.6622C4.44422 94.4018 1.31562 102.16 4.05718 109.464C6.44394 115.827 11.6045 119.398 17.7005 121.508C27.8281 125.047 38.2138 124.852 48.5349 122.774C61.8234 120.08 73.467 113.652 84.5945 106.121C84.8202 105.958 84.9815 105.634 85.3363 105.147C78.6921 101.738 72.2413 98.4921 66.0164 95.3107C64.3069 96.9339 63.049 98.2648 61.5976 99.3686C55.3404 104.043 48.1156 105.342 40.536 104.92C29.1182 104.238 21.2161 97.713 18.5068 86.3834ZM131.717 104.79C133.168 105.731 134.136 106.348 135.104 106.965C150.94 116.801 167.744 123.326 186.774 122.06C193.16 121.638 199.353 120.372 204.836 116.898C210.48 113.328 214.222 108.361 213.77 101.381C213.254 93.4603 206.513 86.4808 198.385 84.9226C198.256 85.2797 198.03 85.6368 197.966 86.0264C196.676 92.2592 193.16 96.8365 187.58 99.7581C179.743 103.848 171.582 103.848 163.293 101.479C158.617 100.148 154.746 97.5182 151.488 93.8499C144.941 97.4533 138.587 100.992 131.717 104.79ZM68.4677 71.7752C67.4355 79.2741 69.5643 86.5133 66.8227 93.4603C73.3057 96.9988 79.8209 100.537 86.3362 104.043C86.7232 104.238 87.4973 104.141 87.8843 103.848C93.3352 100.018 98.7538 96.1223 104.43 92.0644C93.4965 83.1372 81.7561 76.4174 68.4677 71.7752ZM113.268 92.1943C118.88 96.0898 124.137 99.7581 129.427 103.329C129.846 103.621 130.137 104.011 131.169 103.426C137.265 99.9854 143.328 96.4469 149.327 92.876C149.779 92.6163 150.65 92.2917 150.456 91.9346C148.682 88.7208 148.682 84.5006 148.65 81.092C148.618 77.6185 148.65 74.145 148.65 70.0871C135.781 76.2551 124.589 83.9163 113.268 92.1943ZM192.805 80.7674C192.838 80.1506 192.902 79.8909 192.838 79.6637C192.773 79.2416 192.644 78.8521 192.483 78.4625C190.193 71.8726 185.097 68.3991 178.807 66.7435C170.873 64.6334 162.939 65.802 155.165 68.0095C154.553 68.1718 153.843 69.2431 153.843 69.9248C153.714 74.8916 153.682 79.8584 153.843 84.7928C153.907 86.4484 154.327 88.1364 155.069 90.0193C167.228 84.0137 179.42 80.0857 192.805 80.7674ZM62.1782 91.4476C62.7265 89.7596 63.0813 88.2338 62.9845 86.773C63.0813 81.8062 62.9845 76.8719 63.049 71.905C63.049 70.639 62.791 69.9248 61.4041 69.6327C55.2759 68.2043 49.1477 67.1979 42.8583 67.7498C36.9236 68.2368 31.6985 70.4118 27.6023 74.8916C25.6348 77.0342 24.1189 79.5013 23.9899 82.845C37.4397 81.8711 49.696 85.929 62.1782 91.4476ZM61.2106 93.2655C60.7913 93.0383 60.63 93.0059 60.3397 92.8111C48.7607 87.9741 36.9559 84.2409 23.9254 85.5394C24.635 90.0193 26.5057 93.4928 29.9891 95.7977C37.2462 100.635 45.0838 100.44 52.9537 97.8428C55.663 96.9338 58.6948 94.8562 61.2106 93.2655ZM156.488 91.545C157.907 92.6163 158.971 93.6227 160.165 94.207C163.326 95.7652 167.486 97.0637 171.292 97.5506C177.356 98.3298 183.258 97.1611 188.129 93.0059C190.935 90.6036 192.58 87.5521 192.902 83.5267C179.904 82.4554 168.228 86.0588 156.488 91.545Z" fill="black"/>
                    <path d="M127.718 107.549C122.783 109.822 117.88 112.289 112.945 114.691C108.011 117.093 103.108 119.528 98.1087 121.8C97.4959 122.093 96.8508 122.352 96.238 122.644C95.6252 122.937 94.9801 123.196 94.3351 123.456C93.0449 123.975 91.787 124.462 90.4969 124.917C87.9166 125.858 85.3363 126.735 82.7238 127.579C77.5309 129.267 72.2736 130.857 67.0162 132.351C72.2413 130.728 77.4342 129.04 82.5947 127.222C85.175 126.313 87.7553 125.371 90.3034 124.365C91.5612 123.878 92.8514 123.359 94.1093 122.807C94.7221 122.547 95.3672 122.255 95.98 121.963C96.5928 121.67 97.2056 121.378 97.8507 121.086C102.785 118.716 107.656 116.217 112.526 113.717L119.848 109.984C122.299 108.75 124.718 107.484 127.201 106.316L127.718 107.549Z" fill="black"/>
                    <path d="M91.3677 106.965C93.8512 108.166 96.3025 109.4 98.7215 110.633L106.043 114.366C110.913 116.866 115.784 119.366 120.719 121.735C121.331 122.028 121.944 122.32 122.589 122.612C123.202 122.904 123.847 123.164 124.46 123.456C125.718 124.008 126.976 124.495 128.266 125.014C130.814 126.021 133.394 126.962 135.974 127.871C141.135 129.689 146.328 131.377 151.553 133C146.296 131.507 141.038 129.916 135.845 128.228C133.233 127.384 130.653 126.507 128.072 125.566C126.782 125.079 125.492 124.625 124.234 124.105C123.589 123.845 122.976 123.586 122.331 123.294C121.686 123.034 121.073 122.742 120.46 122.45C115.461 120.177 110.559 117.742 105.624 115.34C100.721 112.938 95.8187 110.471 90.8517 108.198L91.3677 106.965Z" fill="black"/>
                    </svg>
                </div>
                <div className={style.main_card_logo}><img src={props.logo} alt="logo"/></div>
                <div className={style.__card_button_position}>
                    <Button text={"Перейти в каталог"} />
                </div>
            </div>
            <div className={style.cards_rigth}>
                <div className={style.cards}>
                    <div className={style.image_product}></div>
                        <div className={style.card}>
                            <p className={style.title}>Свитера и Джемперы</p>
                            <p className={style.info}>В современном мире моды известны десятки вариантов 
                            лаконичных платьев на каждый день, в которых есть своя изюминка. </p>
                            <div className={style.pos_buttonANDprise}>
                            <p className={style.price}>от 1 485 ₽</p>
                            <div className={style.scip_on_card}>
                                <NavLink to="/sckip_on_card_two">
                                    <p>
                                        <svg width="8" height="12" viewBox="0 0 8 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M6.11764 6.00277L0.902975 0.788109C0.722699 0.607806 0.722699 0.31549 0.902975 0.135187C1.0833 -0.0450622 1.37559 -0.0450622 1.5559 0.135187L7.09702 5.67631C7.27727 5.85662 7.27727 6.14893 7.09702 6.32923L1.5559 11.8704C1.37246 12.0475 1.08014 12.0424 0.902975 11.859C0.730166 11.68 0.730166 11.3964 0.902975 11.2174L6.11764 6.00277Z" fill="white"/>
                                        </svg>
                                    </p>
                                </NavLink>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className={style.text_big_assortements}>Большой ассортимент одежды для милых дам</div>
        </div>
    )   
}

type PropsType = {
    logo: string
}