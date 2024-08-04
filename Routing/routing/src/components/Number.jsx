import React from 'react'
import { useParams } from "react-router";

const Number =  (props) => {
    const {MyVar} = useParams()
    const {bgc} = useParams()
    const {fc} = useParams()
    if (isNaN(MyVar)){
  return (
<div>the word is: {MyVar}</div>
)}
  else
  return (
<div style={{backgroundColor: bgc , color:fc}}>the number is: {MyVar}</div>
  )
}

export default Number