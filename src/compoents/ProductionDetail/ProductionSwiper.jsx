import { Swiper, SwiperSlide } from 'swiper/react';

import { Autoplay, EffectFade } from 'swiper/modules';
import { ProductionSwiperItem } from './ProductionSwiperItem';
import './scss/ProductionSwiper.scss'
import 'swiper/css';
import 'swiper/css/autoplay'

export function ProductionSwiper({ productionScene }) {
    return (
        <div className="ProductionSwiper" id='3'>
            <div className="ProductionSwiperWrap">
                <div className="mainTitle">应用场景</div>
                <Swiper navigation
                    modules={[
                        EffectFade,
                        Autoplay,
                    ]}
                    spaceBetween={50}
                    autoplay={{
                        delay: 0,
                        disableOnInteraction: false,
                    }}
                    speed={2000}
                    loop={true}
                    slidesPerView={4}
                    className="mySwiper">
                    {productionScene && productionScene.map((item, idx) => {
                        return (
                            <SwiperSlide key={idx}><ProductionSwiperItem _id={item._id}></ProductionSwiperItem></SwiperSlide>
                        )
                    })}
                </Swiper>
            </div>
        </div>
    )
}