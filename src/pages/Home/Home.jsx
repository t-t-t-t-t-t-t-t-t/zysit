import { Banner2 } from "../../compoents/Banner/Banner2"
import { HomeTopBar } from "../../compoents/Home/HomeTopBar"
import { SolutionSiderBar } from "../../compoents/Solution/SolutionSiderBar"

import { HonorSwiper } from "../../compoents/About/HonorSwiper"
import { Partner } from "../../compoents/About/Partner"
import { HelpBar } from "../../compoents/HelpBar/HelpBar"
import { BottomBar } from "../../compoents/ButtomBar/ButtomBar"

export function Home() {

    return (
        <div className="Home">
            <Banner2 bannerType='home'></Banner2>
            <HomeTopBar></HomeTopBar>
            <SolutionSiderBar></SolutionSiderBar>
            <HonorSwiper></HonorSwiper>
            <Partner></Partner>
            <HelpBar></HelpBar>
            <BottomBar></BottomBar>
        </div>
    )
}