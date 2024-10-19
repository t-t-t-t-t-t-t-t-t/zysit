import './scss/Banner2.scss'
import { useNavigate } from 'react-router-dom'
import AboutBanerSrc from '../../assets/imgs/About/About_banner.jpg'
export const Banner2 = ({ title = '关于智源', content = '始终践行“智能硬件驱动的安全检测场景解决方案供应商”的目标', color = "#fff", backgroundImg = AboutBanerSrc }) => {
    let navigate = useNavigate();
    return (
        <div className="Banner2">
            <div className='textWrap'>
                <div className="text" style={{ color: color }}>
                    <div className='title'>{title}</div>
                    <div className="content">{content}</div>
                    <div className="buttonWrap">
                        <div className="button" onClick={() => { navigate('/about') }}>
                            了解更多
                        </div>
                    </div>
                </div>
            </div>
            <div className='imgWrap'>
                <img className='img' src={backgroundImg} alt={title} />
            </div>
        </div >
    )
}