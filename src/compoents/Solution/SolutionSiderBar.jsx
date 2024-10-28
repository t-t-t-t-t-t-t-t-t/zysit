import { SiderBar } from "../SiderBar/SiderBar"
import { useState, useEffect } from 'react'
import { SolutionCard } from "./SolutionCard"
import { useSearchParams } from "react-router-dom";
import { itemList } from "./SolutionContent";
import './scss/SolutionSiderBar.scss'
export function SolutionSiderBar() {
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
        <div className="SolutionSiderBar" >
            <div className="title">全部解决方案</div>
            <SiderBar currentIdx={currentItem} setCurrentIdx={setCurrentIdx} itemList={itemList}>
                <SolutionCard></SolutionCard>
                <SolutionCard></SolutionCard>
                <SolutionCard></SolutionCard>
                <SolutionCard></SolutionCard>
                <SolutionCard></SolutionCard>
            </SiderBar>
        </div>
    )
}