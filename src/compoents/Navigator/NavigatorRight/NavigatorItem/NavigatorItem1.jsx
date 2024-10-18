import './NavigatorItem1.scss'
import { useState, useRef, useEffect } from 'react'
import { NavLink } from 'react-router-dom'
import { useLocation } from 'react-router-dom'

export function NavigatorItem1({ title,
    content, href }) {
    const [isInRoute, setisInRoute] = useState(false)
    const [isShowList, setIsShowList] = useState(false)
    const [isRotate, setIsRotate] = useState(false)
    const [listPos, setListPost] = useState(0)
    const nameDom = useRef(null)
    const location = useLocation()
    let haveContent = content.length
    // 初始化距离
    useEffect(() => {
        setListPost(nameDom.current.offsetHeight + 5)
    }, [])
    useEffect(() => {
        setisInRoute(location.pathname == href)
    }, [location])
    function onHandleMouseEnterName() {
        setIsShowList(true)
        setIsRotate(true)
        setListPost(nameDom.current.offsetHeight)
    }
    function onHandleMouseLeaveName() {
        setIsShowList(false)
        setIsRotate(false)
        setListPost(nameDom.current.offsetHeight + 10)
    }
    function onHandleMouseEnterList() {
        if (isShowList) {
            setIsRotate(true)
            setIsShowList(true)
            setListPost(nameDom.current.offsetHeight)
        }
    }
    function onHandleMouseLeaveList() {
        setIsShowList(false)
        setIsRotate(false)
    }
    return (
        <div className="NavigatorItem1">
            <NavLink to={href}
                style={{ textDecoration: 'none' }}
                className="link"
                ref={nameDom}
                onMouseEnter={e => { e.stopPropagation(); onHandleMouseEnterName() }} onMouseLeave={e => { e.stopPropagation(); onHandleMouseLeaveName() }}>
                <span>  {title}</span>
                <s style={{ display: haveContent ? 'block' : 'none', textDecoration: 'none', rotate: isRotate ? '180deg' : '0deg', }} ></s>
                <div className="buttonLine" style={{ width: isInRoute || isRotate ? '100%' : '0%' }}>
                </div>
            </NavLink>

            <div className="list" style={{ display: haveContent ? 'block' : 'none', zIndex: isShowList ? 100 : -1, opacity: isShowList ? 1 : 0, top: listPos, cursor: isShowList ? 'pointer' : 'default' }} onMouseEnter={e => { e.stopPropagation(); onHandleMouseEnterList() }} onMouseLeave={e => { e.stopPropagation(); onHandleMouseLeaveList() }}>
                {content.map((item, index) => (
                    <NavLink to={item.href} key={index} className="listItem" style={{ cursor: isShowList ? 'pointer' : 'default' }}>
                        <span>{item.name}</span>
                    </NavLink>
                ))}
            </div>
        </div>
    )
}