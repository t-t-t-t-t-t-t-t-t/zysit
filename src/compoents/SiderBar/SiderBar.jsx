import './scss/SiderBar.scss'

export function SiderBar({ children, currentIdx, setCurrentIdx, itemList }) {
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
                    {itemList && itemList.map((item, idx) => (
                        <div className={['SiderBarItem', (idx == currentIdx) ? 'active' : ''].join(' ')} key={idx} onMouseEnter={e => { onHandleMouseEnterItem(idx) }}>
                            <div className="text">
                                {item.title}
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