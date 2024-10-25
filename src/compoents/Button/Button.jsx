import './Button.scss'


export function Button({ url = '/about', content = '联系我们', type = '' }) {
    return (
        <div className={['button', 'type' + type].join(' ')} onClick={() => { navigate(url) }}>
            {content}
        </div>
    )
}