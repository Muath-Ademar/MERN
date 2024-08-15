import React, { useState } from 'react'
import Delete from './Delete'
import Table from 'react-bootstrap/Table';

const PlayerList = (props) => {
    const{removeFromDom} = props
    
  return (
    <div>
       <Table striped bordered hover>
      <thead>
        <tr>
          <th>Team Name</th>
          <th>Preferred Position</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        {props.players.map((player, i) =>
        <tr key={i}>
          <td>{player.playerName}</td>
          <td>{player.preferedPosition}</td>
          <td><Delete playerId ={player._id} 
              successCallback={()=>removeFromDom(player._id)}/></td>
        </tr>
        )}
      </tbody>
    </Table>
            
            
    </div>
  )
}

export default PlayerList
