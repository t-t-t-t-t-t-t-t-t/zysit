import { Banner1 } from "../../compoents/Banner/Banner1"
import AboutBannerSrc from '../../assets/imgs/About/About_banner.jpg'
export function About() {
    return (
        <div className="About">
            <Banner1 title="关于智源" content="始终践行“智能硬件驱动的安全检测场景解决方案供应商”的目标" color='#fff' backgroundImg={AboutBannerSrc}></Banner1>
        </div>
    )
}