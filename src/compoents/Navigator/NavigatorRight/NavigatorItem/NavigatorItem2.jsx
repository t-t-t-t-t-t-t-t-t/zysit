import './NavigatorItem2.scss'
import { useState, useRef, useEffect } from 'react'
import { NavLink } from 'react-router-dom'

export function NavigatorItem2({ title, content, href }) {
    const [isShowList, setIsShowList] = useState(false)
    const [isRotate, setIsRotate] = useState(false)
    const [listPos, setListPost] = useState(0)
    const nameDom = useRef(null)
    const [currentItem, setCurrentItem] = useState(0)
    // 初始化距离
    useEffect(() => {
        setListPost(nameDom.current.offsetHeight + 5)
    }, [])
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
        if (isShowList) {
            setIsShowList(false)
            setIsRotate(false)
            console.log('[][]')
        }
    }
    function onHandleMouseEnterItem(index) {
        setCurrentItem(index)
    }
    return (
        <div className="NavigatorItem2">
            <NavLink to={href} className="link"
                style={{ textDecoration: 'none' }}
                ref={nameDom}
                onMouseEnter={e => { onHandleMouseEnterName() }}
                onMouseLeave={e => { e.stopPropagation(); onHandleMouseLeaveName() }}>
                <span>  {title}</span>
                <s style={{ textDecoration: 'none', rotate: isRotate ? '180deg' : '0deg', }} ></s>
                <div className="buttonLine" style={{ width: isRotate ? '100%' : '0%' }}>
                </div>
            </NavLink>

            <div className="list" style={{ opacity: isShowList ? 1 : 0, zIndex: isShowList ? 100 : -1, top: listPos, cursor: isShowList ? 'pointer' : 'default' }} onMouseEnter={e => { e.stopPropagation(); onHandleMouseEnterList() }} onMouseLeave={e => { onHandleMouseLeaveList() }}>
                <div className="listLeft">
                    {content.map((item, index) => (
                        <NavLink
                            to={item.href}
                            key={item.id} className="listItem"
                            style={{ cursor: isShowList ? 'pointer' : 'default' }}
                            onMouseEnter={e => { onHandleMouseEnterItem(index); }}
                        >
                            <span>{item.name}</span>
                        </NavLink>
                    ))}
                </div>
                <div className="listRight">{
                    content[currentItem].content.map(item => (
                        <NavLink to={item.href} className="listContentItem" key={item.id}>
                            <i style={{ textDecoration: 'none', rotate: '-90deg' }} ></i>
                            {item.name}
                        </NavLink>))
                }
                </div>
            </div>
        </div>
    )
}