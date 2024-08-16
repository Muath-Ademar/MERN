import React, { useState, useEffect } from 'react'
import AuthorList from '../components/AuthorList'
import axios from 'axios'

const ListDashboard = () => {
    const [authors, setAuthors] = useState([])
    useEffect(() => {
        axios.get('http://localhost:8000/api/authors')
            .then(res =>{ 
              const sorted = res.data.sort((a, b) => a.userName.localeCompare(b.userName))
                setAuthors(sorted)
            });
    }, [])
    const removeFromDom = authorId => {
        setAuthors(authors.filter(author => author._id != authorId));
    }
  return (
    <div>
    <AuthorList authors={authors} removeFromDom={removeFromDom}/>
    </div>
  )
}

export default ListDashboard
