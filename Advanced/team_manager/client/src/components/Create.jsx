import React, { useEffect, useState } from 'react'

const Create = (props) => {
    const{onSubmitProp, intialName, intialPostion} = props 
    const[playerName, setPlayerName] = useState(intialName || "")
    const[preferedPosition, setPreferedPosition] = useState(intialPostion || "")
    useEffect( ()=>{
        setPlayerName(intialName || "")
    }, [intialName])
    const handleCreate = e =>{
        e.preventDefault()
        onSubmitProp({playerName,preferedPosition})
        setPlayerName("")
        setPreferedPosition("")

    } 

  return (
    <div>
      <form onSubmit={handleCreate}>
            <p>
                <label>Player Name</label><br />
                <input 
                    type="text" 
                     value={playerName} 
                    onChange={(e) => { setPlayerName(e.target.value) }} />
            </p>
            <p>
                <label> Prefered Position</label><br />
                <input type="text" value={preferedPosition}
                onChange={(e) => {setPreferedPosition(e.target.value)}} />
            </p>
            <input type="submit" value={"Add"} />
      </form>
    </div>
  )
}

export default Create
