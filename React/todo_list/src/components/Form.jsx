import React, { useEffect, useState } from 'react'
import  Button  from 'react-bootstrap/Button'
import InputGroup from 'react-bootstrap/InputGroup';
import Form from 'react-bootstrap/Form';  // Import Form from react-bootstrap


const TaskForm = (props) => {
const [task, setTask] = useState("")
const [tasks, setTasks] = useState(() =>{
const localValue= localStorage.getItem("ITEM")
if(localValue == null){
    return []
}
else{
    return JSON.parse(localValue)
}
})
useEffect(() =>{
    localStorage.setItem("ITEM", JSON.stringify(tasks))
}, [tasks])

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


setTasks( tasks.filter(task=> task.id !== id))
}

return (
    <div>
        <h1>Todo List</h1>
    <Form onSubmit={handleSubmit}>
    <InputGroup className="mb-3">
    <Form.Control type="text" placeholder="Enter a task" value={task} onChange={handleTask}/>
    <Button variant='outline-primary' type='submit' >Add</Button>
    </InputGroup>
    </Form>
    
    <div  id='t' >
        
        {tasks.map((task) => (
        
        <div  key = {task.id}  className="d-flex align-items-center justify-content-between mb-2">
            
        <p style={{ textDecoration:task.completed ? 'line-through' : 'none' }}>{task.task}</p> 
        <div className="d-flex allign-items center">
        <input  aria-label="Checkbox for following text input"  onClick={(e) =>handleChecked(task.id, e.target.checked)}  checked = {task.completed} type="checkbox" className="ch"/>
        
        <Button variant="outline-danger"  onClick={()=> handleDelete(task.id) }>Delete</Button>
        </div>
        </div>
        ))}
    </div>
    </div>
)
}
export default TaskForm;
