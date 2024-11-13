import './scss/SwiperItem.scss'
export function SwiperItem({ image, title }) {
    return (
        <div className="SwiperItem">
            <img className='img' src={image} alt="" />
            <div className="title">{title}</div>
        </div>
    )
}