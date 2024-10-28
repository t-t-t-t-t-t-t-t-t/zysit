import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, EffectFade } from 'swiper/modules';
import { ProductionCard } from '../Production/ProductionCard';
import { getProductionByName } from '../Production/ProductContent'
import { Button } from '../Button/Button';
import './scss/MainProduction.scss'
import 'swiper/css';
import 'swiper/css/autoplay'

export function MainProduction({ mainProduction = ['INSAR沉降监测', '表面式应变计', '磁致式沉降仪', '大坝内部变形监测机器人', '导轮式固定测斜仪'] }) {
    return (
        <div className="MainProduction">
            <div className="MainProductionWrap">
                <div className="mainTitle">核心产品</div>
                <Swiper navigation
                    modules={[
                        EffectFade,
                        Autoplay
                    ]}
                    spaceBetween={50}
                    autoplay={{
                        delay: 0,
                        disableOnInteraction: true,
                        pauseOnMouseEnter: true
                    }}
                    slidesPerView={4}
                    speed={3000}
                    loop={true}
                    className="mySwiper">
                    {mainProduction.map((item, idx) => {
                        let production = getProductionByName(item);
                        return (
                            <SwiperSlide >
                                <ProductionCard key={idx} title={production.title} content={production.content} cardImg={production.cardImg} isHot={production.isHot} isNew={production.isNew}></ProductionCard>
                            </SwiperSlide>
                        )
                    })}
                </Swiper>
                <div className="buttonWrap">
                    <Button content='了解全部产品' url='/product'></Button>
                </div>
            </div>
        </div>
    )
}