import React from 'react'
import { useDroppable } from '@dnd-kit/core'
import { TaskCard } from './TaskCard';

export const Column = ({column, tasks}) => {
  const { setNodeRef } = useDroppable({
    id: column.id,
  });

  return (
    <div className='column-container-box'>
        <h2 className='column-title'>{column.title}</h2>
        <div ref={setNodeRef} className="task-ref">
            {tasks.map(task => 
                <TaskCard key={task.id} task={task} />
            )}
        </div>
    </div>
  )
}
