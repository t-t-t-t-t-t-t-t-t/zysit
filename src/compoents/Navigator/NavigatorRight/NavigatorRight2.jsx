import './scss/NavigatorRight2.scss'
import phoneSrc from '../../../assets/icons/phone.png'
export function NavigatorRight2() {
    return (
        <div className="NavigatorRight2" >
            <img className="phoneIcon" src={phoneSrc} alt="" />
            <span className="phoneNum">
                13691771927
            </span>
        </div>
    )
}