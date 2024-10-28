import './scss/Banner2.scss'
import AboutBanerSrc from '../../assets/imgs/About/About_banner.jpg'
import { Button } from '../Button/Button'
import { type } from '@testing-library/user-event/dist/type'
export const Banner2 = ({ title = '关于智源', content = '始终践行“智能硬件驱动的安全检测场景解决方案供应商”的目标', buttonContent = "了解更多", buttonUrl = '/about', marsk = false, color = "#fff", backgroundImg = AboutBanerSrc, type = '1' }) => {
    return (
        <div className={['Banner2', marsk ? 'marsk' : ''].join(' ')} >
            <div className='textWrap'>
                <div className="text" style={{ color: color }}>
                    <div className='title'>{title}</div>
                    <div className="content">{content}</div>
                    <div className="buttonWrap">
                        <Button content={buttonContent} url={buttonUrl} type={type}></Button>
                    </div>
                </div>
            </div>
            <div className='imgWrap'>
                <img className='img' src={backgroundImg} alt={title} />
            </div>
        </div >
    )
}