import './scss/Banner2.scss'
import { Button } from '../Button/Button'
export const Banner2 = ({ banner = { title: '关于智源', content: '始终践行“智能硬件驱动的安全检测场景解决方案供应商”的目标', image: "" }, buttonContent = "了解更多", buttonUrl = '/about', marsk = false, color = "#fff", type = '1' }) => {
    return (
        <div className={['Banner2', marsk ? 'marsk' : ''].join(' ')} >
            <div className='textWrap'>
                <div className="text" style={{ color: color }}>
                    <div className='title'>{banner.title}</div>
                    <div className="content">{banner.content}</div>
                    <div className="buttonWrap">
                        <Button content={buttonContent} url={buttonUrl} type={type}></Button>
                    </div>
                </div>
            </div>
            <div className='imgWrap'>
                <img className='img' src={banner.image} alt={title} />
            </div>
        </div >
    )
}