import React, {useState, useEffect} from 'react'

export const TaskPopup = ({isOpen, onClose, onSubmit, editTask = null}) => {
    const initialFormState = {
        title: '',
        description: '',
        dueDate: '',
        status: 'todo',
        priority: 'low',
    };
    
    const [formData, setFormData] = useState(initialFormState);

    useEffect(() => {
        if (editTask) {
            setFormData({
                title: editTask.title,
                description: editTask.description,
                dueDate: editTask.dueDate,
                status: editTask.status,
                priority: editTask.priority,
            });
        } else {
            setFormData(initialFormState);
        }
    }, [editTask, isOpen]);

    const handleSubmit = (e) => {
        e.preventDefault();
        onSubmit({
            ...formData,
            id: editTask?.id || Date.now().toString()
        });
        setFormData(initialFormState);
        onClose();
    };
    
    if (!isOpen) return null;

    return (
        <div className="popup-overlay">
            <div className="popup-content">
                <h2>{editTask ? 'Edit Task' : 'Create Task'}</h2>
                <form onSubmit={handleSubmit}>
                    <input
                        id="taskTitle"
                        name="title"
                        type="text"
                        placeholder="Task Title"
                        value={formData.title}
                        onChange={(e) => setFormData({...formData, title: e.target.value})}
                        required
                    />
                    <textarea
                        id="taskDescription"
                        name="description"
                        placeholder="Task Description"
                        value={formData.description}
                        onChange={(e) => setFormData({...formData, description: e.target.value})}
                        required
                    />
                    <div className="status-input-container">
                        <span className="status-emoji">📋</span>
                        <select
                            id="taskStatus"
                            name="status"
                            value={formData.status}
                            onChange={(e) => setFormData({...formData, status: e.target.value})}
                        >
                            <option value="todo">📝 To Do</option>
                            <option value="in_progress">⏳ In Progress</option>
                            <option value="completed">✅ Completed</option>
                        </select>
                    </div>

                    <div className="priority-input-container">
                        <span className="priority-emoji">🎯</span>
                        <select
                            id="taskPiority"  // Typo: should be "taskPriority"
                            name="priority"
                            value={formData.priority}
                            onChange={(e) => setFormData({...formData, priority: e.target.value})}
                        >
                            <option value="low">🟢Low Priority</option>
                            <option value="medium">🟡Mid Priority</option>
                            <option value="high">🔴High Priority</option>
                        </select>
                    </div>
                    <div className="date-input-container">
                        <span className="date-emoji">📅</span>
                        <input
                            id="taskDueDate"
                            name="dueDate"
                            type="date"
                            value={formData.dueDate}
                            onChange={(e) => setFormData({...formData, dueDate: e.target.value})}
                            required
                        />
                    </div>
                    <div className="popup-buttons">
                        <button type="submit">
                            {editTask ? 'Save Changes' : 'Create Task'}
                        </button>
                        <button type="button" onClick={onClose}>
                            Cancel
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};
