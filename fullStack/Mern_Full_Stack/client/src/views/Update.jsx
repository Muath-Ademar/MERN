import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { useParams } from 'react-router-dom'

const Update = (props) => {
    const{id} = useParams()
    const[title, setTitle] = useState("")
    const[price, setPrice] = useState(0)
    const[description, setDescription] = useState("")
    useEffect(()=>{
        axios.get(`http://localhost:8000/api/products/${id}`)
            .then(response =>{
                setTitle(response.data.title)
                setPrice(response.data.price)
                setDescription(response.data.description)
            })
            
    }, [])

    const updateProduct = e=>{
        e.preventDefault()
        axios.patch("http://localhost:8000/api/products/" + id,{
            title,
            price,
            description,
        })
        .then(response => console.log(response))
        .catch(err => console.error(err))
    }
  return (
    <div>
        <h1>Update a Product</h1>
            <form onSubmit={updateProduct}>
                <p>
                    <label>Title</label><br />
                    <input type="text" 
                    name="title" 
                    value={title} 
                    onChange={(e) => { setTitle(e.target.value) }} />
                </p>
                <p>
                    <label>Price</label><br />
                    <input type="number" 
                    name="price"
                    value={price} 
                    onChange={(e) => { setPrice(e.target.value) }} />
                </p>
                <p>
                    <label>Description</label>
                    <textarea name='description'
                    value={description}
                    onChange={(e) => {setDescription(e.target.value)}}/>
                </p>
                <input type="submit" />
            </form>
        </div>
  )
}

export default Update
