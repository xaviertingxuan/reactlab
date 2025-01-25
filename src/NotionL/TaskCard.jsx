import React from 'react'
import { useDraggable } from '@dnd-kit/core';

export const TaskCard = ({task}) => {
    const { attributes, listeners, setNodeRef, transform } = useDraggable({
        id: task.id,
    });

    const style = transform ? {
        transform: `translate3d(${transform.x}px, ${transform.y}px, 0)`,
    } : undefined;

    return (
        <div
            ref={setNodeRef}
            {...listeners}
            {...attributes}
            className="task-box-cursor"
            style={style}
        >
            <h3>{task.title}</h3>
            <p>{task.description}</p>
        </div>
    );
}
