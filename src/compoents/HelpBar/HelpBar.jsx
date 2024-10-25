import './HelpBar.scss'
import { Button } from '../Button/Button'
export function HelpBar() {

    return (
        <div className="HelpBar">
            <div className="text">
                需要帮助? 我们为您提供解决方案
            </div>
            <div className="buttonWrap" style={{ display: 'flex', justifyContent: 'center', marginTop: '50px' }}>
                <Button url='/about' content='联系我们' type='3'></Button>
            </div>
        </div>
    )
}