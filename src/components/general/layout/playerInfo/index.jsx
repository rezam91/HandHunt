import { useState } from "react"

const PlayerInfo = () => {
    const [playerName,setName] = useState('foo')
    const [nameVisibility,setVisibility] = useState(false)
    const [divOpacity,setOpacity] = useState('0')
    const [buttonVisibility,setButtonVisibility] = useState(true)

    const changeName = (e) => {
        setName(e.target.value)
        e.target.value.length ? setButtonVisibility(false) : setButtonVisibility(true)

    }
    const submitPlayerName = (e) => {
        e.preventDefault()
        setVisibility(true)
        setOpacity('1')
    }
    return (
        <div style={{position:'relative'}}>
            <form style={{visibility: !nameVisibility ? 'visible' : 'hidden'}} onSubmit={submitPlayerName} className="player--info">
                <span>Player's name: </span>
                <input placeholder="Please insert your name" type="text" onChange={changeName} />
                <button disabled={buttonVisibility} type="submit" className="ok--button">OK</button>
            </form>
                <div style={{top:'0',transform:'translateX(-50%)',left: '50%',position:'absolute',fontSize: '20px', opacity:divOpacity, transition: 'all 1s ease-in-out',visibility: !nameVisibility ? 'hidden' : 'visible'}}>-- Welcome <strong>{playerName}</strong>! --</div>
        </div>
    )
}

export default PlayerInfo