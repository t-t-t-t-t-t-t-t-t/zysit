
import img11 from '../../assets/imgs/Production/ProductionItem/item1/INSAR沉降监测.jpg'
import img12 from '../../assets/imgs/Production/ProductionItem/item1/表面式应变计.jpg'
import img13 from '../../assets/imgs/Production/ProductionItem/item1/磁致式沉降仪.jpg'
import img14 from '../../assets/imgs/Production/ProductionItem/item1/大坝内部变形监测机器人.jpg'
import img15 from '../../assets/imgs/Production/ProductionItem/item1/导轮式固定测斜仪.jpg'
import img16 from '../../assets/imgs/Production/ProductionItem/item1/电测水管式沉降仪.jpg'
import img17 from '../../assets/imgs/Production/ProductionItem/item1/钢筋计.jpg'
import img18 from '../../assets/imgs/Production/ProductionItem/item1/惯性视觉测量仪.jpg'
import img19 from '../../assets/imgs/Production/ProductionItem/item1/激光位移计.jpg'
import img110 from '../../assets/imgs/Production/ProductionItem/item1/静力水准仪.jpg'
import img111 from '../../assets/imgs/Production/ProductionItem/item1/裂缝计.jpg'
import img112 from '../../assets/imgs/Production/ProductionItem/item1/锚索计.jpg'
import img113 from '../../assets/imgs/Production/ProductionItem/item1/内埋式应变计.jpg'
import img114 from '../../assets/imgs/Production/ProductionItem/item1/普适性GNSS北斗接收机.jpg'
import img115 from '../../assets/imgs/Production/ProductionItem/item1/倾斜仪.jpg'
import img116 from '../../assets/imgs/Production/ProductionItem/item1/三向测缝（位移）计.jpg'
import img117 from '../../assets/imgs/Production/ProductionItem/item1/无人机优视自主摄影测量.jpg'
import img118 from '../../assets/imgs/Production/ProductionItem/item1/阵列位移计.jpg'
import img119 from '../../assets/imgs/Production/ProductionItem/item1/振弦式单点位移计.jpg'
import img120 from '../../assets/imgs/Production/ProductionItem/item1/振弦式多点位移计.jpg'
import img121 from '../../assets/imgs/Production/ProductionItem/item1/轴力计.jpg'

import img21 from '../../assets/imgs/Production/ProductionItem/item2/硅压式扬压力计.jpg'
import img22 from '../../assets/imgs/Production/ProductionItem/item2/土压力计.jpg'
import img23 from '../../assets/imgs/Production/ProductionItem/item2/振弦式渗压计.jpg'
import img24 from '../../assets/imgs/Production/ProductionItem/item2/振弦式扬压力计.jpg'

import img31 from '../../assets/imgs/Production/ProductionItem/item3/超声波一体式水位计.jpg'
import img32 from '../../assets/imgs/Production/ProductionItem/item3/浮子式水位计.jpg'
import img33 from '../../assets/imgs/Production/ProductionItem/item3/雷达水位计.jpg'
import img34 from '../../assets/imgs/Production/ProductionItem/item3/量水堰计.jpg'
import img35 from '../../assets/imgs/Production/ProductionItem/item3/气泡式水位计.jpg'
import img36 from '../../assets/imgs/Production/ProductionItem/item3/投入式水位计.jpg'

import img41 from '../../assets/imgs/Production/ProductionItem/item4/超声波流量计.jpg'
import img42 from '../../assets/imgs/Production/ProductionItem/item4/多普勒流量计.jpg'
import img43 from '../../assets/imgs/Production/ProductionItem/item4/雷达流量计.jpg'

import img51 from '../../assets/imgs/Production/ProductionItem/item5/机械式风速风向仪.jpg'
import img52 from '../../assets/imgs/Production/ProductionItem/item5/温湿度传感器.jpg'
import img53 from '../../assets/imgs/Production/ProductionItem/item5/雨量计.jpg'
import img54 from '../../assets/imgs/Production/ProductionItem/item5/蒸发量传感器.jpg'

import img61 from '../../assets/imgs/Production/ProductionItem/item6/排水管网检测胶囊机器人.jpg'

import img71 from '../../assets/imgs/Production/ProductionItem/item7/隧洞激光检测车.jpg'
import img72 from '../../assets/imgs/Production/ProductionItem/item7/探地雷达.jpg'

import img81 from '../../assets/imgs/Production/ProductionItem/item8/DTU数据采集仪.jpg'
import img82 from '../../assets/imgs/Production/ProductionItem/item8/MCU多功能采集仪.jpg'
import img83 from '../../assets/imgs/Production/ProductionItem/item8/RTU遥测终端机.jpg'

import img91 from '../../assets/imgs/Production/ProductionItem/item9/水库智慧化平台.jpg'
import img92 from '../../assets/imgs/Production/ProductionItem/item9/水利视频监控平台.jpg'
import img93 from '../../assets/imgs/Production/ProductionItem/item9/水利物联网平台.jpg'

export const itemList = ['变形监测', '压力监测', '水位监测', '流量监测', '环境量监测', '排水管网检测', '水工隧洞检测', '数据采集系列', '系统平台']

export const SiderBarContent = [
    [
        {
            title: 'INSAR沉降监测',
            content: `全天时全天候
24 小时连续监测，适应各类气候条件
非接触式测量
大范围远程扫描，无需按照任何定标物
高时效性
秒级电子扫描监测，最快每10秒获取一幅观测场景位移图像
超高精度
亚毫米级位移监测精度
高可靠性
先进的 MIMO( 多入多出 ) 一体化设计，避免机械故障`,
            cardImg: img11,
            isNew: true,
            isHot: true,
            parameters: [
                { label: '成像模式', content: '条带模式' },
                { label: '分辨率', content: '3米' },
                { label: '单景图像覆盖范围', content: '幅宽40km*40km' },
                { label: '极化方式', content: 'HH、HV、VH、VV可选' },
                { label: '入射角', content: '20～60°' },
            ], scene: ['水库大坝', '边坡', '地灾', '桥梁']
        }, {
            title: '表面式应变计',
            content: `1.高性能、信号强度强
            2.高颜值、全不锈钢外壳，抗压抗摔抗拧
            3.耐水压高，防水性能优异
            4.内置温度计，可以温度补偿提高准确性
            5.内置参数芯片，可读取编号、计算参数`,
            cardImg: img12,
            isNew: true,
            isHot: true,
            parameters: [
                { label: '测量范围', content: '≥3000με（拉伸范围≥1500με；压缩范围≥1500με）' },
                { label: '分辨力', content: '0.016%F.S或≤0.5με' },
                { label: '拟合/端基精度', content: '0.1%F.S/0.5%F.S' },
                { label: '测温范围', content: '-40℃～+80℃' },
                { label: '测温灵敏度', content: '±0.1℃' },
                { label: '测温精度', content: '±0.5℃' },
                { label: '温度修正系数', content: 'b ≈13με/℃' },
                { label: '智能识别', content: '≥1600米信息识别' },
                { label: '智能诊断', content: '≥1600米故障诊断' },
                { label: '超量程', content: '25%正常工作' },
            ], scene: ['水库大坝', '边坡', '地灾']
        }, {
            title: '磁致式沉降仪',
            content: `磁致式沉降仪采用的磁致伸缩式传感器具有分辨率高、稳定性好、性能可靠、响应速度快、工作寿命长、线性测量、绝对量输出、非接触测量、永不磨损、自标定，输出信号RS485数字量，安装简单方便等性能`,
            cardImg: img13,
            isNew: false,
            isHot: false,
            parameters: [
                { label: '测量范围', content: '0～1000mm' },
                { label: '灵敏度', content: '≤0.01mm' },
                { label: '测量精度', content: '0.1%F.S' },
                { label: '测温范围', content: '-40℃～+80℃' },
                { label: '灵敏度', content: '±0.1℃' },
                { label: '温度修正', content: '自动补偿' },
                { label: '输出信号', content: 'RS485' },
                { label: '超量程', content: '25%正常工作' },
                { label: '沉降管', content: '53mm' },
                { label: '仪器材料', content: '不锈钢' },
                { label: '耐水压', content: '≥1MPa' },
                { label: '绝缘电阻', content: '≥50Ω' },
            ], scene: ['隧道', '桥梁', '边坡', '公路']
        }, {
            title: '大坝内部变形监测机器人',
            content: `机器人具有大范围、高密度、高精度、易维护等技术优势
可以同时测量水平、垂直和挠度三种大坝内部形变参数，实现对坝体整体连续变形的长期稳定有效观测`,
            cardImg: img14,
            isNew: false,
            isHot: false,
            parameters: [
                { label: '技术特点', content: '多里程计/惯导组合 整体平差解算' },
                { label: '水平精度', content: '1mm/100m,0.001%D' },
                { label: '高程精度', content: '1mm/100m,0.001%D' },
                { label: '应用范围', content: '线状结构变形测量、工业管道测量、地下管道测量' },
            ],
            scene: ['水库大坝', '边坡', '地灾']
        }, {
            title: '导轮式固定测斜仪',
            content: `1.杆式测斜仪
2.精度±0.01°
3.量程±30°
4.稳定性好
5.带温度芯片
6.防水性能优异
7.可靠性高
8.信号稳定`,
            cardImg: img15,
            isNew: false,
            isHot: false,
            parameters: [
                { label: '标准量程', content: '±30°' },
                { label: '分辨率', content: '0.03mm/0.5m' },
                { label: '系统总精度', content: '±5mm/30m' },
                { label: '测量深度', content: '0-200m' },
                { label: '温度范围', content: '-20℃- +60℃' },
                { label: '工作电压', content: 'DC12V' },
                { label: '静态电流', content: '80mA@25℃' },
                { label: '电源', content: 'DC12V/2A' },
                { label: '重量', content: '2.7Kg' },
                { label: '探头尺寸LxD(mm)', content: '572x30' },
                { label: '导轮间距 L', content: '250mm' },
                { label: '耐冲击', content: '2000g' },
                { label: '通信方式', content: 'RS485' },
                { label: 'RS485参数', content: '9600 band，8 bit，1 stop， no parity' },
            ], scene: ['边坡', '隧道', '桥梁', '水库大坝']
        }, {
            title: '电测水管式沉降仪',
            content: `传感器采集精度高。
传感器采用全金属结构，防水、防腐性能强。
信号传输方式为RS48传输，信号稳定性好，传输距离远，真正达到自动化测量方式。`,
            cardImg: img16,
            isNew: false,
            isHot: false,
            parameters: [
                { label: '仪器量程', content: 'mm 0～2000' },
                { label: '测量点数', content: '单点或多点' },
                { label: '管线长度 m', content: '10～200' },
                { label: '分辨力 γ', content: '≤1 mm' },
                { label: '不重复度 R', content: '≤±0.2%F.S' },
                { label: '综合误差 εc', content: '≤±0.4%F.S' },
                { label: '温度范围℃', content: '-20～+40' },
            ], scene: ['水库大坝', '地铁', '隧道', '桥梁']
        }, {
            title: '钢筋计',
            content: `1.高性能、信号强度强
            2.高颜值、全不锈钢外壳，抗压抗摔抗拧
            3.耐水压高，防水性能优异
            4.内置热敏电阻温度计，可以同步测量温度
            5.内置参数芯片，可读取编号、计算参数`,
            cardImg: img17,
            isNew: false,
            isHot: false,
            parameters: [
                { label: '测量范围', content: '200MPa' },
                { label: '分辨率', content: '0.07%FS' },
                { label: '非线性', content: '≤1%FS' },
                { label: '工作温度', content: '-20～+70℃' },
                { label: '测温精度', content: '±0.5℃' },
            ], scene: ['桥梁', '楼宇', '地铁', '高铁']
        }, {
            title: '惯性视觉测量仪',
            content: `采用非接触式测量，实现现场快速布设。
采用边缘计算技术，降低算力与数据传输成本。垂直与水平位移的动静态一体测量。
内置AI图像质量增强与温度补偿算法支持全天候稳定监测。
设备可自动回传异常情况时的现场图片或视频，杜绝误报警。`,
            cardImg: img18,
            isNew: false,
            isHot: false,
            parameters: [
                { label: '图像传感器类型', content: 'CMOS' },
                { label: '谱段', content: 'Mono' },
                { label: '分辨率', content: '4096×3072可调，8bit模式' },
                { label: '像素尺寸', content: '3.2um×3.2um' },
                { label: '曝光', content: '全局曝光模式，曝光时间10us ～30ms' },
                { label: '图像采集频率', content: '≥60Hz' },
                { label: '精度', content: '≤0.5mm@100m' },
                { label: '供电', content: 'DC12V' },
                { label: '温度', content: ' -20～+80℃' },
                { label: '功率', content: '10W' },
                { label: '功率', content: '2W' },
                { label: '供电', content: 'DC12V' },
            ]
            , scene: ['隧道', '水工隧洞', '地铁']
        }, {
            title: '激光位移计',
            content: `激光位移计测量精度高、稳定性好、抗干扰能力强、没有温漂和时漂的影响，非接触测量，永不磨损，输出信号多种选择(RS485、电流)，安装简单方便`,
            cardImg: img19,
            isNew: false,
            isHot: false,
            parameters: [
                { label: '测量范围', content: '0.05～40m' },
                { label: '灵敏度', content: '≤0.1mm' },
                { label: '测量精度', content: '±1mm+0.01%F.S' },
                { label: '测量速率', content: '连续模式5Hz' },
                { label: '激光类型', content: '630～670nm、ClassⅡ、＜1mW' },
                { label: '供电电源', content: '6～30V、推荐12V' },
                { label: '功耗', content: '0.3W' },
                { label: '防水等级', content: 'IP66' },
                { label: '仪器材料', content: '铝合金' },
                { label: '工作温度', content: '-15°～50°' },
                { label: '存储温度', content: '-20°～60°' },
            ], scene: ['隧道', '大坝', '边坡', '桥梁', '基坑']
        }, {
            title: '静力水准仪',
            content: `分辨率高、稳定性好、性能可靠、响应速度快、工作寿命长、线性测量、绝对量输出、非接触测量、永不磨损、输出信号RS485数字量，安装简单方便等性能`,
            cardImg: img110,
            isNew: false,
            isHot: false,
            parameters: [
                { label: '测量范围', content: '0-200mm（量程自选）' },
                { label: '灵敏度', content: '0.01mm' },
                { label: '测量精度', content: '0.1%F S' },
                { label: '测温范围', content: '-40℃-+80℃' },
                { label: '灵敏度', content: '±0.1℃' },
                { label: '输出信号', content: 'RS485' },
                { label: '防水等级', content: 'IP67' },
                { label: '仪器材料', content: '铝合金' },
                { label: '绝缘电阻', content: '50MΩ' },
            ], scene: ['大坝', '铁路', '高层建筑', '基坑', '隧道', '桥梁', '地铁']
        }, {
            title: '裂缝计',
            content: `1.高性能、信号强度强
            2.高颜值、全不锈钢外壳，抗压抗摔抗拧
            3.耐水压高，防水性能优异
            4.内置温度计，可以温度补偿提高准确性
            5.内置参数芯片，可读取编号、计算参数`,
            cardImg: img111,
            isNew: false,
            isHot: false,
            parameters: [
                { label: '供电电压', content: '9~28V' },
                { label: '量程', content: '10/25/50/100mm' },
                { label: '精度', content: '±0.25%FS' },
                { label: '工作温度', content: '-20~+80℃' },
            ], scene: ['水库大坝', '水工隧洞', '隧道', '桥梁']
        }, {
            title: '锚索计',
            content: `采用振弦理论设计、全不锈钢结构制造；
具有灵敏度与精度高、线性与稳定性好等优点；
对集中载荷反应灵敏、测值可靠和稳定性好；
支持增加温度检测功能；`,
            cardImg: img112,
            isNew: false,
            isHot: false,
            parameters: [
                { label: '测力计数', content: '4～6支' },
                { label: '测量范围', content: '0～5000kN（量程可定制）' },
                { label: '分辨力', content: '0.05%F.S' },
                { label: '拟合精度', content: '0.5%F.S' },
                { label: '测温范围', content: '-40℃～+80℃' },
                { label: '测温灵敏度', content: '±0.1℃' },
                { label: '测温精度', content: '±0.5℃' },
                { label: '智能识别', content: '≥1600米信息识别' },
                { label: '智能诊断', content: '≥1600米故障诊断' },
                { label: '过范围限', content: '≥测量范围1.2倍' },
                { label: '测力筒高', content: 'L 90mm' },
                { label: '耐水压', content: '0.5MPa' },
                { label: '绝缘电阻', content: '≥50MΩ' },
                { label: '仪器材料', content: '高碳钢' },
            ], scene: ['桥梁', '楼宇', '地铁', '高铁水库大坝', '边坡', '基坑']
        }, {
            title: '内埋式应变计',
            content: `1.高性能、信号强度强
            2.高颜值、全不锈钢外壳，抗压抗摔抗拧
            3.耐水压高，防水性能优异
            4.内置温度计，可以温度补偿提高准确性
            5.内置参数芯片，可读取编号、计算参数`,
            cardImg: img113,
            isNew: false,
            isHot: false,
            parameters: [
                { label: '测量范围', content: '≥3000με（拉伸范围≥1500με；压缩范围≥1500με）' },
                { label: '分辨力', content: '0.016%F.S或≤0.5με' },
                { label: '拟合/端基精度', content: '0.1%F.S/0.5%F.S' },
                { label: '测温范围', content: '-40℃～+80℃' },
                { label: '测温灵敏度', content: '±0.1℃' },
                { label: '测温精度', content: '±0.5℃' },
                { label: '温度修正系数', content: 'b ≈13με/℃' },
                { label: '智能识别', content: '≥1600米信息识别' },
                { label: '智能诊断', content: '≥1600米故障诊断' },
                { label: '超量程', content: '25%正常工作' },
            ], scene: ['水库大坝', '边坡', '地灾']
        }, {
            title: '普适性GNSS\\北斗接收机',
            content: `监测精度：水平位移：2.5mm+0.5ppm，高程位移：5mm+0.5ppm；
简约设计：一体化集成设计，简约配套、便捷安装，IP68防
 通讯方式：支持4G、NB-IOT/WIFI、蓝牙；
传感集成：支持通过MEMS触发RTK功能，可为485协议的传感器供电供网；`,
            cardImg: img114,
            isNew: false,
            isHot: false,
            parameters: [
                { label: '系统', content: '北斗， Galileo， GLONASS， GPS' },
                { label: '信号', content: 'L2OF， L2C， E1B/C， B2I， E5b， L1C/A， L1OF， B1I' },
                { label: '单点定位精度', content: '<1.5m' },
                { label: '静态定位精度RMS', content: '水平：±(2.5 +0.5×10-6D)mm' },
                { label: '垂直', content: '±(5.0 + 0.5×10-6D)mm' },
                { label: '通讯协议', content: 'RS232、TCP/IP通讯协议、支持Lora、Zigbee、4、5G移动通信网络' },
                { label: '内部存储', content: '内置100MB存储器（可扩展）' },
                { label: '工作温度', content: '－40℃～＋70℃' },
                { label: '湿度', content: '100％全密封，防冷凝' },
                { label: '防尘防水', content: 'IP67级标准' },
                { label: '功耗', content: '1.5W' },
            ], scene: ['水库大坝', '地灾', '露天矿场', '边坡']
        }, {
            title: '倾斜仪',
            content: `全不锈钢结构，坚固耐用，附有调节和固定支架方便安装。倾斜仪采用的是高精度MEMS传感器，可靠性好，稳定速度快，安装附件少，组装方便，输出信号为RS485数字量，直接显示工程值(位移或角度)，同步测量埋设点的温度。      
倾斜仪全不锈钢结构、抗冲击、接地防雷、测值稳定、长期工作在水下。
倾斜仪测量系统能识别信息、智能故障诊断、云平台手机无缝对接。`,
            cardImg: img115,
            isNew: false,
            isHot: false,
            parameters: [
                { label: '测量范围', content: '±15°' },
                { label: '灵敏度', content: '≤3.6"' },
                { label: '测量精度', content: '0.02%F.S' },
                { label: '测温范围', content: '-40℃～+80℃' },
                { label: '灵敏度', content: '±0.1℃' },
                { label: '输出信号', content: 'RS485' },
                { label: '超量程', content: '25%正常工作' },
                { label: '仪器材料', content: '不锈钢' },
                { label: '耐水压', content: '≥0.5MPa' },
                { label: '绝缘电阻', content: '≥50MΩ' },
            ], scene: ['楼宇', '公路', '桥梁', '隧道', '基坑']
        }, {
            title: '三向测缝（位移）计',
            content: `三向测量能力，高精度和高灵敏度，实时数据采集与分析，适应多种环境和条件`,
            cardImg: img116,
            isNew: false,
            isHot: false,
            parameters: [
                { label: '测量范围', content: '0~25mm' },
                { label: '灵敏度k', content: '≤0.012mm/F' },
                { label: '测量精度', content: '士0.1%' },
                { label: '温度测量范围', content: '"-40~+150℃' },
                { label: '温度测量精度', content: '士0.5℃' },
                { label: '仪器外径', content: '30mm' },
                { label: '仪器长度', content: '400mm' },
                { label: '耐水压', content: '≥1MPa' },
                { label: '绝缘电阻', content: '≥50MΩ' },
            ], scene: ['水库大坝', '水工隧洞', '隧道', '桥梁']
        }, {
            title: '无人机优视自主摄影测量',
            content: `1.基于视角优选的无人机航测路线自动生成
2.基于模型采样的大比例尺航测像控布设推荐
3.基于航线划分的多无人机协同航测作业
4.基于高分辨率成像系统的复杂场景精细三维重建
5.基于场景环境中禁飞区设置的无人机低飞安全保障`,
            cardImg: img117,
            isNew: false,
            isHot: false,
            parameters: [
                { label: '精细高效的航摄路径规划', content: '在测量实施前，通过详细的三维模型和观测分析，制定精细化的航摄规划，确保每一步测量都具有高精度和高质量的数据支持。精细化规划能够优化资源利用，提升测量效率，确保测量结果的精准和可靠。' },
                { label: '自动化航线规划与模型重建系统', content: '采用先进的自动化技术，从数据采集到处理分析，实现全流程的高度自动化。高效的自动化处理能力大幅提升工作效率，减少人为操作误差。基于无人机平台获取高分辨率影像数据，确保空间场景的三维重建和标志点测量的高精度。' },
                { label: '灵活适应复杂场景', content: '优视摄影测量特别适用于城市复杂环境，通过精细化的测量和自动化处理，轻松应对高楼大厦、狭窄街道等复杂场景，实现精准测量。其灵活适应性确保在各种复杂条件下依然能够获取高质量的测量数据，满足多样化的应用需求。' },
                { label: '创新技术融合与广泛应用', content: '结合无人机硬件设备和摄影测量的优势，提供更贴近、更丰富的观测视角，全面提升三维测量应用的质量和效率。优视摄影测量适用于城市规划、建筑测量、灾害评估、环境监测等多个领域，为各类测量需求提供可靠的技术支持，展现出广泛的应用前景。' },
            ]
            , scene: ['水库大坝', '边坡', '楼宇', '露天矿场']
        }, {
            title: '阵列式位移计',
            content: `温区补偿/数据稳定
 方向准确/精度可靠
偏量修正/扭转校正
在线传输/实时分析
二次开发/平台兼容`,
            cardImg: img118,
            isNew: false,
            isHot: false,
            parameters: [
                { label: '量测方向', content: '3维度（X、Y、Z三向）' },
                { label: '角度量程', content: '0～360' },
                { label: '采集频率', content: '常规最高1Hz（可定制）' },
                { label: '电气功耗', content: 'DC12V  3.2mA/节点' },
                { label: '防水保证', content: '水下200m(2MPa)' },
                { label: '抗拉保证', content: '550kgf' },
                { label: '位移分辨率', content: '优于0.1mm@500mm' },
                { label: '系统稳定性', content: '优于 2mm（32m）' },
            ], scene: ['边坡', '隧道', '地铁', '桥梁']
        }, {
            title: '振弦式单点位移计',
            content: `振弦式位移计有温度自动补偿功能，温度修正系数小于最小读数，使用中不需要温度修正。单点位移计全不锈钢结构、一体化设计、防旋转、防折弯、抗冲击、抗跌落、接地防雷、安装方便可靠，适应长期工作在水下。     
单点位移计全不锈钢结构、防旋转、防折弯、抗冲击、接地防雷、适应长期工作在水下。
单点位移计测量系统智能识别信息、智能故障诊断、云平台手机无缝对接。`,
            cardImg: img119,
            isNew: false,
            isHot: false,
            parameters: [
                { label: '测量范围mm', content: '0～50/100/200/300' },
                { label: '分辨率', content: '0.025%F.S' },
                { label: '拟合/端基精度', content: '0.1%F.S/0.5%F.S' },
                { label: '测温范围', content: '-40℃～+80℃' },
                { label: '灵敏度', content: '±0.1℃' },
                { label: '测温精度', content: '±0.5℃' },
                { label: '智能识别', content: '1600米信息识别' },
                { label: '智能诊断', content: '1600米故障诊断' },
                { label: '过范围限', content: '测量上限1.2倍' },
                { label: '仪器材料', content: '不锈钢' },
                { label: '耐水压', content: '1MPa' },
                { label: '绝缘电阻', content: '50MΩ' },
            ], scene: ['水库大坝', '边坡', '地灾', '基坑', '隧道等']
        }, {
            title: '振弦式多点位移计',
            content: `多点位移计全不锈钢结构、一体化设计、防旋转、防折弯、抗冲击、抗跌落、接地防雷、安装方便可靠，适应长期工作在水下。
多点位移计全不锈钢结构、防旋转、防折弯、抗冲击、接地防雷、适应长期工作在水下。
多点位移计测量系统智能识别信息、智能故障诊断、云平台手机无缝对接。 `,
            cardImg: img120,
            isNew: false,
            isHot: false,
            parameters: [
                { label: '测量范围', content: '0～300mm' },
                { label: '灵敏度k', content: '≤0.10mm/F' },
                { label: '拟合/端基精度', content: '0.1%F.S/0.5%F.S' },
                { label: '测温范围', content: '-40℃～+80℃' },
                { label: '灵敏度', content: '±0.1℃' },
                { label: '测温精度', content: '±0.5℃' },
                { label: '修正系数b', content: '0.969 F/℃' },
                { label: '耐水压', content: '≥1MPa' },
                { label: '绝缘电阻', content: '≥50MΩ' },
                { label: '储存温度', content: '-30℃～+70℃' },
            ], scene: ['水库大坝', '边坡', '地灾', '基坑', '隧道']
        }, {
            title: '轴力计',
            content: `1.传感器分辨力高、抗干扰性能强；
2.对集中载荷反应灵敏、测值可靠和稳定性好；
3.支持增加温度检测功能；`,
            cardImg: img121,
            isNew: false,
            isHot: false,
            parameters: [
                { label: '量程', content: '0～1000KN' },
                { label: '分辨率', content: '0.1%F.S' },
                { label: '工作温度', content: '-20～60℃' },
                { label: '测温精度', content: '±0.5' },
            ], scene: ['桥梁', '隧道', '楼宇', '水库大坝', '基坑']
        },],
    [{
        title: '硅压式扬压力计',
        content: `采用进口硅压机芯、全不锈钢结构，24×128mm的灵巧体积，可方便的放置在含1英寸以上的测压管内。 跟踪式渗压计为智能传感器，输出信号为物理量并温度、气压自动补偿，同步测量布设点的温度。
硅压式扬压力计全不锈钢结构、尺寸￠24×128mm、抗冲击、接地防雷、温度气压自动补偿。
硅压式扬压力计测量系统智能识别信息、智能故障诊断、云平台手机无缝对接。`,
        cardImg: img21,
        isNew: true,
        isHot: true,
        parameters: [
            { label: '测量范围m', content: '0~10/20/35/70' },
            { label: '分辨率', content: '0.02%F.S' },
            { label: '测量精度', content: '0.1%FS' },
            { label: '测温范围', content: '-40℃~+80℃`' },
            { label: '灵敏度', content: '+0.1℃' },
            { label: '气压修正', content: '自动补偿' },
            { label: '输出信号', content: 'RS485' },
            { label: '过范围限', content: '测量上限1.5倍' },
            { label: '仪器材料', content: '不锈钢' },
            { label: '耐水压', content: '测量范围1.5倍' },
            { label: '绝缘电阻', content: '50 MΩ' },
        ], scene: ['边坡', '水库大坝']
    }, {
        title: '土压力计',
        content: `结构简单，测值稳定，方便安装在需要长期监测土类物质压应力的任何场合。   
土压力计全不锈钢结构、抗冲击、耐腐蚀、接地防雷、长期工作在水下。
土压力计测量系统智能识别信息、智能故障诊断、云平台手机无缝对接`,
        cardImg: img22,
        isNew: false,
        isHot: false,
        parameters: [
            { label: '量程', content: '0~0.2/0.4MPa' },
            { label: '分辨率', content: '0.1%FS' },
            { label: '工作温度', content: '-20~70℃' },
        ], scene: ['水库大坝', '边坡', '地灾', '河道']
    }, {
        title: '振弦式渗压计',
        content: `全不锈钢结构，尺寸￠20×113mm的小巧体积，可方便的放置在1英寸以上的测压管内。  
扬压力计全不锈钢结构、尺寸￠20×113mm、抗冲击、接地防雷、测值稳定可靠。
扬压力计测量系统智能识别信息、智能故障诊断、云平台手机无缝对接。`,
        cardImg: img23,
        isNew: false,
        isHot: false,
        parameters: [
            { label: '测量范围', content: '0.2-2MPa' },
            { label: '精度', content: '≤0.1﹪F·S；' },
            { label: '测温范围', content: ' -20～70℃；' },
            { label: '测温精度', content: '±0.5℃；' },
        ], scene: ['水库大坝', '边坡', '地灾', '尾矿库']
    }, {
        title: '振弦式扬压力计',
        content: `全不锈钢结构，尺寸￠20×113mm的小巧体积，可方便的放置在1英寸以上的测压管内。  
扬压力计全不锈钢结构、尺寸￠20×113mm、抗冲击、接地防雷、测值稳定可靠。
扬压力计测量系统智能识别信息、智能故障诊断、云平台手机无缝对接。`,
        cardImg: img24,
        isNew: false,
        isHot: false,
        parameters: [
            { label: '测量范围KPa', content: '0~200/350/500/700/1200' },
            { label: '拟合/端基精度', content: '0.1%F.S/0.5%FS' },
            { label: '零点漂移', content: '0.5%F.S' },
            { label: '测温范围', content: '-40~+80C' },
            { label: '灵敏度', content: '±0.1℃' },
            { label: '测温精度', content: '0.5℃℃' },
            { label: '修正系数b', content: '0.10 KPa/C' },
            { label: '智能识别', content: '1600米信息识别' },
            { label: '智能诊断', content: '1600米故障诊断' },
            { label: '过范围限', content: '测量上限1.5倍' },
            { label: '耐水压', content: '测量范围1.5倍' },
            { label: '仪器材料', content: '316L不锈钢' },
            { label: '滤水石', content: '50μm不锈钢' },
            { label: '绝缘电阻', content: '50MΩ' },
        ], scene: ['边坡', '楼宇']
    },],
    [{
        title: '超声波一体式水位计',
        content: `1.非接触式连续测量，减少维护
2.产品4~20mA模拟输出，可选择报警控制，RS485/RS232通讯方式
3.有距离测量和物位测量两项可以选择
4.响应速度有慢速、中速、快速三项可以选择
5.安全物位有保持、最小值、最大值、设定值四项可以选择
6.可任意设置上下限节点及在线输出调节，并带有现场显示`,
        cardImg: img31,
        isNew: true,
        isHot: true,
        parameters: [
            { label: '量程', content: '0~5m/10m/15m/20m/30mm' },
            { label: '精度', content: '±0.25%FS，±0.5FS' },
            { label: '分辨率', content: '≥10m,5mm  ＜10m,1mm' },
            { label: '盲区', content: '0.5m' },
            { label: '工作电压', content: '24VDC \\220VAC' },
            { label: '输出信号', content: '4~20mA' },
            { label: '显示操作', content: 'LCD显示、按钮' },
            { label: '温度补偿', content: '芯片内补\\传感器补偿' },
            { label: '环境温度', content: '-20℃~+60℃' },
            { label: '过程温度', content: '-30℃~+80℃' },
            { label: '过程压力', content: ' 0.5 ~ 2bar' },
            { label: '安装连接', content: '螺纹、法兰连接' },
            { label: '外壳材料', content: 'ABS\PA6 GF30' },
            { label: '防护等级', content: 'IP66' },
        ], scene: ['水库大坝', '河道', '排水管网', '地灾']
    },
    {
        title: '浮子式水位计',
        content: `具有断电记忆功能、抗强电磁干扰，无温度、零点漂移`,
        cardImg: img32,
        isNew: true,
        isHot: true,
        parameters: [
            { label: '测量范围', content: '0-40m' },
            { label: '最大水位变率', content: '60cm/min' },
            { label: '分辨力', content: '1cm' },
            { label: '测量准确度', content: '≤±2cm（10m量程）；超过10m时，≤±(2cm± 0.2%F·S)' },
            { label: '显示器', content: '十进制机械计数器' },
            { label: '水位轮工作周长', content: '32cm' },
            { label: '测量缆', content: 'Φ1mm不锈钢缆' },
            { label: '浮子直径', content: '15cm、10cm可选' },
        ], scene: ['水库大坝', '河道', '排水管网', '地灾']
    },
    {
        title: '雷达水位计',
        content: `1.电磁波能够穿过真空，不受大气、挥发物、空间等环境因素影响。
2.雷达水位计采用一体化设计，无可动部件，不存在机械磨损，使用寿命长。
3.采用非接触式测量，不受被测介质的密度、浓度等物理特性的影响。
4.外观轻巧，结构紧凑，便于安装。
5.封闭式外壳，IP68防水等级。
6.精度范围：±3mm。
7.测量范围大，最大的测量范围可达7m,覆盖绝大多数使用场合。
8.采用平面微带阵列天线设计，雷达水位计发射功率极低，对人体及环境均无伤害。
9.功能丰富，连续在线采集，具有排除虚假干扰的滤波功能。`,
        cardImg: img33,
        isNew: false,
        isHot: false,
        parameters: [
            { label: '供电电压', content: 'DC7～36V' },
            { label: '工作功耗 1', content: '（水位计模式）' },
            { label: '自报模式', content: '工作电流<13mA DC12V，休眠电流<0.3mA DC12V' },
            { label: '兼容模式', content: '工作电流<22mA DC12V' },
            { label: '工作功耗 2', content: '（具有 RTU 模块时）' },
            { label: '自报模式', content: '工作电流<24mA DC12V，休眠电流<0.3mA DC12V' },
            { label: '兼容模式', content: '工作电流<73mA DC12V' },
            { label: '工作温度 ', content: '-35℃～75℃' },
            { label: '存储温度 ', content: '-40℃～80℃' },
            { label: '湿度', content: '95% RH 无凝露状态' },
            { label: '保护等级', content: 'IP67' },
            { label: '通信方式', content: 'RS-485/4～20mA(可选)，RS-232（调试接口） ' },
            { label: '2G/3G/4G/BT/LoRa', content: '(具有 RTU 功能模块时)' },
        ], scene: ['水库大坝', '河道', '排水管网', '地灾\r\n']
    },
    {
        title: '量水堰计',
        content: `采用磁致伸缩液位计作为传感器进行测量，具有高分辨率、高精度、高稳定性、高可靠性、响应速度快，工作寿命长等优点。磁致式量水堰计主要功能有线性测量，绝对位置输出，非接触式连续测量，永不磨损，量水堰计不用重新标定及定期维护，输出信号多种选择(RS485、电压、电流)，安装简单方便。
量水堰计全不锈钢结构、磁致伸缩传感器、接地防雷、温度自补偿。
量水堰计测量系统智能识别信息、智能故障诊断、云平台手机无缝对接`,
        cardImg: img34,
        isNew: false,
        isHot: false,
        parameters: [
            { label: '测量范围', content: '0～600mm（量程可选）；' },
            { label: '灵敏度', content: '≤0.01mm；' },
            { label: '测量精度', content: '0.1%F.S；' },
            { label: '测温范围', content: '－40～＋80℃；' },
            { label: '灵敏度', content: '±0.1℃；' },
            { label: '测温精度', content: '±0.5℃；' },
            { label: '输出信号', content: 'RS485；' },
            { label: '报文方式', content: '自报/召测；' },
            { label: '调试方式', content: '地址码和波特率自设定' },
            { label: '防水等级', content: 'IP67' },
            { label: '仪器材料', content: '不锈钢' },
        ], scene: ['水库大坝', '边坡', '地灾河道']
    },
    {
        title: '气泡式水位计',
        content: `1、内部集成嵌入式实时操作系统，监测到错误可自动重启
2、超高精度，全温度补偿，线性补偿，抗干扰、防雷设计
3、零点和基础高程可自由设置
4、RS232/RS485/SDI12通讯自行选择
6、定时测量，测量和采集时间可自由设定
7、主机参数自由设定，并带上位机界面软件
8、超大容量的历史数据存储，数据存储量可达50万条
9、带有超量程报警功能和断电信息存储功能
10、100%水质密度可调，适合全国各地各种水质高度测量
11、超低功耗，更适合于电池系统供电
12、兼容市场上常见厂家的水位采集协议，以便于兼容RTU设备`,
        cardImg: img35,
        isNew: false,
        isHot: false,
        parameters: [
            { label: '水位量程 ', content: '0～20m/50m/70m' },
            { label: '测量精度（F.S） ', content: '0.05%F.S' },
            { label: '分辨力 ', content: '1mm' },
            { label: '水位变化率', content: ' ＜60cm/min' },
            { label: '工作温度 ', content: '-10℃～+60℃' },
            { label: '存储温度', content: '-40℃～+80℃' },
            { label: 'IP等级 ', content: 'IP54' },
        ], scene: ['水库大坝', '河道', '排水管网', '地灾\r\n']
    },
    {
        title: '投入式水位计',
        content: `全不锈钢结构，24×136mm的灵巧体积，可方便的放置在1英寸以上的测压管内，计输出信号为RS485数字量，气压自动补偿，同步测量埋设点的温度。
投入式水位计测量系统智能识别信息、智能故障诊断、云平台手机无缝对接`,
        cardImg: img36,
        isNew: false,
        isHot: false,
        parameters: [
            { label: '综合精度', content: '±0.1%FS（典型值）' },
            { label: '长期稳定性', content: '±0.2%FS/年' },
            { label: '补偿温度', content: '-10℃～70℃' },
            { label: '工作温度', content: '-10℃～80℃' },
            { label: '存储温度', content: '-40℃～100℃' },
            { label: '防护等级', content: 'IP68（变送器部分），IP65（接线盒部分）' },
        ], scene: ['水库大坝', '河道', '排水管网', '地灾\r\n']
    }],
    [{
        title: '超声波流量计',
        content: `测量精度高，量程宽；可测弱流也可测强流；分辨率高，响应速度快；可测瞬时流速也可测平均流速；测量线性，流速检定曲线不易变化；无机械转动部件，不存在泥沙堵塞和水草缠绕问题；探头坚固耐用，不易损坏，操作简便等优点`,
        cardImg: img41,
        isNew: true,
        isHot: true,
        parameters: [
            { label: '雷达测速范围', content: '0.1-20m/s' },
            { label: '雷达测速精度', content: '0.01m/s' },
            { label: '雷达测速分辨力', content: '0.001m/s' },
            { label: '流速方向识别', content: '双向自动识别' },
            { label: '雷达测距范围', content: '0-20m' },
            { label: '雷达距离精度', content: '±2mm' },
            { label: '雷达测距分辨率', content: 'lmm' },
            { label: '超声波测速范围', content: '0.02~6.5m/s' },
            { label: '超声波测速精度', content: '±0.01m/s' },
            { label: '超声波水位量程', content: '0.03-5m' },
            { label: '供电电压 (V)', content: '9~36V DC,建议12V DC' },
            { label: '工作电流(mA)', content: '500mA DC12V' },
            { label: '工作温度', content: '-40°C~80°C' },
            { label: '通讯接口', content: '4G/RS485/RS232(选配)' },
            { label: '防护等级', content: 'IP68' },
        ], scene: ['水库大坝', '河道', '排水管网', '地灾']
    },
    {
        title: '多普勒流量计',
        content: `高精度的流量测量
读数稳定可靠
指标流速法计算流量
同时测量x和y方向流速，可计算流向
水位测量技术，高精度的水位测量
集成温度探头，用于水温监测及声速补偿
集成前倾及侧倾传感器，方便安装调整
尺寸小，易安装，且对流动影响小。
操作、管理方便`,
        cardImg: img42,
        isNew: true,
        isHot: true,
        parameters: [
            { label: '流速量程', content: '0-10m/s双向' },
            { label: '流速分辨率', content: '0.001m/s' },
            { label: '流速精度', content: '0.001m/s(流速<5m/s时);002m/s 或实际峰值速度的0.3%(采用较大值)(流速>5m/s时)' },
            { label: '超声液位量程', content: '6.5m' },
            { label: '超声液位精度', content: '0.001m' },
            { label: '超声液位分辨率', content: '0.0005m' },
            { label: '静压液位量程', content: '0-10m' },
            { label: '静压液位分辨率', content: '0.001m' },
            { label: '温度量程', content: '-20~60°C' },
            { label: '传感器尺寸', content: '165*50*29.5mm' },
            { label: '安装', content: '专用支架' },
            { label: '材质', content: '金属,塑料,橡胶' },
            { label: '防护等级', content: 'IP68' },
        ], scene: ['水库大坝', '河道', '排水管网', '地灾']
    },
    {
        title: '雷达流量计',
        content: `内置进口24GHz雷达速度探测模块，内置26GHz雷达水位模块。
1.CW平面微带雷达非接触式探测，不受气候、泥沙及漂浮物影响。
2.快速精确测量，数据输出稳定，且适用于洪水期高流速环境。
3.天线发射频率灵活可调，能有效避免多个产品相互干扰。
4.可设定多种数据通讯接口，方便用户系统对接。
5.测量运行和休眠模式相结合，节能降耗。
6.防内部结露、防水、防雷设计，适用于各种野外环境。
7.外观小巧，安装方便、易维护。
8.内置抗雨天干扰算法，不受降雨影响。`,
        cardImg: img43,
        isNew: true,
        isHot: true,
        parameters: [
            { label: '测速范围', content: '0.1~20m/s' },
            { label: '测速精度', content: '±0.01m/s' },
            { label: '测速分辨力', content: '0.001m/s' },
            { label: '流速方向识别', content: '双向自动识别' },
            { label: '测量时间', content: '1次/s' },
            { label: '测速雷达频率', content: '24GHz' },
            { label: '俯仰角范围', content: '30~70°' },
            { label: '角度精度', content: '±1°' },
            { label: '角度分辨率', content: '0.1°' },
            { label: '测速天线波束角', content: '12°* 24°' },
            { label: '测距量程', content: '0.2~30m' },
            { label: '测距精度', content: '±3mm' },
            { label: '测距分辨力', content: 'Imm' },
            { label: '盲区', content: '<20cm' },
            { label: '测距雷达频率', content: '24GHz' },
            { label: '测距天线波束角', content: '11°*11°' },
        ], scene: ['水库大坝', '河道', '排水管网', '地灾\r\n']
    },
    ], [{
        title: '机械式风速风向仪',
        content: ` 1.采用非接触式磁传感器测量原理，测量精度高，可靠性强
2.整体采用高精度合金材质，聚酯涂层，抗风及耐腐蚀能力强
3.风速测量范围宽，启动风速低
4.设计精巧，安装简捷
5.传感器电路保护采用容错设计
6.符合CE EMC标准，多级防雷抗浪涌设计`,
        cardImg: img51,
        isNew: true,
        isHot: true,
        parameters: [
            { label: '风速范围', content: '0～60m/s' },
            { label: '分辨率', content: '0.1m/s' },
            { label: '测量误差', content: '±0.2m/s(风速0~5m/s)，±2%（风速>5m/s）；' },
            { label: '风向范围', content: '0～359.9°全方位，无盲区' },
            { label: '测量误差', content: '±3°' },
            { label: '分辨率', content: '0.1°' },
            { label: '工作温度', content: '-40℃～＋70℃' },
        ], scene: ['水库大坝', '河道', '排水管网', '地灾']
    },
    {
        title: '温湿度传感器',
        content: `温湿度计抗冲击、接地防雷、测值稳定可靠
温湿度计体积小巧，可靠性高，漂移小, 响应速度短，灵敏度高，输出信号为RS485数字量。温湿度计可延伸测量其它环境的温湿度(如混凝土和土壤表面),探头浸水无影响，在长时间饱和状态后能快速脱湿。
温湿度计测量系统智能识别信息、智能故障诊断、云平台手机无缝对接`,
        cardImg: img52,
        isNew: false,
        isHot: false,
        parameters: [
            { label: '风速范围', content: '0～60m/s' },
            { label: '分辨率', content: '0.1m/s' },
            { label: '测量误差', content: '±0.2m/s(风速0~5m/s)，±2%（风速>5m/s）；' },
            { label: '风向范围', content: '0～359.9°全方位，无盲区' },
            { label: '测量误差', content: '±3°' },
            { label: '分辨率', content: '0.1°' },
            { label: '工作温度', content: '-40℃～＋70℃' },
        ], scene: ['水库大坝', '河道', '排水管网', '地灾']
    },
    {
        title: '雨量计',
        content: `精度高、稳定性好；漏斗处设计网孔，可以防止树叶等杂物阻塞雨量下流；翻转部件翻转灵敏，性能稳定，工作可靠；不锈钢外壳，外观精美，质量佳；承雨口采用不锈钢皮整体冲拉而成，光洁度高，滞水产生误差小`,
        cardImg: img53,
        isNew: false,
        isHot: false,
        parameters: [
            { label: '承雨器口径', content: 'Φ200mm，刃口40°～45°' },
            { label: '分辨率', content: '0.1mm' },
            { label: '测量精度', content: '≤±1%' },
            { label: '雨强范围', content: '0.1～13mm/min' },
            { label: '测量方式', content: '非接触式' },
            { label: '工作电压', content: 'DC12V' },
            { label: '工作电流', content: '22mA' },
            { label: '通讯方式', content: 'RS485通讯' },
            { label: '工作环境温度', content: '0～+50℃' },
            { label: '工作环境湿度', content: '≤95%（40℃）' },
            { label: '防堵塞', content: '传感器具有防堵、防虫、防尘措施' },
        ], scene: ['水库大坝', '河道', '排水管网', '地灾\r\n']
    },
    {
        title: '蒸发量传感器',
        content: `采用数字化传感器，测量精度高，灵敏度好，无温度漂移，性能长期稳定，不秀钢材质，耐腐蚀，不起锈外观精美，`,
        cardImg: img54,
        isNew: false,
        isHot: false,
        parameters: [
            { label: '供电电压', content: '10-30VDC' },
            { label: '功耗', content: '0.17W' },
            { label: '测量范围', content: '0~200mm' },
            { label: '测量精度', content: '±1%FS' },
            { label: '响应时间', content: '＜1s' },
            { label: '输出类型 ', content: '标准Modbus-RTU协议 485信号输出' },
            { label: '防护等级', content: 'IP66' },
            { label: '内筒口径', content: '18.4cm' },
            { label: '内筒高度', content: '20cm' },
            { label: '工作温度 ', content: '-40～85°C' },
            { label: '工作湿度 ', content: '0～100%RH' },
            { label: '存储温度 ', content: '-40～125°C' },
            { label: '存储湿度', content: '＜80%（无凝结）' },
        ], scene: ['水库大坝', '河道', '排水管网', '地灾']
    },
    ],
    [{
        title: '排水管网检测胶囊机器人',
        content: `采用无动力设计，可利用水流驱动工作，检测操作简单，可快速实现管道内部图像数据和运动数据的采集
集成鱼眼相机、1500mm以下的排水管网的影像效果均可满足工程化应用
内置9轴AHRS运动传感器和光流传感器`,
        cardImg: img61,
        isNew: true,
        isHot: true,
        parameters: [
            { label: '摄像传感器', content: 'IMX274  1080P 高清sensor' },
            { label: '镜头', content: '高清220°广角镜头' },
            { label: '像素', content: 'HD 1080P' },
            { label: '帧速率', content: '1080P 60fp/s     ' },
            { label: '防水等级', content: 'IPX7' },
            { label: '存储', content: '最大支持128GB' },
            { label: '摄像补光灯', content: '自带6节LED补光灯，多档可调节' },
            { label: '定位精度', content: '1米' },
            { label: '传输速度', content: '10M/S' },
            { label: '续航', content: '连续摄影时间大于120分钟' },
        ], scene: ['水库大坝', '河道', '排水管网', '水工隧洞']
    },],
    [{
        title: '隧洞激光检测车',
        content: `运用高精度三维点云快速获取和精密测量技术，全面检测输水隧洞表面病害，自动识别和定量分析病害并研判病害发生与发展的变化趋势
可实现病害的识别、定位、量测、分类、智能统计分析等多功能一体化，检测效率高、漏检率低，成果客观准确`,
        cardImg: img71,
        isNew: true,
        isHot: true,
        parameters: [
            { label: '功能', content: '斜井内自动爬坡' },
            { label: '检测速度', content: '3km/小时' },
            { label: '定位精度', content: '1cm/100m' },
            { label: '点云精度', content: '0.2mm' },
            { label: '自动识别裂缝、脱落、渗水、泌钙、伸缩缝破损等病害扫描速度 ', content: '100万点/秒' },
            { label: '扫描频率 ', content: '200转/秒' },
            { label: '定位精度 ', content: '1cm/100m' },
            { label: '检测精度 ', content: '结构变形：0.2mm  裂缝：0.5mm 破损：1mm^2' },
        ], scene: ['水库大坝', '河道', '排水管网', '水工隧洞']
    },
    {
        title: '探地雷达',
        content: `基于实时采样技术高速AD,超高采样率长距离WIFI传输， 摆脱
线缆束缚，减少战障率具有大深度探测能力信噪比高，数据干净干扰极少`,
        cardImg: img72,
        isNew: false,
        isHot: false,
        parameters: [
            { label: '频率范围', content: '130MHZ-375MHZ' },
            { label: '测量精度', content: '1cm' },
            { label: '采样频率', content: '50k～285kHz可调' },
            { label: '连续工作时间', content: '≥8小时' },
            { label: '测量方式', content: '逐点测量、距离触发测量、连续测量三种测量方式' },
            { label: '显示方式', content: '伪彩图、堆积波形或灰度图' },
            { label: '工作温度', content: '-30℃～+70℃' },
        ], scene: ['排水管网', '道路', '桥梁', '隧道']
    }],
    [{
        title: 'DTU数据采集仪',
        content: `采用高性能的工业级位通信处理器和工业级无线模块
 支持4G/3G/2.5G蜂窝通信，支持APN/VPDN
工业级芯片设计，高可靠性，7*24小时稳定
1个RS232和1个RS485接口，内置15KV ESD保护3路DI/DO，2路ADC`,
        cardImg: img81,
        isNew: true,
        isHot: true,
        parameters: [
            { label: '标准及频段', content: '支持 GSM850/900/1800/1900MHz 四频 \n支持 GSM phase 2/2+\n支持 GPRS class 10/12(可选 1-12)' },
            { label: '理论带宽', content: '85.6Kbps' },
            { label: '发射功率', content: 'GSM850/900:<33dBm' },
            { label: 'GSM1800/1900', content: '<30dBm' },
        ], scene: ['水库大坝', '排水管网', '露天矿场', '尾矿库']
    },
    {
        title: 'MCU多功能采集仪',
        content: `　MCU系列数据采集模块可根据上位机或中心站的命令实现巡测、选测或点测、自动巡测以及参数设置等进行功能：
巡测：即逐点依次自动切换模块的每个通道进行测量，采集对应传感器数据;
选测或点测：即针对某一个测点或某几个测点对应的通道进行测量采集传感器;
自动定时巡测：指中心站设置了模块采集间隔和采集起点时间，采集模块自动计算采集时间启动进行巡测并自动上传数据(可以关闭自动上传)，同时保存采集的数据。模块在不测量时进入休眠模式，功耗仅有40uA。
　　具有掉电保护的大容量数据存储功能。
　　多种通信接口和多种通信模式。`,
        cardImg: img82,
        isNew: false,
        isHot: false,
        parameters: [
            { label: '通道数', content: '4、8、16通道' },
            { label: '扫频激励范围', content: '200-6000Hz' },
            { label: '时基精度', content: '0.01%F.S' },
            { label: '测频率分辨率', content: '0.1Hz' },
            { label: '测模数分辨率', content: '0.1F' },
            { label: '测温范围', content: '-80°C~+150°C' },
            { label: '测温精度', content: '士0.2°C' },
            { label: '测温分辨率', content: '0.1℃' },
            { label: '振弦接口', content: '4路、8路、16路' },
            { label: '供电范围', content: 'DC9~36V，标准DC12V' },
            { label: '工作电流', content: '<150mA@12VDC' },
        ], scene: ['水库大坝', '排水管网', '露天矿场', '尾矿库\r\n地铁', '隧道', '桥梁', '公路']
    }, {
        title: 'RTU遥测终端机',
        content: `雨量触发采集
定时数据采集、存储及上报
预警加报
可同时支持多种通讯方式
支持LoRa采集数据方式
支持设备电压监测功能`,
        cardImg: img83,
        isNew: false,
        isHot: false,
        parameters: [
            { label: '通信方式', content: '支持 2G/3G/4G/ NB-IOT、10/100 Mbps 自适应以太网' },
            { label: '模拟量输入接口', content: '8 路模拟量输入接口，4-20mA 电流信号或 0-5V 电压信号' },
            { label: '开关量输入、输出', content: '1路开关量输入、1 路开关量输输出、1路继电器输出' },
            { label: '雨量输入', content: '1路雨量计或者脉冲' },
            { label: '显示\按键', content: '触摸显示屏' },
            { label: '振弦', content: '4路振弦输入' },
            { label: 'USB', content: '1路' },
            { label: '存储容量', content: 'Flash 32MB、TF卡(可选)' },
            { label: 'LoRa通信', content: '433~510MHz' },
            { label: '蓝牙模块', content: '标配' },
            { label: 'GPS 模块', content: '选配' },
            { label: '供电系统', content: 'DC12V/1.5A，内置太阳能充放电控制器' },
            { label: '环境范围', content: '工作:-30~+70℃，储存:-40~+85℃，相对湿度:95%(无凝结)' },
            { label: '防护等级', content: 'IP68' },
        ], scene: ['水库大坝', '排水管网', '露天矿场', '尾矿库']
    }],
    [{
        title: '水库智慧化平台',
        content: `1.协议接入：完整支持水文规约、水资源规约、环保规约。可适配各省地方协议。
        2.兼容性强：支持业内其他厂家（如厦门四信）的遥测终端机接入平台，支持惯性相机数据接入平台，支持GNSS数据接入平台。
3.数据管理：数据的管理、存储、统计分析、数据报表、数据备份等。支持远程取数、整编。 
4.测站管理：测站GIS 地图、测站实时数据、测点历史数据查看。 
5.测站地图：基于GIS地图，提供设备的位置定位、设备的状态显示、数据的快捷查看等功能。 
6.预警管理：支持自定义的预警规则。支持多种预警信息推送方式。`,
        cardImg: img91,
        isNew: true,
        isHot: true,
        parameters: [
            { label: '全面监测与预警', content: '提供水库水雨情和大坝安全的实时监测预警。' },
            { label: '智能决策支持', content: '平台集成水文学和统计学算法，为水库调度和应急管理提供科学化的决策辅助。' },
            { label: '高效数据分析', content: '利用先进的数据分析技术，平台能够快速处理和分析大量监测数据，提取关键信息。' },
            { label: '灵活的系统架构', content: '具备自主可控、扩展性强的特点，支持快速应用于不同规模的水库信息化建设。' },
            { label: '双模网络通信', content: '支持光纤与北斗双模网络双向通信，确保在各种环境下通信的稳定性和可靠性。' },
            { label: '数字孪生技术应用', content: '平台采用数字孪生技术，实现水库的虚拟仿真和模拟，优化调度方案，提升管理效率。' },
        ], scene: ['水库大坝', '水工隧洞', '河道', '排水管网']
    }, {
        title: '水利视频监控平台',
        content: `1.具有闯入识别、车牌号识别、陌生人识别、烟雾识别、明火识别等智能识别功能。
        2.具有闯入识别、车牌号识别、陌生人识别、烟雾识别、明火识别等智能识别功能。
        3.最高支持8路全实时编码，标准H.264压缩格式
        4.支持3G/4G网络、WIFI和有线LAN三链路网络智能切换
        5.设施视频进行统一调用、切换和控制的基本功能
        6.支持多分屏功能
        7.报警视频联动处置功能
        8.智能视频分析，支持移动侦测、穿越警戒线监测等应用
        9.录像本地存储支持硬盘、SD卡，自动覆盖
        10.提供多级区域、机构、权限的设置
        11.支持红外遥控器控制，支持外置红外天线
        12.支持语音对讲功能
        13.提供日志管理功能
        14.支持云台控制功能，可控制监控站点镜头的转动、光圈、变倍、焦距等参数`,
        cardImg: img92,
        isNew: false,
        isHot: false,
        parameters: [
            { label: '实现无人值守的实时监控', content: '通过高清摄像头和智能分析技术，系统能够24小时不间断地监控各个角落，确保在无人值守的情况下也能及时发现并处理潜在问题。' },
            { label: '全场景AI监控预警', content: '具有闯入识别、车牌号识别、陌生人识别、烟雾识别、明火识别等智能识别功能。' },
            { label: '功能参数', content: '最高支持8路全实时编码，标准H.264压缩格式' },
            { label: '功能参数', content: '支持3G/4G网络、WIFI和有线LAN三链路网络智能切换' },
            { label: '功能参数', content: '设施视频进行统一调用、切换和控制的基本功能' },
            { label: '功能参数', content: '支持多分屏功能' },
            { label: '功能参数', content: '报警视频联动处置功能' },
            { label: '功能参数', content: '智能视频分析，支持移动侦测、穿越警戒线监测等应用' },
            { label: '功能参数', content: '录像本地存储支持硬盘、SD卡，自动覆盖' },
            { label: '功能参数', content: '提供多级区域、机构、权限的设置' },
            { label: '功能参数', content: '支持红外遥控器控制，支持外置红外天线' },
            { label: '功能参数', content: '支持语音对讲功能' },
            { label: '功能参数', content: '提供日志管理功能' },
            { label: '功能参数', content: '支持云台控制功能，可控制监控站点镜头的转动、光圈、变倍、焦距等参数' },
        ], scene: ['水库大坝', '水工隧洞', '河道', '排水管网']
    }, {
        title: '水利物联网平台',
        content: `1.兼容多种设备协议，简化集成。
        2.统一数据格式，简化信息管理。
        3.自定义周期，高效信息捕获。
        4.自动化决策，提升响应速度。
        5.即时状态跟踪，保障系统稳定。
        6.独立数据管理，保护用户隐私。`,
        cardImg: img93,
        isNew: false,
        isHot: false,
        parameters: [
            { label: '多源异构接入', content: '兼容多种设备协议，简化集成。' },
            { label: '数据标准化处理', content: '统一数据格式，简化信息管理。' },
            { label: '灵活数据采集', content: '自定义周期，高效信息捕获。' },
            { label: '智能规则引擎', content: '自动化决策，提升响应速度。' },
            { label: '实时监控运维', content: '即时状态跟踪，保障系统稳定。' },
            { label: '多租户架构', content: '独立数据管理，保护用户隐私。' },
        ], scene: ['水库大坝', '水工隧洞', '河道', '排水管网']
    },]
]
export function getProductionByName(name) {
    for (let i = 0; i < SiderBarContent.length; i++) {
        for (let j = 0; j < SiderBarContent[i].length; j++) {
            if (SiderBarContent[i][j].title == name) {
                return SiderBarContent[i][j];
            }
        }
    }
}
