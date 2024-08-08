import React, { useEffect, useState } from 'react'
import axios from 'axios';
import ProductForm from '../components/ProductForm';
import Display from '../components/Display';
export default () => {
    const [products, setProducts] = useState([])
    const [loaded, setLoaded] = useState(false)

    useEffect(() =>{
        axios.get("http://localhost:8000/api/products")
        .then(response =>{
            setProducts(response.data)
            setLoaded(true)
        })
        .catch(err => console.error(err))
        
    },[]);

    return (
        <div>
            <ProductForm/>
            {loaded && <Display products={products}/>}
        </div>
    )
}

