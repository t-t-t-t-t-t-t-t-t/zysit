import { Banner3 } from "../../compoents/Banner/Banner3"
import { SolutionIntro } from "../../compoents/SolutionDetail/SolutionIntro"
import { DemandAnalysis } from "../../compoents/SolutionDetail/demandAnalysis"
import { SolutionLight } from "../../compoents/SolutionDetail/SolutionLight"
import { MainProduction } from "../../compoents/SolutionDetail/MainProduction"
import { MainCase } from "../../compoents/SolutionDetail/MainCase"
import { HelpBar } from "../../compoents/HelpBar/HelpBar"
import { BottomBar } from "../../compoents/ButtomBar/ButtomBar"

import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom"
import { useSolutionHooks } from "../../hooks/SolutionHooks";
export function SolutionDetail() {
    let [searchParams, setSearchParams] = useSearchParams()
    const _id = searchParams.get('_id');
    const [solutionData, setSolutionData] = useState()
    useEffect(() => {
        useSolutionHooks().getSolutionList(_id).then(res => {
            setSolutionData(res[0])
            console.log(res[0])
        }).catch(err => { console.log(err) })
    }, [])
    return (
        <div className="SolutionDetail">
            <Banner3 title={solutionData ? solutionData.title : null} content="" image={solutionData ? solutionData.bannerImage : null} color="black" type="" marsk={true} buttonContent='立即咨询'></Banner3>
            <SolutionIntro image={solutionData ? solutionData.contentImage : null} content={solutionData ? solutionData.content : null}></SolutionIntro>
            <DemandAnalysis demandAnalysis={solutionData ? solutionData.demandAnalysis : null}></DemandAnalysis>
            <SolutionLight heighLight={solutionData ? solutionData.heighLight : null}></SolutionLight>
            <MainProduction mainProduct={solutionData ? solutionData.mainProduct : null}></MainProduction>
            <MainCase mainCaseImage={solutionData ? solutionData.mainCaseImage : null} mainCase={solutionData ? solutionData.mainCase : null}></MainCase>
            <HelpBar></HelpBar>
            <BottomBar></BottomBar>
        </div>
    )
}