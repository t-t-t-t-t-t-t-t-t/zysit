import './scss/DemandAnalysis.scss'
import { DemandCard } from "./DemandCard"

export function DemandAnalysis({ demandAnalysis }) {
    return (
        <div className="DemandAnalysis">
            <div className="DemandAnalysisWrap">
                <div className="mainTitle">
                    需求分析
                </div>
                <div className="cardWrap">
                    {
                        demandAnalysis && demandAnalysis.map((item, idx) => {
                            return (<DemandCard key={idx} title={item.title} content={item.content}></DemandCard>)
                        })
                    }
                </div>
            </div>
        </div>
    )
}