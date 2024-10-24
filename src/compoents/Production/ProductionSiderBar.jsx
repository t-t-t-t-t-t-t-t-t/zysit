import { SiderBar } from "../SiderBar/SiderBar"
import { useState } from 'react'
import { ProductionCard } from "./ProductionCard"
import { itemList, SiderBarContent } from "./ProductContent"
import { useSearchParams, useNavigate } from "react-router-dom";
import { useEffect } from "react";
import './scss/ProductionSiderBar.scss'
export function ProductionSiderBar() {
    let navigate = useNavigate();
    let [searchParams, setSearchParams] = useSearchParams()
    let idx = searchParams.get('idx') || 0;

    const [currentItem, setCurrentItem] = useState(idx || 0)
    function setCurrentIdx(idx) {
        setCurrentItem(idx)
    }
    useEffect(() => {
        setCurrentItem(searchParams.get('idx') || 0)
    }, [searchParams.get('idx')])
    return (
        <div className="ProductionSiderBar" >
            <div className="title">产品中心</div>
            <SiderBar currentIdx={currentItem} setCurrentIdx={setCurrentIdx} itemList={itemList}>
                {SiderBarContent[currentItem].map((item, idx) => {
                    return (
                        <ProductionCard key={idx} title={item.title} content={item.content} cardImg={item.cardImg} isHot={item.isHot} isNew={item.isNew}></ProductionCard>
                    )
                })}
            </SiderBar>
        </div>
    )
}