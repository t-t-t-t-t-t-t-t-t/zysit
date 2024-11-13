import './scss/NewsContent.scss'
import { NewsCard } from './NewsCard'
import { useNewsHooks } from '../../hooks/NewsHooks'
import { useState, useEffect } from 'react'
export function NewsContent() {
    const [newsContent, setNewsContent] = useState()
    useEffect(() => {
        useNewsHooks().getNewsList().then(res => {
            console.log(res)
            setNewsContent(res)
        })
    }, [])
    return (
        <div className="NewsContent">
            <div className="mainTitle">公司动态</div>
            <div className="NewsContentWrap">
                {newsContent && newsContent.map((item, idx) => {
                    return (<NewsCard title={item.title} url={item.url} image={item.image} _id={item._id} key={idx}></NewsCard>)
                })}
            </div>
        </div>
    )
}