import './scss/SolutionLightCard.scss'
import icon_temp from '../../assets/icons/icon.png'
export function SolutionLightCard({ icon = icon_temp, title = '桥梁', content = '桥梁桥梁桥梁桥梁桥梁桥梁桥梁桥梁桥梁桥梁桥梁桥梁' }) {

    return (
        <div className="SolutionLightCard">
            <div className="iconWrap">
                <img className='img' src={icon} alt="" />
            </div>
            <div className="title">
                {title}
            </div>
            <div className="content">
                {content}
            </div>
        </div>
    )
}