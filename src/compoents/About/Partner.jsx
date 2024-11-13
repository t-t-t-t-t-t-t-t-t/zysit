
import './scss/Partner.scss'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, EffectFade } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/autoplay'
import { useFriendHooks } from '../../hooks/FriendHooks'
import { useEffect, useState } from 'react';
export function Partner() {
    const [friendContent, setFriendContent] = useState()
    useEffect(() => {
        useFriendHooks().getFriendList().then(res => {
            setFriendContent(preState => [...res])
        })
    }, [])
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
                    slidesPerView={4}
                    className="mySwiper">
                    {
                        friendContent && friendContent.map((item, idx) => {
                            return (
                                <SwiperSlide key={idx}>
                                    <div className="imgWrap">
                                        <img className='img' src={item.image} alt="" />
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