import React from 'react'
import axios from 'axios';
import { useState, useEffect } from 'react';
import AuthorForm from '../components/AuthorForm';
import { useParams } from 'react-router-dom';

const Update = (props) => {
    const { id } = useParams({});
const [author, setAuthor] = useState("");
const [loaded, setLoaded] = useState(false);
useEffect(() => {
    axios.get('http://localhost:8000/api/authors/' + id)
        .then(res => {
            // console.log(res.data)
            setAuthor(res.data);
            setLoaded(true);
        })
}, [])
const updateAuthor = author => {
    axios.patch('http://localhost:8000/api/authors/' + id, author)
        .then(res => console.log(res));
}
  return (
    <div>
        <h1>Update</h1>
        <AuthorForm onSubmitProp={updateAuthor} initialUserName={author.userName}/>
    </div>
  )
}

export default Update
