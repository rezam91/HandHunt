import Game from '../general/game/index'

const Handhunt = ({gameNum}) => {
    const tempNum = []
    const winNum = Math.ceil(gameNum*Math.random())
    for (let i=1; i<=gameNum; i++) {
        tempNum.push({
            id:i,
            i
        })
    }
    return (
        gameNum>1 ? 
        <ul className="each-game">
            {tempNum.map((item) => (
                <li key={item.id}><Game /></li>
            ))}
        </ul> : <div className='warning-sign'>*** Please Select At least 2 hand! ***</div>
    )
}

export default Handhunt