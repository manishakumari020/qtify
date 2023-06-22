import React, { useEffect, useState } from "react";
import { useSwiper } from "swiper/react";
import { ReactComponent as LeftArrow } from "../../../assets/left-arrow.svg";
import styles from "./CarouselLeftArrow.module.css"


const CarouselLeftArrow = () => {

    const swiper = useSwiper();
    const [isBeginning, setIsBegining ] = useState(swiper.isBeginning);
    useEffect(() => {
        swiper.on("slideChange", function(){
            setIsBegining(swiper.isBeginning);
        }, [])
    })

    return (
        <div className={styles.leftArrow}>
            {!isBeginning && <LeftArrow onClick={() => swiper.slidePrev()}/>}
        </div>
    )

}

export default CarouselLeftArrow;
