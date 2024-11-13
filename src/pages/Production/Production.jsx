import { Banner2 } from "../../compoents/Banner/Banner2"
import { ProductionSiderBar } from "../../compoents/Production/ProductionSiderBar"
import { HelpBar } from "../../compoents/HelpBar/HelpBar"
import { BottomBar } from "../../compoents/ButtomBar/ButtomBar"
import './Production.scss'
export function Production() {

    return (
        <div className="Production">
            <Banner2 bannerType='product' ></Banner2>
            <ProductionSiderBar></ProductionSiderBar>
            <HelpBar></HelpBar>
            <BottomBar></BottomBar>
        </div>
    )
}