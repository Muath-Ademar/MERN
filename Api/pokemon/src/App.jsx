import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Pokemon from './components/Pokemon'
import axios from 'axios'

function App() {
  const [pokemons, setPokemon] = useState([])
  const [pokemonError, setPokemonError] = useState("")
  const fetch = (e) =>{
    axios.get("https://pokeapi.co/api/v2/pokemon?limit=807&offset=0")
    .then(response =>{
        return response.data.results;
    })
    .then(data => {
        setPokemon(data)
        setPokemonError("")
    })
    .catch(pokemonError=>{
        setPokemonError("Failed to fetch pokemon, please try again")
        setPokemon([])
    })
}
  return (
    <>
<Pokemon
pokemons ={pokemons}
pokemonError ={pokemonError}
onFetchPokemon = {fetch}/>
    </>
  )
}

export default App
