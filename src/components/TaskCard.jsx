const TaskCard = ({task, onDelete,onEdit}) => {
    return (
    <div className="bg-white shadow-md rounded-lg p-4 mb-4 transtion-all duration-300 hover:scale-[1.01]">
        <h3 className="text-lg font-bold text-gray-800">{task.title}</h3>
        <p className="text-gray-600">{task.description}</p>
        <div>
        <button
          onClick={() => onEdit(task)}
          className="bg-yellow-400 hover:bg-yellow-500 px-3 py-1 rounded"
        >
          Edit
        </button>
        <button
          onClick={() => onDelete(task.id)}
          className="bg-red-500 hover:bg-red-600 text-white px-3 py-1 rounded transtion duration-300"
        >
          Delete
        </button>
      </div>
    </div>
    );
};

export default TaskCard;