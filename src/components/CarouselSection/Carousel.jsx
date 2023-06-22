import React, { useEffect } from "react";
import { Swiper, SwiperSlide, useSwiper } from "swiper/react";
import { Navigation } from "swiper";
import "swiper/css"
import CarouselLeftArrowNavigation from "../CarouselSection/CarouselLeftNavigation/CarouselLeftArrow";
import CarouselRightArrowNavigation from "../CarouselSection/CarouselRightNavigation/CarouselRightArrow";

import styles from "./Carousel.module.css"

const Control = ({data}) => {
    const swiper = useSwiper();

    useEffect(() => {
        swiper.slideTo(0)
    },)
}

const Carousel = ({data, component}) => {
    return(
        <div className={styles.wrpper}>
            <Swiper
                style={{padding : "10px 10px"}}
                initialSlide={0}
                pagination={{
                    type: "progressbar",
                  }}
                modules={[Navigation]}
                slidesPerView={"5"}
                spaceBetween={30}
                allowTouchMove
            >
                <Control data={data}/>
                <CarouselLeftArrowNavigation/>
                <CarouselRightArrowNavigation/>
                {
                    data.map(item => {
                        return(
                            <SwiperSlide>{component(item)}</SwiperSlide>
                        )
                    })}
            </Swiper>
        </div>
    )

}







export default Carousel;

