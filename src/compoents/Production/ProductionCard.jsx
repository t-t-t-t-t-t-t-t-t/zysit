import './scss/ProductionCard.scss'
import CardItemSrc from '../../assets/imgs/Production/ProductionItem/item3/气泡式水位计.jpg';
import { NavLink } from 'react-router-dom';
export function ProductionCard({ title = '气泡式水位计', content = `1、内部集成嵌入式实时操作系统，监测到错误可自动重启
2、超高精度，全温度补偿，线性补偿，抗干扰、防雷设计
3、零点和基础高程可自由设置
4、RS232/RS485/SDI12通讯自行选择
6、定时测量，测量和采集时间可自由设定
7、主机参数自由设定，并带上位机界面软件
8、超大容量的历史数据存储，数据存储量可达50万条
9、带有超量程报警功能和断电信息存储功能
10、100%水质密度可调，适合全国各地各种水质高度测量
11、超低功耗，更适合于电池系统供电
12、兼容市场上常见厂家的水位采集协议，以便于兼容RTU设备` , cardImg = CardItemSrc, isNew = true, isHot = true, marginRight = '10px' }) {

    return (
        <NavLink to={`/productDetail?name=${title}`} className="ProductionCard" style={{ marginRight: marginRight }}>
            <div className='New' style={{ display: isNew ? 'block' : 'none', textDecoration: 'none' }}>新品推荐</div>
            <div className="ProductionCardWrap">
                <div className="imgWrap">
                    <img className='img' src={cardImg} alt="" />
                </div>
                <div className="title"> <div className='text'>{title}</div><div style={{ display: isHot ? 'block' : 'none', textDecoration: 'none' }} className='Hot'>HOT</div></div>
                <div className="content"> {content} </div>
            </div>
        </NavLink>
    )
}