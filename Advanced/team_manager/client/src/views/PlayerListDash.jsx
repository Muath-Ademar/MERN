import React from 'react'
import PlayerList from '../components/PlayerList'
import { useState, useEffect } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'

const PlayerListDash = () => {
    const [players, setPlayers] = useState([])
    useEffect(() => {
        axios.get('http://localhost:8000/api/players')
            .then(res =>{ 
                setPlayers(res.data)
                console.log(players)
            });
    }, [])
    const removeFromDom = playerId => {
        setPlayers(players.filter(player => player._id != playerId));
    }
  return (
    <div>
        <h1>Player List</h1>
        <h1><Link to={"/players/addplayers"}>Add Player</Link></h1>
        <PlayerList players={players} removeFromDom={removeFromDom}/>
    </div>
  )
}

export default PlayerListDash
