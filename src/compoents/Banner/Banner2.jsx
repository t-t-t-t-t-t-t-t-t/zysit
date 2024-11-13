import './scss/Banner2.scss'
import { Button } from '../Button/Button'
import { useBannerHooks } from '../../hooks/BannerHooks'
import { useState, useEffect } from "react"
export const Banner2 = ({ bannerType = 'about', buttonContent = "了解更多", buttonUrl = '/about', marsk = false, color = "#fff", type = '1' }) => {
    const [banner, setBanner] = useState({})// banner数据
    useEffect(() => {// 用useState直接在内部更新，会导致死循环
        useBannerHooks().getBannerList(bannerType).then(res => {
            setBanner(res[0])
        })
    }, [])
    return (
        <div className={['Banner2', marsk ? 'marsk' : ''].join(' ')} >
            <div className='textWrap'>
                <div className="text" style={{ color: color }}>
                    <div className='title'>{banner.title}</div>
                    <div className="content">{banner.content}</div>
                    <div className="buttonWrap">
                        <Button content={buttonContent} url={buttonUrl} type={type}></Button>
                    </div>
                </div>
            </div>
            <div className='imgWrap'>
                {banner.image && <img className='img' src={banner.image} alt={banner.title} />}
            </div>
        </div >
    )
}