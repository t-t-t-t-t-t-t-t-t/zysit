import './scss/SolutionIntro.scss'
export function SolutionIntro({ image, content = '场景介绍场景介绍场景介绍场景介绍场景介绍场景介绍场景介绍场景介绍场景介绍场景介绍场景介绍场景介绍场景介绍场景介绍场景介绍场景介绍场景介绍场景介绍场景介绍场景介绍场景介绍场景介绍场景介绍场景介绍场景介绍场景介绍场景介绍场景介绍场景介绍场景介绍场景介绍场景介绍场景介绍场景介绍场景介绍场景介绍场景介绍场景介绍场景介绍场景介绍场景介绍场景介绍场景介绍场景介绍场景介绍场景介绍场景介绍场景介绍场景介绍场景介绍场景介绍场景介绍场景介绍场景介绍场景介绍场景介绍场景介绍场景介绍场景介绍场景介绍场景介绍场景介绍场景介绍场景介绍场景介绍场景介绍场景介绍场景介绍场景介绍场景介绍场景介绍场景介绍场景介绍场景介绍场景介绍场景介绍' }) {
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
                    <img className='img' src={image} alt="" />
                </div>
            </div>
        </div>
    )
}