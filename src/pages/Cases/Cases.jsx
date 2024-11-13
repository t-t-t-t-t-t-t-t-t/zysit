
import { Banner2 } from "../../compoents/Banner/Banner2"
import { CaseGuid } from '../../compoents/Case/CaseGuid'
import { CaseList } from '../../compoents/Case/CaseList'

import { HelpBar } from "../../compoents/HelpBar/HelpBar"
import { BottomBar } from "../../compoents/ButtomBar/ButtomBar"

export function Cases() {

    return (
        <div className="Cases">
            <Banner2 bannerType='cases'></Banner2>
            <CaseGuid></CaseGuid>
            <CaseList></CaseList>
            <HelpBar></HelpBar>
            <BottomBar></BottomBar>
        </div>
    )
}