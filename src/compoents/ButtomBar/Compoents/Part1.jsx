import './scss/Part1.scss'

export function Part1() {
    return (
        <div className="Part1">
            <div className="Part1Wrap">
                <div className="left">
                    <div className="phoneNumWrap">
                        <div className="phoneNum">13691771927 周经理</div>
                        <div className="time">工作日9：00-18：30</div>
                    </div>
                    <div className='position'>
                        <div className="title">
                            公司地址
                        </div>
                        <div className="content">
                            广东省深圳市南山区粤海街道麻岭社区深南大道9966号威盛科技大厦一单元28楼
                        </div>
                    </div>
                </div>
                <div className="right">
                    <div className="img"></div>
                    <div className="text">
                        <div className="title">关注公众号</div>
                        <div className="content">智源空间科技</div>
                    </div>
                </div>
            </div>
        </div>
    )
}