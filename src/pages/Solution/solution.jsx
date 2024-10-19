import { Banner2 } from "../../compoents/Banner/Banner2"
import SolutionBannerSrc from '../../assets/imgs/Solution/Solution_banner.jpg'


export function Solution() {
    return (
        <div className="Solution">
            <Banner2 title="解决方案" content="解决方案描述" backgroundImg={SolutionBannerSrc} color="#fff"></Banner2>
        </div>
    )
}