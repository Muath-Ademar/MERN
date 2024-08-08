import React from 'react'
import { Link } from 'react-router-dom'

const Display = (props) => {
  return (
    <div>
        <ul>
        {props.products.map( (product, i) =>
                <Link to={`/products/${product._id}`}key={i}><li>{product.title}</li></Link>
            )}
            </ul>
    </div>
  )
}

export default Display
