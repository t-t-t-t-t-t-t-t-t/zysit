import './scss/DemandCard.scss'
import { useState } from 'react'
import icon_temp from '../../assets/imgs/Solution/item1/桥梁/icon.png'
import icon_active_temp from '../../assets/imgs/Solution/item1/桥梁/icon_active.png'
export function DemandCard({ title = '桥梁', content = '桥梁桥梁桥梁桥梁桥梁桥梁桥梁', icon = icon_temp, icon_active = icon_active_temp }) {
    const [iconActive, seticonActive] = useState(false)
    function handleMouseEnter() {
        seticonActive(true)
    }
    function handleMouseLeave() {
        seticonActive(false)
    }
    return (
        <div className="DemandCard" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
            <div className="iconWrap">
                <img className={['icon', iconActive ? '' : 'active'].join(' ')} src={icon} alt="" />
                <img className={['icon', iconActive ? 'active' : ''].join(' ')} src={icon_active} alt="" />
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