import './scss/Part2.scss'
import { Logo } from '../../Navigator/Logo'
import { NavLink } from 'react-router-dom'
export function Part2() {

    return (
        <div className="Part2">
            <div className="Part2Wrap">
                <Logo></Logo>
                <div className="NavigatorBottom">
                    <NavLink to='/about'
                        className="link">
                        关于智源
                    </NavLink>
                    <NavLink to='/product'
                        className="link">
                        产品中心
                    </NavLink>
                    <NavLink to='/solution'
                        className="link">
                        解决方案
                    </NavLink>
                    <NavLink to='/cases'
                        className="link">
                        应用案例
                    </NavLink>
                    <NavLink to='/serve'
                        className="link">
                        服务支持
                    </NavLink>
                    <NavLink to='/news'
                        className="link">
                        新闻资讯
                    </NavLink>
                </div>
            </div>
        </div>
    )
}