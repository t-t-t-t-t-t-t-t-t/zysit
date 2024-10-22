import { getProductionByName } from "../../compoents/Production/ProductContent";
import { useSearchParams } from "react-router-dom";
import { ProductionDisplay } from "../../compoents/ProductionDetail/ProductionDisplay";
import { ProductionIntro } from "../../compoents/ProductionDetail/ProductionIntro";
import { ProductionParameter } from "../../compoents/ProductionDetail/ProductionParameter";
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
            <ProductionIntro productionImg={production.cardImg} title={production.title} content={production.content}></ProductionIntro>
            <ProductionParameter parameter={production.parameters}></ProductionParameter>
            <HelpBar></HelpBar>
            <BottomBar></BottomBar>
        </div >
    )
}