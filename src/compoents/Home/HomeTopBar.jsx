import './HomeTopBar.scss'
import { TopBar } from "../TopBar/TopBar"
import { useState } from "react"
import { itemList, SiderBarContent } from '../Production/ProductContent'
import { ProductionCard } from "../Production/ProductionCard";
import { Button } from '../Button/Button';
export function HomeTopBar() {
    const [currentIdx, setCurrentIdx] = useState(0);
    function changeCurrentIdx(idx) {
        setCurrentIdx(idx)
    }
    return (
        <div className="HomeTopBar">
            <div className="title">产品中心</div>
            <div className="content">高性价比解决方案 全生命周期运维服务</div>
            <TopBar labelList={itemList} currentIdx={currentIdx} onHandleChangeIdx={changeCurrentIdx}>
                {SiderBarContent[currentIdx].slice(0, 4).map((item, idx) => {
                    return (
                        <ProductionCard key={idx} marginRight="5px" title={item.title} content={item.content} cardImg={item.cardImg} isHot={item.isHot} isNew={item.isNew}></ProductionCard>
                    )
                })}
            </TopBar>
            <div className="buttom" style={{ display: 'flex', justifyContent: 'center', marginTop: '50px' }}>
                <Button content="全部产品总览" url='/product' ></Button>
            </div>
        </div>
    )
}