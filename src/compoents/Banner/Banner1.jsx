import './scss/Banner1.scss'
export const Banner1 = ({ banner = { title: '关于智源', content: '始终践行“智能硬件驱动的安全检测场景解决方案供应商”的目标', image: "" }, color = '#fff' }) => {
    return (
        <div className="Banner1">
            <div className='textWrap'>
                <div className="text" style={{ color: color }}>
                    <div className='title'>{banner.title}</div>
                    <div className="content">{banner.content}</div>
                </div>
            </div>
            <div className='imgWrap'>
                <img className='img' src={banner.image} alt={banner.title} />
            </div>
        </div>
    )
}