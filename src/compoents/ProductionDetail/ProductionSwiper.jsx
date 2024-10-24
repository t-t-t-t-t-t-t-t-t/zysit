import { Swiper, SwiperSlide } from 'swiper/react';

import { Autoplay, EffectFade } from 'swiper/modules';
import { ProductionSwiperItem } from './ProductionSwiperItem';
import { getSceneByName } from './ProductionScene'
import './scss/ProductionSwiper.scss'
import 'swiper/css';
import 'swiper/css/autoplay'

export function ProductionSwiper({ productionScene }) {
    return (
        <div className="ProductionSwiper">
            <div className="ProductionSwiperWrap">
                <div className="mainTitle">应用场景</div>
                <Swiper navigation
                    modules={[
                        EffectFade,
                        Autoplay,
                    ]}
                    spaceBetween={50}
                    autoplay={{
                        delay: 3000,
                        disableOnInteraction: false,
                    }}
                    speed={2000}
                    loop={true}
                    slidesPerView={4}
                    className="mySwiper">
                    {productionScene.map((item, idx) => {
                        let scene = getSceneByName(item);
                        if (scene.isFind) {
                            return (
                                <SwiperSlide ><ProductionSwiperItem scene={scene.scene}></ProductionSwiperItem></SwiperSlide>
                            )
                        }
                    })}
                </Swiper>
            </div>
        </div>
    )
}