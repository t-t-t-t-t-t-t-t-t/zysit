import CaseBannerSrc from '../../assets/imgs/Case/Case_banner.jpg'

import { Banner2 } from "../../compoents/Banner/Banner2"
import { CaseGuid } from '../../compoents/Case/CaseGuid'
import { CaseList } from '../../compoents/Case/CaseList'


import { HelpBar } from "../../compoents/HelpBar/HelpBar"
import { BottomBar } from "../../compoents/ButtomBar/ButtomBar"
export function Cases() {
    const [banner, setBanner] = useState({})// banner数据
    useEffect(() => {// 用useState直接在内部更新，会导致死循环
        useBannerHooks().getBannerList('about').then(res => {
            setBanner(res[0])
        })
    }, [])
    return (
        <div className="Cases">
            <Banner2 title="应用案例" content="应用案例描述" backgroundImg={CaseBannerSrc}></Banner2>
            <CaseGuid></CaseGuid>
            <CaseList></CaseList>


            <HelpBar></HelpBar>
            <BottomBar></BottomBar>
        </div>
    )
}