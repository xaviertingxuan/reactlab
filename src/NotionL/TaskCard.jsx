import React, { useState } from 'react'
import { useDraggable } from '@dnd-kit/core';

const formatStatus = (status) => {
    switch(status) {
        case 'todo': return 'To Do';
        case 'in_progress': return 'In Progress';
        case 'completed': return 'Completed';
        default: return status;
    }
};

const getPriorityEmoji = (priority) => {
    switch(priority) {
        case 'high': return '🔴 High';
        case 'medium': return '🟡 Medium';
        case 'low': return '🟢 Low';
        default: return priority;
    }
};

export const TaskCard = ({task, onEditTask, onDeleteTask}) => {
    const [isViewPopupOpen, setIsViewPopupOpen] = useState(false);
    const { attributes, listeners, setNodeRef, transform } = useDraggable({
        id: task.id,
    });

    const style = transform ? {
        transform: `translate3d(${transform.x}px, ${transform.y}px, 0)`,
    } : undefined;

    const handleClick = (e) => {
        // Only trigger click if it's not a drag
        if (!transform) {
            e.stopPropagation();
            setIsViewPopupOpen(true);
        }
    };

    const handleDelete = (e) => {
        e.stopPropagation();
        onDeleteTask(task.id);
        setIsViewPopupOpen(false);
    };

    return (
        <>
            <div 
                ref={setNodeRef} 
                style={style}
                {...attributes} 
                {...listeners}
                className="task-box-cursor"
                onMouseUp={handleClick}
            >
                <h3>{task.title}</h3>
                <p className='due-date-display'>🗓️ {new Date(task.dueDate).toLocaleDateString()}</p>
            </div>

            {isViewPopupOpen && (
                <div className="popup-overlay" onClick={() => setIsViewPopupOpen(false)}>
                    <div className="popup-content" onClick={e => e.stopPropagation()}>
                        <h2>{task.title}</h2>
                        <p className="task-description">{task.description}</p>
                        <div className="task-meta">
                            <p className="task-status">Status: <strong>{formatStatus(task.status)}</strong></p>
                            <p className="task-priority">Priority: <span>{getPriorityEmoji(task.priority)}</span></p>
                            <p className="task-due-date">{new Date(task.dueDate).toLocaleDateString()}</p>
                        </div>
                        <div className="popup-buttons">
                            <button 
                                className="edit-button"
                                onClick={() => {
                                    onEditTask(task);
                                    setIsViewPopupOpen(false);
                                }}
                            >
                                Edit Task
                            </button>
                            <button 
                                className="delete-button"
                                onClick={handleDelete}
                            >
                                Delete
                            </button>
                            <button 
                                className="close-button"
                                onClick={() => setIsViewPopupOpen(false)}
                            >
                                Close
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
};
