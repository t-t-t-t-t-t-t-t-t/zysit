import './Navigator.scss'
import { Logo } from './Logo'
import { NavigatorRight } from './NavigatorRight'
export function Navigator() {
    return (
        <div className="navigatorBar">
            <div className="content">
                <Logo></Logo>
                <NavigatorRight></NavigatorRight>
            </div>
        </div>
    )
}