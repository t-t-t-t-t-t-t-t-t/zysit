import './scss/CaseGuid.scss'
import { Link } from 'react-router-dom'
export function CaseGuid({ guidList = ['水利', '检测', '无人机优视测量', '惯性视觉相机', '系统建设'] }) {
    return (<div className="CaseGuid">
        <div className="CaseGuidWrap">
            {
                guidList.map((item, idx) => {
                    return (
                        <Link className='link' key={idx} to={`/cases?name=${item}`}>{item}</Link>
                    )
                })
            }
        </div>
    </div>)
}