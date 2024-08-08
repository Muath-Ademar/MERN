import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link, useNavigate, useParams } from "react-router-dom";

const Details = (props) => {
    const navigate = useNavigate()
    const [product, setProduct] = useState({})
    const{id} = useParams();

    const deleteProduct = (id) => {
        
        axios.delete("http://localhost:8000/api/products/" + id)
        .then(response => {
            navigate("/")
            props.removeFromDom(id)
        })
        .catch(err => console.error(err))
    }
    useEffect(() =>{
        axios.get("http://localhost:8000/api/products/" + id)
        .then(response => setProduct(response.data))
        .catch(err => console.error(err))
    }, [])
  return (
    <div>
        <p>Title: {product.title}</p>
        <p>Price: {product.price}</p>
        <p>Description: {product.description}</p>
        <button onClick={() => deleteProduct(product._id)}>Delete</button>
      
    </div>
  )
}

export default Details
