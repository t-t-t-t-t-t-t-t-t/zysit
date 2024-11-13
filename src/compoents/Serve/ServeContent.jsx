import './ServeContent.scss'
import img1 from '../../assets/imgs/Serve/1.jpg'
import img2 from '../../assets/imgs/Serve/2.jpg'
import img3 from '../../assets/imgs/Serve/3.jpg'
import img4 from '../../assets/imgs/Serve/4.jpg'
import img5 from '../../assets/imgs/Serve/5.jpg'
export function ServeContent() {
    const imgList = [{ image: img1, title: '技术咨询' }, { image: img2, title: '方案设计' }, {
        image: img3, title: '产品服务'
    }, { image: img4, title: '项目实施' }, { image: img5, title: '验收交付' }]

    return (
        <div className="ServeContent">
            <div className="mainTitle">服务支持</div>
            <div className="ServeContentWrap">
                <div className="content">智源空间能够根据客户实际需求提供技术咨询和定制化设计方案，并提供优质的产品服务，同时配备资深的专业施工团队，对项目施工、安装调试、验收交付、服务运维提供有效支撑。
                </div>
                <div className="imageList">
                    {imgList.map((item, idx) => {
                        return (
                            <div className="contentWrap" key={idx}>
                                <div className="imgWrap">
                                    <img className='img' src={item.image} alt="" />
                                </div>
                                <div className="title">{item.title}</div>
                            </div>
                        )
                    })}
                </div>
            </div>
        </div>
    )
}