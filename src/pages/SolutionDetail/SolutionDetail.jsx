import { Banner2 } from "../../compoents/Banner/Banner2"
import { SolutionIntro } from "../../compoents/SolutionDetail/SolutionIntro"
import { DemandAnalysis } from "../../compoents/SolutionDetail/demandAnalysis"
import { SolutionLight } from "../../compoents/SolutionDetail/SolutionLight"
import { MainProduction } from "../../compoents/SolutionDetail/MainProduction"
import { MainCase } from "../../compoents/SolutionDetail/MainCase"
import { HelpBar } from "../../compoents/HelpBar/HelpBar"
import { BottomBar } from "../../compoents/ButtomBar/ButtomBar"

export function SolutionDetail() {
    return (
        <div className="SolutionDetail">
            <Banner2 title="桥梁" content="" color="black" type="" marsk={true} buttonContent='立即咨询'></Banner2>
            <SolutionIntro></SolutionIntro>
            <DemandAnalysis></DemandAnalysis>
            <SolutionLight></SolutionLight>
            <MainProduction></MainProduction>
            <MainCase></MainCase>
            <HelpBar></HelpBar>
            <BottomBar></BottomBar>
        </div>
    )
}