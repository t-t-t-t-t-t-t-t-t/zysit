import { Banner2 } from "../../compoents/Banner/Banner2"
import { SolutionSiderBar } from "../../compoents/Solution/SolutionSiderBar"
import { HelpBar } from "../../compoents/HelpBar/HelpBar"
import { BottomBar } from "../../compoents/ButtomBar/ButtomBar"


export function Solution() {

    return (
        <div className="Solution">
            <Banner2 bannerType="solution" color="#fff"></Banner2>
            <SolutionSiderBar></SolutionSiderBar>
            <HelpBar></HelpBar>
            <BottomBar></BottomBar>
        </div>
    )
}