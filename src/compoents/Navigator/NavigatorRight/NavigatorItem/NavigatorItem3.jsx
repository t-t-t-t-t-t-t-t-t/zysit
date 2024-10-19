import './scss/NavigatorItem3.scss';

import { useState, useEffect } from 'react'
import { NavLink } from 'react-router-dom'
import { useLocation } from 'react-router-dom'

export function NavigatorItem3({ title, href }) {
    const [isInRoute, setisInRoute] = useState(false)
    const location = useLocation()
    useEffect(() => {
        setisInRoute(location.pathname == href)
    }, [location])

    return (
        <div className="NavigatorItem3">
            <NavLink to={href}
                style={{ textDecoration: 'none' }}
                className="link">
                <span>  {title}</span>
                <div className="buttonLine" style={{ width: isInRoute ? '100%' : '0%' }}>
                </div>
            </NavLink>
        </div>
    )
}