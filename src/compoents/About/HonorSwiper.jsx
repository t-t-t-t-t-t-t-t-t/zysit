import './scss/HonorSwiper.scss'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, EffectFade } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/autoplay'
import { SwiperItem } from './SwiperItem';
export function HonorSwiper() {
    return (
        <div className="HonorSwiper">
            <div className="mainTitle">荣誉资质</div>
            <div className="HonorSwiperWrap">
                <Swiper navigation
                    modules={[
                        EffectFade,
                        Autoplay,
                    ]}
                    spaceBetween={50}
                    centeredSlides={true}
                    autoplay={{
                        delay: 0,
                        stopOnLastSlide: false,
                        disableOnInteraction: false,
                    }}
                    speed={2000}
                    loop={true}
                    slidesPerView={4}
                    className="mySwiper">
                    <SwiperSlide >
                        <SwiperItem></SwiperItem>
                    </SwiperSlide>
                    <SwiperSlide >
                        <SwiperItem></SwiperItem>
                    </SwiperSlide>
                    <SwiperSlide >
                        <SwiperItem></SwiperItem>
                    </SwiperSlide>
                    <SwiperSlide >
                        <SwiperItem></SwiperItem>
                    </SwiperSlide>
                    <SwiperSlide >
                        <SwiperItem></SwiperItem>
                    </SwiperSlide>
                    <SwiperSlide >
                        <SwiperItem></SwiperItem>
                    </SwiperSlide>
                </Swiper>
            </div>
        </div>
    )
}