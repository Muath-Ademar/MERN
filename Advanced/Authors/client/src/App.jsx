import { useState } from 'react'
import {  Router, Route, Routes } from 'react-router-dom';
import './App.css'
import Dashboard from './views/Dashboard'
import ListDashboard from './views/ListDashboard';
import Update from './views/Update';

function App() {
  

  return (
    <>
    <Routes>
  <Route path='/' element={<Dashboard/>}/>
  <Route path='/authors' element={<ListDashboard/>}/>
  <Route path='/authors/:id' element={<Update/>}/>
  </Routes>
    </>
  )
}

export default App
