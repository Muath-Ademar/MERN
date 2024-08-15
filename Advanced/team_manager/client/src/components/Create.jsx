import React, { useEffect, useState } from 'react'
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

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

    <Form onSubmit={handleCreate}>
          <Form.Group className="mb-3" >
          <Form.Label>Player Name</Form.Label>
                <Form.Control 
                    type="text" 
                     value={playerName} 
                    onChange={(e) => { setPlayerName(e.target.value) }} />
          </Form.Group>
            
          <Form.Group className="mb-3">
                <Form.Label> Prefered Position</Form.Label>
                <Form.Control type="text" value={preferedPosition}
                onChange={(e) => {setPreferedPosition(e.target.value)}} />
          </Form.Group>
            
            <Button type="submit"  variant='primary' > Add </Button>
      </Form>
    </div>
  )
}

export default Create
