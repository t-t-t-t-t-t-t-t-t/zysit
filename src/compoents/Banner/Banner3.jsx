import './scss/Banner2.scss'
import { Button } from '../Button/Button'
import { useState } from "react"
export const Banner3 = ({ title, content, image, buttonContent = "了解更多", buttonUrl = '/about', marsk = false, color = "#fff", type = '1' }) => {
    return (
        <div className={['Banner2', marsk ? 'marsk' : ''].join(' ')} >
            <div className='textWrap'>
                <div className="text" style={{ color: color }}>
                    <div className='title'>{title}</div>
                    <div className="content">{content}</div>
                    <div className="buttonWrap">
                        <Button content={buttonContent} url={buttonUrl} type={type}></Button>
                    </div>
                </div>
            </div>
            <div className='imgWrap'>
                {image && <img className='img' src={image} alt={title} />}
            </div>
        </div >
    )
}