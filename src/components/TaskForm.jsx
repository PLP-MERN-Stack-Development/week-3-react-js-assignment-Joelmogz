import { useState, useEffect } from "react";

const TaskForm = ({onSave, currentTask}) => {
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");

    useEffect (() => {
        if (currentTask) {
            setTitle(currentTask.title);
            setDescription(currentTask.Description);
        }
    }, [currentTask]

)


    const handleSubmit = (e) => {
        e.preventDefault();
        onSave({title, description, id:currentTask || Date.now()});
        setTitle ("");
        setDescription("");
    };

    return(
        <form onSubmit={handleSubmit} className="space-y-4 bg-gray-50 p-4 rounded-lg shadow-sm">
            <input 
                type="text"
                placeholder="Task Title"
                value ={title}
                onChange={(e) => setTitle(e.target.value)}
                className="w-full border rounded px-3 py-2"
                required
            />
            
            <textarea
                placeholder="Description"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                className="w-full border rounded px-3 py-2"
                rows="3"
                required
            />

            <button
                type="submit"
                className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">
                    {currentTask ? "update Task" : "Add Task"}
                </button>
        </form>
    );
};

export default TaskForm;