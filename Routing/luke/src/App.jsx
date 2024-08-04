import { useState } from 'react'
import './App.css'
import StarWarsApi from './components/StarWarsApi'
import StarWarsApiPlanets from './components/StarWarsApiPlanets';
import SearchForm from './components/SearchForm';
import Error from './components/Error';
import {
  Routes,
  Route,
  Link,
  Router
} from "react-router-dom";


function App() {

  return (
    <>

<Routes>
<Route path='/error' element ={<Error/>}/>
<Route path="/" element ={<SearchForm/>}/>
<Route path="/people/:id" element={<StarWarsApi/>}/>
<Route path="/planets/:planetId" element ={<StarWarsApiPlanets/>}/>
</Routes>
    </>
  )
}

export default App
