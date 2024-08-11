import React from 'react'
import axios from 'axios';

export default props => {
    const { authorId, successCallback } = props;
    const deleteAuthor = () => {
        axios.delete(`http://localhost:8000/api/authors/${authorId}`)
        .then(res => {
            successCallback(); // Remove from DOM after successful deletion
        })
            
    }
    
    return (
        <button  onClick={deleteAuthor}>
            Delete
        </button>
    )
}