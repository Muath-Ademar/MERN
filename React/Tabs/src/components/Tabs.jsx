import React, { useState } from 'react'

const Tabs= (props)=> {
    
    const tab1 ={name:"tab1", text: "tab 1 content showen here"}
    const tab2 ={name: "tab2", text: "tab 2 content showen here"}
    const tab3 ={name: "tab3", text: "tab 3 content showen here"}
 const [active, setActive] = useState(tab1)
    const tabs = [tab1, tab2, tab3]
    


    const handleClick = (tab) => {
        setActive(tab)
    }

return (
    <>
        <div className='tabs'> 
            
        {tabs.map((tab, index)=>(
        <h1 key={index} className='tab' onClick={() => handleClick(tab)}>{tab.name}</h1>
        ))}
        
        </div>
        <div className='text'>
            <p>{active.text}</p>
        </div>
       
    
    </>
)
}
export default Tabs;
