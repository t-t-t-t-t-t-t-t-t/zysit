import './scss/ProductionSwiperItem.scss'
import { Link } from 'react-router-dom'
import { useSolutionHooks } from '../../hooks/SolutionHooks';
import { useState, useEffect } from 'react';
export function ProductionSwiperItem({ _id }) {
    const [scene, setScene] = useState()
    useEffect(() => {
        if (_id) {
            useSolutionHooks().getSolutionList(_id).then(res => {
                setScene(res[0])
            })
        }
    }, [_id])
    return (
        <>
            {scene && <Link to={`/solutionDetail/?_id=${scene._id}`} className="ProductionSwiperItem" style={{ textDecoration: 'none' }}>
                <div className="imgWrap">
                    <img className='img' src={scene.contentImage} alt="" />
                </div>
                <div className="textWrap">
                    <div className="title">
                        {scene.title}
                    </div>
                    <div className="content">
                        {scene.content}
                    </div>
                </div>
            </Link>}
        </>
    )
}