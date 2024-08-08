import axios from 'axios'
import React from 'react'
import { Link } from 'react-router-dom'

const Display = (props) => {
    const{removeFromDom} = props
    const deleteProduct = (id) => {
        axios.delete("http://localhost:8000/api/products/" + id)
        .then(response => {
            removeFromDom(id)
        })
        .catch(err => console.error(err))
    }
  return (
    <div>
            <ul>
                {props.products.map((product, i) => (
                    <li key={i}>
                        <Link to={`/products/${product._id}`}>{product.title}</Link>
                        <Link to={`/products/${product._id}/edit`}> Edit </Link>
                        <button onClick={() => deleteProduct(product._id)}>
                            Delete
                        </button>
                    </li>
                ))}
            </ul>

    </div>
  )
}

export default Display
