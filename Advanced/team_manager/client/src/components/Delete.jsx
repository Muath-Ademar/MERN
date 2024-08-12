import axios from 'axios';
import React from 'react'

const Delete = (props) => {
    const { playerId, successCallback } = props;
    const deletePlayer = () =>
        axios.delete(`http://localhost:8000/api/players/${playerId}`)
    .then(res => {
        successCallback(); // Remove from DOM after successful deletion
    })
        
  return (
    <div>
      <button onClick ={deletePlayer}>Delete</button>
    </div>
  )
}

export default Delete
