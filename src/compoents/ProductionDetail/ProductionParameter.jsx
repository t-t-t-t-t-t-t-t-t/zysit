import './scss/ProductionParameter.scss'
export function ProductionParameter({ parameter }) {

    return (
        <div className="ProductionParameter">
            <div className="ProductionParameterWrap">
                <div className="title">技术参数</div>
                <div className="content">
                    <div className="head">
                        <div className="label">产品功能</div>
                        <div className="value">详细参数</div>
                    </div>
                    {parameter.map((item, idx) => (
                        <div className="item">
                            <div className="label">
                                {item.label}
                            </div>
                            <div className="value">
                                {item.content}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}