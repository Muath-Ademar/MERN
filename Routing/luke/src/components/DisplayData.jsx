import React from 'react'

const DisplayData = (props) => {
  return (
    <div>
            { Object.keys(props.showData).slice(0,4).map( (element, i) => 
                <h4   key={ i } >{ element }:  {props.showData[element]}</h4> ) 
                }
    </div>
  )
}

export default DisplayData
