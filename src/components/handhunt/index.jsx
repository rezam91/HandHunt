import { useState } from 'react'
import Game from '../general/game/index'

const Handhunt = ({gameNum}) => {
    const tempNum = []
    const [totalGames, setGames] = useState(0)
    const [totalWins, setWins] = useState(0)
    const winNum = Math.ceil(gameNum*Math.random())

    const checkOption = (selected) => {
        setGames(totalGames+1)
        if (winNum == selected) {
            setWins(totalWins+1)
        }
    }

    for (let i=1; i<=gameNum; i++) {
        tempNum.push({
            id:i,
            i
        })
    }
    return (
        <>
            {gameNum>1 ? 
            <ul className="each-game">
                {tempNum.map((item) => (
                    <li key={item.id} onClick={() => checkOption(item.id)}><Game /></li>
                ))}
            </ul> : <div className='warning-sign'>*** Please Select At least 2 hand! ***</div>}
            <div className='player-point'>
                <span>Player Point</span><span>{totalWins}</span>
            </div>
            
            <div className='total-played'>
                <span>Total Played</span><span>{totalGames}</span>
            </div>
        </>
    )
}

export default Handhunt