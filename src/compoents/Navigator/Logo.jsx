import { NavLink } from "react-router-dom";
import logoSrc from '../../assets/imgs/logo.png'
export function Logo() {
    return (
        <div className='Logo'
            style={{
            }}>
            <NavLink
                to='/'
                className="logoLink" style={{
                    display: 'inline-block',
                    height: 0,
                    width: '185px'
                }} href='index.html'>
                <img className="logoImg"
                    style={{
                        display: 'inline-block',
                        width: '185px',
                        verticalAlign: 'text-bottom'
                    }} title="深圳市智源空间创新科技有限公司" alt="深圳市智源空间创新科技有限公司" src={logoSrc} />
            </NavLink>
        </div>
    );
}