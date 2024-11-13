import './scss/ProductionCard.scss'
import { NavLink } from 'react-router-dom';
export function ProductionCard({ title, content, image, _id, isXin = true, isHot = true, marginRight = '10px' }) {
    return (
        <NavLink to={`/productDetail?_id=${_id}`} className="ProductionCard" style={{ marginRight: marginRight }}>
            <div className='New' style={{ display: isXin ? 'block' : 'none', textDecoration: 'none' }}>新品推荐</div>
            <div className="ProductionCardWrap">
                <div className="imgWrap">
                    <img className='img' src={image} alt="" />
                </div>
                <div className="title"> <div className='text'>{title}</div><div style={{ display: isHot ? 'block' : 'none', textDecoration: 'none' }} className='Hot'>HOT</div></div>
                <div className="content"> {content} </div>
            </div>
        </NavLink>
    )
}