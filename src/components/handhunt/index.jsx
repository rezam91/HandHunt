import Game from '../general/game/index'

const Handhunt = ({gameNum}) => {
    const tempNum = []
    for (let i=1; i<=gameNum; i++) {
        tempNum.push({
            id:i,
            i
        })
    }
    return (
        tempNum.length>0 ? 
        <ul className="each-game">
            {tempNum.map((item) => (
                <li key={item.id}><Game /></li>
            ))}
        </ul> : <strong>*** Please Select At least one hand! ***</strong>
    )
}

export default Handhunt