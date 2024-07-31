import React from 'react'
import { useState } from 'react'
import Square from './Square';



const Box = (props) => {
    const [color, setColor] = useState("");
    const [size, setSize] = useState(100);
    const [colors, setColors] = useState([]);
    
const handleSubmit= (e) =>{
e.preventDefault()
setColors([...colors, {color, size}])

console.log(colors)
setColor("")
setSize(100);


    
}
const handleSize = (e) => {
  setSize(e.target.value);
}
  const handleChange = (e)=> {
    console.log("hi")
        setColor(e.target.value)
    }
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type="text" onChange={handleChange} value={color} />
        <label>Size</label>
        <input type='number' onChange={handleSize} value={size} />
        <input type="submit"  value="Add" />
      </form>
      
        {colors.map((box, index)=>(
        <div key = {index}className='boxes' style={{background: box.color, width: box.size+"px", height: box.size+"px" }}>
        </div>
        ))}
      
    </div>
  )
}

export default Box
