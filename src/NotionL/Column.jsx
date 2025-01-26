import React from 'react'
import { useDroppable } from '@dnd-kit/core'
import { TaskCard } from './TaskCard';

export const Column = ({column, tasks, onEditTask, onDeleteTask}) => {
    const getStatusEmoji = (status) => {
        switch(status) {
            case 'todo': return '📝 To Do';
            case 'in_progress': return '⏳ In Progress';
            case 'completed': return '✅ Completed';
            default: return status;
        }
    };

    const { setNodeRef } = useDroppable({
        id: column.id,
    });

    return (
        <div className='column-container-box'>
            <h2 className='column-title'>{getStatusEmoji(column.id)}
                <span className="task-count">{tasks.length}</span>
            </h2>
            <div ref={setNodeRef} className="task-ref">
                {tasks.map(task => 
                    <TaskCard 
                        key={task.id} 
                        task={task} 
                        onEditTask={onEditTask}
                        onDeleteTask={onDeleteTask}
                    />
                )}
            </div>
        </div>
    );
};
