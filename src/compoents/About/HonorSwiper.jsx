import './scss/HonorSwiper.scss'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, EffectFade } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/autoplay'
import { SwiperItem } from './SwiperItem';
import { useHonerHooks } from '../../hooks/HonerHooks'
import { useEffect, useState } from 'react';
export function HonorSwiper() {
    const [honerContent, setHonerContent] = useState()
    useEffect(() => {
        useHonerHooks().getHonerList().then(res => {
            setHonerContent(preState => [...res])
        })
    }, [])
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
                    {honerContent && honerContent.map((item, idx) => {
                        return (
                            <SwiperSlide key={idx} >
                                <SwiperItem title={item.title} image={item.image}></SwiperItem>
                            </SwiperSlide>
                        )
                    })}
                </Swiper>
            </div>
        </div>
    )
}