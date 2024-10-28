import './scss/SolutionIntro.scss'
import imgTemp from '../../assets/imgs/Solution/item1/桥梁/桥梁.jpg'
export function SolutionIntro({ img = imgTemp, content = '场景介绍场景介绍场景介绍场景介绍场景介绍场景介绍场景介绍场景介绍场景介绍场景介绍场景介绍场景介绍场景介绍场景介绍场景介绍场景介绍场景介绍场景介绍场景介绍场景介绍场景介绍场景介绍场景介绍场景介绍场景介绍场景介绍场景介绍场景介绍场景介绍场景介绍场景介绍场景介绍场景介绍场景介绍场景介绍场景介绍场景介绍场景介绍场景介绍场景介绍场景介绍场景介绍场景介绍场景介绍场景介绍场景介绍场景介绍场景介绍场景介绍场景介绍场景介绍场景介绍场景介绍场景介绍场景介绍场景介绍场景介绍场景介绍场景介绍场景介绍场景介绍场景介绍场景介绍场景介绍场景介绍场景介绍场景介绍场景介绍场景介绍场景介绍场景介绍场景介绍场景介绍场景介绍场景介绍场景介绍' }) {
    return (
        <div className="SolutionIntro">
            <div className="SolutionIntroWrap">
                <div className="contentWrap">
                    <div className="title">
                        方案介绍
                    </div>
                    <div className="content">
                        {content}
                    </div>
                </div>
                <div className="imgWrap">
                    <img className='img' src={img} alt="" />
                </div>
            </div>
        </div>
    )
}