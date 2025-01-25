import React, {useState} from 'react'
import './TodoList.css'

export const TodoList = () => {

    const [task, setTask] = useState(["Eat Breakfast", "Take a shower", "Walk the dog"])
    const [newTask, setNewTask] = useState("")

    const handleInputChange = (e) => {
        setNewTask(e.target.value)

    }
    const addTask = () => {

       if(newTask.trim() !=="")
        {setTask(t => [...t, newTask])
        setNewTask("")
        }
    }
    const deleteTask = (index) => {

        const updatedTask = task.filter ((_, i) => i !== index)
        setTask(updatedTask)
    }
    const moveTaskUp = (index) => {

        if(index > 0){
            const updatedTask = [...task];
            [updatedTask[index], updatedTask[index - 1]] = 
            [updatedTask[index - 1], updatedTask[index]];
            setTask(updatedTask)
        }

    }
    const moveTaskDown = (index) => {

        if(index < task.length - 1){
            const updatedTask = [...task];
            [updatedTask[index], updatedTask[index + 1]] = 
            [updatedTask[index + 1], updatedTask[index]];
            setTask(updatedTask)
        }

    }


  return (
        <div className='to-do-list'>
            <h1>To-Do-List</h1>

            <div>
                <input 
                    type="text"
                    id='input-task'
                    placeholder="Enter a task"
                    value={newTask}
                    onChange={handleInputChange}/>
                <button className='add-button'
                        onClick={addTask}>
                        Add
                </button>
            </div>

            <ol>
                {task.map((task, index) =>
                    <li key={index}>
                        <span className='text'>{task}</span>
                        <button className='delete-button' onClick={() => deleteTask(index)}>
                        Delete
                        </button>
                        <button className='move-button' onClick={() =>moveTaskUp(index)}>
                        ⬆
                        </button>
                        <button className='move-button' onClick={() =>moveTaskDown(index)}>
                        ⬇   
                        </button>
                    </li>
                )}
            </ol>



        </div>
  )
}
