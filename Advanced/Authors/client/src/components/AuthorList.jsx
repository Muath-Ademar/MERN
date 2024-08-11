import React from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
import Delete from './Delete'
    
const AuthorList = (props) => {
    const {removeFromDom} = props

    return (
        <div>
            {props.authors.map( (author, i) =>
                <p key={i}>{author.userName} 
                <Delete authorId ={author._id} 
                successCallback={()=>removeFromDom(author._id)}/>
                <Link to={"/authors/" + author._id}>Edit</Link></p>
                
            )}
        </div>
    )
}
    
export default AuthorList;

