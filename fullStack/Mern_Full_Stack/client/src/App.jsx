import { useState } from 'react'
import Dashboard from './views/Dashboard'
import './App.css'
import { Route, Router, Routes } from 'react-router-dom'
import Details from './views/Details'
import Update from './views/Update'

function App() {

  return (
    <>
    <Routes>
      <Route path='/' element={<Dashboard/>}/>
      <Route path='/products/:id' element={<Details/>}/>
      <Route path='/products/:id/edit' element={<Update/>}/>
    </Routes>

    </>
  )
}
export default App
