import { useState } from 'react'
import './App.css'
import DisplayData from './components/DisplayData';
import StarWarsForm from './components/StarWarsForm';
import Error from './components/Error';
import {
  Routes,
  Route,
  Link,
  Router,
  useNavigate
} from "react-router-dom";



function App() {
const [data, setData] =useState([])
const newData = (e) =>{
  setData(e)
}

  return (
    <>
    <StarWarsForm  formData ={newData}/>
    <Routes>
      <Route path='/error' element={<Error/>}/>
      < Route path='/:category/:id'  element={<DisplayData showData={data} />}/>
    </Routes>

    </>
  )
}

export default App
