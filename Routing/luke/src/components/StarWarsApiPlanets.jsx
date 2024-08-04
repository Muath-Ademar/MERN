import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import SearchForm from './SearchForm';
const StarWarsApiPlanets = (props) => {
    const {planetId} = useParams()
    const [planets, setPlanets] = useState([])
    useEffect( () =>{
        axios.get("https://swapi.dev/api/planets/" + planetId + "/")
        .then(response => {
            setPlanets(response.data)
            
        }) }, [planetId])
       
    return (

            <div>
                <SearchForm/>
                <h1>{planets.name}</h1>
                <p>Planet Climate: {planets.climate}</p>
                <p>Planet terrain: {planets.terrain}</p>
                <p>Planet Surface Water: {planets.surface_water}</p>
                <p>Planet population: {planets.population}</p>
            </div>
    )
}

export default StarWarsApiPlanets
