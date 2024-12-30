import React from "react";

const TaskItem = ({ task }) => {
  return (
    <div className="p-4 bg-white border border-gray-200 rounded-lg shadow hover:shadow-lg">
      <h3 className="font-bold text-lg text-gray-800 truncate">{task.title}</h3>
      <p className={`mt-4 text-xs font-medium ${task.status ? "text-green-500" : "text-red-500"}`}>
        {task.status ? "Completada" : "Pendiente"}
      </p>
      <p className="text-xs text-gray-400 mt-2">
        Creada el {new Date(task.createdAt).toLocaleDateString()}
      </p>
    </div>
  );
};

export default TaskItem;