import Handhunt from './components/handhunt/index'
import Logo from './components/general/logo/index'
import GameNumber from './components/general/gamenumber/index'
import RefreshButton from './components/general/layout/refresh/refresh'
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
      <h1>Welcome to Handhunt Game!</h1>
      <Logo />
      <GameNumber onChangeNumber={ChangeNumber} />
      <Handhunt gameNum={handNumber} />
      <RefreshButton />
    </>
  )
}

export default App
