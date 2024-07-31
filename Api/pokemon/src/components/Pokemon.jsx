import axios from 'axios'
import React, { useState } from 'react'

export default function Pokemon() {
    const [Pokemon, setPokemon] = useState([])
    const [pokemonError, setPokemonError] = useState("")
    const handle = (e) =>{
        e.preventDefault()
        axios.get("https://pokeapi.co/api/v2/pokemon?limit=807&offset=0")
        .then(response =>{
            return response.data;
        })
        .then(data => {
            setPokemon(data.results)
            setPokemonError("")
        })
        .catch(pokemonError=>{
            setPokemonError("Failed to fetch pokemon, please try again")
            setPokemon([])
        })
    }
  return (
    <div>
      <form onSubmit={handle}>
        <input type="Submit" value={"Get Pokemon"} />
      </form>
      <div>
            <div>
                {pokemonError && <p style={{ color: 'red' }}>{pokemonError}</p>}
                <ul>
                    {Pokemon.map((pokemon, index) => (
                        <li key={index}>{pokemon.name}</li>
                    ))}
                </ul>
            </div>
        </div>
    </div>
  )
}
