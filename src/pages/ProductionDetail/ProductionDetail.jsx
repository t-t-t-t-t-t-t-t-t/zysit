import { useSearchParams } from "react-router-dom";
import { ProductionDisplay } from "../../compoents/ProductionDetail/ProductionDisplay";
import { ProductionGuid } from "../../compoents/ProductionDetail/ProductionGuid";
import { ProductionIntro } from "../../compoents/ProductionDetail/ProductionIntro";
import { ProductionParameter } from "../../compoents/ProductionDetail/ProductionParameter";
import { ProductionSwiper } from "../../compoents/ProductionDetail/ProductionSwiper";
import { HelpBar } from "../../compoents/HelpBar/HelpBar"
import { BottomBar } from "../../compoents/ButtomBar/ButtomBar"

import { useProductHooks } from "../../hooks/ProductHooks";
import { useEffect, useState } from "react";

export function ProductionDetail() {
    let [searchParams, setSearchParams] = useSearchParams()
    const _id = searchParams.get('_id');
    const [productData, setProductData] = useState()
    useEffect(() => {
        useProductHooks().getProductList(_id).then(res => {
            setProductData(res[0])
        })
    }, [])
    return (
        <div className="ProductionDetail">
            <ProductionDisplay productionImg={productData ? productData.image : null} title={productData ? productData.title : null}></ProductionDisplay>
            <ProductionGuid></ProductionGuid>
            <ProductionIntro productionImg={productData ? productData.image : null} title={productData ? productData.title : null} content={productData ? productData.content : null}></ProductionIntro>
            <ProductionParameter parameter={productData ? productData.parameters : null}></ProductionParameter>
            <ProductionSwiper productionScene={productData ? productData.scene : null}></ProductionSwiper>
            <HelpBar></HelpBar>
            <BottomBar></BottomBar>
        </div >
    )
}