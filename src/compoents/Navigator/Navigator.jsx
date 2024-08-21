import './Navigator.scss'
import { Logo } from './Logo'
import { NavigatorRight } from './NavigatorRight'
import { forwardRef } from 'react'
export const Navigator = forwardRef((props, navigatorDom) => {
    return (
        <div ref={navigatorDom} className="navigatorBar">
            <div className="content">
                <Logo></Logo>
                <NavigatorRight></NavigatorRight>
            </div>
        </div>
    )
})