import axios from 'axios'
import React, { useState } from 'react'

export default function Pokemon({pokemons, pokemonError, onFetchPokemon}) {

    const handlePokemon = (e) =>{
        e.preventDefault();
        onFetchPokemon()
    }
  return (
    <div>
      <form onSubmit={handlePokemon}>
        <input type="Submit" value={"Get Pokemon"} />
      </form>
      <div>
            <div>
                {pokemonError && <p style={{ color: 'red' }}>{pokemonError}</p>}
                <ul>
                    {pokemons.map((pokemon, index) => (
                        <li key={index}>{pokemon.name}</li>
                    ))}
                </ul>
            </div>
        </div>
    </div>
  )
}
