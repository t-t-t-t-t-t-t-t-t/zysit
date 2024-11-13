import { SiderBar } from "../SiderBar/SiderBar"
import { useState, useEffect } from 'react'
import { SolutionCard } from "./SolutionCard"
import { useSearchParams } from "react-router-dom";
import './scss/SolutionSiderBar.scss'
import { useSolutionCategoryHooks } from '../../hooks/SolutionCategoryHooks'
import { useSolutionHooks } from '../../hooks/SolutionHooks'
const initSolution = (solutionCategoryList) => {//
    // 先获取solutionCategory产品类别
    const solutionPromise = solutionCategoryList.map((solutionCategoryListItem, solutionCategoryListIdx) => {
        return useSolutionHooks().getSolutionListByCategory(solutionCategoryListItem.title)
    })
    return Promise.all(solutionPromise)//请求所有的promise
}
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
    const [solutionContent, setSolutionContent] = useState()
    const [solutionCategoryList, setSolutionCategoryList] = useState()
    useEffect(() => {
        useSolutionCategoryHooks().getSolutionCategoryList().then(solutionCategoryList => {
            setSolutionCategoryList(preState => [...solutionCategoryList])
            return initSolution(solutionCategoryList)
        }).then(res => {
            setSolutionContent(preState => [...res])
        })
    }, [])
    return (
        <div className="SolutionSiderBar" >
            <div className="title">全部解决方案</div>
            <SiderBar currentIdx={currentItem} setCurrentIdx={setCurrentIdx} itemList={solutionCategoryList}>
                {
                    solutionContent && solutionContent[currentItem] && solutionContent[currentItem].map((item, idx) => {
                        return (<SolutionCard key={idx} _id={item._id} title={item.title} content={item.content}></SolutionCard>)
                    })
                }
            </SiderBar>
        </div>
    )
}