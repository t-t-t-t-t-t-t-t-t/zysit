import './scss/SolutionLight.scss'
import { SolutionLightCard } from './SolutionLightCard'
export function SolutionLight() {

    return (
        <div className="SolutionLight">
            <div className="SolutionLightWrap">
                <div className="mainTitle">方案亮点</div>
                <div className="cardWrap">
                    <SolutionLightCard></SolutionLightCard>
                    <SolutionLightCard></SolutionLightCard>
                    <SolutionLightCard></SolutionLightCard>
                    <SolutionLightCard></SolutionLightCard>
                </div>
            </div>
        </div>
    )
}