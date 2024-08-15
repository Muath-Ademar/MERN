import axios from 'axios';
import React from 'react'
import { Button } from 'react-bootstrap';

const Delete = (props) => {
    const { playerId, successCallback } = props;
    const deletePlayer = () =>
        axios.delete(`http://localhost:8000/api/players/${playerId}`)
    .then(res => {
        successCallback(); // Remove from DOM after successful deletion
    })
        
  return (
    <div>
      <Button variant="outline-danger" onClick ={deletePlayer}>Delete</Button>
    </div>
  )
}

export default Delete
