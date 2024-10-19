import './scss/Banner1.scss'
import AboutBanerSrc from '../../assets/imgs/About/About_banner.jpg'
export const Banner1 = ({ title = '关于智源', content = '始终践行“智能硬件驱动的安全检测场景解决方案供应商”的目标', color = '#fff', backgroundImg = AboutBanerSrc }) => {
    return (
        <div className="Banner1">
            <div className='textWrap'>
                <div className="text" style={{ color: color }}>
                    <div className='title'>{title}</div>
                    <div className="content">{content}</div>
                </div>
            </div>
            <div className='imgWrap'>
                <img className='img' src={backgroundImg} alt={title} />
            </div>
        </div>
    )
}