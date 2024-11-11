import { Banner1 } from "../../compoents/Banner/Banner1"
import { CompanyIntro } from '../../compoents/About/CompanyIntro'
import { CompanyCulture } from '../../compoents/About/CompanyCulture'
import { HelpBar } from "../../compoents/HelpBar/HelpBar"
import { BottomBar } from "../../compoents/ButtomBar/ButtomBar"
import { HonorSwiper } from '../../compoents/About/HonorSwiper'
import { useBannerHooks } from '../../hooks/BannerHooks'
import { useState, useEffect } from "react"

export function About() {
    const [banner, setBanner] = useState({})// banner数据
    useEffect(() => {// 用useState直接在内部更新，会导致死循环
        useBannerHooks().getBannerList('about').then(res => {
            setBanner(res[0])
        })
    }, [])

    return (
        <div className="About">
            <Banner1 banner={banner} color='#fff' ></Banner1>
            <CompanyIntro></CompanyIntro>
            <CompanyCulture></CompanyCulture>
            <HonorSwiper></HonorSwiper>
            <HelpBar></HelpBar>
            <BottomBar></BottomBar>
        </div>
    )
}