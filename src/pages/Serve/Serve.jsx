import { Banner2 } from "../../compoents/Banner/Banner2"
import { ServeContent } from "../../compoents/Serve/ServeContent"
import { HelpBar } from "../../compoents/HelpBar/HelpBar"
import { BottomBar } from "../../compoents/ButtomBar/ButtomBar"


export function Serve() {

    return (
        <div className="Serve">
            <Banner2 bannerType='serve' color="#fff"></Banner2>
            <ServeContent></ServeContent>
            <HelpBar></HelpBar>
            <BottomBar></BottomBar>
        </div>
    )
}