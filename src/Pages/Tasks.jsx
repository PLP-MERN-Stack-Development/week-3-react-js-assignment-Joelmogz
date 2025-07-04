import { useState } from "react";
import TaskForm from "../components/TaskForm";
import TaskCard from "../components/TaskCard";

const Tasks = () => {
    const [tasks, setTasks] = useState ([]);
    const [editingTask, setEditingTask] = useState();

    // Add or update task

    const handleSave = (newTask) => {
        if(editingTask) {
            setTasks(tasks.map(tasks.id === newTask.id ? newTask : task));
            setEditingTask();
        } else {
            setTasks([...tasks, newTask]);
        }
    };

// prepare task for editing
    const handleEdit = (task) => {
        setEditingTask(task);
    };
// Deleting Task
    const handleDelete = (id) => {
        setTasks(tasks.filter(task => task.id !== id));
    }

return (
    <div className="container mx-auto px-4 py-8 space-6">
    <div className="max-w-2xl mx-auto space-y-6">
        <h2 className="text-2xl font-bold">Manage your Tasks</h2>
        <TaskForm onSave={handleSave} currentTask={editingTask}/>

        <div className="mt-6">
            {tasks.length === 0 ? (
                <p className="text-gray-500">No tasks yet. Add one above!</p>
            ) : (
                tasks.map((task) => (
                    <TaskCard
                        key={task.id}
                        task={task}
                        onEdit={handleEdit}
                        onDelete={handleDelete}
                    />
                )
                        )
                )
            }
        </div>
    </div>
    </div>
);
};


export default Tasks;