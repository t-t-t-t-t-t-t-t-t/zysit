import './scss/TopBar.scss'


export function TopBar({ children, labelList = ['变形监测', '压力监测', '水位监测', '流量监测', '环境量监测', '排水管网检测', '水工隧洞检测', '数据采集系列', '系统平台'], currentIdx, onHandleChangeIdx }) {
    return (
        <div className="TopBar">
            <div className="TopBarWrap">
                <div className="topContent">
                    {labelList.map((item, idx) => {
                        return (
                            <div className={['item', (idx == currentIdx) ? 'active' : null].join(' ')} key={idx} onClick={() => onHandleChangeIdx(idx)}>{item}</div>
                        )
                    })}
                </div>
                <div className="bottomContent">
                    {children}
                </div>
            </div>
        </div>
    )
}