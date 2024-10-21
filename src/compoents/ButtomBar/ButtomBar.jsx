import './ButtomBar.scss'
import { Part1 } from './Compoents/Part1'
import { Part2 } from './Compoents/Part2'
import { Part3 } from './Compoents/Part3'
export function BottomBar() {

    return (
        <div className="ButtomBar">
            <Part1></Part1>
            <Part2></Part2>
            <Part3></Part3>
        </div>
    )
}