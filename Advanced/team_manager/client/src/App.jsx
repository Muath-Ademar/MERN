import { useState } from 'react'
import DashBoard from './views/DashBoard'
import './App.css'
import { Route, Router, Routes } from 'react-router-dom'
import PlayerList from './components/PlayerList'
import PlayerListDash from './views/PlayerListDash'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Routes>
      <Route path='/players/addplayers' element={<DashBoard/>}/>
      <Route path='/players/list' element={<PlayerListDash/>}/>
    </Routes>

    </>
  )
}

export default App
