import './Button.scss'
import { useNavigate } from 'react-router-dom'


export function Button({ url = '/about', content = '联系我们', type = '' }) {
    let navigate = useNavigate();
    return (
        <div className={['button', 'type' + type].join(' ')} onClick={() => { navigate(url) }}>
            {content}
        </div>
    )
}