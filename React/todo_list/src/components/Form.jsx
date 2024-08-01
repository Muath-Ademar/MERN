import React, { useState } from 'react'


const Form = (props) => {
const [task, setTask] = useState("")
const [tasks, setTasks] = useState([{id: crypto.randomUUID(), task:"MERN task", completed : false }, {id: crypto.randomUUID(), task:"Java task", completed : false }, {id: crypto.randomUUID(), task:"Python task", completed : false }])

   const handleSubmit = (e) =>{
    e.preventDefault()
    setTasks([...tasks, {id: crypto.randomUUID(),task: task, completed: false}])
    setTask("")
   }
const handleTask = (e) => {
    setTask(e.target.value)
}

const handleChecked = (id, completed) => {
setTasks(tasks =>{
    return tasks.map(task=> {
        if(task.id == id){
            return {...task, completed}
        }
        return task
    })})

    
}
const handleDelete = (id) => {


setTasks( tasks.filter(task=> task.id != id))
}

return (
    <div>
    <form onSubmit={handleSubmit}>
        <input type="text" onChange={ handleTask}  value={task}/>
        <input type='submit' value="Add" />
    </form>
    <div   >
        {tasks.map((task, id) => (
        <p style={{ textDecoration:task.completed ? 'line-through' : 'none' }} key={task.id}>{task.task} 
        <input onClick={(e) =>handleChecked(task.id, e.target.checked)}  checked = {task.completed} type="checkbox"    /> 
        <button style={{backgroundColor : 'red'}} onClick={()=> handleDelete(task.id) }>Delete</button>
        </p>
        ))}
    </div>
    </div>
)
}
export default Form;
