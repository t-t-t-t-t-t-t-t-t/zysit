import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, EffectFade } from 'swiper/modules';
import { ProductionCard } from '../Production/ProductionCard';
import { Button } from '../Button/Button';
import './scss/MainProduction.scss'
import 'swiper/css';
import 'swiper/css/autoplay'
import { useProductHooks } from '../../hooks/ProductHooks'
import { useEffect, useState } from 'react';
const initProduct = (mainProduct) => {
    const promiseProductContent = mainProduct.map((item, idx) => {
        return useProductHooks().getProductList(item._id).then(res => res[0]);
    })
    return Promise.all(promiseProductContent)
}
export function MainProduction({ mainProduct }) {
    const [productContentData, setProductContentData] = useState();
    useEffect(() => {
        if (mainProduct) {
            initProduct(mainProduct).then(res => {
                setProductContentData(preState => { return [...res] })
                console.log(res)
            }).catch(err => {
                console.log(err)
            })
        }
    }, [mainProduct])
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
                    {productContentData && productContentData.map((production, idx) => {
                        return (
                            <SwiperSlide key={idx}>
                                <ProductionCard _id={production._id} title={production.title} content={production.content} image={production.image} isHot={production.isHot} isNew={production.isNew}></ProductionCard>
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