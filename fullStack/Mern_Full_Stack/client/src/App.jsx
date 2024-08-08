import { useState } from 'react'
import Dashboard from './views/Dashboard'
import './App.css'
import { Route, Router, Routes } from 'react-router-dom'

function App() {

  return (
    <>
    <Routes>
      <Route path='/' element={<Dashboard/>}/>
    </Routes>

    </>
  )
}
export default App
