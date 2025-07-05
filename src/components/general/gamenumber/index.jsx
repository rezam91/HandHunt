import { useState } from "react"

const GameNumber = ({onChangeNumber}) => {
    const [handNum,setHandNum] =useState(0)
    const counter = (e) => {
        setHandNum(e.target.value)
    }
    const submitHandNumber = (e) => {
        e.preventDefault()
        onChangeNumber(handNum)
    }
    return (
        <div>
            <form className="hand--number" onSubmit={submitHandNumber}>
                <span>Hand Number: </span>
                <input placeholder="How Many People?" type='number' onChange={counter}/>
                <button type="submit">OK</button>
            </form>
        </div>
    )
}

export default GameNumber