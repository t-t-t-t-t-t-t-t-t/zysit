
import { HelpBar } from "../../compoents/HelpBar/HelpBar"
import { BottomBar } from "../../compoents/ButtomBar/ButtomBar"
import { CaseContent } from "../../compoents/CaseDetail/CaseContent"
export function CaseDetail() {
    return (
        <div className="CaseDetail">
            <CaseContent></CaseContent>
            <HelpBar></HelpBar>
            <BottomBar></BottomBar>
        </div>
    )
}