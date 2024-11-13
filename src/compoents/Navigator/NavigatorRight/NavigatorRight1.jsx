import './scss/NavigatorRight1.scss'
import { NavigatorItem1 } from "./NavigatorItem/NavigatorItem1"
import { NavigatorItem2 } from "./NavigatorItem/NavigatorItem2"
import { NavigatorItem3 } from "./NavigatorItem/NavigatorItem3"
import { useProductHooks } from '../../../hooks/ProductHooks'
import { useProductCategoryHooks } from '../../../hooks/ProductCategoryHooks'
import { useSolutionHooks } from '../../../hooks/SolutionHooks'
import { useSolutionCategoryHooks } from '../../../hooks/SolutionCategoryHooks'
import { useCasesHooks } from '../../../hooks/CasesHooks'
import { useCasesCategoryHooks } from '../../../hooks/CasesCategoryHooks'

import { useEffect, useState } from 'react'
const initProduct = async () => {// 
    // 先获取productCategory产品类别
    let productCategoryList = await useProductCategoryHooks().getProductCategoryList();
    await productCategoryList.map(async (productCategoryListItem, productCategoryListIdx) => {
        productCategoryListItem.url = `/product?idx=${productCategoryListIdx}`
        const productList = await useProductHooks().getProductListByCategory(productCategoryListItem.title)// 获得此类别的所有产品
        productCategoryListItem.content = productList.map((productListItem, productListIdx) => {// 处理后添加进去,每个类别下的所有产品
            return {
                _id: productListItem._id,
                title: productListItem.title,
                url: `/productDetail?_id=${productListItem._id}`
            }
        })
    })
    return productCategoryList
}
const initSolution = async () => {// 
    // 先获取solutionCategory产品类别
    let solutionCategoryList = await useSolutionCategoryHooks().getSolutionCategoryList();
    await solutionCategoryList.map(async (solutionCategoryListItem, solutionCategoryListIdx) => {
        solutionCategoryListItem.url = `/solution?idx=${solutionCategoryListIdx}`
        const solutionList = await useSolutionHooks().getSolutionListByCategory(solutionCategoryListItem.title)// 获得此类别的所有产品
        solutionCategoryListItem.content = solutionList.map((solutionListItem, solutionListIdx) => {// 处理后添加进去,每个类别下的所有产品
            return {
                _id: solutionListItem._id,
                title: solutionListItem.title,
                url: `/solutionDetail?_id=${solutionListItem._id}`
            }
        })
    })
    return solutionCategoryList
}
const initCases = async () => {// 
    // 先获取casesCategory产品类别
    let casesCategoryList = await useCasesCategoryHooks().getCasesCategoryList();
    await casesCategoryList.map(async (casesCategoryListItem, casesCategoryListIdx) => {
        casesCategoryListItem.url = `/cases?idx=${casesCategoryListIdx}`
        const casesList = await useCasesHooks().getCasesListByCategory(casesCategoryListItem.title)// 获得此类别的所有产品
        casesCategoryListItem.content = casesList.map((casesListItem, casesListIdx) => {// 处理后添加进去,每个类别下的所有产品
            return {
                _id: casesListItem._id,
                title: casesListItem.title,
                url: `/caseDetail?_id=${casesListItem._id}`
            }
        })
    })
    return casesCategoryList
}
export function NavigatorRight1() {
    const [productData, setProductData] = useState([])
    const [solutionData, setSolutionData] = useState([])
    const [casesData, setCasesData] = useState([])
    useEffect(() => {
        initProduct().then(res => {
            setProductData(preState => {
                return [...res]
            })
        })
        initSolution().then(res => {
            setSolutionData(preState => {
                return [...res]
            })
        })
        initCases().then(res => {
            setCasesData(preState => {
                return [...res]
            })
        })
        return () => {//reder结束执行
        }
    }, [])
    const aboutData = [
        { title: '公司简介', url: '' },
        { title: '联系我们', url: '' },
        { title: '人才招聘', url: '' },
    ]
    return (
        <div className="NavigatorRight1">
            <NavigatorItem1 title='关于智源' content={aboutData} url='/about' ></NavigatorItem1>
            <NavigatorItem2 title='产品中心' url='/product' content={productData} ></NavigatorItem2>
            <NavigatorItem2 title='解决方案' url='/solution' content={solutionData} ></NavigatorItem2>
            <NavigatorItem2 title='应用案例' url='/cases' content={casesData} ></NavigatorItem2>
            <NavigatorItem3 title='服务支持' url='/serve'></NavigatorItem3>
            <NavigatorItem3 title='新闻资讯' url='/news'></NavigatorItem3>
        </div>
    )
}