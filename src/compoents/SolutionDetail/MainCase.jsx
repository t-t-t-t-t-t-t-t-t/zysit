import './scss/MainCase.scss'
import imgTemp from '../../assets/imgs/Solution/item1/桥梁/桥梁.jpg'
import { Button } from '../Button/Button'
export function MainCase({ img = imgTemp, caseList = [{ title: "典型案例", content: '典型案例典型案例典型案例典型案例典型案例典型案例典型案例典型案例典型案例典型案例典型案例典型案例典型案例典型案例' }, { title: "典型案例", content: '典型案例典型案例典型案例典型案例典型案例典型案例典型案例典型案例典型案例典型案例典型案例典型案例典型案例典型案例' }] }) {
    return (
        <div className="MainCase">
            <div className="MainCaseWrap">
                <div className="mainTitle">
                    典型案例
                </div>
                <div className="contentWrap">
                    <div className="imgWrap">
                        <img className='img' src={img} alt="" />
                    </div>
                    <div className="caseList">
                        {
                            caseList.map((item, idx) => {
                                return (
                                    <div className="case" key={idx}>
                                        <div className="title">
                                            {item.title}
                                        </div>
                                        <div className="content">
                                            {item.content}
                                        </div>
                                    </div>
                                )
                            })
                        }
                    </div>
                </div>
                <div className="buttonWrap">
                    <Button content='查看更多' url='/cases'></Button>
                </div>
            </div>
        </div>
    )
}