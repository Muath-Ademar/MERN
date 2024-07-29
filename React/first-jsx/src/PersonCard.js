import React, { useState } from "react"





    const PersonCard = (props)=> {
      const [age, setAge] = useState(props.age);
      const increaseAge = ()=>{
        setAge(
           age + 1

        );
      }

  return (
    <div>
    <h1>{props.firstName}, {props.lastName}</h1>
    <p>Age: {age}</p>
    <p>Hair: {props.hairColor}</p>
    <button onClick={increaseAge}>Birthday button for {props.firstName}, {props.lastName}</button>
    


    </div>
  )
}
export default PersonCard;
