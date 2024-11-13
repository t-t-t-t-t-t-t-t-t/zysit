import './scss/TopBar.scss'


export function TopBar({ children, labelList, currentIdx, onHandleChangeIdx }) {
    return (
        <div className="TopBar">
            <div className="TopBarWrap">
                <div className="topContent">
                    {labelList && labelList.map((item, idx) => {
                        return (
                            <div className={['item', (idx == currentIdx) ? 'active' : null].join(' ')} key={idx} onClick={() => onHandleChangeIdx(idx)}>{item.title}</div>
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