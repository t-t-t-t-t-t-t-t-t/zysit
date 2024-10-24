import './scss/SiderBar.scss'
import { useState } from 'react'

export function SiderBar({ children, currentIdx, setCurrentIdx, itemList = ['变形监测', '压力监测', '水位监测', '流量监测', '环境量监测', '排水管网检测', '水工隧洞检测', '数据采集系列', '系统平台'] }) {
    /**
     * @param setCurrentIdx 把SiderBar当前的idx返回给父盒子
     */
    const onHandleMouseEnterItem = (idx) => {
        setCurrentIdx(idx)
    }
    return (
        <div className="SiderBar">
            <div className="SiderBarWrap">
                <div className="SiderBarLeft">
                    {itemList.map((item, idx) => (
                        <div className={['SiderBarItem', (idx == currentIdx) ? 'active' : ''].join(' ')} key={idx} onMouseEnter={e => { onHandleMouseEnterItem(idx) }}>
                            <div className="text">
                                {item}
                            </div>
                            <s className='icon'></s>
                        </div>
                    ))}
                </div>
                <div className="SiderBarRight">
                    {children}
                </div>
            </div>
        </div>
    )
}