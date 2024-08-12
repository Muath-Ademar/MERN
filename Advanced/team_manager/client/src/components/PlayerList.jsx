import React, { useState } from 'react'
import Delete from './Delete'

const PlayerList = (props) => {
    const{removeFromDom} = props
    
  return (
    <div>
            {props.players.map((player, i) =>

                <p key={i}>Name: {player.playerName} <br/> Position: {player.preferedPosition}
                <Delete playerId ={player._id} 
                successCallback={()=>removeFromDom(player._id)}/> </p>
            
            )}
    </div>
  )
}

export default PlayerList
