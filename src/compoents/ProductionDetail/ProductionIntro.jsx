import './scss/ProductionIntro.scss'
export function ProductionIntro({ productionImg, title, content }) {
    return (
        <div className="ProductionIntro" id='1'>
            <div className="ProductionIntroWrap">
                <div className="left">
                    <img className="img" src={productionImg} alt="" />
                </div>
                <div className="right">
                    <div className="mainTitle">产品介绍</div>
                    <div className="title">{title}</div>
                    <div className="content">
                        {content}
                    </div>
                    <div className="buttonWrap">
                        <div className="button" onClick={() => { navigate('/about') }}>
                            联系我们
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}