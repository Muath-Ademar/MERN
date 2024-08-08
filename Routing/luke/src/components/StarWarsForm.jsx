import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

const StarWarsForm = (props) => {
    const navigate = useNavigate()
    const [result, setResult] = useState({})
    const[categories, setCategories] = useState([])
    const [category, setCategory] = useState("people")
    const[id, setId] = useState(1)
    const[error, setError] = useState(false)

    const handleSubmit = (e) => {
        e.preventDefault()
        props.formData(result)
        if(error){
            navigate("/error")
        }
        else{
            navigate(`${category}/${id}`);
        }
        setError(false)
    }

    useEffect( () =>{
        axios.get("https://swapi.dev/api/")
        .then(response => {
            setCategories(Object.keys(response.data));
        })}, [])
        
    useEffect(()=> {
        axios.get(`https://swapi.dev/api/${category}/${id}`)
        .then(response=>{        
        setResult(response.data)
    })
    .catch(err =>{
        setResult({})
        setError(true)
    })
    
},[category, id])

  return (
    <div>
        <form onSubmit={handleSubmit}>
            <select onChange={(e) => setCategory(e.target.value)}>
            { categories.map( (category, i) => 
                <option  key={ i } value={`/${category}`}>{ category }</option> ) 
                }
            </select>
            <input type="number" value={id} onChange={(e) => setId(e.target.value) }  />
            <input type="submit" value={"Search"} />
        </form>
        </div>
    
  )
}

export default StarWarsForm
