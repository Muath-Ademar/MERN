import React, {useState, useEffect} from 'react'
import { useNavigate } from 'react-router-dom';


export default props => {
    const { onSubmitProp } = props;
    const [userName, setUserName] = useState(props.initialUserName || "");
    const navigate = useNavigate()
    
    useEffect(() => {
        setUserName(props.initialUserName || "");
    }, [props.initialUserName]);
    
    const onSubmitHandler = e => {
        e.preventDefault();
        onSubmitProp({userName});
        setUserName("");    
    }
        
    return (
        <form onSubmit={onSubmitHandler}>
            <p>
                <label>Name</label><br />
                <input 
                    type="text" 
                     value={userName} 
                    onChange={(e) => { setUserName(e.target.value) }} />
            </p>
            <input type="submit" />
        </form>
    )
}

