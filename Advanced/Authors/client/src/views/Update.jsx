import React from 'react'
import axios from 'axios';
import { useState, useEffect } from 'react';
import AuthorForm from '../components/AuthorForm';
import { useNavigate, useParams } from 'react-router-dom';


const Update = (props) => {
    const { id } = useParams({});
const [author, setAuthor] = useState("");
const [loaded, setLoaded] = useState(false);
const [errors, setErrors] = useState([])
const navigate = useNavigate()

useEffect(() => {
    axios.get('http://localhost:8000/api/authors/' + id)
        .then(res => {
            // console.log(res.data)
            setAuthor(res.data);

        })
}, [])

const updateAuthor = author => {
    console.log("hi")
    axios.patch('http://localhost:8000/api/authors/' + id, author)
    .then(res =>{
         console.log(res)
         navigate("/authors")
        })
    .catch(err=>{
        console.log('Error response:', err.response.data.errors); // Inspect this
        const errorResponse = err.response.data.errors; // Get the errors from err.response.data
        const errorArr = []; // Define a temp error array to push the messages in
        for (const key of Object.keys(errorResponse)) { // Loop through all errors and get the messages
            errorArr.push(errorResponse[key].message)
        }
        // Set Errors
        console.log(errorArr)
        setErrors(errorArr);
        
    })  
}
  return (
    <div>
        <h1>Update</h1>
        {errors && errors.map((err, index) => <p key={index}>{err}</p>)}

        <AuthorForm onSubmitProp={updateAuthor} initialUserName={author.userName}/>
    </div>
  )
}

export default Update
