
import './scss/Partner.scss'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, EffectFade } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/autoplay'
import img from '../../assets/imgs/About/Partner/1.jpg'
export function Partner() {
    let arr = [1, 2, 3, 4, 5, 6, 7, 8]
    return (
        <div className="Partner">
            <div className="mainTitle">合作伙伴</div>
            <div className="PartnerWrap">
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
                    slidesPerView={6}
                    className="mySwiper">
                    {
                        arr.map((item, idx) => {
                            return (
                                <SwiperSlide key={idx}>
                                    <div className="imgList">
                                        <div className="imgWrap">
                                            <img className='img' src={img} alt="" />
                                        </div>
                                        <div className="imgWrap">
                                            <img className='img' src={img} alt="" />
                                        </div>
                                        <div className="imgWrap">
                                            <img className='img' src={img} alt="" />
                                        </div>
                                    </div>
                                </SwiperSlide>
                            )
                        })
                    }
                </Swiper>
            </div>
        </div>
    )
}