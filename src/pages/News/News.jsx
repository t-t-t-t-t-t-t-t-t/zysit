import { Banner1 } from "../../compoents/Banner/Banner1"
import NewsBannerSrc from '../../assets/imgs/News/News_banner.jpg'


export function News() {
    return (
        <div className="News">
            <Banner1 title="新闻资讯" color="#000" content="新闻资讯描述" backgroundImg={NewsBannerSrc}></Banner1>
        </div>
    )
}