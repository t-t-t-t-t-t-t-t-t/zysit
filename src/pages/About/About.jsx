import { Banner1 } from "../../compoents/Banner/Banner1"
import { CompanyIntro } from '../../compoents/About/CompanyIntro'
import { CompanyCulture } from '../../compoents/About/CompanyCulture'
import { HelpBar } from "../../compoents/HelpBar/HelpBar"
import { BottomBar } from "../../compoents/ButtomBar/ButtomBar"
import { HonorSwiper } from '../../compoents/About/HonorSwiper'


export function About() {

    return (
        <div className="About">
            <Banner1 bannerType="about" color='#fff' ></Banner1>
            <CompanyIntro></CompanyIntro>
            <CompanyCulture></CompanyCulture>
            <HonorSwiper></HonorSwiper>
            <HelpBar></HelpBar>
            <BottomBar></BottomBar>
        </div>
    )
}