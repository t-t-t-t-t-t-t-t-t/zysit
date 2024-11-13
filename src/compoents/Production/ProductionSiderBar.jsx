import { SiderBar } from "../SiderBar/SiderBar"
import { useState, useEffect } from 'react'
import { ProductionCard } from "./ProductionCard"
import { useSearchParams } from "react-router-dom";
import './scss/ProductionSiderBar.scss'
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
export function ProductionSiderBar() {
    const [searchParams, setSearchParams] = useSearchParams()
    let idx = searchParams.get('idx') || 0;
    const [currentItem, setCurrentItem] = useState(idx || 0)
    const [productContent, setProductContent] = useState([])
    const [productCategoryList, setProductCategoryList] = useState([])
    function setCurrentIdx(idx) {
        setCurrentItem(idx)
    }
    useEffect(() => {
        setCurrentItem(searchParams.get('idx') || 0)
    }, [searchParams.get('idx')])
    useEffect(() => {
        useProductCategoryHooks().getProductCategoryList().then(res => {
            setProductCategoryList(preState => { return [...res] })
        })
        initProduct().then(res => {
            setProductContent(res)
        })
    }, [])
    return (
        <div className="ProductionSiderBar" >
            <div className="title">产品中心</div>
            <SiderBar currentIdx={currentItem} setCurrentIdx={setCurrentIdx} itemList={productCategoryList}>
                {productContent[currentItem] && productContent[currentItem].map((item, index) => {
                    return (
                        <div>
                            <ProductionCard key={index} _id={item._id} title={item.title} content={item.content} image={item.image} isHot={item.isHot} isXin={item.isXin}></ProductionCard>
                        </div>
                    )
                })}
            </SiderBar>
        </div>
    )
}