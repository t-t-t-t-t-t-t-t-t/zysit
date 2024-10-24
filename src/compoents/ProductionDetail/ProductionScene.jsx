import 桥梁 from '../../assets/imgs/ProductionDetail/ProductionScene/桥梁.jpg'
import 公路 from '../../assets/imgs/ProductionDetail/ProductionScene/公路.jpg'
import 边坡 from '../../assets/imgs/ProductionDetail/ProductionScene/边坡.jpg'
import 隧道 from '../../assets/imgs/ProductionDetail/ProductionScene/隧道.jpg'
import 地铁 from '../../assets/imgs/ProductionDetail/ProductionScene/地铁.jpg'
import 高铁 from '../../assets/imgs/ProductionDetail/ProductionScene/高铁.jpg'
import 水库大坝 from '../../assets/imgs/ProductionDetail/ProductionScene/水库大坝.jpg'
import 水工隧洞 from '../../assets/imgs/ProductionDetail/ProductionScene/水工隧洞.jpg'
import 河道 from '../../assets/imgs/ProductionDetail/ProductionScene/河道.jpg'
import 排水管网 from '../../assets/imgs/ProductionDetail/ProductionScene/排水管网.jpg'
import 楼宇 from '../../assets/imgs/ProductionDetail/ProductionScene/楼宇.jpg'
import 基坑 from '../../assets/imgs/ProductionDetail/ProductionScene/基坑.jpg'
import 露天矿场 from '../../assets/imgs/ProductionDetail/ProductionScene/露天矿场.jpg'
import 尾矿库 from '../../assets/imgs/ProductionDetail/ProductionScene/尾矿库.jpg'
import 地灾 from '../../assets/imgs/ProductionDetail/ProductionScene/地灾.jpg'
export const ProductionScene = [
    {
        title: '桥梁',
        content: '桥梁',
        img: 桥梁
    },
    {
        title: '公路',
        content: '公路',
        img: 公路
    },
    {
        title: '边坡',
        content: '边坡',
        img: 边坡
    },
    {
        title: '隧道',
        content: '隧道',
        img: 隧道
    },
    {
        title: '地铁',
        content: '地铁',
        img: 地铁
    },
    {
        title: '高铁',
        content: '高铁',
        img: 高铁
    },
    {
        title: '水库大坝',
        content: '水库大坝',
        img: 水库大坝
    },
    {
        title: '水工隧洞',
        content: '水工隧洞',
        img: 水工隧洞
    },
    {
        title: '河道',
        content: '河道',
        img: 河道
    },
    {
        title: '排水管网',
        content: '排水管网',
        img: 排水管网
    },
    {
        title: '楼宇',
        content: '楼宇',
        img: 楼宇
    },
    {
        title: '基坑',
        content: '基坑基坑基坑基坑基坑基坑基坑基坑基坑基坑基坑基坑基坑基坑基坑基坑基坑基坑基坑基坑基坑基坑基坑基坑基坑基坑基坑',
        img: 基坑
    },
    {
        title: '露天矿场',
        content: '露天矿场',
        img: 露天矿场
    },
    {
        title: '尾矿库',
        content: '尾矿库',
        img: 尾矿库
    }
    ,
    {
        title: '地灾',
        content: '地灾',
        img: 地灾
    }
]
export function getSceneByName(name) {
    for (let i = 0; i < ProductionScene.length; i++) {
        if (name == ProductionScene[i].title) {
            return { isFind: true, scene: ProductionScene[i] };
        }
    }
    return { isFind: false, scene: null };
}