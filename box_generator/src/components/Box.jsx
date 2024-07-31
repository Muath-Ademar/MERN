import React from 'react'
import { useState } from 'react'
import Square from './Square';


const Box = (props) => {
    const [box, setBox] = useState("");
const addBox= (e) =>{
e.preventDefault()

    const newBox = {
        box : box,
    }
    setBox("")
    console.log("color: " + newBox.box)
}
  return (
    <div>
      <form onSubmit={addBox}>
        <input type="text" onChange={(e)=>setBox(e.target.value)}/>
        <div   >
        <Square style={{backgroundColor : box}}/>
        </div>
        <input type="submit" value="Add" />
      </form>
    </div>
  )
}

export default Box
