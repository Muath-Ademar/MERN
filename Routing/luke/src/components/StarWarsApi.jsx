import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import SearchForm from './SearchForm';

const StarWarsApi = () => {
    const {id} = useParams()
    const [starWars, setStarWars] = useState([])
    useEffect( () => {
        axios.get("https://swapi.dev/api/people/" + id + "/" )
        .then(response => {
            setStarWars(response.data)
            
        })

        }, [id])
    return (

    <div>
        <SearchForm/>
        <h1>{starWars.name}</h1>
        <p>Heigth: {starWars.height}</p>
        <p>Hair color: {starWars.mass}</p>
        <p>Eye color: {starWars.hair_color}</p>
        <p>Skin color: {starWars.skin_color}</p>
    </div>
    
    )
}

export default StarWarsApi
