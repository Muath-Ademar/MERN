import React, { useEffect, useState } from 'react'
import axios from 'axios';
import Create from '../components/Create';
import { Link, useNavigate } from 'react-router-dom';

const DashBoard = () => {
const [players, setPlayers] = useState([])
const [errors, setErrors]= useState([])
const navigate = useNavigate()

const createPlayer = player => {
  axios.post('http://localhost:8000/api/players', player)
      .then(res=>{
          setPlayers([...players, res.data]);
          navigate("/players/list")
          setErrors("")
      })
      .catch(err=>{
          console.log('Error response:', err.response.data); // Inspect this
          const errorResponse = err.response.data.errors; // Get the errors from err.response.data
          const errorArr = []; // Define a temp error array to push the messages in
          for (const key of Object.keys(errorResponse)) { // Loop through all errors and get the messages
              errorArr.push(errorResponse[key].message)
          }
          // Set Errors
          console.log(">>>>>>>>"+errorArr)
          setErrors(errorArr);
          
      })   

}
    
        
    
  return (
    
    <div>
      {errors && errors.map((err, index) => <p key={index}>{err}</p>)}
      <h1>Add Player</h1>
      <h1><Link to={"/players/list"}>Player List</Link></h1>
      <Create onSubmitProp ={createPlayer} intialName="" intialPostion=""/>
    </div>
  )
}

export default DashBoard
