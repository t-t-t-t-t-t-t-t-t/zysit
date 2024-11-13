import './scss/MainCase.scss'
import { Button } from '../Button/Button'
import { NavLink } from 'react-router-dom'
export function MainCase({ mainCaseImage, mainCase }) {
    return (
        <div className="MainCase">
            <div className="MainCaseWrap">
                <div className="mainTitle">
                    典型案例
                </div>
                <div className="contentWrap">
                    <div className="imgWrap">
                        {mainCaseImage && <img className='img' src={mainCaseImage} alt="" />}
                    </div>
                    <div className="caseList">
                        {
                            mainCase && mainCase.map((item, idx) => {
                                return (
                                    <NavLink style={{ textDecoration: 'none', display: 'block' }} to={`/caseDetail?_id=${item._id}`} className="case" key={idx}>
                                        <div className="title">
                                            {item.title}
                                        </div>
                                    </NavLink>
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