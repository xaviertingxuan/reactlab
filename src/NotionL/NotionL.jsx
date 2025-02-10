import React, {useState, useEffect} from 'react'
import { DndContext } from '@dnd-kit/core';
import { Column } from './Column';
import './styles.css'
import { StopWatch } from '/src/components/StopWatch';
import { Clock } from '/src/components/Clock';
import { ToggleTheme } from './ToggleTheme';
import { SearchBar } from './SearchBar';
import { TaskPopup } from './TaskPopup';
import { WeatherComponent } from './WeatherComponent';


const taskColumnsTodo = [
    {id: 'todo', title: 'To Do'},
];
const taskColumnsInprogress = [
    {id: 'in_progress', title: 'In Progress'},
];
const taskColumnsCompleted = [
    {id: 'completed', title: 'Completed'},
];

const initialTask = [
    {
      id: '1',
      title: '📝 CRUD tasks',
      description: 'Gather requirements and create initial documentation',
      status: 'in_progress',
      dueDate: '2024-02-20',
      priority: 'high'
    },
    {
      id: '2',
      title: '🔍 Add Search Bar',
      description: 'Create component library and design tokens',
      status: 'todo',
      dueDate: '2024-02-20',
      priority: 'medium'
    },
    {
      id: '3',
      title: 'Change Description to date',
      description: 'Create component library and design tokens',
      status: 'todo',
      dueDate: '2024-02-22',
      priority: 'low'
    },
    {
      id: '4',
      title: '🖲️ API Integration',
      description: 'Implement REST API endpoints',
      status: 'todo',
      dueDate: '2024-03-20',
      priority: 'medium'
    },
    {
      id: '5',
      title: '🧪 Testing',
      description: 'Write unit tests for core functionality',
      status: 'completed',
      dueDate: '2024-02-20',
      priority: 'high'
    },
    {
     id: '6',
     title: '☢️ React Js',
     description: 'practice more!!!',
     status: 'in_progress',
     dueDate: '2024-02-28',
     priority: 'medium'        
    },
    {
     id: '7',
     title: '💻 Practice coding',
     description: 'practice coding',
     status: 'todo',
     dueDate: '2024-03-26',
     priority: 'high'        
    },    
  ];


export const NotionL = () => {
    const [tasks, setTasks] = useState(() => {
        const savedTasks = localStorage.getItem('tasks');
        return savedTasks ? JSON.parse(savedTasks) : initialTask;
    });
    useEffect(() => {
        localStorage.setItem('tasks', JSON.stringify(tasks));
    }, [tasks]);
    
    const [searchTerm, setSearchTerm] = useState('');

    const filteredTasks = searchTerm.trim() === '' 
    ? tasks 
    : tasks.filter(task => 
        task.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        task.description.toLowerCase().includes(searchTerm.toLowerCase())
    );

    const handleDragEnd = (event) => {
        const {active, over} = event;

        if(!over) return;

        const taskId = active.id;
        const newStatus = over.id;

        setTasks((prevTasks) =>
            prevTasks.map((task) =>
                task.id === taskId ? {...task, status: newStatus} : task))
    }

    const [isPopupOpen, setIsPopupOpen] = useState(false);
    const [editingTask, setEditingTask] = useState(null);

    const handleAddTask = (newTask) => {
        setTasks([...tasks, newTask]);
    };

    const handleEditTask = (updatedTask) => {
        setTasks(tasks.map(task => 
            task.id === updatedTask.id ? updatedTask : task
        ));
    };
    const handleDeleteTask = (taskId) => {
        setTasks(tasks.filter(task => task.id !== taskId));
    };

    const getTaskCount = (status) => {
        return filteredTasks.filter(task => task.status === status).length;
    };

    return (
        <>
            <h1>✅ Task Manager</h1>
            <div><Clock /></div>
            <div><WeatherComponent /></div>
            <div><ToggleTheme /></div>
            <div className='task-container'>
                <button 
                    className="add-task-btn"
                    onClick={() => setIsPopupOpen(true)}
                >
                    + New Task
                </button>
                <SearchBar onSearch={setSearchTerm} />
                <DndContext onDragEnd={handleDragEnd}>
                    <div className='column-container'>
                        <div className='column-todo'>
                            {taskColumnsTodo.map((column) => (
                                <Column 
                                    key={column.id}
                                    column={{
                                        ...column,
                                        title: `${column.title} (${getTaskCount(column.id)})`
                                    }}
                                    tasks={filteredTasks.filter((task) => task.status === column.id)}
                                    onEditTask={(task) => {
                                        setEditingTask(task);
                                        setIsPopupOpen(true);
                                    }}
                                    onDeleteTask={handleDeleteTask}
                                />
                            ))}
                        </div>
                        <div className='column-inprogress'>
                            {taskColumnsInprogress.map((column) => (
                                <Column 
                                    key={column.id}
                                    column={{
                                        ...column,
                                        title: `${column.title} (${getTaskCount(column.id)})`
                                    }}
                                    tasks={filteredTasks.filter((task) => task.status === column.id)}
                                    onEditTask={(task) => {
                                        setEditingTask(task);
                                        setIsPopupOpen(true);
                                    }}
                                    onDeleteTask={handleDeleteTask}
                                />
                            ))}
                        </div>
                        <div className='column-completed'>
                            {taskColumnsCompleted.map((column) => (
                                <Column 
                                    key={column.id}
                                    column={{
                                        ...column,
                                        title: `${column.title} (${getTaskCount(column.id)})`
                                    }}
                                    tasks={filteredTasks.filter((task) => task.status === column.id)}
                                    onEditTask={(task) => {
                                        setEditingTask(task);
                                        setIsPopupOpen(true);
                                    }}
                                    onDeleteTask={handleDeleteTask}
                                />
                            ))}
                        </div>
                    </div>
                </DndContext>
            </div>
            <TaskPopup 
                isOpen={isPopupOpen}
                onClose={() => {
                    setIsPopupOpen(false);
                    setEditingTask(null);
                }}
                onSubmit={(task) => {
                    editingTask ? handleEditTask(task) : handleAddTask(task);
                }}
                editTask={editingTask}
            />
            <div>
                <StopWatch />
            </div>
        </>
    )
}

export default NotionL