import { Banner2 } from "../../compoents/Banner/Banner2"
import { useState } from 'react'
import ProductionBannerSrc from '../../assets/imgs/Production/Production_banner.jpg'
import { ProductionSiderBar } from "../../compoents/Production/ProductionSiderBar"
import './Production.scss'
export function Production() {
    return (
        <div className="Production">
            <Banner2 title="产品中心" content='产品中心描述' backgroundImg={ProductionBannerSrc}></Banner2>
            <ProductionSiderBar></ProductionSiderBar>
        </div>
    )
}