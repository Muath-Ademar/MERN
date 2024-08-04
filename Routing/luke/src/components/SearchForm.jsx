import React from 'react';
import StarWarsApi from './StarWarsApi';
import StarWarsApiPlanets from './StarWarsApiPlanets';

const SearchForm = (props) => {
    const 
    return (
        <div>
            <form>
                        <select>
                            <option>Characters</option>
                            <option href="#/planets">Planets</option>
                        </select>
                    

                    <input type="number" placeholder='Id' />
                    
                    
                    <input type='submit' variant='primary' value={"Search"}/>
                    
                
            </form>
        </div>
    );
};

export default SearchForm;
