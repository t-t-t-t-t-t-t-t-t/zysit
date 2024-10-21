import { SiderBar } from "../SiderBar/SiderBar"
import { useState } from 'react'
import { ProductionCard } from "./ProductionCard"
import { itemList, SiderBarContent } from "./ProductContent"
import './scss/ProductionSiderBar.scss'
export function ProductionSiderBar() {
    const [currentItem, setCurrentItem] = useState(0)
    function setCurrentIdx(idx) {
        setCurrentItem(idx)
    }
    return (
        <div className="ProductionSiderBar">
            <div className="title">产品中心</div>
            <SiderBar setCurrentIdx={setCurrentIdx} itemList={itemList}>
                {SiderBarContent[currentItem].map((item, idx) => {
                    return (
                        <ProductionCard title={item.title} content={item.content} cardImg={item.cardImg} isHot={item.isHot} isNew={item.isNew}></ProductionCard>
                    )
                })}
            </SiderBar>
        </div>
    )
}