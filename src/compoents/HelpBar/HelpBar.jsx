import './HelpBar.scss'
import HelpBg from '../../assets/imgs/HelpBar/HelpBarBg.jpg'
export function HelpBar() {

    return (
        <div className="HelpBar">
            <div className="text">
                需要帮助? 我们为您提供解决方案
            </div>
            <div className="buttonWrap">
                <div className="button" onClick={() => { navigate('/about') }}>
                    联系我们
                </div>
            </div>
        </div>
    )
}