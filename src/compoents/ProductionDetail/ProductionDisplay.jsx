import './scss/ProductionDisplay.scss'
import { useNavigate } from 'react-router-dom'
import backgroundImg from '../../assets/imgs/ProductionDetail/ProductionDisplay/ProductionDisplay.jpg'
import productionImgTemp from '../../assets/imgs/Production/ProductionItem/item1/表面式应变计.jpg'
export const ProductionDisplay = ({ title = '表面式应变计', productionImg = productionImgTemp }) => {
    let navigate = useNavigate();
    return (
        <div className="ProductionDisplay">
            <div className='textWrap'>
                <div className="text" >
                    <div className='title'>{title}</div>
                    <div className="buttonWrap">
                        <div className="button" onClick={() => { navigate('/about') }}>
                            立即咨询
                        </div>
                    </div>
                </div>
            </div>
            <div className='imgWrap'>
                <div className="productionWrap">
                    <img className='production' src={productionImg} alt={title} />
                </div>
                <img className='img' src={backgroundImg} alt={title} />
            </div>
        </div >
    )
}