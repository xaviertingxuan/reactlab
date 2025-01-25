import React, {useState, useEffect} from 'react'
import { DndContext } from '@dnd-kit/core';
import { Column } from './Column';
import './styles.css'
import { StopWatch } from '/src/components/StopWatch';
import { Clock } from '/src/components/Clock';


const taskColumns = [
    {id: 'todo', title: 'To Do'},
    {id: 'in_progress', title: 'In Progress'},
    {id: 'completed', title: 'Completed'},
];

const initialTask = [
    {
      id: '1',
      title: 'CRUD tasks',
      description: 'Gather requirements and create initial documentation',
      status: 'in_progress',
    },
    {
      id: '2',
      title: 'Add Search Bar',
      description: 'Create component library and design tokens',
      status: 'todo',
    },
    {
        id: '3',
        title: 'Change decription to due date',
        description: 'Create component library and design tokens',
        status: 'todo',
      },
    {
      id: '4',
      title: 'API Integration',
      description: 'Implement REST API endpoints',
      status: 'todo',
    },
    {
      id: '5',
      title: 'Testing',
      description: 'Write unit tests for core functionality',
      status: 'completed',
    },
  ];



export const NotionL = () => {
    const [tasks, setTasks] = useState(initialTask);
    const [isDarkMode, setIsDarkMode] = useState(window.matchMedia('(prefers-color-scheme: dark)').matches);

    useEffect(() => {
        const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
        const handleChange = (e) => setIsDarkMode(e.matches);
        
        mediaQuery.addEventListener('change', handleChange);
        return () => mediaQuery.removeEventListener('change', handleChange);
    }, []);

    const toggleTheme = () => {
        setIsDarkMode(!isDarkMode);
        document.documentElement.setAttribute('data-theme', isDarkMode ? 'light' : 'dark');
    };

    const handleDragEnd = (event) => {
        const {active, over} = event;

        if(!over) return;

        const taskId = active.id;
        const newStatus = over.id;

        setTasks((prevTasks) =>
            prevTasks.map((task) =>
                task.id === taskId ? {...task, status: newStatus} : task))
    }
 

  return (
    <>
        <div>
            <h1> <Clock /></h1>
        </div>
        <div className='task-container' data-theme={isDarkMode ? 'dark' : 'light'}>
            <button 
                onClick={toggleTheme}
                className="theme-toggle"
            >
                {isDarkMode ? '☀️' : '🌙'}
            </button>
            <div className='column-container'>
                <DndContext onDragEnd={handleDragEnd}>
                    {taskColumns.map((column) => (
                        <Column 
                            key={column.id}
                            column={column}
                            tasks={tasks.filter((task) => task.status === column.id)}
                        />
                    ))}
                </DndContext>
            </div>
        </div>
        <div>
            <StopWatch />
        </div>
    </>
  )
}

export default NotionL