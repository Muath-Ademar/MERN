import React from 'react'
import PersonCard from './PersonCard'

export default function App() {
  return (
    <div className='App'>
      <h1>Hello Dojo!!</h1>
      <h1>things I need to do:</h1>
      <ul>
      <li>Learn React</li>
      <li>Climb Mt.Everest</li>
      <li>Run a marathon</li>
      <li>Feed the dogs</li>
      </ul>
    <PersonCard firstName = {"Muath"} lastName = {"Ez Zughayyar"} age = {"22"} hairColor = {"Brown"}/>
    <PersonCard firstName = {"Omar"} lastName = {"Ez Zughayyar"} age = {"35"} hairColor = {"Black"}/>
    <PersonCard firstName = {"Mohammed"} lastName = {"Ez Zughayyar"} age = {"28"} hairColor = {"Black"}/>
    <PersonCard firstName = {"Ademar"} lastName = {"Ez Zughayyar"} age = {"71"} hairColor = {"white"}/>
    </div>

  )
}
