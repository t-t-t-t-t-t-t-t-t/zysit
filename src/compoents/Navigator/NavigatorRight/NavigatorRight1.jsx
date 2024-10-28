import './scss/NavigatorRight1.scss'
import { NavigatorItem1 } from "./NavigatorItem/NavigatorItem1"
import { NavigatorItem2 } from "./NavigatorItem/NavigatorItem2"
import { NavigatorItem3 } from "./NavigatorItem/NavigatorItem3"
export function NavigatorRight1() {
    const NavigatorItem2Content1 = {
        title: '产品中心',
        href: '/product',
        content:
            [{
                name: '变形监测',
                href: '/product?idx=0',
                content: [{
                    name: '大坝内部变形监测机器人',
                    href: '/productDetail?name=大坝内部变形监测机器人',
                },
                {
                    name: '惯性视觉测量仪',
                    href: '/productDetail?name=惯性视觉测量仪',
                },
                {
                    name: '普适性GNSS\\北斗接收机',
                    href: '/productDetail?name=普适性GNSS\\北斗接收机',
                },
                {
                    name: '无人机优视自主摄影测量',
                    href: '/productDetail?name=无人机优视自主摄影测量',
                },
                {
                    name: 'SAR沉降监测',
                    href: '/productDetail?name=SAR沉降监测',
                },
                {
                    name: '阵列式位移计',
                    href: '/productDetail?name=阵列式位移计',
                },
                {
                    name: '静力水准仪',
                    href: '/productDetail?name=静力水准仪',
                },
                {
                    name: '裂缝计',
                    href: '/productDetail?name=裂缝计',
                },
                {
                    name: '三向测缝（位移）计',
                    href: '/productDetail?name=三向测缝（位移）计',
                },
                {
                    name: '电测水管式沉降仪',
                    href: '/productDetail?name=电测水管式沉降仪',
                },
                {
                    name: '磁致式沉降仪',
                    href: '/productDetail?name=磁致式沉降仪',
                },
                {
                    name: '倾斜仪',
                    href: '/productDetail?name=倾斜仪',
                },
                {
                    name: '激光位移计',
                    href: '/productDetail?name=激光位移计',
                },
                {
                    name: '振弦式单点位移计',
                    href: '/productDetail?name=振弦式单点位移计',
                },
                {
                    name: '振弦式多点位移计',
                    href: '/productDetail?name=振弦式多点位移计',
                },
                {
                    name: '表面式应变计',
                    href: '/productDetail?name=表面式应变计'
                },
                {
                    name: '内埋式应变计',
                    href: '/productDetail?name=内埋式应变计'
                },
                {
                    name: '锚索计',
                    href: '/productDetail?name=锚索计'
                },
                {
                    name: '钢筋计',
                    href: '/productDetail?name=钢筋计'
                },
                {
                    name: '轴力计',
                    href: '/productDetail?name=轴力计'
                }]
            },
            {
                name: '压力监测',
                href: '/product?idx=1',
                content: [{
                    name: '土压力计',
                    href: '/productDetail?name=土压力计',
                },
                {
                    name: '振弦式扬压力计',
                    href: '/productDetail?name=振弦式扬压力计'
                },
                {
                    name: '硅压式扬压力计',
                    href: '/productDetail?name=硅压式扬压力计'
                },
                {
                    name: '振弦式渗压计',
                    href: '/productDetail?name=振弦式渗压计'
                }]
            },
            {
                name: '水位监测',
                href: '/product?idx=2',
                content: [{
                    name: '量水堰计',
                    href: '/productDetail?name=量水堰计',
                },
                {
                    name: '超声波一体式水位计',
                    href: '/productDetail?name=超声波一体式水位计'
                },
                {
                    name: '浮子式水位计',
                    href: '/productDetail?name=浮子式水位计',
                },
                {
                    name: '雷达水位计',
                    href: '/productDetail?name=雷达水位计'
                }, {
                    name: '投入式水位计',
                    href: '/productDetail?name=投入式水位计',
                },
                {
                    name: '气泡式水位计',
                    href: '/productDetail?name=气泡式水位计'
                }
                ]
            },
            {
                name: '流量监测',
                href: '/product?idx=3',
                content: [{
                    name: '雷达流量计',
                    href: '/productDetail?name=雷达流量计',
                },
                {
                    name: '超声波流量计',
                    href: '/productDetail?name=超声波流量计'
                },
                {
                    name: '多普勒流量计',
                    href: '/productDetail?name=多普勒流量计'
                }]
            },
            {
                name: '环境量监测',
                href: '/product?idx=3',
                content: [{
                    name: '雨量计',
                    href: '/productDetail?name=雨量计',
                },
                {
                    name: '机械式风速风向仪',
                    href: '/productDetail?name=机械式风速风向仪'
                },
                {
                    name: '蒸发量传感器',
                    href: '/productDetail?name=蒸发量传感器'
                },
                {
                    name: '温湿度传感器',
                    href: '/productDetail?name=温湿度传感器'
                }]
            },
            {
                name: '环境量监测',
                href: '/product?idx=4',
                content: [{
                    name: '雨量计',
                    href: '/productDetail?name=雨量计',
                },
                {
                    name: '机械式风速风向仪',
                    href: '/productDetail?name=机械式风速风向仪'
                },
                {
                    name: '蒸发量传感器',
                    href: '/productDetail?name=蒸发量传感器'
                },
                {
                    name: '温湿度传感器',
                    href: '/productDetail?name=温湿度传感器'
                }]
            },
            {
                name: '排水管网检测',
                href: '/product?idx=5',
                content: [{
                    name: '排水管网检测胶囊机器人',
                    href: '/productDetail?name=排水管网检测胶囊机器人',
                }]
            },
            {
                name: '水工隧洞检测',
                href: '/product?idx=6',
                content: [{
                    name: '隧洞激光检测车',
                    href: '/productDetail?name=隧洞激光检测车',
                },
                {
                    name: '探地雷达',
                    href: '/productDetail?name=探地雷达',
                }]
            },
            {
                name: '数据采集系列',
                href: '/product?idx=7',
                content: [{
                    name: 'MCU多功能采集仪',
                    href: '/productDetail?name=MCU多功能采集仪',
                },
                {
                    name: 'RTU遥测终端机',
                    href: '/productDetail?name=RTU遥测终端机',
                }
                    ,
                {
                    name: 'DTU数据采集仪',
                    href: '/productDetail?name=DTU数据采集仪',
                }]
            },
            {
                name: '系统平台',
                href: '/product?idx=8',
                content: [{
                    name: '水库智慧化平台',
                    href: '/productDetail?name=水库智慧化平台',
                },
                {
                    name: '水利视频监控平台',
                    href: '/productDetail?name=水利视频监控平台',
                }
                    ,
                {
                    name: '水利物联网平台',
                    href: '/productDetail?name=水利物联网平台',
                }]
            }]
    }
    const NavigatorItem2Content2 = {
        title: '解决方案',
        href: '/solution',
        content:
            [{
                name: '交通',
                id: 0,
                href: '',
                content: [{
                    name: '桥梁',
                    id: 0,
                    href: '',
                },
                {
                    name: '公路',
                    id: 1,
                    href: ''
                },
                {
                    name: '边坡',
                    id: 2,
                    href: ''
                },
                {
                    name: '隧道',
                    id: 3,
                    href: ''
                },
                {
                    name: '地铁',
                    id: 4,
                    href: ''
                },
                {
                    name: '高铁',
                    id: 5,
                    href: ''
                }]
            },
            {
                name: '水利',
                id: 1,
                href: '',
                content: [{
                    name: '水库大坝',
                    id: 0,
                    href: '',
                },
                {
                    name: '水工隧道',
                    id: 1,
                    href: ''
                },
                {
                    name: '河道',
                    id: 2,
                    href: ''
                },
                {
                    name: '排水管网',
                    id: 3,
                    href: ''
                }]
            },
            {
                name: '建筑',
                id: 2,
                href: '',
                content: [{
                    name: '楼宇',
                    id: 0,
                    href: '',
                },
                {
                    name: '基坑',
                    id: 1,
                    href: ''
                }]
            },
            {
                name: '自然资源',
                id: 3,
                href: '',
                content: [{
                    name: '地灾',
                    id: 0,
                    href: '',
                },
                {
                    name: '露天矿厂',
                    id: 1,
                    href: ''
                },
                {
                    name: '尾矿车',
                    id: 2,
                    href: ''
                }]
            }]
    }
    const NavigatorItem2Content3 = {
        title: '应用案例',
        href: '/cases',
        content:
            [{
                name: '水利工程',
                href: '',
                content: [{
                    name: '中小型水库群监测',
                    href: '',
                },
                {
                    name: '管道测量机器人',
                    href: '',
                },
                {
                    name: '光明项管部水库溃坝分析服务',
                    href: '',
                },
                ]
            },
            {
                name: '检测',
                href: '',
                content: [{
                    name: '200km带水管渠检测专项解决方案',
                    href: '',
                },
                {
                    name: '南山区排海干渠检测',
                    href: ''
                },
                {
                    name: '深圳东江水源隧洞检测',
                    href: ''
                },
                {
                    name: '粤港东深供水工程',
                    href: ''
                },
                {
                    name: '深圳市北部水源工程',
                    href: ''
                }]
            },
            {
                name: '无人机优视测量',
                id: 2,
                href: '',
                content: [{
                    name: '丹江口水库无人机优视摄影测量',
                    href: '',
                },
                {
                    name: '小湾水电站无人机优视摄影测量',
                    href: ''
                }]
            },
            {
                name: '惯性视觉相机',
                href: '',
                content: [{
                    name: '春风路下穿隧道建筑物沉降监测',
                    href: '',
                },
                {
                    name: '地铁（莲花村站）隧洞沉降监测',
                    href: ''
                }]
            },
            {
                name: '系统建设',
                href: '',
                content: [{
                    name: '深圳市龙岗排水有限公司生产运营平台龙排通建设项目',
                    href: '',
                }
                ]
            }]
    }
    const NavigatorItem3Content1 = {
        title: '服务支持',
        href: '/serve'
    }
    const NavigatorItem3Content2 = {
        title: '新闻资讯',
        href: '/news'
    }
    const NavigatorItem1Content5 = {
        title: '关于智源',
        href: '/about',
        content: [
            { name: '公司简介', href: '' },
            { name: '联系我们', href: '' },
            { name: '人才招聘', href: '' },
        ]
    }
    return (
        <div className="NavigatorRight1">
            <NavigatorItem1
                title={NavigatorItem1Content5.title}
                content={NavigatorItem1Content5.content}
                href={NavigatorItem1Content5.href}
            ></NavigatorItem1>
            <NavigatorItem2
                title={NavigatorItem2Content1.title}
                content={NavigatorItem2Content1.content}
                href={NavigatorItem2Content1.href}>
            </NavigatorItem2>
            <NavigatorItem2
                title={NavigatorItem2Content2.title}
                content={NavigatorItem2Content2.content}
                href={NavigatorItem2Content2.href}>
            </NavigatorItem2>
            <NavigatorItem2
                title={NavigatorItem2Content3.title}
                content={NavigatorItem2Content3.content}
                href={NavigatorItem2Content3.href}  >
            </NavigatorItem2>
            <NavigatorItem3 title={NavigatorItem3Content1.title} href={NavigatorItem3Content1.href}></NavigatorItem3>
            <NavigatorItem3 title={NavigatorItem3Content2.title} href={NavigatorItem3Content2.href}></NavigatorItem3>
        </div>
    )
}