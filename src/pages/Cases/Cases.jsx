import { Banner2 } from "../../compoents/Banner/Banner2"
import CaseBannerSrc from '../../assets/imgs/Case/Case_banner.jpg'

export function Cases() {
    return (
        <div className="Cases">
            <Banner2 title="应用案例" content="应用案例描述" backgroundImg={CaseBannerSrc}></Banner2>
        </div>
    )
}