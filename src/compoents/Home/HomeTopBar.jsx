import './HomeTopBar.scss'
import { TopBar } from "../TopBar/TopBar"
import { useEffect, useState } from "react"
import { ProductionCard } from "../Production/ProductionCard";
import { Button } from '../Button/Button';

import { useProductCategoryHooks } from '../../hooks/ProductCategoryHooks'
import { useProductHooks } from '../../hooks/ProductHooks'
const initProduct = () => {//
    // 先获取productCategory产品类别
    return useProductCategoryHooks().getProductCategoryList().then(productCategoryList => {
        const productPromise = productCategoryList.map((productCategoryListItem, productCategoryListIdx) => {
            return useProductHooks().getProductListByCategory(productCategoryListItem.title)
        })
        return Promise.all(productPromise)//请求所有的promise
    })
}
export function HomeTopBar() {
    const [currentIdx, setCurrentIdx] = useState(0);
    function changeCurrentIdx(idx) {
        setCurrentIdx(idx)
    }
    const [productContent, setProductContent] = useState([])
    const [productCategoryList, setProductCategoryList] = useState([])
    useEffect(() => {
        useProductCategoryHooks().getProductCategoryList().then(res => {
            setProductCategoryList(preState => { return [...res] })
        })
        initProduct().then(res => {
            setProductContent(res)
        })
    }, [])
    return (
        <div className="HomeTopBar">
            <div className="title">产品中心</div>
            <div className="content">高性价比解决方案 全生命周期运维服务</div>
            <TopBar labelList={productCategoryList} currentIdx={currentIdx} onHandleChangeIdx={changeCurrentIdx}>
                {productContent && productContent[currentIdx] && productContent[currentIdx].slice(0, 4).map((item, idx) => {
                    return (
                        <ProductionCard key={idx} _id={item._id} marginRight="5px" title={item.title} content={item.content} image={item.image} isHot={item.isHot} isNew={item.isXin}></ProductionCard>
                    )
                })}
            </TopBar>
            <div className="buttom" style={{ display: 'flex', justifyContent: 'center', marginTop: '50px' }}>
                <Button content="全部产品总览" url='/product' ></Button>
            </div>
        </div>
    )
}