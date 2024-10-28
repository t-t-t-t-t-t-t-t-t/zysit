import './scss/CompanyIntro.scss'
import imgSrc from '../../assets/imgs/Solution/item1/桥梁/桥梁.jpg'

export function CompanyIntro() {

    return (
        <div className="CompanyIntro">
            <div className="mainTitle">公司介绍</div>
            <div className="CompanyIntroWrap">
                <div className="imgWrap">
                    <img className='img' src={imgSrc} alt="" />
                </div>
                <div className="content">
                    杭州鲁尔物联科技有限公司是由留学德国的博士团队于2013年归国创立的国家高新技术企业，连续五年入选杭州准独角兽企业榜单，入选2023、2024中国未来独角兽企业榜单，入选工信部专精特新重点“小巨人”企业，获评浙江省首台（套）装备企业，致力于成为全球领先的智能硬件驱动的安全监测场景解决方案供应商。
                    <br></br>
                    <br></br>
                    公司拥有安全物联网领域的前沿核心技术，基于传感器硬件、物联网操作系统、场景算法模型，在自然环境、基础设施、生产安全、社区安全等垂直领域已成为优秀的产品和服务供应商；在区域级城市安全运行领域，推出投建管运一体化的服务模式，致力于提升城市安全韧性。
                    <br></br>
                    <br></br>
                    鲁尔物联深耕安全物联网行业多年，是中国安全物联网的倡导者。公司坚持将“动机至善 行动至臻”的核心价值观内化为行动准则，把物联网、大数据及人工智能先进技术融入到国家基础设施的建设及保护中去，助力平安中国，为数字化改革注入更多安全力量。
                    <br></br>
                    <br></br>
                    鲁尔物联，让安全如影随形！
                </div>
            </div>
        </div>
    )
}