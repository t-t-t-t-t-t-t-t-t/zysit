import './scss/SolutionLight.scss'
import { SolutionLightCard } from './SolutionLightCard'
export function SolutionLight({ heighLight }) {

    return (
        <div className="SolutionLight">
            <div className="SolutionLightWrap">
                <div className="mainTitle">方案亮点</div>
                <div className="cardWrap">
                    {
                        heighLight && heighLight.map((item, idx) => {
                            return (<SolutionLightCard key={idx} title={item.title} content={item.content}></SolutionLightCard>)
                        })
                    }
                </div>
            </div>
        </div>
    )
}