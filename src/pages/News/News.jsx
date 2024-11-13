import { Banner1 } from "../../compoents/Banner/Banner1"
import { HelpBar } from "../../compoents/HelpBar/HelpBar"
import { BottomBar } from "../../compoents/ButtomBar/ButtomBar"
import { NewsContent } from '../../compoents/News/NewsContent'
export function News() {
    return (
        <div className="News">
            <Banner1 bannerType='news' color="#fff"></Banner1>
            <NewsContent></NewsContent>
            <HelpBar></HelpBar>
            <BottomBar></BottomBar>
        </div>
    )
}