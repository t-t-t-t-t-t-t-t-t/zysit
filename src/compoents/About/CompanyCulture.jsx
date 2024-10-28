import './scss/CompanyCulture.scss'
import { CultureCard } from './CultureCard'
export function CompanyCulture() {
    return (
        <div className="CompanyCulture">
            <div className="mainTitle">
                企业文化
            </div>
            <div className="CompanyCultureWrap">
                <CultureCard></CultureCard>
                <CultureCard></CultureCard>
                <CultureCard></CultureCard>
            </div>
        </div>
    )
}