import axios from 'axios';
import React, { useState } from 'react'

const StarWarsApi = (props) => {
    const [StarWars, setStarWars] = useState([])
    const [Error, setError] = useState("")
    
        
        axios.get("https://swapi.dev/api/people")
        .then(response => {
            setStarWars(response.data.results)
            setError("")
        })
        .catch(Error=>{
            setError("Failed get the Star Wars Charecters, please try again")
            setStarWars([])
        })
    
    return (

    <div>
                {Error && <p style={{ color: 'red' }}>{Error}</p>}
                <ul>
                    {StarWars.map((s, index) => (
                        <li key={index}>{s.name}</li>
                    ))}
                </ul>
    </div>
    
    )
}

export default StarWarsApi
