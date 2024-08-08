import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link, useParams } from "react-router-dom";

const Details = (props) => {
    const [product, setProduct] = useState({})
    const{id} = useParams();
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
      
    </div>
  )
}

export default Details
