import { NavLink } from "react-router-dom";
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

                    }} title="深圳市智源空间创新科技有限公司" alt="深圳市智源空间创新科技有限公司" src="//32584018.s21i.faiusr.com/4/ABUIABAEGAAgio20tAYosuqv4gQwhQc4jwI.png" />
            </NavLink>
        </div>
    );
}