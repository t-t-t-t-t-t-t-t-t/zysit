import { Banner2 } from "../../compoents/Banner/Banner2"
import SolutionBannerSrc from '../../assets/imgs/Solution/Solution_banner.jpg'
import { SolutionSiderBar } from "../../compoents/Solution/SolutionSiderBar"
import { HelpBar } from "../../compoents/HelpBar/HelpBar"
import { BottomBar } from "../../compoents/ButtomBar/ButtomBar"


export function Solution() {
    return (
        <div className="Solution">
            <Banner2 title="解决方案" content="解决方案描述" backgroundImg={SolutionBannerSrc} color="#fff"></Banner2>
            <SolutionSiderBar></SolutionSiderBar>
            <HelpBar></HelpBar>
            <BottomBar></BottomBar>
        </div>
    )
}