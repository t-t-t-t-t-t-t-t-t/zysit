import './scss/ProductionParameter.scss'
export function ProductionParameter({ parameter }) {

    return (
        <div className="ProductionParameter" id='2'>
            <div className="ProductionParameterWrap">
                <div className="title">技术参数</div>
                <div className="content">
                    <div className="head">
                        <div className="label">产品功能</div>
                        <div className="value">详细参数</div>
                    </div>
                    {parameter && parameter.map((item, idx) => (
                        <div className="item" key={idx}>
                            <div className="label">
                                {item.key}
                            </div>
                            <div className="value">
                                {item.value}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}