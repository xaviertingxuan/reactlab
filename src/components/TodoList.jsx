import React, {useState} from 'react'
import './TodoList.css'

// export const TodoList = () => {

//     const [task, setTask] = useState(["Eat Breakfast", "Take a shower", "Walk the dog"])
//     const [newTask, setNewTask] = useState("")

//     const handleInputChange = (e) => {
//         setNewTask(e.target.value)

//     }
//     const addTask = () => {

//        if(newTask.trim() !=="")
//         {setTask(t => [...t, newTask])
//         setNewTask("")
//         }
//     }
//     const deleteTask = (index) => {

//         const updatedTask = task.filter ((_, i) => i !== index)
//         setTask(updatedTask)
//     }
//     const moveTaskUp = (index) => {

//         if(index > 0){
//             const updatedTask = [...task];
//             [updatedTask[index], updatedTask[index - 1]] = 
//             [updatedTask[index - 1], updatedTask[index]];
//             setTask(updatedTask)
//         }

//     }
//     const moveTaskDown = (index) => {

//         if(index < task.length - 1){
//             const updatedTask = [...task];
//             [updatedTask[index], updatedTask[index + 1]] = 
//             [updatedTask[index + 1], updatedTask[index]];
//             setTask(updatedTask)
//         }

//     }


//   return (
//         <div className='to-do-list'>
//             <h1>To-Do-List</h1>

//             <div>
//                 <input 
//                     type="text"
//                     id='input-task'
//                     placeholder="Enter a task"
//                     value={newTask}
//                     onChange={handleInputChange}/>
//                 <button className='add-button'
//                         onClick={addTask}>
//                         Add
//                 </button>
//             </div>

//             <ol>
//                 {task.map((task, index) =>
//                     <li key={index}>
//                         <span className='text'>{task}</span>
//                         <button className='delete-button' onClick={() => deleteTask(index)}>
//                         Delete
//                         </button>
//                         <button className='move-button' onClick={() =>moveTaskUp(index)}>
//                         ⬆
//                         </button>
//                         <button className='move-button' onClick={() =>moveTaskDown(index)}>
//                         ⬇   
//                         </button>
//                     </li>
//                 )}
//             </ol>



//         </div>
//   )
// }


import React, { useState } from 'react';
import { DndContext } from '@dnd-kit/core';
import { Column } from './Column';

const COLUMNS = [
  { id: 'TODO', title: 'To Do' },
  { id: 'IN_PROGRESS', title: 'In Progress' },
  { id: 'DONE', title: 'Done' },
];

const INITIAL_TASKS = [
  {
    id: '1',
    title: 'Research Project',
    description: 'Gather requirements and create initial documentation',
    status: 'TODO',
  },
  {
    id: '2',
    title: 'Design System',
    description: 'Create component library and design tokens',
    status: 'TODO',
  },
  {
    id: '3',
    title: 'API Integration',
    description: 'Implement REST API endpoints',
    status: 'IN_PROGRESS',
  },
  {
    id: '4',
    title: 'Testing',
    description: 'Write unit tests for core functionality',
    status: 'DONE',
  },
];

function App() {
  const [tasks, setTasks] = useState(INITIAL_TASKS);

  const handleDragEnd = (event) => {
    const { active, over } = event;

    if (!over) return;

    const taskId = active.id;
    const newStatus = over.id;

    setTasks((prevTasks) =>
      prevTasks.map((task) =>
        task.id === taskId
          ? {
              ...task,
              status: newStatus,
            }
          : task
      )
    );
  };

  return (
    <div className="p-4">
      <div className="flex gap-8">
        <DndContext onDragEnd={handleDragEnd}>
          {COLUMNS.map((column) => (
            <Column
              key={column.id}
              column={column}
              tasks={tasks.filter((task) => task.status === column.id)}
            />
          ))}
        </DndContext>
      </div>
    </div>
  );
}

// column.jsx codes

// import React from 'react';
// import { useDroppable } from '@dnd-kit/core';
// import { TaskCard } from './TaskCard';

// const Column = ({ column, tasks }) => {
//   const { setNodeRef } = useDroppable({
//     id: column.id,
//   });

//   return (
//     <div className="flex w-80 flex-col rounded-lg bg-neutral-800 p-4">
//       <h2 className="mb-4 font-semibold text-neutral-100">{column.title}</h2>
//       <div ref={setNodeRef} className="flex flex-1 flex-col gap-4">
//         {tasks.map((task) => (
//           <TaskCard key={task.id} task={task} />
//         ))}
//       </div>
//     </div>
//   );
// };

// export default Column;


// import { useDraggable } from '@dnd-kit/core';
// import { Task } from './types';

// export function TaskCard({ task }) {
//   const { attributes, listeners, setNodeRef, transform } = useDraggable({
//     id: task.id,
//   });


// taskcard.jsx codes

//   const style = transform
//     ? {
//         transform: `translate(${transform.x}px, ${transform.y}px)`,
//       }
//     : undefined;

//   return React.createElement(
//     'div',
//     {
//       ref: setNodeRef,
//       ...listeners,
//       ...attributes,
//       className: 'cursor-grab rounded-lg bg-neutral-700 p-4 shadow-sm hover:shadow-md',
//       style: style,
//     },
//     React.createElement(
//       'h3',
//       { className: 'font-medium text-neutral-100' },
//       task.title
//     ),
//     React.createElement(
//       'p',
//       { className: 'mt-2 text-sm text-neutral-400' },
//       task.description
//     )
//   );
// }


export default App;