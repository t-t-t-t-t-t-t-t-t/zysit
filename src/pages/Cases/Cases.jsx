import CaseBannerSrc from '../../assets/imgs/Case/Case_banner.jpg'

import { Banner2 } from "../../compoents/Banner/Banner2"
import { HelpBar } from "../../compoents/HelpBar/HelpBar"
import { BottomBar } from "../../compoents/ButtomBar/ButtomBar"
export function Cases() {
    return (
        <div className="Cases">
            <Banner2 title="应用案例" content="应用案例描述" backgroundImg={CaseBannerSrc}></Banner2>
            <HelpBar></HelpBar>
            <BottomBar></BottomBar>
        </div>
    )
}