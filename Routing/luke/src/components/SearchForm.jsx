import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const SearchForm = () => {
    const navigate = useNavigate();
    const [option, setOption] = useState("")
    const [id, setId] = useState("")
    const handleIdChange = (e) => {
        setId(e.target.value)
    }
    const handleOptionChange = (e) =>{
        setOption(e.target.value)
    }
    const handleSubmit = (e) => {
        e.preventDefault()
        if(id  == "" || option == "" ){
            navigate("/error")
            return;
        }
        const url = option.replace("id", id)
        navigate(url)
        
        
    }


    return (
        <div>
            <form onSubmit={handleSubmit}>
            <select onChange={handleOptionChange} value={option}>
                <option value={""}> Select </option>
                <option value={"/people/id"}>People</option>
                <option value={"/planets/id" }>Planets</option>
            </select>
            <input type="number" value={id} onChange={handleIdChange} />
            <input type="submit" value={"Search"} />
            </form>
        </div>
    );
};

export default SearchForm;
