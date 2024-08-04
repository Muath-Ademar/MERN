import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Home from './components/Home'
import Number from './components/Number'


import {
  Routes,
  Route,
  Link
} from "react-router-dom";

function App() {
 

  return (
    <>
<Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/:MyVar" element={<Number />} />
        <Route path="/:MyVar/:bgc/:fc" element={<Number />} />
        
      </Routes>
    </>
  )
}

export default App
