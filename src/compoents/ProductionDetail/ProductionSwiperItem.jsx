import './scss/ProductionSwiperItem.scss'
import { Link } from 'react-router-dom'
export function ProductionSwiperItem({ scene }) {
    return (
        <Link to='/solutionDetail' className="ProductionSwiperItem" style={{ textDecoration: 'none' }}>
            <div className="imgWrap">
                <img className='img' src={scene.img} alt="" />
            </div>
            <div className="textWrap">
                <div className="title">
                    {scene.title}
                </div>
                <div className="content">
                    {scene.content}
                </div>
            </div>
        </Link>
    )
}