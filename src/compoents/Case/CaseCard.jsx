import './scss/CaseCard.scss'
import { Link } from 'react-router-dom'

export function CaseCard({ _id, image, title = "水利水利水利水利水利水利水利水利水利水利水利水利" }) {

    return (
        <Link to={`/caseDetail?_id=${_id}`} style={{ textDecoration: 'none' }} className="CaseCard">
            <div className="imgWrap">
                <img className='img' src={image} alt="" />
            </div>
            <div className="title">
                {title}
            </div>
        </Link>
    )
}