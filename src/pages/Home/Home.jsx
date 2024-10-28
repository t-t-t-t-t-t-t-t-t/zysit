import { Banner2 } from "../../compoents/Banner/Banner2"
import { HomeTopBar } from "../../compoents/Home/HomeTopBar"
import { HelpBar } from "../../compoents/HelpBar/HelpBar"
import { BottomBar } from "../../compoents/ButtomBar/ButtomBar"

export function Home() {
    return (
        <div className="Home">
            <Banner2 title="首页" content="首页描述"></Banner2>
            <HomeTopBar></HomeTopBar>
            <HelpBar></HelpBar>
            <BottomBar></BottomBar>
        </div>
    )
}