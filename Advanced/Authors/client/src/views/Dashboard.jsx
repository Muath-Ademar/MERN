import React, { useEffect, useState } from 'react'
import axios from 'axios';
import AuthorForm from '../components/AuthorForm';
import { useNavigate } from 'react-router-dom';




export default () => {
    const [authors, setAuthors] = useState([]);
    const [errors, setErrors] = useState([])
    const navigate = useNavigate()


    const createAuthor = author => {
        axios.post('http://localhost:8000/api/authors', author)
            .then(res=>{
                setAuthors([...authors, res.data]);
                navigate("/authors")
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
                <AuthorForm onSubmitProp={createAuthor} initialUserName=""/>

        </div>
    )
}

