import { Banner2 } from "../../compoents/Banner/Banner2"
import ProductionBannerSrc from '../../assets/imgs/Production/Production_banner.jpg'

export function Production() {
    return (
        <div className="Production">
            <Banner2 title="产品中心" content='产品中心描述' backgroundImg={ProductionBannerSrc}></Banner2>
        </div>
    )
}