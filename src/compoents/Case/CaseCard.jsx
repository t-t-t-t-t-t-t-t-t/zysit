import './scss/CaseCard.scss'
import imgSrc from '../../assets/imgs/Solution/item1/桥梁/桥梁.jpg'
import { Link } from 'react-router-dom'

export function CaseCard({ img = imgSrc, title = "水利水利水利水利水利水利水利水利水利水利水利水利" }) {


    return (
        <Link to={`/caseDetail?name=${title}`} className="CaseCard">
            <div className="imgWrap">
                <img className='img' src={img} alt="" />
            </div>
            <div className="title">
                {title}
            </div>
        </Link>
    )
}