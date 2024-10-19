import { Banner2 } from "../../compoents/Banner/Banner2"
import ServeBannerSrc from '../../assets/imgs/Serve/Serve_banner.jpg'


export function Serve() {
    return (
        <div className="Serve">
            <Banner2 title="服务支持" content="服务支持描述" color="#fff" backgroundImg={ServeBannerSrc}></Banner2>
        </div>
    )
}