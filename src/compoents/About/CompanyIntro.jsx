import './scss/CompanyIntro.scss'
import imgSrc from '../../assets/imgs/About/company.jpg'

export function CompanyIntro() {

    return (
        <div className="CompanyIntro">
            <div className="mainTitle">公司介绍</div>
            <div className="CompanyIntroWrap">
                <div className="imgWrap">
                    <img className='img' src={imgSrc} alt="" />
                </div>
                <div className="content">
                    深圳市智源空间创新科技有限公司，依托“深圳大学智慧水务研究中心”科技成果进行产业化，致力于水务水利大型基础设施健康检测监测、空天地水一体物联感知体系建设、智慧水务水利信息化系统建设。
                </div>
            </div>
        </div>
    )
}