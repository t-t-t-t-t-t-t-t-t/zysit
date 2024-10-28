import './scss/DemandAnalysis.scss'
import { DemandCard } from "./DemandCard"

export function DemandAnalysis() {
    return (
        <div className="DemandAnalysis">
            <div className="DemandAnalysisWrap">
                <div className="mainTitle">
                    需求分析
                </div>
                <div className="cardWrap">
                    <DemandCard></DemandCard>
                    <DemandCard></DemandCard>
                    <DemandCard></DemandCard>
                </div>
            </div>
        </div>
    )
}