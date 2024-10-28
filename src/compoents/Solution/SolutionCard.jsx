import './scss/SolutionCard.scss'
import icon_temp from '../../assets/imgs/Solution/item1/桥梁/icon.png'
import icon_active_temp from '../../assets/imgs/Solution/item1/桥梁/icon_active.png'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

export function SolutionCard({ title = "科技", content = "科技科技科技科技科技科技科技科技科技科技科技科技科技科技科技", icon = icon_temp, icon_active = icon_active_temp }) {
    const navigate = useNavigate();
    const [iconActive, seticonActive] = useState(false)
    function handleMouseEnter() {
        seticonActive(true)
    }
    function handleMouseLeave() {
        seticonActive(false)
    }
    function pageTo() {
        navigate('/solutionDetail')
    }
    return (
        <div className="SolutionCard" onClick={pageTo} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
            <div className="iconBar">
                <div className="iconWrap">
                    <img className={['icon', iconActive ? '' : 'active'].join(' ')} src={icon} alt="" />
                    <img className={['icon', iconActive ? 'active' : ''].join(' ')} src={icon_active} alt="" />
                </div>
                <div className="decoration">
                </div>
            </div>
            <div className="textWrap">
                <div className="title">
                    {title}
                </div>
                <div className="content">
                    {content}
                </div>
            </div>
        </div>
    )
}