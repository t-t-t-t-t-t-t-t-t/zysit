import AboutBannerSrc from '../../assets/imgs/About/About_banner.jpg'
import { Banner1 } from "../../compoents/Banner/Banner1"
import { CompanyIntro } from '../../compoents/About/CompanyIntro'
import { CompanyCulture } from '../../compoents/About/CompanyCulture'
import { HelpBar } from "../../compoents/HelpBar/HelpBar"
import { BottomBar } from "../../compoents/ButtomBar/ButtomBar"
import { HonorSwiper } from '../../compoents/About/HonorSwiper'
export function About() {
    return (
        <div className="About">
            <Banner1 title="关于智源" content="始终践行“智能硬件驱动的安全检测场景解决方案供应商”的目标" color='#fff' backgroundImg={AboutBannerSrc}></Banner1>
            <CompanyIntro></CompanyIntro>
            <CompanyCulture></CompanyCulture>
            <HonorSwiper></HonorSwiper>
            <HelpBar></HelpBar>
            <BottomBar></BottomBar>
        </div>
    )
}