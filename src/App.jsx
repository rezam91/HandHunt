import Handhunt from './components/handhunt/index'
import Logo from './components/general/logo/index'
import GameNumber from './components/general/gamenumber/index'
import RefreshButton from './components/general/layout/refresh/refresh'
import PlayerInfo from './components/general/layout/playerInfo'

import { useEffect, useState } from 'react'

const App = () => {
  const [handNumber,SetNumber] = useState(2)
  const ChangeNumber = (changedVar) => {
    SetNumber(changedVar)
  }
  useEffect(() => {
    document.title = 'HandHunt'
  },[])
  return (
    <>
      <h1>Handhunt Game!</h1>
      <Logo />
      <PlayerInfo />
      <GameNumber onChangeNumber={ChangeNumber} />
      <Handhunt gameNum={handNumber} />
      <RefreshButton />
    </>
  )
}

export default App
