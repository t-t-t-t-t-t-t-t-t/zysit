import './scss/ProductionSwiperItem.scss'
export function ProductionSwiperItem({ scene }) {
    return (
        <div className="ProductionSwiperItem">
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
        </div>
    )
}