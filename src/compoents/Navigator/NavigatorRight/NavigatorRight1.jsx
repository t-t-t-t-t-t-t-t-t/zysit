import './NavigatorRight1.scss'
import './NavigatorItem/NavigatorItem1.scss'
import './NavigatorItem/NavigatorItem2.scss'
import { useState, useRef, useEffect } from 'react'
import { NavLink } from 'react-router-dom'
function NavigatorItem1({ title,
    content, href }) {
    const [isShowList, setIsShowList] = useState(false)
    const [isRotate, setIsRotate] = useState(false)
    const [listPos, setListPost] = useState(0)
    const nameDom = useRef(null)
    let haveContent = content.length
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
                <div className="buttonLine" style={{ width: isRotate ? '100%' : '0%' }}>
                </div>
            </NavLink>

            <div className="list" style={{ display: haveContent ? 'block' : 'none', zIndex: isShowList ? 100 : -1, opacity: isShowList ? 1 : 0, top: listPos, cursor: isShowList ? 'pointer' : 'default' }} onMouseEnter={e => { e.stopPropagation(); onHandleMouseEnterList() }} onMouseLeave={e => { e.stopPropagation(); onHandleMouseLeaveList() }}>
                {content.map(item => (
                    <NavLink to={item.href} key={item.id} className="listItem" style={{ cursor: isShowList ? 'pointer' : 'default' }}>
                        <span>{item.name}</span>
                    </NavLink>
                ))}
            </div>
        </div>
    )
}
function NavigatorItem2({ title, content, href }) {
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
export function NavigatorRight1() {
    const NavigatorItem1Content1 = {
        title: '产品中心',
        href: '/product',
        content:
            [{ name: '企业介绍', id: 0, href: '' },
            { name: '变形监测', id: 1, href: '' },
            { name: '压力监测', id: 2, href: '' },
            { name: '水位监测', id: 3, href: '' },
            { name: '流量监测', id: 4, href: '' },
            { name: '环境量监测', id: 5, href: '' },
            { name: '排水管网检测', id: 6, href: '' },
            { name: '水工隧道检测', id: 7, href: '' },
            { name: '数据采集系列', id: 8, href: '' },
            { name: '系统平台', id: 9, href: '' }
            ]
    }
    const NavigatorItem2Content = {
        title: '解决方案',
        href: '/solution',
        content:
            [{
                name: '交通',
                id: 0,
                href: '',
                content: [{
                    name: '桥梁',
                    id: 0,
                    href: '',
                },
                {
                    name: '公路',
                    id: 1,
                    href: ''
                },
                {
                    name: '边坡',
                    id: 2,
                    href: ''
                },
                {
                    name: '隧道',
                    id: 3,
                    href: ''
                },
                {
                    name: '地铁',
                    id: 4,
                    href: ''
                },
                {
                    name: '高铁',
                    id: 5,
                    href: ''
                }]
            },
            {
                name: '水利',
                id: 1,
                href: '',
                content: [{
                    name: '水库大坝',
                    id: 0,
                    href: '',
                },
                {
                    name: '水工隧道',
                    id: 1,
                    href: ''
                },
                {
                    name: '河道',
                    id: 2,
                    href: ''
                },
                {
                    name: '排水管网',
                    id: 3,
                    href: ''
                }]
            },
            {
                name: '建筑',
                id: 2,
                href: '',
                content: [{
                    name: '楼宇',
                    id: 0,
                    href: '',
                },
                {
                    name: '基坑',
                    id: 1,
                    href: ''
                }]
            },
            {
                name: '自然资源',
                id: 3,
                href: '',
                content: [{
                    name: '地灾',
                    id: 0,
                    href: '',
                },
                {
                    name: '露天矿厂',
                    id: 1,
                    href: ''
                },
                {
                    name: '尾矿车',
                    id: 2,
                    href: ''
                }]
            }]
    }
    const NavigatorItem1Content2 = {
        title: '应用案例',
        href: '/cases',
        content: [{ name: '交通工程', id: 0, href: '' },
        { name: '自然资源', id: 1, href: '' },
        { name: '信息化平台', id: 2, href: '' },
        ]
    }
    const NavigatorItem1Content3 = {
        title: '服务支持',
        href: '/serve',
        content: []
    }
    const NavigatorItem1Content4 = {
        title: '新闻资讯',
        href: '/news',
        content: []
    }
    const NavigatorItem1Content5 = {
        title: '关于我们',
        href: '/about',
        content: [{ name: '公司简介', id: 0, href: '' },
        { name: '联系我们', id: 1, href: '' },
        { name: '人才招聘', id: 2, href: '' },
        ]
    }
    return (
        <div className="NavigatorRight1">
            <NavigatorItem1
                title={NavigatorItem1Content1.title}
                content={NavigatorItem1Content1.content}
                href={NavigatorItem1Content1.href}></NavigatorItem1>
            <NavigatorItem2
                title={NavigatorItem2Content.title}
                content={NavigatorItem2Content.content}
                href={NavigatorItem2Content.href}></NavigatorItem2>
            <NavigatorItem1
                title={NavigatorItem1Content2.title}
                content={NavigatorItem1Content2.content}
                href={NavigatorItem1Content2.href}
            ></NavigatorItem1>
            <NavigatorItem1
                title={NavigatorItem1Content3.title}
                content={NavigatorItem1Content3.content}
                href={NavigatorItem1Content3.href}
            ></NavigatorItem1>
            <NavigatorItem1
                title={NavigatorItem1Content4.title}
                content={NavigatorItem1Content4.content}
                href={NavigatorItem1Content4.href}
            ></NavigatorItem1>
            <NavigatorItem1
                title={NavigatorItem1Content5.title}
                content={NavigatorItem1Content5.content}
                href={NavigatorItem1Content5.href}
            ></NavigatorItem1>
        </div>
    )
}