import './scss/Banner1.scss'
import { useBannerHooks } from '../../hooks/BannerHooks'
import { useState, useEffect } from "react"
export const Banner1 = ({ bannerType = 'about', color = '#fff' }) => {
    const [banner, setBanner] = useState({})// banner数据
    useEffect(() => {// 用useState直接在内部更新，会导致死循环
        useBannerHooks().getBannerList(bannerType).then(res => {
            setBanner(res[0])
        })
    }, [])
    return (
        <div className="Banner1">
            <div className='textWrap'>
                <div className="text" style={{ color: color }}>
                    <div className='title'>{banner.title}</div>
                    <div className="content">{banner.content}</div>
                </div>
            </div>
            <div className='imgWrap'>
                {banner.image && <img className='img' src={banner.image} alt={banner.title} />}
            </div>
        </div>
    )
}