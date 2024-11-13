import './scss/NewsCard.scss'

export function NewsCard({ title, image, url }) {
    return (
        <div onClick={() => { document.location.href = url }} className="NewsCard">
            <div className="imgWrap">
                <img className='img' src={image} alt="" />
            </div>
            <div className="title">
                {title}
            </div>
        </div>
    )
}