import './scss/CaseContent.scss'
import imgSrc from '../../assets/imgs/Solution/item1/桥梁/桥梁.jpg'
import { Button } from '../Button/Button'
export function CaseContent() {
    return (
        <div className="CaseContent">
            <div className="CaseContentWrap">
                <div className="title">项目名称</div>
                <div className="titleName">浙江省地质灾害监测预警设备采购项目标项一标项三</div>
                <div className="line"></div>
                <div className="title">行业背景</div>
                <div className="content">
                    自然资源部《2021年度地质灾害监测预警实验方案》要求，2021年在山西、浙江、福建、江西、湖北、湖南、广东、广西、重庆、四川、贵州、云南、西藏、陕西、甘肃、青海新疆17个省（自治区、直辖市），共建设2.2万处普适型地质灾害监测试验点，提升地质灾害监测预警能力，完善“人防﹢技防”地质灾害监测预警体系。
                </div>
                <img className='img' src={imgSrc} alt="" />
                <div className="line"></div>
                <div className="title">解决方案</div>
                <div className="content">根据监测设计方案，通过布设多功能一体机、压电雨量一体机、一体化土壤含水率监测仪、泥水位计、预警广播站、一体式GNSS等普适型监测设备，充分发挥普适型监测设备优势，实时掌握灾害点的稳定性情况。</div>
                <div className="line"></div>
                <div className="title">成果展现</div>
                <div className="content">
                    在当年汛期之前完成温州、杭州、湖州、舟山、台州、宁波、绍兴等市共519处地质灾害普适型监测点的建设任务，提升浙江省地质灾害自动化、专业化和标准化监测预警覆盖面，提高防灾减灾能力。
                </div>
                <div className="lien"></div>
                <div className="title">设备安装图</div>
                <img className='img' src={imgSrc} alt="" />
                <div className="line"></div>
                <div className="title">平台效果</div>
                <img className='img' src={imgSrc} alt="" />
            </div>
            <div className="buttonWrap" style={{ display: 'flex', justifyContent: 'center', marginTop: '50px', marginBottom: '60px' }}>
                <Button url='/cases' content='返回列表'></Button>
            </div>
        </div>

    )
}