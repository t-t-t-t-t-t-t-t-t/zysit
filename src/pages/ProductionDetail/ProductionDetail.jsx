import { getProductionByName } from "../../compoents/Production/ProductContent";
import { useSearchParams } from "react-router-dom";
import { ProductionDisplay } from "../../compoents/ProductionDetail/ProductionDisplay";
import { ProductionGuid } from "../../compoents/ProductionDetail/ProductionGuid";
import { ProductionIntro } from "../../compoents/ProductionDetail/ProductionIntro";
import { ProductionParameter } from "../../compoents/ProductionDetail/ProductionParameter";
import { ProductionSwiper } from "../../compoents/ProductionDetail/ProductionSwiper";
import { HelpBar } from "../../compoents/HelpBar/HelpBar"
import { BottomBar } from "../../compoents/ButtomBar/ButtomBar"
export function ProductionDetail() {
    let [searchParams, setSearchParams] = useSearchParams()
    const name = searchParams.get('name');
    const production = getProductionByName(name)
    document.title = name
    return (
        <div className="ProductionDetail">
            <ProductionDisplay productionImg={production.cardImg} title={production.title}></ProductionDisplay>
            <ProductionGuid></ProductionGuid>
            <ProductionIntro productionImg={production.cardImg} title={production.title} content={production.content}></ProductionIntro>
            <ProductionParameter parameter={production.parameters}></ProductionParameter>
            <ProductionSwiper productionScene={production.scene}></ProductionSwiper>
            <HelpBar></HelpBar>
            <BottomBar></BottomBar>
        </div >
    )
}