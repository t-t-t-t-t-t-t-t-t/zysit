import './scss/SwiperItem.scss'
import imgSrc from '../../assets/imgs/About/Honor/1.jpg'

export function SwiperItem({ img = imgSrc, title = "titletitletitletitle" }) {
    return (
        <div className="SwiperItem">
            <img className='img' src={img} alt="" />
            <div className="title">{title}</div>
        </div>
    )
}